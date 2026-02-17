# AI Solutions Company - Complete Full-Stack Application

A production-ready AI & Software Solutions company website and backend system built with Next.js, TypeScript, NestJS, and PostgreSQL.

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animations
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **React Hot Toast** - Notifications

### Backend
- **NestJS** - Node.js framework
- **TypeScript** - Type-safe development
- **PostgreSQL** - Database
- **TypeORM** - ORM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Winston** - Logging
- **Swagger** - API documentation

### Features
- 🔐 JWT Authentication with refresh tokens
- 👥 Role-based access control (Admin/Client)
- 📱 Responsive design
- 🎨 Professional UI/UX
- 📊 Admin & Client Dashboards
- 📝 Contact forms
- 🏆 Testimonials management
- 📈 Company statistics
- 📁 Project portfolio
- 🔍 SEO optimized
- 🚀 Performance optimized

## 📁 Project Structure

```
my_web/
├── frontend/                 # Next.js frontend
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # Reusable components
│   │   │   ├── layout/      # Header, Footer
│   │   │   ├── sections/    # Page sections
│   │   │   ├── seo/         # SEO components
│   │   │   └── ui/          # UI components
│   │   ├── lib/             # Utilities and API
│   │   └── styles/          # Global styles
│   ├── package.json
│   ├── tailwind.config.js
│   ├── next.config.js
│   └── netlify.toml         # Netlify configuration
├── backend/                  # NestJS backend
│   ├── src/
│   │   ├── auth/            # Authentication module
│   │   ├── users/           # User management
│   │   ├── projects/        # Project management
│   │   ├── testimonials/    # Testimonials
│   │   ├── contact/         # Contact forms
│   │   ├── stats/           # Statistics
│   │   └── clients/         # Client management
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+
- PostgreSQL
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd my_web
```

### 2. Frontend Setup
```bash
cd frontend
npm install
```

Create environment file:
```bash
cp .env.local.example .env.local
```

Update `.env.local` with your configuration:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME=AI Solutions Company
NEXT_PUBLIC_APP_DESCRIPTION=Professional AI & Software Solutions
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Backend Setup
```bash
cd backend
npm install
```

Create environment file:
```bash
cp .env.example .env
```

Update `.env` with your configuration:
```env
NODE_ENV=development
PORT=3001
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=ai_solutions
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-key
FRONTEND_URL=http://localhost:3000
```

### 4. Database Setup
Create PostgreSQL database:
```sql
CREATE DATABASE ai_solutions;
```

### 5. Run the Applications

**Backend:**
```bash
cd backend
npm run start:dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

## 🌐 Deployment

### Frontend (Netlify)

1. **Connect to Netlify:**
   - Push code to GitHub repository
   - Connect repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `.next`

2. **Environment Variables:**
   Set these in Netlify dashboard:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.com
   NEXT_PUBLIC_APP_NAME=AI Solutions Company
   NEXT_PUBLIC_APP_URL=https://your-frontend-url.com
   ```

3. **Automatic Deployment:**
   - Netlify will automatically deploy on push to main branch
   - Preview deployments for pull requests

### Backend (AWS EC2)

1. **Server Setup:**
   ```bash
   # Update server
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PostgreSQL
   sudo apt install postgresql postgresql-contrib
   
   # Install PM2
   sudo npm install -g pm2
   ```

2. **Deploy Backend:**
   ```bash
   # Clone repository
   git clone <repository-url>
   cd my_web/backend
   
   # Install dependencies
   npm install --production
   
   # Build application
   npm run build
   
   # Setup environment
   cp .env.example .env
   # Edit .env with production values
   
   # Start with PM2
   pm2 start dist/main.js --name "ai-solutions-backend"
   pm2 save
   pm2 startup
   ```

3. **Setup Nginx:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3001;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **SSL Certificate:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## 📚 API Documentation

Once backend is running, visit:
- **Swagger UI:** `http://localhost:3001/api/docs`
- **API Base URL:** `http://localhost:3001/api/v1`

## 🔐 Default Admin User

Create first admin user:
```bash
curl -X POST http://localhost:3001/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "admin123",
    "role": "admin"
  }'
```

## 🧪 Testing

**Frontend:**
```bash
cd frontend
npm run lint
npm run type-check
