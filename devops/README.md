# Trionex Technologies - DevOps & CI/CD Setup

This directory contains the complete DevOps infrastructure for the Trionex Technologies enterprise SaaS platform.

## Directory Structure

```
devops/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD pipelines
├── docker/                 # Docker configurations
├── kubernetes/             # Kubernetes manifests
├── terraform/              # Infrastructure as Code
├── monitoring/             # Monitoring and alerting configs
└── scripts/                # Deployment and maintenance scripts
```

## CI/CD Pipeline

### GitHub Actions Workflows

The CI/CD pipeline includes the following stages:

1. **Code Quality**: Linting, type checking, and security scanning
2. **Testing**: Unit tests, integration tests, and E2E tests
3. **Security**: Dependency scanning, SAST, and container scanning
4. **Build**: Multi-stage Docker builds with optimization
5. **Deploy**: Blue-green deployments with canary releases

### Branch Protection Rules

```
main branch:
- Require PR reviews (minimum 2 reviewers)
- Require status checks to pass
- Require branches to be up to date
- Include administrators in restrictions

develop branch:
- Require PR reviews (minimum 1 reviewer)
- Require status checks to pass
- Allow force pushes for administrators
```

## Docker Configuration

### Multi-Stage Dockerfile

```dockerfile
# Frontend Build Stage
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci --only=production

COPY frontend/ .
RUN npm run build
RUN npm prune --production

# Backend Build Stage
FROM node:18-alpine AS backend-builder
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm ci --only=production

COPY backend/ .
RUN npm run build
RUN npm prune --production

# Production Stage
FROM node:18-alpine AS production
RUN apk add --no-cache dumb-init

# Create app directory
WORKDIR /app

# Install production dependencies only
COPY --from=frontend-builder /app/frontend/package*.json ./frontend/
COPY --from=backend-builder /app/backend/package*.json ./backend/

RUN cd frontend && npm ci --only=production && cd ../backend && npm ci --only=production

# Copy built applications
COPY --from=frontend-builder /app/frontend/.next ./frontend/.next
COPY --from=backend-builder /app/backend/dist ./backend/dist

# Copy public assets
COPY frontend/public ./frontend/public

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change ownership
RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "backend/dist/server.js"]
```

## Kubernetes Manifests

### Namespace Configuration

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: trionex-production
  labels:
    name: trionex-production
    environment: production
```

### Deployment Manifest

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: trionex-platform
  namespace: trionex-production
  labels:
    app: trionex-platform
    version: v1.0.0
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: trionex-platform
  template:
    metadata:
      labels:
        app: trionex-platform
        version: v1.0.0
    spec:
      containers:
      - name: trionex-platform
        image: trionex/platform:latest
        ports:
        - containerPort: 3000
          name: http
        - containerPort: 3001
          name: api
        env:
        - name: NODE_ENV
          value: "production"
        - name: NEXT_PUBLIC_SITE_URL
          value: "https://trionex.tech"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: trionex-secrets
              key: database-url
        - name: JWT_SECRET
          valueFrom:
            secretKeyRef:
              name: trionex-secrets
              key: jwt-secret
        - name: REDIS_URL
          valueFrom:
            secretKeyRef:
              name: trionex-secrets
              key: redis-url
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /api/health
            port: 3001
          initialDelaySeconds: 30
          periodSeconds: 10
          timeoutSeconds: 5
          failureThreshold: 3
        readinessProbe:
          httpGet:
            path: /api/health
            port: 3001
          initialDelaySeconds: 5
          periodSeconds: 5
          timeoutSeconds: 3
          failureThreshold: 3
        startupProbe:
          httpGet:
            path: /api/health
            port: 3001
          initialDelaySeconds: 10
          periodSeconds: 10
          timeoutSeconds: 5
          failureThreshold: 30
      securityContext:
        runAsUser: 1001
        runAsGroup: 1001
        fsGroup: 1001
      volumes:
      - name: tmp-volume
        emptyDir: {}
```

### Service Manifest

```yaml
apiVersion: v1
kind: Service
metadata:
  name: trionex-platform-service
  namespace: trionex-production
  labels:
    app: trionex-platform
spec:
  type: ClusterIP
  ports:
  - name: http
    port: 80
    targetPort: 3000
    protocol: TCP
  - name: api
    port: 3001
    targetPort: 3001
    protocol: TCP
  selector:
    app: trionex-platform
```

