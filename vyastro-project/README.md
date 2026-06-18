# VyAstro

**Vastu, Yantra & Astrology — AI-Powered Vedic Guidance**

The world's first intelligent platform combining Vastu, Yantra & Astrology with modern AI.

---

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**
- **Vercel** deployment

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/                    # Next.js 15 App Router pages
    astrology/
    vastu/
    yantra-store/
      [id]/               # Dynamic Yantra detail pages
    ai-guide/
    about/
    contact/
    privacy/
    terms/
    layout.tsx
    page.tsx
    sitemap.ts
    robots.ts
    not-found.tsx
  components/
    layout/               # Navbar, Footer, LanguageSwitcher
    sections/             # Full-page sections for home
    home/                 # Home section re-exports
    yantra/               # Yantra store components
    ui/                   # Reusable UI primitives
  lib/
    i18n.ts               # English + Hinglish translations
    lang-context.tsx      # Language context provider
    yantras.ts            # Yantra data & helpers
public/
  site.webmanifest
```

## Deploy to Vercel

```bash
npx vercel deploy
```

Or connect the repository in the Vercel dashboard — zero configuration required.

## Features

- 🌟 Full Astrology, Vastu, Yantra Store, AI Guide pages
- 🛒 Yantra catalog with search, filter, and detail pages
- 🤖 Interactive AI Guide chat interface
- 🌐 English + Hinglish language switcher
- 📱 Mobile-first responsive design
- 🎨 Dark cosmic design with glassmorphism
- 🔍 Production SEO: metadata, OpenGraph, structured data, sitemap, robots
- ⚡ Vercel-ready with security headers

---

*Ancient wisdom. Modern intelligence.*
