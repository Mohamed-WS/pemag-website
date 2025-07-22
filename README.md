# PEMAG Engineering Website

A professional full-stack web application for PEMAG, an engineering training and consultation company in Mauritania. The project features a modern, industrial website showcasing services in petroleum engineering, mining, energy sustainability, agriculture technology, and professional development.

## 🚀 Features

- **Modern React Frontend**: Built with TypeScript, Wouter routing, and shadcn/ui components
- **Industrial Design**: Professional color scheme with orange accents and navy blue
- **Full Database Integration**: PostgreSQL with Drizzle ORM
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Contact & Newsletter**: Functional forms with backend API integration
- **Blog & Testimonials**: Content management for industry insights
- **Performance Optimized**: Vite build system with hot reload

## 🛠 Technology Stack

### Frontend
- React 18 with TypeScript
- Wouter for client-side routing
- shadcn/ui components (Radix UI primitives)
- Tailwind CSS for styling
- TanStack Query for state management
- Framer Motion for animations

### Backend
- Node.js with Express.js
- PostgreSQL database
- Drizzle ORM for database operations
- TypeScript throughout the stack
- Environment variable configuration

## 🤖 AI Agent Instructions

### Quick Setup for AI Agents
```bash
# Extract and setup
tar -xzf pemag-website-source-code.tar.gz
cd pemag-website

# Install dependencies
npm install

# Setup database schema
npm run db:push

# Seed with sample data
npm run seed

# Start development server
npm run dev
```

### Required Environment Variables
```env
DATABASE_URL=postgresql://username:password@host:port/database
PGUSER=username
PGPASSWORD=password
PGHOST=localhost
PGPORT=5432
PGDATABASE=pemag_db
NODE_ENV=development
```

### Prerequisites Checklist
- [ ] Node.js 18+ or 20+ installed
- [ ] PostgreSQL database accessible
- [ ] Package manager (npm) available
- [ ] Environment variables configured

### Deployment Steps
1. **Extract Project**: `tar -xzf pemag-website-source-code.tar.gz`
2. **Install Dependencies**: `npm install`
3. **Database Setup**: `npm run db:push`
4. **Seed Data**: `npm run seed`
5. **Start Server**: `npm run dev`
6. **Verify**: Check `http://localhost:5000`

### Common Issues & Solutions
- **"Unable to load..." errors**: Database is empty - run `tsx server/seed.ts`
- **Port conflicts**: Change port in `server/index.ts`
- **Database connection**: Verify `DATABASE_URL` is correct
- **Missing dependencies**: Run `npm install` again
- **Build errors**: Clear cache with `rm -rf node_modules && npm install`

## 📦 Manual Installation

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

### Setup Instructions

1. **Clone or extract the project**
```bash
tar -xzf pemag-website-source-code.tar.gz
cd pemag-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create a `.env` file in the root directory:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/pemag_db
NODE_ENV=development
```

4. **Database Setup**
```bash
# Push database schema
npm run db:push

# Seed the database with sample data (REQUIRED)
tsx server/seed.ts
```

**Important**: You must seed the database or the website will show "Unable to load..." error messages.

5. **Start Development Server**
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 🏗 Project Structure

```
pemag-website/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── ui/           # shadcn/ui components
│   │   │   ├── about-section.tsx
│   │   │   ├── blog-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── header.tsx
│   │   │   ├── hero-carousel.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   └── testimonials-section.tsx
│   │   ├── data/
│   │   │   └── static-data.ts # Fallback data
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utility libraries
│   │   ├── pages/            # Page components
│   │   └── index.css         # Global styles
│   └── index.html            # HTML template
├── server/                   # Backend Express application
│   ├── db.ts                # Database connection
│   ├── index.ts             # Server entry point
│   ├── routes.ts            # API routes
│   ├── seed.ts              # Database seeding
│   ├── storage.ts           # Data access layer
│   └── vite.ts              # Vite integration
├── shared/                  # Shared TypeScript types
│   └── schema.ts            # Database schemas
├── package.json             # Dependencies & scripts
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## 🗃 Database Schema

The application includes the following database tables:

- **services**: Training programs and consultation services
- **blog_posts**: Industry articles and updates
- **testimonials**: Client feedback and ratings
- **projects**: Company achievements and statistics
- **contact_submissions**: Customer inquiries
- **newsletter_subscriptions**: Email marketing list

## 🎨 Design System

### Color Palette
- **Primary Navy**: `hsl(211, 55%, 23%)` - Professional industrial blue
- **Accent Orange**: `hsl(14, 100%, 60%)` - Energy and innovation
- **Steel Gray**: `hsl(215, 16%, 47%)` - Supporting neutral
- **Clean White**: Background and contrast

### Typography
- **Font Family**: Inter (clean, professional)
- **Headings**: Bold weights for hierarchy
- **Body Text**: Regular weight for readability

## 📱 API Endpoints

- `GET /api/services` - Retrieve all services
- `GET /api/blog-posts` - Retrieve blog articles
- `GET /api/testimonials` - Retrieve client testimonials
- `GET /api/projects` - Retrieve company projects/stats
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Subscribe to newsletter

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
```env
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
PORT=5000
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Apply database schema changes

## 📖 Content Management

The website includes comprehensive content for:

### Services
- Petroleum & Mining Engineering
- Energy & Sustainability
- Agriculture Technology
- Professional Development
- Software Training
- Consultation Services

### Blog Categories
- Petroleum Engineering
- Energy & Sustainability
- Agriculture Technology
- Mining Engineering
- Software Training
- Industry Updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to PEMAG Engineering Excellence.

## 📞 Support

For technical support or questions:
- Email: info@pemag.mr
- Phone: +222 4525 3647
- Address: Nouakchott, Mauritania

---

**PEMAG Engineering Excellence** - Transforming Mauritania's engineering landscape through world-class training and professional development.