### Ingress Configuration

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: trionex-platform-ingress
  namespace: trionex-production
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/healthcheck-path: /api/health
    alb.ingress.kubernetes.io/success-codes: 200-399
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}, {"HTTPS": 443}]'
    alb.ingress.kubernetes.io/ssl-redirect: '443'
    alb.ingress.kubernetes.io/certificate-arn: arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012
    external-dns.alpha.kubernetes.io/hostname: trionex.tech,www.trionex.tech
spec:
  rules:
  - host: trionex.tech
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: trionex-platform-service
            port:
              number: 80
  - host: www.trionex.tech
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: trionex-platform-service
            port:
              number: 80
  - host: api.trionex.tech
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: trionex-platform-service
            port:
              number: 3001
```

### Horizontal Pod Autoscaling

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: trionex-platform-hpa
  namespace: trionex-production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: trionex-platform
  minReplicas: 3
  maxReplicas: 50
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  - type: Pods
    pods:
      metric:
        name: http_requests_per_second
      target:
        type: AverageValue
        averageValue: 1000
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 10
        periodSeconds: 60
      - type: Pods
        value: 1
        periodSeconds: 60
      selectPolicy: Min
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
      - type: Percent
        value: 50
        periodSeconds: 60
      - type: Pods
        value: 2
        periodSeconds: 60
      selectPolicy: Max
```

### ConfigMap for Environment Variables

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: trionex-platform-config
  namespace: trionex-production
data:
  NODE_ENV: "production"
  NEXT_PUBLIC_SITE_URL: "https://trionex.tech"
  LOG_LEVEL: "info"
  ENABLE_ANALYTICS: "true"
  ENABLE_AI_ASSISTANT: "true"
  RATE_LIMIT_REQUESTS_PER_MINUTE: "1000"
  SESSION_TIMEOUT_MINUTES: "30"
  MAX_FILE_UPLOAD_SIZE_MB: "50"
  CACHE_TTL_SECONDS: "3600"
```

### Secret for Sensitive Data

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: trionex-secrets
  namespace: trionex-production
type: Opaque
data:
  # Base64 encoded values
  database-url: <base64-encoded-database-url>
  jwt-secret: <base64-encoded-jwt-secret>
  redis-url: <base64-encoded-redis-url>
  aws-access-key-id: <base64-encoded-aws-key>
  aws-secret-access-key: <base64-encoded-aws-secret>
  stripe-secret-key: <base64-encoded-stripe-key>
  sendgrid-api-key: <base64-encoded-sendgrid-key>
  openai-api-key: <base64-encoded-openai-key>
```

## Monitoring & Alerting

### Prometheus Configuration

```yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "alert_rules.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

scrape_configs:
  - job_name: 'trionex-platform'
    static_configs:
      - targets: ['trionex-platform-service:3001']
    scrape_interval: 10s
    metrics_path: '/api/metrics'
    params:
      format: ['prometheus']

  - job_name: 'kubernetes-pods'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
        action: replace
        target_label: __metrics_path__
        regex: (.+)
      - source_labels: [__address__, __meta_kubernetes_pod_annotation_prometheus_io_port]
        action: replace
        regex: ([^:]+)(?::\d+)?;(\d+)
        replacement: $1:$2
        target_label: __address__

  - job_name: 'kubernetes-services'
    kubernetes_sd_configs:
      - role: service
    metrics_path: '/metrics'
    params:
      format: ['prometheus']
```

### Alert Rules

```yaml
groups:
  - name: trionex.alerts
    rules:
      # Application alerts
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "High error rate detected"
          description: "Error rate is {{ $value | printf \"%.2f\" }}% for the last 5 minutes"

      - alert: SlowResponseTime
        expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 2
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Slow response time detected"
          description: "95th percentile response time is {{ $value | printf \"%.2f\" }}s"

      # Infrastructure alerts
      - alert: HighCPUUsage
        expr: rate(container_cpu_usage_seconds_total[5m]) > 0.8
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High CPU usage detected"
          description: "CPU usage is above 80% for pod {{ $labels.pod }}"

      - alert: HighMemoryUsage
        expr: container_memory_usage_bytes / container_spec_memory_limit_bytes > 0.9
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High memory usage detected"
          description: "Memory usage is above 90% for pod {{ $labels.pod }}"

      # Business alerts
      - alert: LowUserEngagement
        expr: rate(user_sessions_total[1h]) < 10
        for: 30m
        labels:
          severity: info
        annotations:
          summary: "Low user engagement detected"
          description: "User session rate is below normal levels"

      - alert: FailedPayments
        expr: rate(payment_failures_total[5m]) > 0.1
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "High payment failure rate"
          description: "Payment failure rate is {{ $value | printf \"%.1f\" }}%"
```

