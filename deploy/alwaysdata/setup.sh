#!/bin/bash

# ===========================================
# alwaysdata Deployment Setup Script
# ===========================================
# This script sets up the application on alwaysdata
# Run this after initial server setup

set -e

echo "🚀 Setting up Trionex on alwaysdata..."

# ===========================================
# Prerequisites
# ===========================================
# - Node.js 18+ (available on alwaysdata)
# - MySQL database (create in alwaysdata panel)
# - Git (for cloning/pulling code)

# ===========================================
# Environment Variables
# ===========================================
# Update these with your alwaysdata values:

# MySQL Database (from alwaysdata panel)
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your_alwaysdata_user
DB_PASSWORD=your_secure_password
DB_DATABASE=trionex_db

# Application
NODE_ENV=production
PORT=8080
FRONTEND_URL=https://your-site.alwaysdata.net

# JWT Secrets (generate: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))")
JWT_SECRET=your-jwt-secret-min-32-chars
JWT_REFRESH_SECRET=your-refresh-secret-min-32-chars

# Email (optional - for notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=Trionex <your-email@gmail.com>

# ===========================================
# Setup Steps
# ===========================================

echo "📦 Installing backend dependencies..."
cd /home/your_user/sites/your-site/backend
npm install --production

echo "📦 Installing frontend dependencies..."
cd /home/your_user/sites/your-site/frontend
npm install --production

echo "🗄️ Setting up database..."
cd /home/your_user/sites/your-site/backend
# Create database if not exists
mysql -u $DB_USERNAME -p$DB_PASSWORD -e "CREATE DATABASE IF NOT EXISTS $DB_DATABASE;"

# Run migrations (if using TypeORM migrations)
# npm run migration:run

echo "🔐 Creating environment file..."
cd /home/your_user/sites/your-site/backend
cat > .env << EOF
NODE_ENV=production
PORT=$PORT

# Database
DB_HOST=$DB_HOST
DB_PORT=$DB_PORT
DB_USERNAME=$DB_USERNAME
DB_PASSWORD=$DB_PASSWORD
DB_DATABASE=$DB_DATABASE

# JWT
JWT_SECRET=$JWT_SECRET
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=$JWT_REFRESH_SECRET
JWT_REFRESH_EXPIRES_IN=7d

# Email
EMAIL_HOST=$EMAIL_HOST
EMAIL_PORT=$EMAIL_PORT
EMAIL_USER=$EMAIL_USER
EMAIL_PASS=$EMAIL_PASS
EMAIL_FROM=$EMAIL_FROM

# App
FRONTEND_URL=$FRONTEND_URL
OWNER_EMAIL=your-email@example.com

# CORS
CORS_ORIGIN=$FRONTEND_URL
EOF

echo "🔨 Building backend..."
cd /home/your_user/sites/your-site/backend
npm run build

echo "🔨 Building frontend..."
cd /home/your_user/sites/your-site/frontend
npm run build

echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Create a site in alwaysdata admin panel"
echo "2. Set backend command: node dist/main.js"
echo "3. Set backend working directory: /home/your_user/sites/your-site/backend"
echo "4. Configure frontend as static site pointing to frontend/.next"
echo "5. Use alwaysdata's built-in MySQL database"
