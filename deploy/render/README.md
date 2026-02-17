# Render Deployment Guide

This guide explains how to deploy the Trionex Technologies platform on Render.

## Prerequisites

1. **Render Account** - Sign up at https://render.com/
2. **GitHub Repository** - Your code is already pushed to https://github.com/Debadatta-jena/web
3. **Render CLI** (optional) - For local development

---

## Architecture on Render

```
┌─────────────────────────────────────────────┐
│              Render Services                │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────┐   ┌────────────────┐  │
│  │  Backend (NestJS) │   │ Frontend      │  │
│  │  Web Service    │   │ (Static Site)  │  │
│  │  Port: 8080    │   │               │  │
│  └────────┬────────┘   └───────┬────────┘  │
│           │                     │           │
│           └─────────┬───────────┘           │
│                     │                       │
│                     ▼                       │
│          ┌────────────────────┐            │
│          │ PostgreSQL Database │            │
│          │   (Render DB)      │            │
│          └────────────────────┘            │
└─────────────────────────────────────────────┘
```

---

## Step 1: Create PostgreSQL Database

1. Go to https://dashboard.render.com/
2. Click **New** > **PostgreSQL**
3. Configure:
   - **Name**: `trionex-db`
   - **Database**: `trionex_db`
   - **User**: `trionex_user`
4. Wait for the database to be provisioned
5. **Note the connection details** (you'll need them)

---

## Step 2: Deploy Backend (NestJS)

1. Go to https://dashboard.render.com/
2. Click **New** > **Web Service**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `trionex-backend`
   - **Root Directory**: `backend`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `node dist/main.js`
   - **Instance Type**: Free (or paid)
5. Add **Environment Variables**:
   ```
   NODE_ENV=production
   PORT=8080
   DB_HOST=your-db-host.render.com
   DB_PORT=5432
   DB_USERNAME=your_db_username
   DB_PASSWORD=your_db_password
   DB_DATABASE=trionex_db
   JWT_SECRET=your-jwt-secret
   JWT_REFRESH_SECRET=your-refresh-secret
   FRONTEND_URL=https://your-frontend.onrender.com
   CORS_ORIGIN=https://your-frontend.onrender.com
   ```

---

## Step 3: Deploy Frontend (Next.js)

### Option A: Static Site (Recommended)

1. Build the frontend locally:
   ```bash
   cd frontend
   npm install
   npm run build
   ```

2. Go to https://dashboard.render.com/
3. Click **New** > **Static Site**
4. Connect your GitHub repository
5. Configure:
   - **Name**: `trionex-frontend`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Publish directory**: `frontend/.next/server/pages` (or `.next/static`)

### Option B: Web Service (SSR)

1. Go to https://dashboard.render.com/
2. Click **New** > **Web Service**
3. Configure:
   - **Name**: `trionex-frontend`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start` (for Next.js)
   - **Instance Type**: Paid (required for SSR)

---

## Step 4: Configure Environment Variables

### Backend Variables:
```env
NODE_ENV=production
PORT=8080

# Database (from Step 1)
DB_HOST=your-db-host.render.com
DB_PORT=5432
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_DATABASE=trionex_db

# JWT (generate with: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))")
JWT_SECRET=your-super-secure-jwt-secret
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=your-refresh-secret
JWT_REFRESH_EXPIRES_IN=7d

# Email (optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=Trionex <your-email@gmail.com>

# App
OWNER_EMAIL=debadattajena552@gmail.com
FRONTEND_URL=https://your-frontend.onrender.com
CORS_ORIGIN=https://your-frontend.onrender.com
```

---

## Step 5: Seed Admin User

After deployment, create your admin user:

```bash
# SSH into your backend container (if available)
# Or use a seed script
cd backend
npm run seed:admin
```

---

## Troubleshooting

### Backend Logs
- Go to Render Dashboard > Your Backend Service > Logs

### Common Issues

1. **Database connection failed**
   - Verify DB credentials
   - Check DB is in same region as backend

2. **CORS errors**
   - Update `CORS_ORIGIN` environment variable
   - Make sure frontend URL matches exactly

3. **Build failed**
   - Check Node version compatibility
   - Verify all dependencies are installed

---

## Free Tier Limitations

- **Web Services**: 750 hours/month (sleeps after 15 min inactivity)
- **PostgreSQL**: 1 database, 90 days expiration (need to renew)
- **Static Sites**: 1 GB bandwidth/month

---

## Support

- Render Documentation: https://render.com/docs
- NestJS Deployment: https://docs.nestjs.com/