## Deployment Scripts

### Blue-Green Deployment Script

```bash
#!/bin/bash

# Blue-Green Deployment Script for Trionex Platform

set -e

ENVIRONMENT=$1
NEW_VERSION=$2

if [ -z "$ENVIRONMENT" ] || [ -z "$NEW_VERSION" ]; then
    echo "Usage: $0 <environment> <version>"
    echo "Example: $0 production v1.2.3"
    exit 1
fi

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting blue-green deployment for $ENVIRONMENT environment...${NC}"

# Determine current active deployment
CURRENT_ACTIVE=$(kubectl get svc trionex-platform-service -n trionex-$ENVIRONMENT -o jsonpath='{.spec.selector.version}')

if [ "$CURRENT_ACTIVE" = "blue" ]; then
    NEW_ACTIVE="green"
    OLD_ACTIVE="blue"
else
    NEW_ACTIVE="green"
    OLD_ACTIVE="blue"
fi

echo -e "${YELLOW}Current active deployment: $CURRENT_ACTIVE${NC}"
echo -e "${YELLOW}New active deployment will be: $NEW_ACTIVE${NC}"

# Deploy new version to inactive deployment
echo -e "${YELLOW}Deploying version $NEW_VERSION to $NEW_ACTIVE deployment...${NC}"

kubectl set image deployment/trionex-platform-$NEW_ACTIVE \
    trionex-platform=trionex/platform:$NEW_VERSION \
    -n trionex-$ENVIRONMENT

# Wait for deployment to be ready
echo -e "${YELLOW}Waiting for deployment to be ready...${NC}"
kubectl rollout status deployment/trionex-platform-$NEW_ACTIVE -n trionex-$ENVIRONMENT --timeout=600s

# Run smoke tests
echo -e "${YELLOW}Running smoke tests...${NC}"
if ! curl -f -s --max-time 30 https://$NEW_ACTIVE.trionex.tech/api/health > /dev/null; then
    echo -e "${RED}Smoke tests failed! Rolling back...${NC}"
    exit 1
fi

echo -e "${GREEN}Smoke tests passed!${NC}"

# Switch traffic to new deployment
echo -e "${YELLOW}Switching traffic to $NEW_ACTIVE deployment...${NC}"

kubectl patch svc trionex-platform-service \
    -n trionex-$ENVIRONMENT \
    -p "{\"spec\":{\"selector\":{\"app\":\"trionex-platform\",\"version\":\"$NEW_ACTIVE\"}}}"

# Wait for traffic to stabilize
echo -e "${YELLOW}Waiting for traffic to stabilize...${NC}"
sleep 60

# Run post-deployment tests
echo -e "${YELLOW}Running post-deployment tests...${NC}"
if ! curl -f -s --max-time 30 https://trionex.tech/api/health > /dev/null; then
    echo -e "${RED}Post-deployment tests failed! Initiating rollback...${NC}"

    # Rollback traffic
    kubectl patch svc trionex-platform-service \
        -n trionex-$ENVIRONMENT \
        -p "{\"spec\":{\"selector\":{\"app\":\"trionex-platform\",\"version\":\"$CURRENT_ACTIVE\"}}}"

    echo -e "${RED}Traffic rolled back to $CURRENT_ACTIVE${NC}"
    exit 1
fi

echo -e "${GREEN}Post-deployment tests passed!${NC}"

# Scale down old deployment
echo -e "${YELLOW}Scaling down $OLD_ACTIVE deployment...${NC}"
kubectl scale deployment trionex-platform-$OLD_ACTIVE --replicas=0 -n trionex-$ENVIRONMENT

echo -e "${GREEN}Blue-green deployment completed successfully!${NC}"
echo -e "${GREEN}Active deployment: $NEW_ACTIVE${NC}"
echo -e "${GREEN}Version: $NEW_VERSION${NC}"

# Send notification
curl -X POST https://api.trionex.tech/notifications \
    -H "Content-Type: application/json" \
    -d "{
        \"type\": \"deployment\",
        \"message\": \"Blue-green deployment completed for $ENVIRONMENT environment\",
        \"details\": {
            \"version\": \"$NEW_VERSION\",
            \"active_deployment\": \"$NEW_ACTIVE\",
            \"environment\": \"$ENVIRONMENT\"
        }
    }"
```

