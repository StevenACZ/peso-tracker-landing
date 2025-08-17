# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static landing page for **PesoTracker** - a macOS weight tracking application built with SwiftUI. The landing page is built with Astro and deployed as a static site.

**Key Details:**
- **Framework:** Astro 5.x with TypeScript
- **Styling:** Tailwind CSS with typography plugin
- **Target URL:** `https://stevenacz.com/peso-tracker/` (deployed as subpath)
- **Base Path:** `/peso-tracker/` (configured in astro.config.mjs)
- **Main App:** Separate macOS SwiftUI application (not in this repo)

## Development Commands

```bash
# Install dependencies
npm install

# Development server (localhost:4321/peso-tracker/)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
npm run lint:fix
```

## Architecture & Structure

### Core Configuration
- **astro.config.mjs**: Base path `/peso-tracker/`, site URL, Tailwind integration
- **tailwind.config.mjs**: Typography plugin, content scanning for all Astro/TS files
- **eslint.config.mjs**: Astro + TypeScript ESLint configuration

### Component Architecture
**Page Structure (src/pages/index.astro):**
1. Hero - Main banner with download CTA
2. Features - App feature highlights  
3. Screenshots - Carousel of app screenshots
4. SystemRequirements - macOS requirements
5. Installation - Download/install guide
6. Download - Final CTA section
7. Footer - Developer info and links

**Layout System:**
- **src/layouts/Layout.astro**: Base layout with comprehensive SEO meta tags, favicons, schema.org JSON-LD
- **Asset Helper**: `asset()` function handles base path for all static assets

### Asset Management
- **Favicons**: `/public/favicons/` - Complete favicon set for all platforms
- **Screenshots**: `/public/screenshots/` - WebP optimized app screenshots  
- **Icons**: `/public/icons/` - Shared icon assets
- **Base Path Handling**: All assets use `import.meta.env.BASE_URL` for proper subpath resolution

### SEO & Meta
- Schema.org JSON-LD for SoftwareApplication
- OpenGraph and Twitter Card meta tags
- Canonical URLs pointing to production domain
- Spanish language optimization (`lang="es"`)

## Deployment

### VPS Deployment (DEPLOYMENT.md)
- Manual nginx configuration serving static files
- Build → copy to `/var/www/html/peso-tracker-landing/`
- Complex nginx config with asset optimization

**Update Process:**
```bash
git pull
npm run build
# Then follow deployment-specific steps from DEPLOYMENT.md
```

## Development Notes

### Asset Path Pattern
All static assets must use the base path helper:
```astro
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
// Usage: href={asset('/favicons/favicon.ico')}
```

### Screenshot Component
Screenshots are defined as data objects with metadata (title, description, filename) and rendered in a responsive carousel.

### External Links
- Download links point to GitHub releases: `https://github.com/StevenACZ/peso-tracker/releases/tag/v1.2.4`
- All external links use proper `rel="nofollow noopener noreferrer"`

### Styling Approach
- Tailwind utility classes throughout
- Responsive design patterns (lg:, md:, sm: breakpoints)
- Green color scheme (`green-600`, `emerald-50`) matching app branding
- Professional gradients and shadows for modern UI

## Testing Production Build

Always test with `npm run preview` before deployment since the base path configuration only works correctly in production builds, not in development mode.