# Modimal - E-commerce Fashion Platform

Modimal is a modern e-commerce platform built for fashion and clothing retailers, featuring a sleek React-based frontend with real-time capabilities powered by Supabase.

## Features

- **Product Catalog**: Browse fashion items across multiple categories (tops, pants, dresses, outerwear, etc.)
- **Advanced Filtering**: Filter products by fabric, color, size, and collection type
- **Smart Search**: Full-text search with URL-based query parameters
- **User Authentication**: Secure login/signup with password recovery
- **Wishlist**: Save favorite products to a user wishlist
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Real-time Updates**: Live product data synchronization via Supabase
- **Shopping Cart**: Add to cart functionality with persistent state
- **Product Details**: Detailed product pages with image carousels and specifications

## Tech Stack

### Frontend

- **React 19** - Modern React with concurrent features
- **Vite** - Fast build tool with HMR
- **React Router v7** - Client-side routing with lazy loading
- **Tailwind CSS v4** - Utility-first CSS framework

### State Management

- **Redux Toolkit** - UI state management
- **React Query** - Server state management and caching

### Backend & Database

- **Supabase** - Backend-as-a-Service with PostgreSQL
- **Real-time subscriptions** - Live data updates

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **React Hot Toast** - User notifications
- **React Hook Form** - Form handling

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd modimal
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── features/           # Feature-specific logic and components
│   ├── auth/          # Authentication features
│   ├── products/      # Product-related features
│   ├── filter/        # Filtering and sorting
│   └── modal/         # Modal management
├── pages/             # Route components
├── services/          # API calls and external services
├── store/             # Redux store configuration
├── hooks/             # Custom React hooks
└── utils/             # Utility functions
```

## Key Patterns

### Data Fetching

Uses React Query for server state management with optimized caching and background updates.

### URL State Management

Filters and sorting parameters are stored in URL for shareable and bookmarkable product listings.

### Component Architecture

- **Pages**: Route-level components (thin wrappers)
- **Features**: Business logic and custom hooks
- **Components**: Reusable UI elements
- **Services**: External API integrations

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License
