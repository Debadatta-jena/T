#!/bin/bash

# ===========================================
# Render Deployment Setup Script
# ===========================================
# This script sets up the application on Render

set -e

echo "🚀 Setting up Trionex on Render..."

# ===========================================
# Prerequisites
# ===========================================
# - Render account (render.com)
# - GitHub repository connected to Render
# - PostgreSQL database (create in Render dashboard)

# ===========================================
# Environment Variables (Set in Render Dashboard)
# ===========================================
# NODE_ENV=production
# PORT=8080 (Render provides this)
# DB_HOST=... (from Render PostgreSQL)
# DB_PORT=5432
# DB_USERNAME=... 
# DB_PASSWORD=...
# DB_DATABASE=...
# JWT_SECRET=...
# JWT_REFRESH_SECRET=...
# EMAIL_HOST=smtp.gmail.com
# EMAIL_PORT=587
# EMAIL_USER=...
# EMAIL_PASS=...
# FRONTEND_URL=... (your Render frontend URL)

# ===========================================
# Setup Steps
# ===========================================

echo "📦 Installing backend dependencies..."
cd backend
npm install

echo "🔨 Building backend..."
npm run build

echo "✅ Backend build complete!"
echo ""
echo "📝 Next steps:"
echo "1. Create a Web Service in Render dashboard"
echo "2. Connect your GitHub repository"
echo "3. Set root directory to 'backend'"
echo "4. Build command: 'npm run build'"
echo "5. Start command: 'node dist/main.js'"
echo "6. Add environment variables in Render dashboard"
echo "7. Create PostgreSQL database in Render > Databases"