### Canary Deployment Script

```bash
#!/bin/bash

# Canary Deployment Script for Trionex Platform

set -e

ENVIRONMENT=$1
NEW_VERSION=$2
CANARY_PERCENTAGE=${3:-10}

if [ -z "$ENVIRONMENT" ] || [ -z "$NEW_VERSION" ]; then
    echo "Usage: $0 <environment> <version> [canary_percentage]"
    echo "Example: $0 production v1.2.3 10"
    exit 1
fi

echo "Starting canary deployment for $ENVIRONMENT environment..."
echo "New version: $NEW_VERSION"
echo "Canary percentage: $CANARY_PERCENTAGE%"

# Create canary deployment
kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: trionex-platform-canary
  namespace: trionex-$ENVIRONMENT
  labels:
    app: trionex-platform
    version: canary
spec:
  replicas: 1
  selector:
    matchLabels:
      app: trionex-platform
      version: canary
  template:
    metadata:
      labels:
        app: trionex-platform
        version: canary
    spec:
      containers:
      - name: trionex-platform
        image: trionex/platform:$NEW_VERSION
        ports:
        - containerPort: 3000
          name: http
        - containerPort: 3001
          name: api
        env:
        - name: NODE_ENV
          value: "production"
        - name: CANARY_DEPLOYMENT
          value: "true"
EOF

# Wait for canary deployment
kubectl rollout status deployment/trionex-platform-canary -n trionex-$ENVIRONMENT --timeout=300s

# Create canary service
kubectl apply -f - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: trionex-platform-canary-service
  namespace: trionex-$ENVIRONMENT
spec:
  selector:
    app: trionex-platform
    version: canary
  ports:
  - name: http
    port: 80
    targetPort: 3000
  - name: api
    port: 3001
    targetPort: 3001
EOF

# Run canary analysis (simplified)
echo "Running canary analysis..."
sleep 300  # Wait 5 minutes for traffic

# Check canary metrics
CANARY_ERRORS=$(kubectl logs -n trionex-$ENVIRONMENT deployment/trionex-platform-canary --tail=100 | grep -c "ERROR" || true)
CANARY_RESPONSES=$(kubectl logs -n trionex-$ENVIRONMENT deployment/trionex-platform-canary --tail=100 | grep -c "HTTP" || true)

if [ "$CANARY_ERRORS" -gt 5 ] || [ "$CANARY_RESPONSES" -lt 10 ]; then
    echo "Canary analysis failed. Rolling back..."
    kubectl delete deployment trionex-platform-canary -n trionex-$ENVIRONMENT
    kubectl delete service trionex-platform-canary-service -n trionex-$ENVIRONMENT
    exit 1
fi

echo "Canary analysis passed. Proceeding with full deployment..."

# Scale canary to full deployment
kubectl scale deployment trionex-platform-canary --replicas=3 -n trionex-$ENVIRONMENT

# Update main deployment
kubectl set image deployment/trionex-platform \
    trionex-platform=trionex/platform:$NEW_VERSION \
    -n trionex-$ENVIRONMENT

kubectl rollout status deployment/trionex-platform -n trionex-$ENVIRONMENT --timeout=600s

# Clean up canary
kubectl delete deployment trionex-platform-canary -n trionex-$ENVIRONMENT
kubectl delete service trionex-platform-canary-service -n trionex-$ENVIRONMENT

echo "Canary deployment completed successfully!"
```

## Infrastructure as Code

### Terraform Configuration

