# Skyhit Media — Next.js Project

## Project Overview
Next.js 16 App Router migration of the Vite+React Skyhit Media website.
- **Goal:** PageSpeed 95+ on all 18 pages (mobile + desktop)
- **Deploy target:** DigitalOcean App Platform
- **Current status:** Phase 3 complete — all 23 routes building cleanly

## Architecture

### Stack
- **Framework:** Next.js 16.2 App Router (static site generation, all pages `○ Static`)
- **Styling:** Tailwind CSS v4 via `@import "tailwindcss"` in `src/app/globals.css`
- **Icons:** `lucide-react` only — do NOT add react-icons, @iconify/react
- **Forms:** `@emailjs/browser` — keys in `.env.local`
- **Animations:** `framer-motion` — always `dynamic()` import with `ssr: false`
- **Carousels:** `swiper` only — do NOT add react-slick or slick-carousel

### Directory Layout
```
src/
  app/                        # 23 App Router routes (all static)
    layout.tsx                # Root layout: fonts, GA, GTM, Header, Footer
    page.tsx                  # Homepage
    [route]/page.tsx          # All other pages
  components/
    Header.tsx                # "use client" — mobile menu state
    Footer.tsx                # Server component — inline SVG social icons
    LinkedInFeed.tsx          # "use client" — lazy-loads LinkedIn script
    Services/                 # HeroSection, AboutSection, ReviewSection, WhyChooseUsSection, ClientLogos
    AdPage/                   # 16 components for the ad landing page
    InfluencerSignup/         # InfluencerSignup form
    [28 shared components]    # See components list below
  utils/
    isBrowser.ts              # scrollToTop, isBrowser helpers
  data/
    industries.ts             # 11 industry objects with lucide-react icons
  hooks/
    useWindowSize.tsx
```

### Environment Variables (`.env.local`)
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_i2h82eb
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_4crdzlz
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=hjLXq5MC66R977QFn
NEXT_PUBLIC_EMAILJS_HERO_TEMPLATE_ID=template_v4fu3u7   # HeroSection form only
NEXT_PUBLIC_GA_ID=G-1LN33RP1RK
```

## Key Conventions

### "use client" rule
Add `"use client"` ONLY when the component uses:
- `useState`, `useEffect`, `useRef`, `useCallback`, `useMemo`
- Event handlers (`onClick`, `onChange`, etc.)
- Browser APIs (`window`, `document`, `localStorage`)
- `framer-motion`, `@emailjs/browser`, `swiper`, `requestAnimationFrame`
- `useRouter`, `usePathname` from `next/navigation`

Server Components (no directive needed): static layout, Footer, Banner, ServiceCard, ArrowHeader.

### Images
- Always use `next/image` — never bare `<img>` tags
- External URLs from `skyhitmedia.com`: add `unoptimized` prop
- LCP / above-fold images: add `priority` prop
- External Pexels URLs: add `unoptimized` prop
- Always include `width`, `height`, `alt`

### Icons
Only `lucide-react`. Social icons (Facebook, Youtube, LinkedIn, Instagram) do NOT exist in this lucide-react version — use the inline SVG components already defined in `Footer.tsx` and `AdPage/ThankYou.tsx` as reference.

### Routing
- `next/link` for all internal links — never `<a href>` for internal routes
- `useRouter()` from `next/navigation` — never from `react-router-dom`
- `usePathname()` from `next/navigation` for active route detection

### Dynamic imports (performance)
Below-fold components must use `dynamic()`:
```tsx
const HeavyComponent = dynamic(() => import("@/components/HeavyComponent"));
// For client-only (no SSR needed):
const ClientOnly = dynamic(() => import("@/components/ClientOnly"), { ssr: false });
```
Above-fold components (Hero, TrustedSection, HeroSection, Banner) import directly.

### Metadata (SEO)
Every page exports a `metadata` object — never use `react-helmet-async`:
```tsx
export const metadata: Metadata = {
  title: "...",
  description: "...",
  openGraph: { title: "...", description: "...", images: ["..."] },
  alternates: { canonical: "https://skyhitmedia.com/..." },
};
```

## Performance Rules (from .claude/performance-rules.md)
Hard gates — must pass before DNS cutover:
- LCP < 2.5s (PR-009)
- INP < 200ms (PR-009)
- CLS < 0.1 (PR-009)
- Initial JS bundle < 200KB gzipped (PR-009)
- Images: WebP/AVIF via `next/image` formats config (PR-012)
- Fonts: `next/font/google` only — no Google Fonts `<link>` tags (PR-012)
- Scripts: GA/GTM via `next/script strategy="lazyOnload"` (PR-012)
- Cache-Control: `public, max-age=300, stale-while-revalidate=600` on all pages (PR-004)

## Session Compaction Guide (token-budget.md)
This is a multi-session project. When context is getting large:
1. Write checkpoint to `.claude/state/pre-compact-checkpoint.json` before compacting
2. After compaction, read `CLAUDE.md` + checkpoint to resume — do NOT re-read all component files
3. Use `git log --oneline -10` to see recent work instead of re-reading files
4. Model tiers: Haiku for boilerplate, Sonnet for logic, Opus for architecture only

### Checkpoint format
```json
{
  "phase": "current phase name",
  "completedWork": ["..."],
  "pendingWork": ["..."],
  "criticalDecisions": ["..."],
  "filesTouched": ["..."],
  "openQuestions": ["..."],
  "timestamp": "ISO date"
}
```

## Current Migration Status

### Completed
- [x] Phase 0: Baseline scores documented (PageSpeed 53–81)
- [x] Phase 1: Project bootstrapped (`create-next-app`, assets copied, env vars set)
- [x] Phase 2: All 50 components migrated (shared + AdPage + Services + InfluencerSignup)
- [x] Phase 3: All 23 routes created with correct metadata and props
- [x] Build: 0 errors, all 23 routes statically generated

### Pending
- [ ] Phase 4: Performance optimizations (bundle analysis, RAF fix, CSS animations)
- [ ] Phase 5: DigitalOcean deployment + Lighthouse validation against baseline

## Common Commands
```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build (must pass before any deploy)
npm run lint     # ESLint check
```

## Do Not
- Do not add `react-router-dom`, `vite-react-ssg`, `react-helmet-async`
- Do not use bare `<img>` tags — always `next/image`
- Do not hardcode EmailJS keys — use `process.env.NEXT_PUBLIC_*`
- Do not add `react-icons` or `@iconify/react` — use `lucide-react` or inline SVG
- Do not add `react-slick` or `slick-carousel` — use `swiper`
- Do not use `import.meta.env` — use `process.env`
