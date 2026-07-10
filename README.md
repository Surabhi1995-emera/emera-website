# Émera by SPR

A quiet-luxury marketing website for Émera by SPR — twelve residences on Nelson Manickam Road, Chennai, inspired by 19th-century Parisian architecture.

Built from the project brochure as the sole brand guideline: every color, typeface pairing, and line of copy is drawn from it, translated into an immersive, editorial digital experience.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling
- **GSAP** + **ScrollTrigger** for scroll-driven reveals, pinning, and parallax
- **Lenis** for smooth scrolling
- **Framer Motion** for the gallery lightbox

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/                 # routes, layout, metadata, API route for enquiries
  components/
    layout/             # header, footer, smooth-scroll provider
    sections/           # one component per page section (Hero, Philosophy, ...)
    ui/                 # reusable scroll-reveal primitives (Reveal, RevealImage, MaskLines)
  lib/                  # small shared utilities
public/images/          # brand photography, extracted and optimized from the brochure
```

## Notes

- The enquiry form posts to `/api/enquiry`, which currently validates and logs submissions server-side. Wire it up to an email/CRM provider before going live.
- Animations respect `prefers-reduced-motion` — Lenis is skipped and reveals still play via GSAP without the smooth-scroll layer.
