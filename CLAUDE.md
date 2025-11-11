# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React 19 + TypeScript + Vite frontend application showcasing Villa Milena, a real estate property in Hranice, Czech Republic. The project uses Emotion for CSS-in-JS styling, React Router for navigation, includes an authentication system, and features a modal-based contact form for service inquiries.

## Development Commands

```bash
# Navigate to frontend directory first
cd frontend

# Start development server
npm run dev

# Build for production (runs TypeScript check + Vite build)
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Docker Deployment

```bash
# Build and run with Docker (from project root)
docker build -t villa-milena .
docker run -p 8080:8080 villa-milena

# The Dockerfile uses multi-stage build:
# 1. Node 18 builder stage (installs deps and builds)
# 2. Nginx alpine stage (serves static files)
```

The application is served via Nginx on port 8080 with SPA routing support (all routes fallback to index.html).

## Architecture

### Styling System

**All styling uses Emotion CSS-in-JS** - do NOT create separate CSS files except for global styles in index.css.

Pattern:
```typescript
import styled from '@emotion/styled';

const StyledComponent = styled('div')({
  display: 'flex',
  gap: 36,
  '@media (max-width: 1000px)': {
    flexDirection: 'column',
  },
});
```

Key styling features:
- Responsive design via media queries in styled objects
- Dynamic props: `styled('div')<Props>(({ prop }: { prop: Type }) => ({ ... }))`
- Animations integrated with Animate.css classes
- Global fonts and CSS variables in `src/index.css`

**Important TypeScript constraint**: When using styled components with props, always explicitly type the destructured parameters to avoid implicit `any` errors:
```typescript
// ✅ Correct
const Button = styled('button')<{ variant?: string }>(({ variant }: { variant?: string }) => ({...}))

// ❌ Wrong (will cause TS error)
const Button = styled('button')<{ variant?: string }>(({ variant }) => ({...}))
```

Also, use `as const` for CSS property values that TypeScript doesn't recognize as string literals:
```typescript
const Modal = styled('div')({
  position: 'fixed' as const,  // Required for position
  cursor: 'pointer' as const,  // Required for cursor
  overflowY: 'auto' as const,  // Required for overflow
});
```

### Component Structure

- **App.tsx** - Main application page containing the entire property showcase layout
- **components/** - Reusable components:
  - `DroneViewCard.tsx` - Hero section with video background
  - `VirtualTour.tsx` - Interactive floor plan viewer
  - `FeAuth.tsx` - Authentication wrapper using token validation
  - `Modal.tsx` - Reusable modal overlay with animations
  - `ContactForm.tsx` - Service inquiry form with validation
  - `Box.tsx` - Interactive clickable overlay boxes
  - `Card.tsx` - Generic content card component

### Modal & Form System

The application includes a complete modal-based contact form system:

**Modal Component** (`components/Modal.tsx`):
- Reusable overlay with blur backdrop
- Click-outside-to-close functionality
- Close button with rotation animation
- Fade-in and slide-up animations
- Fully responsive

**ContactForm Component** (`components/ContactForm.tsx`):
- Fields: name, surname, email, phone
- Real-time validation with error messages
- Czech phone number validation (+420 format)
- Email format validation
- Success message on submission
- Service name parameter display
- Styled to match application theme

**Integration Pattern in App.tsx**:
```typescript
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedService, setSelectedService] = useState<string>('');

const handleOpenModal = (serviceName: string) => {
  setSelectedService(serviceName);
  setIsModalOpen(true);
};

// In JSX
<ServiceButton onClick={() => handleOpenModal('Service Name')}>
  Mám zájem
</ServiceButton>

<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
  <ContactForm serviceName={selectedService} onCancel={handleCloseModal} />
</Modal>
```

**Technology Cards**: Each of the 7 technology cards in the application has a "Mám zájem" (I'm interested) button that opens the modal with the service name pre-filled.

### Custom Hooks

- **useInViewAnimation** - Triggers animations when elements enter viewport using IntersectionObserver
  - Returns `{ ref, isVisible }`
  - Animates once, then disconnects observer for performance
  - Used with Animate.css classes: `className={isVisible ? 'animate__animated animate__fadeIn' : ''}`

- **useVirtualTour** - Manages virtual tour state (floor selection)
  - Returns `{ currentFloor, setCurrentFloor }`
  - Types: `Room`, `Floor`, `House` for structured tour data

### Authentication

The FeAuth component validates access via URL query parameter:
- Expects `?t=<token>` in URL
- Hashes token with SHA256 (using crypto-js)
- Compares against hardcoded hash
- Redirects to `/unauthorized` on failure

Usage:
```typescript
<FeAuth>
  <ProtectedContent />
</FeAuth>
```

### State Management

This project uses **local component state only** - no Redux, Zustand, or global Context:
- useState for component-level state (modal open/close, form data)
- URL query parameters for authentication tokens
- React Router hooks (useLocation, useNavigate) for navigation

If adding global state, prefer Context API for small apps or Redux Toolkit for complex state.

### Routing

React Router v7 is configured in `main.tsx` with BrowserRouter. Currently serves a single-page application, but structured for expansion.

To add new routes:
```typescript
// In main.tsx or App.tsx
<Routes>
  <Route path="/" element={<App />} />
  <Route path="/new-page" element={<NewPage />} />
