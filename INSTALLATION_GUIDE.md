# PEMAG Website Installation Guide

## 🤖 AI Agent Quick Start

### Automatic Setup Commands (Copy & Paste)
```bash
# Extract project
tar -xzf pemag-website-source-code.tar.gz
cd pemag-website

# Install dependencies
npm install

# Setup database schema
npm run db:push

# Seed database with sample data (REQUIRED)
tsx server/seed.ts

# Start development server
npm run dev
```

### Verification Commands
```bash
# Check if server is running
curl http://localhost:5000

# Check API endpoints
curl http://localhost:5000/api/services
curl http://localhost:5000/api/blog-posts
curl http://localhost:5000/api/testimonials
curl http://localhost:5000/api/projects
```

## 📋 Prerequisites Checklist

### System Requirements
- [ ] Node.js 18+ or 20+ installed
- [ ] PostgreSQL database available
- [ ] npm package manager
- [ ] Port 5000 available

### Environment Variables (Required)
```env
DATABASE_URL=postgresql://username:password@host:port/database
PGUSER=username
PGPASSWORD=password
PGHOST=localhost
PGPORT=5432
PGDATABASE=pemag_db
NODE_ENV=development
```

### Installation Verification
```bash
# Check Node.js version
node --version  # Should be 18+ or 20+

# Check npm version
npm --version

# Check PostgreSQL connection
psql $DATABASE_URL -c "SELECT version();"
```

## 🚀 Step-by-Step Installation

### Step 1: Extract Project
```bash
tar -xzf pemag-website-source-code.tar.gz
cd pemag-website
```

### Step 2: Install Dependencies
```bash
npm install
```

Expected output:
```
added 234 packages, and audited 235 packages in 15s
```

### Step 3: Database Setup
```bash
# Push schema to database
npm run db:push
```

Expected output:
```
✓ Pushed schema to database
```

### Step 4: Seed Database (Optional)
```bash
npm run seed
```

Expected output:
```
✓ Database seeded successfully
```

### Step 5: Start Development Server
```bash
npm run dev
```

Expected output:
```
[express] serving on port 5000
```

### Step 6: Verify Installation
Visit `http://localhost:5000` in browser or:
```bash
curl http://localhost:5000
```

## 🛠 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run db:push      # Push database schema changes
npm run seed         # Seed database with sample data
npm run check        # TypeScript type checking
```

## 📁 Project Structure Overview

```
pemag-website/
├── client/           # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utilities
│   └── public/          # Static assets
├── server/           # Express backend
│   ├── index.ts         # Entry point
│   ├── routes.ts        # API routes
│   ├── db.ts           # Database connection
│   └── storage.ts      # Data access
├── shared/           # Shared types
│   └── schema.ts       # Database schema
└── package.json      # Dependencies
```

## 🔧 Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

#### 2. Database Connection Failed
```bash
# Check database URL
echo $DATABASE_URL

# Test connection
psql $DATABASE_URL -c "SELECT 1;"
```

#### 3. Node Version Issues
```bash
# Check Node version
node --version

# Install Node 20 (if needed)
nvm install 20
nvm use 20
```

#### 4. Missing Dependencies
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 5. Build Errors
```bash
# Clear cache
rm -rf node_modules/.vite
npm run dev
```

### Error Messages & Solutions

**Error**: `Unable to load services/projects/blog posts/testimonials`
**Solution**: Database is empty - run `tsx server/seed.ts` to populate with data

**Error**: `Cannot find module 'drizzle-orm'`
**Solution**: Run `npm install`

**Error**: `Database connection failed`
**Solution**: Check `DATABASE_URL` environment variable

**Error**: `Port 5000 is already in use`
**Solution**: Kill existing process or change port

**Error**: `Permission denied`
**Solution**: Check file permissions: `chmod -R 755 pemag-website/`

## 🌐 API Testing

### Test All Endpoints
```bash
# Services
curl http://localhost:5000/api/services

# Blog posts
curl http://localhost:5000/api/blog-posts

# Testimonials
curl http://localhost:5000/api/testimonials

# Projects
curl http://localhost:5000/api/projects

# Download functionality
curl -I http://localhost:5000/download/source
```

### Test Form Submissions
```bash
# Test contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'

# Test newsletter signup
curl -X POST http://localhost:5000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

## 📊 Performance Monitoring

### Key Metrics to Monitor
- Server response time: < 200ms
- Database query time: < 100ms
- Page load time: < 2 seconds
- Memory usage: < 512MB

### Monitoring Commands
```bash
# Check server status
curl -w "@curl-format.txt" http://localhost:5000

# Monitor memory usage
top -p $(pgrep node)

# Check database performance
psql $DATABASE_URL -c "SELECT * FROM pg_stat_activity;"
```

## 🔐 Security Considerations

### Environment Variables
- Never commit `.env` files
- Use strong database passwords
- Rotate credentials regularly

### Database Security
- Use connection pooling
- Implement query timeouts
- Monitor for SQL injection

## 🚀 Production Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
NODE_ENV=production npm start
```

### Environment Variables (Production)
```env
NODE_ENV=production
DATABASE_URL=your_production_database_url
PORT=5000
```

## 📞 Support

For technical support:
- Check troubleshooting section first
- Verify all prerequisites are met
- Test API endpoints manually
- Check server logs for errors

---

**Note**: This guide is designed for AI agents to quickly deploy and test the PEMAG website. Follow the steps in order for best results.