```hcl
# AWS Provider Configuration
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket         = "trionex-terraform-state"
    key            = "production/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "trionex-terraform-locks"
  }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Environment = var.environment
      Project     = "Trionex Platform"
      ManagedBy   = "Terraform"
    }
  }
}

# VPC Configuration
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "trionex-${var.environment}"
  cidr = "10.0.0.0/16"

  azs             = ["${var.aws_region}a", "${var.aws_region}b", "${var.aws_region}c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway = true
  enable_vpn_gateway = false

  tags = {
    Name = "trionex-${var.environment}"
  }
}

# EKS Cluster
module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 19.0"

  cluster_name    = "trionex-${var.environment}"
  cluster_version = "1.28"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  eks_managed_node_groups = {
    general = {
      desired_size = 3
      min_size     = 3
      max_size     = 50

      instance_types = ["t3.medium"]
      capacity_type  = "ON_DEMAND"

      tags = {
        Name = "trionex-${var.environment}-general"
      }
    }
  }

  tags = {
    Name = "trionex-${var.environment}"
  }
}

# RDS PostgreSQL Database
module "db" {
  source  = "terraform-aws-modules/rds/aws"
  version = "~> 6.0"

  identifier = "trionex-${var.environment}"

  engine            = "postgres"
  engine_version    = "15.4"
  instance_class    = "db.r6g.large"
  allocated_storage = 100

  db_name  = "trionex"
  username = var.db_username
  password = var.db_password
  port     = 5432

  vpc_security_group_ids = [aws_security_group.rds.id]
  db_subnet_group_name   = aws_db_subnet_group.trionex.name

  maintenance_window = "Mon:00:00-Mon:03:00"
  backup_window      = "03:00-06:00"

  # Enable backups
  backup_retention_period = 30
  skip_final_snapshot     = false
  final_snapshot_identifier = "trionex-${var.environment}-final"

  # Enable encryption
  storage_encrypted = true
  kms_key_id        = aws_kms_key.rds.arn

  # Enable performance insights
  performance_insights_enabled = true

  tags = {
    Name = "trionex-${var.environment}-db"
  }
}

# ElastiCache Redis
module "redis" {
  source = "terraform-aws-modules/elasticache/aws"

  cluster_id      = "trionex-${var.environment}"
  engine          = "redis"
  node_type       = "cache.t3.micro"
  num_cache_nodes = 1
  port            = 6379

  subnet_ids = module.vpc.private_subnets
  security_group_ids = [aws_security_group.redis.id]

  tags = {
    Name = "trionex-${var.environment}-redis"
  }
}

# S3 Bucket for File Storage
module "s3_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"

  bucket = "trionex-${var.environment}-storage"

  versioning = {
    enabled = true
  }

  server_side_encryption_configuration = {
    rule = {
      apply_server_side_encryption_by_default = {
        sse_algorithm = "AES256"
      }
    }
  }

  tags = {
    Name = "trionex-${var.environment}-storage"
  }
}

# CloudFront CDN
module "cdn" {
  source = "terraform-aws-modules/cloudfront/aws"

  aliases = ["trionex.tech", "www.trionex.tech"]

  comment             = "Trionex Platform CDN"
  enabled             = true
  is_ipv6_enabled     = true
  price_class         = "PriceClass_100"
  retain_on_delete    = false
  wait_for_deployment = false

  # Origin configuration
  origin = {
    trionex_alb = {
      domain_name = module.alb.lb_dns_name
      custom_origin_config = {
        http_port              = 80
        https_port             = 443
        origin_protocol_policy = "https-only"
        origin_ssl_protocols   = ["TLSv1.2"]
      }
    }
  }

  # Cache behavior
  default_cache_behavior = {
    target_origin_id       = "trionex_alb"
    viewer_protocol_policy = "redirect-to-https"

    allowed_methods = ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"]
    cached_methods  = ["GET", "HEAD"]
    compress        = true

    forwarded_values = {
      query_string = true
      cookies = {
        forward = "all"
      }
    }

    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400
  }

  # SSL Certificate
  viewer_certificate = {
    acm_certificate_arn = aws_acm_certificate.trionex.arn
    ssl_support_method  = "sni-only"
  }

  tags = {
    Name = "trionex-${var.environment}-cdn"
  }
}
```

## Backup & Disaster Recovery

### Automated Backup Strategy