</Routes>
```

## TypeScript Configuration

- Strict mode enabled (`strict: true`)
- Target: ES2022
- Module: ESNext with bundler resolution
- React JSX transform (no need to import React)
- `verbatimModuleSyntax: true` - requires type-only imports for types
- Config split across:
  - `tsconfig.json` - Root config with references
  - `tsconfig.app.json` - Application code settings
  - `tsconfig.node.json` - Node/Vite config files

**Important**: Due to `verbatimModuleSyntax`, use type-only imports for types:
```typescript
// ✅ Correct
import { useState } from 'react';
import type { ReactNode, FormEvent } from 'react';

// ❌ Wrong (will cause TS error)
import { useState, ReactNode, FormEvent } from 'react';
```

## ESLint Configuration

Modern flat config in `eslint.config.js`:
- TypeScript ESLint rules
- React Hooks rules (recommended-latest)
- React Refresh rules (for Vite HMR)
- Ignores `dist/` directory

## External Resources

Images and videos are hosted on Google Cloud Storage:
- Bucket: `milena-a`
- Accessed via public URLs in components
- Includes drone footage, floor plans, and property photos

## Common Patterns

### Adding New Animated Section

```typescript
import { useInViewAnimation } from './hooks/useInViewAnimation';

const { ref, isVisible } = useInViewAnimation();

<Section
  ref={ref}
  className={isVisible ? 'animate__animated animate__fadeInUp' : ''}
>
  Content
</Section>
```

### Creating Styled Components with Props

```typescript
import styled from '@emotion/styled';

// Always explicitly type the props parameter
const Container = styled('div')<{ isActive: boolean }>(({ isActive }: { isActive: boolean }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  padding: 48,
  opacity: isActive ? 1 : 0.5,
  '@media (max-width: 1000px)': {
    padding: 24,
    gap: 16,
  },
}));
```

### Adding Modal to a Component

1. Import Modal and ContactForm:
```typescript
import { Modal } from './components/Modal';
import { ContactForm } from './components/ContactForm';
import { useState } from 'react';
```

2. Add state:
```typescript
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState<string>('');
```

3. Create handlers:
```typescript
const handleOpen = (itemName: string) => {
  setSelectedItem(itemName);
  setIsModalOpen(true);
};

const handleClose = () => {
  setIsModalOpen(false);
};
```

4. Add to JSX:
```typescript
<Modal isOpen={isModalOpen} onClose={handleClose}>
  <ContactForm serviceName={selectedItem} onCancel={handleClose} />
</Modal>
```

### Form Validation Pattern

The ContactForm includes built-in validation for:
- Required fields (name, surname, email, phone)
- Email format: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Czech phone format: `/^(\+420)?[0-9]{9}$/`

To extend validation, modify the `validateForm` function in ContactForm.tsx.

### Responsive Design Breakpoints

The application uses consistent breakpoints:
- Desktop: default styles
- Tablet/Mobile: `@media (max-width: 1000px)`
- Mobile specific: `@media (max-width: 600px)`

## Performance Notes

- Intersection Observer used for lazy animations (better than scroll listeners)
- Swiper library handles carousel optimizations
- Vite provides fast HMR and optimized production builds
- Nginx serves static assets with 1-year cache for fonts/images

## Project Structure

```
alexandrPlachy/
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Modal.tsx           # Reusable modal overlay
│   │   │   ├── ContactForm.tsx     # Service inquiry form
│   │   │   ├── DroneViewCard.tsx   # Hero section
│   │   │   ├── VirtualTour.tsx     # Floor plans
│   │   │   ├── FeAuth.tsx          # Auth wrapper
│   │   │   ├── Box.tsx             # Clickable boxes
│   │   │   └── Card.tsx            # Generic card
│   │   ├── hooks/          # Custom React hooks
│   │   │   ├── useInViewAnimation.ts
│   │   │   └── useVirtualTour.ts
│   │   ├── assets/         # Images and media
│   │   ├── App.tsx         # Main page component
│   │   ├── main.tsx        # React entry point
│   │   └── index.css       # Global styles
│   ├── public/             # Static files
│   ├── dist/               # Build output
│   ├── package.json        # Dependencies
│   ├── vite.config.ts      # Vite configuration
│   ├── tsconfig.json       # TypeScript config
│   └── eslint.config.js    # ESLint config
├── Dockerfile              # Multi-stage Docker build
├── nginx.conf              # Nginx server configuration
└── .trello.env             # Trello API credentials (git-ignored)
```

## Trello Integration

The project uses Trello for task management. API credentials are stored in `.trello.env`:
```
TRELLO_API_KEY=<key>
TRELLO_API_TOKEN=<token>
```

Tasks can be fetched via Trello REST API at:
```
https://api.trello.com/1/cards/{cardId}?key={apiKey}&token={token}
```
