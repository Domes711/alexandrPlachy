# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack real estate agent portfolio application for Alexandr Plachy, consisting of:
- **Frontend**: React 19 + TypeScript + Vite using Tailwind CSS
- **Backend**: ASP.NET Core 9.0 Web API with email functionality

The application showcases a real estate agent's services, properties, and provides contact forms for client inquiries. It features GDPR compliance modals, service inquiry forms, and professional email notifications.

## Development Commands

### Frontend (React + Vite)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production (runs TypeScript check + Vite build)
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

### Backend (.NET Core API)

```bash
# Navigate to backend directory
cd backend

# Restore NuGet packages
dotnet restore

# Build the project
dotnet build

# Run the API (default: http://localhost:5055 or https://localhost:7xxx)
dotnet run

# Run with hot reload during development
dotnet watch run

# Clean build artifacts
dotnet clean
```

**Backend Configuration**: Email settings are configured in `appsettings.json`. Update SMTP credentials before running.

## Docker Deployment

```bash
# Build and run frontend with Docker (from project root)
docker build -t alexandr-plachy-frontend .
docker run -p 8080:8080 alexandr-plachy-frontend

# The Dockerfile uses multi-stage build:
# 1. Node 18 builder stage (installs deps and builds)
# 2. Nginx alpine stage (serves static files)
```

The frontend is served via Nginx on port 8080 with SPA routing support (all routes fallback to index.html).

**Note**: Backend does not currently have a Dockerfile. For production deployment, consider containerizing the .NET API separately.

## Architecture

### Frontend Stack