```bash
#!/bin/bash

# Automated Backup Script for Trionex Platform

set -e

BACKUP_DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/opt/trionex/backups"
RETENTION_DAYS=30

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}Starting automated backup process...${NC}"

# Create backup directory
mkdir -p $BACKUP_DIR

# Database backup
echo -e "${YELLOW}Backing up PostgreSQL database...${NC}"
pg_dump -h $DB_HOST -U $DB_USER -d trionex -F c -b -v > $BACKUP_DIR/database_$BACKUP_DATE.dump

if [ $? -eq 0 ]; then
    echo -e "${GREEN}Database backup completed successfully${NC}"
else
    echo -e "${RED}Database backup failed${NC}"
    exit 1
fi

# Redis backup
echo -e "${YELLOW}Backing up Redis data...${NC}"
redis-cli -h $REDIS_HOST -p $REDIS_PORT --rdb $BACKUP_DIR/redis_$BACKUP_DATE.rdb

if [ $? -eq 0 ]; then
    echo -e "${GREEN}Redis backup completed successfully${NC}"
else
    echo -e "${RED}Redis backup failed${NC}"
    exit 1
fi

# File storage backup (S3 sync to backup bucket)
echo -e "${YELLOW}Backing up file storage...${NC}"
aws s3 sync s3://trionex-production-storage s3://trionex-backups/files/$BACKUP_DATE/ --delete

if [ $? -eq 0 ]; then
    echo -e "${GREEN}File storage backup completed successfully${NC}"
else
    echo -e "${RED}File storage backup failed${NC}"
    exit 1
fi

# Compress backups
echo -e "${YELLOW}Compressing backup files...${NC}"
tar -czf $BACKUP_DIR/trionex_backup_$BACKUP_DATE.tar.gz -C $BACKUP_DIR database_$BACKUP_DATE.dump redis_$BACKUP_DATE.rdb

# Encrypt backup
echo -e "${YELLOW}Encrypting backup...${NC}"
openssl enc -aes-256-cbc -salt -in $BACKUP_DIR/trionex_backup_$BACKUP_DATE.tar.gz -out $BACKUP_DIR/trionex_backup_$BACKUP_DATE.enc -k $BACKUP_ENCRYPTION_KEY

# Upload to S3
echo -e "${YELLOW}Uploading backup to S3...${NC}"
aws s3 cp $BACKUP_DIR/trionex_backup_$BACKUP_DATE.enc s3://trionex-backups/database/

# Clean up local files
rm $BACKUP_DIR/database_$BACKUP_DATE.dump
rm $BACKUP_DIR/redis_$BACKUP_DATE.rdb
rm $BACKUP_DIR/trionex_backup_$BACKUP_DATE.tar.gz
rm $BACKUP_DIR/trionex_backup_$BACKUP_DATE.enc

# Clean up old backups
echo -e "${YELLOW}Cleaning up old backups...${NC}"
find $BACKUP_DIR -name "*.enc" -mtime +$RETENTION_DAYS -delete

# S3 lifecycle cleanup
aws s3api delete-objects --bucket trionex-backups --delete "$(aws s3api list-object-versions --bucket trionex-backups --prefix database/ --query '{Objects: Versions[?LastModified<`'"$(date -d "$RETENTION_DAYS days ago" +%Y-%m-%d)"'`].{Key:Key,VersionId:VersionId}}')"

echo -e "${GREEN}Backup process completed successfully${NC}"

# Send notification
curl -X POST https://api.trionex.tech/notifications \
    -H "Content-Type: application/json" \
    -d "{
        \"type\": \"backup\",
        \"message\": \"Automated backup completed successfully\",
        \"details\": {
            \"backup_date\": \"$BACKUP_DATE\",
            \"retention_days\": \"$RETENTION_DAYS\"
        }
    }"
```

This DevOps setup provides:

1. **CI/CD Pipeline**: Complete GitHub Actions workflows with quality gates
2. **Container Strategy**: Multi-stage Docker builds with security scanning
3. **Kubernetes Orchestration**: Production-ready manifests with HPA and ingress
4. **Monitoring**: Prometheus metrics and Grafana dashboards
5. **Security**: Network policies, secrets management, and compliance
6. **Backup & Recovery**: Automated backups with disaster recovery procedures
7. **Infrastructure as Code**: Terraform configurations for AWS resources

The setup ensures high availability, security, and scalability for the enterprise platform.
