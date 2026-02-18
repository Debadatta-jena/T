# 🚀 GitHub + Render Deployment Guide

## 📋 **Pre-Deployment Checklist**

### ✅ **Project Status**
- [x] Frontend builds successfully
- [x] Backend builds successfully  
- [x] All tests passing
- [x] Security features implemented
- [x] Environment variables configured
- [x] Health check endpoint added

---

## 🔧 **Step 1: Prepare GitHub Repository**

### **1.1 Add All Changes**
```bash
git add .
```

### **1.2 Commit Changes**
```bash
git commit -m "🚀 Ready for Render deployment

✅ Features:
- Secure authentication with httpOnly cookies
- CSRF protection implementation
- Security headers middleware
- Health check endpoint for monitoring
- Render deployment configuration
- Production environment variables
- Updated build configurations

🛡️ Security:
- Token storage moved to secure cookies
- Session management implemented
- Rate limiting and DDoS protection
- Input validation and sanitization

📦 Deployment:
- render.yaml configuration
- .env.render files for production
- Health check endpoints
- CORS configuration for production"
```

### **1.3 Push to GitHub**
```bash
git push origin main
```

---

## 🌐 **Step 2: Render.com Setup**

### **2.1 Connect GitHub to Render**
1. Go to [render.com](https://render.com)
2. Sign up/login
3. Click "New +" → "Web Service"
4. Connect your GitHub account
5. Select this repository

### **2.2 Deploy Backend Service**
1. **Service Details:**
   - Name: `trionex-backend`
   - Root Directory: `backend`
   - Runtime: `Node`
   - Plan: `Free` (or `Starter`)

2. **Build Command:**
   ```
   cd backend && npm install && npm run build
   ```

3. **Start Command:**
   ```
   cd backend && npm start
   ```

4. **Health Check Path:**
   ```
   /api/v1/health
   ```

### **2.3 Deploy Frontend Service**
1. **Service Details:**
   - Name: `trionex-frontend`
   - Root Directory: `frontend`
   - Runtime: `Node`
   - Plan: `Free`

2. **Build Command:**
   ```
   cd frontend && npm install && npm run build
   ```

3. **Start Command:**
   ```
   cd frontend && npm start
   ```

---

## 🗄️ **Step 3: Database Setup**

### **3.1 Create PostgreSQL Database**
1. In Render dashboard: "New +" → "PostgreSQL"
2. Name: `trionex-db`
3. Plan: `Free`
4. Wait for creation

### **3.2 Get Database Connection**
1. Go to database service
2. Copy "Internal Connection String"
3. Format: `postgresql://postgres:password@host:5432/dbname`

---

## 🔐 **Step 4: Environment Variables**

### **4.1 Backend Environment Variables**
```env
NODE_ENV=production
PORT=10000
JWT_SECRET=your-generated-secret
JWT_REFRESH_SECRET=your-generated-secret  
SESSION_SECRET=your-generated-secret
DATABASE_URL=your-postgres-connection-string
FRONTEND_URL=https://your-frontend-url.onrender.com
CORS_ORIGIN=https://your-frontend-url.onrender.com
```

### **4.2 Frontend Environment Variables**
```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
NEXT_PUBLIC_APP_NAME=Trionex Technologies
NEXT_PUBLIC_APP_URL=https://your-frontend-url.onrender.com
```

---

## 🚀 **Step 5: Deploy & Test**

### **5.1 Automatic Deployment**
- Render will automatically deploy on push
- Monitor build logs
- Wait for services to be "Live"

### **5.2 Test Backend**
```bash
curl https://your-backend-url.onrender.com/api/v1/health
```
Should return:
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600,
  "environment": "production"
}
```

### **5.3 Test Frontend**
- Visit: `https://your-frontend-url.onrender.com`
- Should load the homepage
- Test login/register functionality

---

## 🛠️ **Step 6: Post-Deployment Setup**

### **6.1 Seed Admin User**
1. Go to backend service → "Shell"
2. Run: `cd backend && npm run seed-admin`
3. This creates the default admin user

### **6.2 Verify Features**
- [x] User registration/login
- [x] Admin dashboard access
- [x] Contact forms working
- [x] API endpoints responding
- [x] Security headers active

---

## 🔍 **Step 7: Monitoring**

### **7.1 Health Checks**
- Backend: `/api/v1/health`
- Frontend: Homepage loads
- Database: Connection active

### **7.2 Logs**
- Check Render dashboard for logs
- Monitor for any errors
- Set up alerts if needed

---

## 📞 **Troubleshooting**

### **Common Issues & Solutions**

**❌ CORS Errors**
- Check `CORS_ORIGIN` matches frontend URL
- Ensure frontend URL includes `https://`

**❌ Database Connection**
- Verify `DATABASE_URL` is correct
- Check database is running
- Ensure user permissions

**❌ Build Failures**
- Check package.json scripts
- Verify all dependencies installed
- Look at build logs for errors

**❌ Port Issues**
- Render uses port 10000+
- Update environment variables if needed

---

## 🎉 **Success Indicators**

✅ **Backend**: Health endpoint returns 200 OK
✅ **Frontend**: Homepage loads without errors
✅ **Database**: Connection established
✅ **Authentication**: Login/register works
✅ **Security**: HTTPS enabled, headers present

---

## 📱 **Your Live Application**

Once deployed, your app will be available at:
- **Frontend**: `https://trionex-frontend.onrender.com`
- **Backend API**: `https://trionex-backend.onrender.com/api/v1`
- **Database**: Managed by Render

---

**🚀 Ready for deployment! Push to GitHub and deploy on Render!**
