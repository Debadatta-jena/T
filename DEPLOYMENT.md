# Deployment Guide

## 🚀 AI Solutions Company - Deployment Instructions

This guide covers deploying the AI Solutions Company website and backend to production.

## 📋 Prerequisites

- Node.js 18+ 
- Docker & Docker Compose
- PostgreSQL 15+
- Redis (optional, for caching)
- Nginx (for reverse proxy)
- Domain name & SSL certificates

## 🐳 Docker Deployment (Recommended)

### 1. Clone Repository
```bash
git clone <repository-url>
cd my_web
```

### 2. Environment Configuration
```bash
# Copy environment template
cp .env.example .env

# Edit with your values
nano .env
```

### 3. Deploy with Docker Compose
```bash
# Build and start all services
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### 4. Services Deployed
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379
- **Nginx**: http://localhost (reverse proxy)

## 🌐 Manual Deployment

### Frontend (Next.js)
```bash
cd frontend

# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start

# Or with PM2
pm2 start ecosystem.config.js
```

### Backend (NestJS)
```bash
cd backend

# Install dependencies
npm install

# Build application
npm run build

# Start production server
npm run start:prod

# Or with PM2
pm2 start ecosystem.config.js
```

## 🔧 Environment Variables

### Required Variables
```bash
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=ai_solutions

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-key

# Frontend
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

### Optional Variables
```bash
# Email (for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Redis (caching)
REDIS_HOST=localhost
REDIS_PORT=6379

# AWS (file storage)
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-bucket
```

## 🌐 Nginx Configuration

### Basic Setup
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;
    
    # SSL Certificates
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    
    # Security Headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Frontend
    location / {
        proxy_pass http://frontend:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Backend API
    location /api/ {
        proxy_pass http://backend:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 🗄️ Database Setup

### PostgreSQL
```sql
-- Create database
CREATE DATABASE ai_solutions;

-- Create user
CREATE USER ai_solutions_user WITH PASSWORD 'your_password';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE ai_solutions TO ai_solutions_user;

-- Run migrations
npm run migration:run
```

### Redis (Optional)
```bash
# Install Redis
sudo apt-get install redis-server

# Start Redis
sudo systemctl start redis

# Enable on boot
sudo systemctl enable redis
```

## 📊 Monitoring & Logging

### Application Logs
```bash
# Docker logs
docker-compose logs -f frontend
docker-compose logs -f backend

# PM2 logs
pm2 logs

# Nginx logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### Health Checks
```bash
# Frontend health
curl http://localhost:3000/api/health

# Backend health
curl http://localhost:5000/health

# Database connection
docker exec -it postgres psql -U postgres -d ai_solutions -c "SELECT 1;"
```

## 🔒 Security Considerations

### 1. Environment Security
- Use strong, unique secrets
- Rotate keys regularly
- Never commit .env files
- Use environment-specific configs

### 2. Network Security
- Enable HTTPS with valid SSL
- Use firewall rules
- Implement rate limiting
- Set up CDN for static assets

### 3. Application Security
- Keep dependencies updated
- Enable security headers
- Monitor for vulnerabilities
- Use intrusion detection

## 🚀 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to server
        run: |
          scp -r ./* user@server:/path/to/app
          ssh user@server 'cd /path/to/app && docker-compose up -d --build'
```

## 🔄 Backup Strategy

### Database Backups
```bash
# Daily backup
0 2 * * * pg_dump -U postgres ai_solutions > /backups/ai_solutions_$(date +%Y%m%d).sql

# Automated with script
#!/bin/bash
BACKUP_DIR="/backups"
DATE=$(date +%Y%m%d_%H%M%S)
pg_dump -U postgres ai_solutions > $BACKUP_DIR/backup_$DATE.sql

# Keep last 7 days
find $BACKUP_DIR -name "*.sql" -mtime +7 -delete
```

### File Backups
```bash
# Backup uploads
tar -czf uploads_backup_$(date +%Y%m%d).tar.gz uploads/

# Backup configuration
tar -czf config_backup_$(date +%Y%m%d).tar.gz .env nginx/
```

## 📈 Performance Optimization

### Frontend
- Enable Gzip compression
- Use CDN for static assets
- Implement caching strategies
- Optimize images and fonts

### Backend
- Use connection pooling
- Enable query caching
- Implement rate limiting
- Use Redis for sessions

### Database
- Create proper indexes
- Optimize slow queries
- Regular maintenance
- Monitor performance metrics

## 🐛 Troubleshooting

### Common Issues

#### 1. Database Connection Failed
```bash
# Check PostgreSQL status
docker-compose ps postgres

# View logs
docker-compose logs postgres

# Test connection
docker exec -it postgres psql -U postgres -d ai_solutions
```

#### 2. Frontend Build Errors
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install

# Check Node version
node --version  # Should be 18+
```

#### 3. Backend API Not Responding
```bash
# Check if running
docker-compose ps backend

# View logs
docker-compose logs backend

# Test locally
curl http://localhost:5000/health
```

#### 4. SSL Certificate Issues
```bash
# Check certificate validity
openssl x509 -in cert.pem -text -noout

# Test SSL configuration
nginx -t

# Reload Nginx
nginx -s reload
```

## 📞 Support & Maintenance

### Regular Maintenance Tasks
- [ ] Update dependencies monthly
- [ ] Review security logs weekly
- [ ] Monitor performance metrics
- [ ] Check disk space usage
- [ ] Test backup restoration

### Emergency Contacts
- **Development Team**: dev@ai-solutions.com
- **Infrastructure**: infra@ai-solutions.com
- **Security**: security@ai-solutions.com

### Monitoring Tools
- **Uptime Monitoring**: UptimeRobot
- **Error Tracking**: Sentry
- **Performance**: New Relic
- **Logs**: ELK Stack

---

## 🎉 Deployment Complete!

Once deployed, your AI Solutions Company website will be available at:
- **Website**: https://yourdomain.com
- **API**: https://api.yourdomain.com
- **Admin Dashboard**: https://yourdomain.com/dashboard

For additional support or questions, contact the development team.
