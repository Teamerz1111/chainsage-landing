# ChainSage - Real-time On-Chain Threat Intelligence Platform

## Overview

ChainSage is a comprehensive real-time blockchain threat intelligence platform built on the 0G Network. The application serves as a "24/7 on-chain security analyst" that detects exploits, whale movements, and market manipulation before losses occur. It targets DeFi traders, NFT collectors, security analysts, and institutions with automated monitoring and early warning systems.

The project is built as a modern full-stack web application with a React frontend and Express.js backend, featuring a sophisticated landing page designed to capture waitlist signups and showcase the platform's capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **UI Library**: Comprehensive component system using Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with custom design system featuring cyberpunk-inspired color scheme (cyber-green, cyber-cyan, cyber-purple)
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for sophisticated page transitions and micro-interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Data Layer**: Drizzle ORM with PostgreSQL database schema
- **API Design**: RESTful endpoints with comprehensive error handling and request logging
- **Storage**: Abstracted storage interface supporting both in-memory (development) and database persistence
- **Session Management**: Express sessions with PostgreSQL session store using connect-pg-simple

### Database Design
- **ORM**: Drizzle with type-safe schema definitions
- **Schema**: 
  - `users` table with UUID primary keys and unique username constraints
  - `waitlist_signups` table with email uniqueness and timestamp tracking
- **Validation**: Zod schemas for runtime type checking and API validation
- **Migrations**: Drizzle Kit for database schema management

### Development Architecture
- **Build System**: Dual build process with Vite for frontend and esbuild for backend
- **Development Server**: Hot module replacement with Vite middleware integration
- **Type Safety**: Comprehensive TypeScript configuration with strict mode enabled
- **Code Organization**: Monorepo structure with shared types and utilities
- **Path Mapping**: Alias support for clean imports (@/ for client, @shared for shared code)

### UI/UX Design System
- **Design Language**: Modern cyberpunk aesthetic with dark mode support
- **Typography**: Custom font stack including Space Grotesk, Inter, and Geist Mono
- **Component Library**: Extensive shadcn/ui components with custom theming
- **Responsive Design**: Mobile-first approach with comprehensive breakpoint coverage
- **Accessibility**: ARIA compliance and keyboard navigation support
- **Theme System**: CSS variables-based theming with light/dark mode toggle

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon database serverless driver for PostgreSQL connections
- **drizzle-orm**: Type-safe ORM for database operations and query building
- **@tanstack/react-query**: Server state management and caching solution
- **framer-motion**: Advanced animation library for smooth transitions and interactions

### UI and Design Dependencies
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe variant API for component styling
- **cmdk**: Command palette component for enhanced user interactions

### Development and Build Tools
- **vite**: Fast build tool and development server with HMR support
- **tsx**: TypeScript execution engine for Node.js development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment

### Validation and Type Safety
- **zod**: Runtime type validation and schema definition
- **drizzle-zod**: Integration between Drizzle ORM and Zod for schema validation
- **@hookform/resolvers**: React Hook Form integration with validation libraries

### Session and Security
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **express**: Web application framework with middleware support
- **nanoid**: Secure URL-friendly unique string ID generator

### Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **clsx**: Utility for constructing className strings conditionally
- **embla-carousel-react**: Touch-friendly carousel component for React