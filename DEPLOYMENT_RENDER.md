# Trionex Technologies - AI Solutions Platform

## 🚀 Deployment Instructions

### **Render.com Deployment**

This project is configured for automatic deployment on Render.com with the following services:

#### **Services Overview**
1. **Frontend** (Next.js) - `trionex-frontend`
2. **Backend** (NestJS) - `trionex-backend` 
3. **Database** (PostgreSQL) - `trionex-db`

#### **Quick Deploy Steps**

1. **Connect GitHub to Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub account
   - Select this repository

2. **Deploy Backend**
   - Select `backend` as root directory
   - Runtime: Node
   - Build Command: `cd backend && npm install && npm run build`
   - Start Command: `cd backend && npm start`
   - Set environment variables (see below)

3. **Deploy Frontend**
   - Select `frontend` as root directory
   - Runtime: Node
   - Build Command: `cd frontend && npm install && npm run build`
   - Start Command: `cd frontend && npm start`
   - Set environment variables (see below)

4. **Deploy Database**
   - Create PostgreSQL instance
   - Note the connection string
   - Update backend environment variables

#### **Environment Variables**

**Backend Environment Variables:**
```env
NODE_ENV=production
PORT=10000
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-key
SESSION_SECRET=your-super-secret-session-key
DATABASE_URL=postgresql://postgres:password@host:5432/dbname
FRONTEND_URL=https://your-frontend-url.onrender.com
CORS_ORIGIN=https://your-frontend-url.onrender.com
```

**Frontend Environment Variables:**
```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
NEXT_PUBLIC_APP_NAME=Trionex Technologies
NEXT_PUBLIC_APP_URL=https://your-frontend-url.onrender.com
```

#### **Post-Deployment Setup**

1. **Database Migration**
   - Once backend is deployed, run seed script:
   ```bash
   # In Render dashboard, go to backend service → Shell
   cd backend && npm run seed-admin
   ```

2. **Test Connection**
   - Visit: `https://your-backend-url.onrender.com/api/v1/health`
   - Should return: `{ "status": "ok", "timestamp": "..." }`

3. **Access Application**
   - Frontend: `https://your-frontend-url.onrender.com`
   - Backend API: `https://your-backend-url.onrender.com/api/v1`

#### **Troubleshooting**

**Common Issues:**
- **CORS Errors**: Ensure `CORS_ORIGIN` matches frontend URL
- **Database Connection**: Verify `DATABASE_URL` is correct
- **Build Failures**: Check logs for missing dependencies
- **Port Issues**: Render uses port 10000+ by default

**Health Checks:**
- Frontend: Should load homepage
- Backend: `/api/v1/health` endpoint
- Database: Connection should be established

#### **Monitoring**

- Check Render dashboard for service status
- Monitor logs for any errors
- Set up alerts for downtime

---

## 🛡️ Security Notes

- All secrets are generated automatically by Render
- HTTPS is enabled by default
- Database is private and accessible only from backend
- Environment variables are encrypted

---

## 📞 Support

If you encounter issues:
1. Check Render service logs
2. Verify environment variables
3. Ensure database is running
4. Check GitHub Actions (if configured)

---

**Ready for deployment! 🚀**