**Styling**: Tailwind CSS v4 with PostCSS
- Utility-first CSS framework configured via `@tailwindcss/postcss`
- Custom colors defined: primary (#1a1a1a), secondary/gold (#d4af37), accent (#2c3e50)
- Responsive design using Tailwind's breakpoint system (sm, md, lg, xl)
- Global styles and font imports in `src/index.css`

**Form Handling**: React Hook Form v7
- Used in modal forms (PoptavkaModal) for validation and state management
- Integrates with TypeScript for type-safe form data

**Data Fetching**: TanStack Query (React Query) v5
- Configured in `main.tsx` with QueryClientProvider
- Custom hook `useEmailMutation` for email API calls
- Handles loading, success, and error states automatically
- API service layer in `src/api/emailApi.ts`

### Frontend Component Structure

- **App.tsx** - Main homepage with hero, services, agent profile, and footer
- **pages/** - Route-specific page components:
  - `Dotaznik.tsx` - Questionnaire page for property buyers
  - `Poptavka.tsx` - Detailed inquiry form page
- **components/** - Reusable UI components:
  - `Header.tsx` - Navigation bar with logo and CTA button
  - `Hero.tsx` - Homepage hero section with call-to-action
  - `Services.tsx` - Service cards (buying, selling, evaluation)
  - `AgentProfile.tsx` - Agent biography and credentials section
  - `Footer.tsx` - Footer with contact info, social links, and legal links
  - `PropertyCard.tsx` - Individual property listing card
  - `PropertyList.tsx` - Grid of property cards
  - `PoptavkaModal.tsx` - Service inquiry modal form (meeting, callback, evaluation)
  - `GDPRModal.tsx` - GDPR policy information modal
  - `TermsModal.tsx` - Terms and conditions modal

### Modal System

**PoptavkaModal** (`components/PoptavkaModal.tsx`):
- Three service types: "meeting", "callback", "evaluation"
- Multi-step form with validation using React Hook Form
- Fields: first name, last name, email, phone, optional note
- Czech phone validation and email validation
- Submits to backend API endpoint `/api/email/send`
- Success/error states with user feedback
- GDPR consent checkbox required

**GDPRModal** (`components/GDPRModal.tsx`):
- Displays complete GDPR compliance information
- Details on data collection, storage, and rights
- Opens from footer "Ochrana osobních údajů" link

**TermsModal** (`components/TermsModal.tsx`):
- Displays terms and conditions
- Opens from footer "Obchodní podmínky" link

**Integration Pattern**:
```typescript
const [isModalOpen, setIsModalOpen] = useState(false);
const [serviceType, setServiceType] = useState<ServiceType>("meeting");

const handleOpenModal = (service: ServiceType) => {
  setServiceType(service);
  setIsModalOpen(true);
};

<PoptavkaModal
  isOpen={isModalOpen}
  onClose={handleCloseModal}
  serviceType={serviceType}
/>
```

### Backend Architecture (.NET Core Web API)

**Technology Stack**:
- ASP.NET Core 9.0 Web API
- MailKit for SMTP email sending
- Mjml.Net for HTML email template rendering
- Swagger/OpenAPI for API documentation

**Project Structure**:
```
backend/
├── Controllers/
│   └── EmailController.cs       # POST /api/email/send endpoint
├── Services/
│   ├── IEmailService.cs         # Email service interface
│   └── EmailService.cs          # SMTP email sending implementation
├── Models/
│   ├── EmailRequest.cs          # API request model with validation
│   └── EmailSettings.cs         # SMTP configuration model
├── Templates/
│   └── ContactEmailTemplate.mjml # MJML email template
├── Program.cs                   # App configuration and DI setup
└── appsettings.json             # Configuration (SMTP credentials)
```

**Email Service**:
- Sends contact inquiry emails via SMTP (currently configured for smtp.websupport.cz)
- Uses MJML templates for responsive HTML emails
- Template placeholders: `{{FirstName}}`, `{{LastName}}`, `{{Email}}`, `{{Phone}}`, `{{Service}}`, `{{Note}}`, `{{Timestamp}}`
- Supports conditional sections (e.g., note only shown if provided)
- Handles both SSL (port 465) and STARTTLS (port 587) connections

**API Endpoints**:
- `POST /api/email/send` - Sends contact email
  - Request body: `{ firstName, lastName, email, phone, service, note? }`
  - Returns: `{ message: "Email sent successfully" }`
  - Validation: required fields, email format, phone format

**CORS Configuration**:
- Allows frontend origins: `http://localhost:5173`, `http://localhost:8080`
- Configured in `Program.cs` with policy name "AllowFrontend"

**Swagger Documentation**:
- Available at `/swagger` in development mode
- Includes XML documentation comments for all endpoints

### State Management & Routing

**State Management**: Uses local component state only (no Redux/Context):
- `useState` for modal visibility, form data, service selection
- React Hook Form manages form state in PoptavkaModal

**Routing**: React Router v7 configured in `main.tsx`:
- `/` - Main homepage (App.tsx)
- `/dotaznik` - Property buyer questionnaire page
- `/poptavka` - Detailed inquiry form page

## TypeScript Configuration (Frontend)

- Strict mode enabled (`strict: true`)
- Target: ES2022
- Module: ESNext with bundler resolution
- React JSX transform (no import React needed)
- Config split across:
  - `tsconfig.json` - Root config with references
  - `tsconfig.app.json` - Application code settings
  - `tsconfig.node.json` - Node/Vite config files

## ESLint Configuration (Frontend)

Modern flat config in `eslint.config.js`:
- TypeScript ESLint rules
- React Hooks rules (recommended-latest)
- React Refresh rules (for Vite HMR)
- Ignores `dist/` directory

## Common Development Patterns

### Adding a New Modal

1. Create modal state in parent component:
```typescript
const [isModalOpen, setIsModalOpen] = useState(false);
const handleOpenModal = () => setIsModalOpen(true);
const handleCloseModal = () => setIsModalOpen(false);
```

2. Render modal component:
```typescript
<PoptavkaModal
  isOpen={isModalOpen}
  onClose={handleCloseModal}
  serviceType="meeting"
/>
```

### Form Validation with React Hook Form

PoptavkaModal demonstrates the pattern:
```typescript
import { useForm } from 'react-hook-form';

const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

<input
  {...register('email', {
    required: 'Email je povinný',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Neplatný formát emailu'
    }
  })}
/>
{errors.email && <span>{errors.email.message}</span>}
```

### API Integration Pattern with React Query

**API Service Layer** (`src/api/emailApi.ts`):
```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const sendContactEmail = async (data: EmailRequest): Promise<EmailResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/email/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Server error: ${response.status}`);
  }

  return response.json();
};
```

**Custom Hook** (`src/hooks/useEmailMutation.ts`):
```typescript
import { useMutation } from '@tanstack/react-query';

export const useEmailMutation = () => {
  return useMutation({
    mutationFn: (data: EmailRequest) => sendContactEmail(data),
  });
};
```

**Component Usage** (in PoptavkaModal):
```typescript
const emailMutation = useEmailMutation();

const onSubmit = (data: FormData) => {
  emailMutation.mutate(
    { firstName, lastName, email, phone, service, note },
    {
      onSuccess: () => setSubmitted(true),
      onError: (error) => alert('Email send failed'),
    }
  );
};

// In JSX:
<button disabled={emailMutation.isPending}>
  {emailMutation.isPending ? "Odesílám..." : "Odeslat"}
</button>
```

**Backend Endpoint**:
```csharp
[HttpPost("send")]
public async Task<IActionResult> SendEmail([FromBody] EmailRequest request)
{
    await _emailService.SendContactEmailAsync(request);
    return Ok(new { message = "Email sent successfully" });
}
```

### Responsive Design with Tailwind

Use Tailwind's responsive utilities:
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  // Content adapts: 1 col mobile, 2 cols tablet, 3 cols desktop
</div>
```

## Project Structure

```
alexandrPlachy/
├── frontend/                          # React 19 + TypeScript + Vite
│   ├── src/
│   │   ├── api/                       # API service layer
│   │   │   └── emailApi.ts            # Email API functions
│   │   ├── components/                # UI components
│   │   │   ├── Header.tsx             # Navigation bar
│   │   │   ├── Hero.tsx               # Homepage hero
│   │   │   ├── Services.tsx           # Service cards
│   │   │   ├── AgentProfile.tsx       # Agent bio
│   │   │   ├── Footer.tsx             # Footer with links
│   │   │   ├── PropertyCard.tsx       # Property listing card
│   │   │   ├── PropertyList.tsx       # Property grid
│   │   │   ├── PoptavkaModal.tsx      # Inquiry form modal
│   │   │   ├── GDPRModal.tsx          # GDPR info modal
│   │   │   └── TermsModal.tsx         # Terms modal
│   │   ├── hooks/                     # Custom React hooks
│   │   │   └── useEmailMutation.ts    # React Query email mutation
│   │   ├── pages/                     # Route pages
│   │   │   ├── Dotaznik.tsx           # Questionnaire
│   │   │   └── Poptavka.tsx           # Inquiry form
│   │   ├── types/                     # TypeScript types
│   │   ├── assets/                    # Static assets
│   │   ├── App.tsx                    # Main homepage
│   │   ├── main.tsx                   # React entry + routing + React Query
│   │   ├── App.css                    # Component styles
│   │   └── index.css                  # Global styles
│   ├── .env.local                     # Environment variables (gitignored)
│   ├── .env.example                   # Environment variables template
│   ├── package.json                   # NPM dependencies
│   ├── vite.config.ts                 # Vite config
│   ├── tailwind.config.js             # Tailwind config
│   ├── tsconfig.json                  # TS root config
│   ├── tsconfig.app.json              # TS app config
│   └── eslint.config.js               # ESLint config
│
├── backend/                           # ASP.NET Core 9.0 Web API
│   ├── Controllers/
│   │   └── EmailController.cs         # Email API endpoint
│   ├── Services/
│   │   ├── IEmailService.cs           # Email service interface
│   │   └── EmailService.cs            # SMTP implementation
│   ├── Models/
│   │   ├── EmailRequest.cs            # Request DTO
│   │   └── EmailSettings.cs           # Config model
│   ├── Templates/
│   │   └── ContactEmailTemplate.mjml  # Email template
│   ├── Program.cs                     # API setup and DI
│   ├── appsettings.json               # Configuration
│   ├── backend.csproj                 # .NET project file
│   └── backend.sln                    # Solution file
│
├── Dockerfile                         # Frontend Docker build
├── nginx.conf                         # Nginx config for frontend
└── .trello.env                        # Trello credentials (ignored)
```

## Important Notes

### Environment Variables
Frontend uses Vite environment variables (prefix: `VITE_`):
- `VITE_API_URL` - Backend API URL (default: `http://localhost:5000`)
- Copy `.env.example` to `.env.local` and configure as needed
- `.env.local` is gitignored for local development

### Email Configuration
- Backend email settings are in `backend/appsettings.json`
- **IMPORTANT**: Contains production SMTP credentials - do not commit changes to this file
- Current configuration uses smtp.websupport.cz on port 465 (SSL)
- Recipient email is currently set to test@alexandrplachy.cz

### CORS Configuration
- Backend allows requests from `http://localhost:5173`, `http://localhost:5177` (Vite dev), and `http://localhost:8080` (Docker)
- Backend runs on port 5000 by default
- Update CORS policy in `backend/Program.cs` when deploying to production or if using different ports

### Testing the Email Flow
1. Start backend: `cd backend && dotnet run`
   - Backend will run on http://localhost:5000
2. Start frontend: `cd frontend && npm run dev`
   - Frontend will run on http://localhost:5173 (or next available port)
3. Open frontend in browser
4. Click "Mám zájem" button on any service card
5. Fill out the modal form (all fields required except note)
6. Click "Odeslat poptávku" button
7. Watch for:
   - Button text changes to "Odesílám..." while loading
   - Success modal appears on successful submission
   - Backend logs show email sending confirmation
   - Check email inbox for received message

### Trello Integration
Project uses Trello for task management. Credentials stored in `.trello.env` (git-ignored).

### Czech Language
The application is in Czech language (cs-CZ):
- Modal text, form labels, validation messages all in Czech
- Button text: "Mám zájem" (I'm interested), "Odeslat" (Send)
- GDPR and terms content in Czech
