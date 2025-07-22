# PEMAG Engineering Website

## Overview

This is a full-stack web application for PEMAG, an engineering training and consultation company in Mauritania. The project features a modern, professional website showcasing services in petroleum engineering, mining, energy sustainability, agriculture technology, and professional development.

**Latest Update**: Added comprehensive AI agent documentation and installation guides. Fixed corrupted download functionality and created clean 125KB source code archive with detailed setup instructions for AI agents.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack monorepo architecture with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom industrial color scheme
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful endpoints with TypeScript validation
- **Development**: Hot reload with Vite integration

## Key Components

### Database Schema
- **Services**: Training programs and consultation services
- **Blog Posts**: Industry articles and updates
- **Testimonials**: Client feedback and ratings
- **Projects**: Company achievements and statistics
- **Contact Submissions**: Customer inquiries
- **Newsletter Subscriptions**: Email marketing list

### API Endpoints
- `GET /api/services` - Retrieve all services
- `GET /api/blog-posts` - Retrieve blog articles
- `GET /api/testimonials` - Retrieve client testimonials
- `GET /api/projects` - Retrieve company projects/stats
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Subscribe to newsletter

### UI Components
- **Header**: Navigation with mobile responsive menu
- **Hero Carousel**: Rotating promotional slides
- **Service Cards**: Interactive service presentations
- **Project Statistics**: Animated achievement counters
- **Blog Section**: Categorized article listings
- **Testimonials**: Client feedback carousel
- **Contact Form**: Multi-field inquiry form with validation
- **Footer**: Company information and social links

## Data Flow

1. **Initial Load**: React app loads with static fallback data
2. **API Hydration**: TanStack Query fetches fresh data from Express API
3. **Database Queries**: Express routes query PostgreSQL via Drizzle ORM
4. **Form Submissions**: Contact/newsletter forms POST to API endpoints
5. **Real-time Updates**: Query invalidation triggers UI updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/react-**: Complete headless UI component library
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight React router

### Development Tools
- **vite**: Fast build tool with HMR
- **typescript**: Type safety across the stack
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- Express server with hot reload via tsx
- Database migrations managed by Drizzle Kit
- Environment variables for database connection

### Production Build
- Frontend: `vite build` creates optimized static assets
- Backend: `esbuild` bundles server code to ESM format
- Static assets served by Express in production
- Database migrations applied via `drizzle-kit push`

### Database Management
- Schema defined in TypeScript with Drizzle
- Migrations generated automatically
- Seed script populates initial data
- Connection pooling via Neon serverless

The application is designed for easy deployment on platforms like Replit, with automatic database provisioning and environment variable management.