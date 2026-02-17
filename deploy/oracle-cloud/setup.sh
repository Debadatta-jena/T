#!/bin/bash

# Oracle Cloud VM Setup Script
# Run this script as root on your Oracle Cloud VM

set -e

echo "🚀 Setting up Trionex Technologies on Oracle Cloud..."

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install Node.js 18
echo "📦 Installing Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Install PM2 for process management
echo "📦 Installing PM2..."
npm install -g pm2

# Install Nginx
echo "📦 Installing Nginx..."
apt install -y nginx

# Install Certbot for SSL
echo "📦 Installing Certbot..."
apt install -y certbot python3-certbot-nginx

# Create application directories
echo "📁 Creating application directories..."
mkdir -p /var/www/trionex-backend
mkdir -p /var/www/trionex-frontend
mkdir -p /var/log/trionex

# Setup firewall
echo "🔥 Configuring firewall..."
ufw allow 22    # SSH
ufw allow 80     # HTTP
ufw allow 443    # HTTPS
ufw allow 3001   # Backend API
ufw --force enable

# Create backend service user (optional security)
# useradd -r -s /usr/bin/false trionex || true

echo "✅ Oracle Cloud setup complete!"
echo ""
echo "Next steps:"
echo "1. Upload backend files to /var/www/trionex-backend"
echo "2. Upload frontend files to /var/www/trionex-frontend"
echo "3. Configure Nginx with the provided config"
echo "4. Set up SSL with Let's Encrypt"
echo "5. Configure environment variables"
