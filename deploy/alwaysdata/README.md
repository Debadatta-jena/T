# alwaysdata Deployment Guide

This guide explains how to deploy the Trionex Technologies platform on alwaysdata.

## Prerequisites

1. **alwaysdata Account** - Sign up at https://www.alwaysdata.com/
2. **GitHub Repository** - Your code is already pushed to https://github.com/Debadatta-jena/web

## Step 1: Create alwaysdata Account

1. Go to https://www.alwaysdata.com/ and sign up
2. Choose a plan (free tier available)

## Step 2: Add a Site

1. In alwaysdata admin panel, go to **Sites** > **Add a site**
2. Choose **Node.js**
3. Configure:
   - Address: your-site.alwaysdata.net (or custom domain)
   - Command: `npm run start:prod` (for backend)
   - Working directory: `/backend/`
   - Port: 8080

## Step 3: Create Database

1. In alwaysdata admin panel, go to **Databases** > **Add a database**
2. Note the credentials (host, port, username, password)
3. Create a MySQL database named `trionex_db`

## Step 4: Deploy Code

### Option A: Git Deployment (Recommended)

1. In alwaysdata admin panel, go to **Git** > **Add a repository**
2. Enter your GitHub repo URL: `https://github.com/Debadatta-jena/web.git`
3. Clone the repository to your alwaysdata site

### Option B: FTP Upload

1. Use FileZilla to connect to alwaysdata
2. Upload the code to your site directory
3. Use the provided credentials from alwaysdata

## Step 5: Configure Environment

1. Copy `backend/.env.alwaysdata.example` to `backend/.env`
2. Update with your alwaysdata database credentials:
   ```
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=your_alwaysdata_user
   DB_PASSWORD=your_secure_password
   DB_DATABASE=trionex_db
   ```

3. Generate JWT secrets:
   ```bash
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```

## Step 6: Install Dependencies & Build

```bash
# Backend
cd backend
npm install
npm run build

# Frontend
cd frontend
npm install
npm run build
```

## Step 7: Start the Application

The backend should start automatically on port 8080 based on your site configuration.

## Architecture on alwaysdata

```
alwaysdata.net (your site)
├── Backend (NestJS) - port 8080
│   └── api/ (REST endpoints)
└── Frontend (Next.js static)
    └── served via alwaysdata static files
```

## Environment Variables

See `backend/.env.alwaysdata.example` for all required environment variables.

## Troubleshooting

### Check Backend Logs
In alwaysdata admin panel, go to **Sites** > **Logs**

### Common Issues

1. **Port already in use**: Change PORT in .env
2. **Database connection failed**: Verify DB credentials
3. **Module not found**: Run `npm install` again

## Support

- alwaysdata documentation: https://help.alwaysdata.com/
