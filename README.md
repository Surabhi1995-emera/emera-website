# Émera by SPR — Website

A luxury real estate website for Émera by SPR, a private collection of twelve
residences on Nelson Manickam Road, Chennai, inspired by 19th-century
Parisian architecture.

Built with Next.js (App Router), TypeScript, and Tailwind CSS, with GSAP /
ScrollTrigger and Lenis for cinematic scroll-driven storytelling.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS 4** for the design system (ivory / stone / charcoal / emerald / champagne gold palette, Cormorant Garamond + Jost typography)
- **GSAP + ScrollTrigger** for scroll-triggered reveals and parallax
- **Lenis** for smooth scrolling
- **Framer Motion** for navigation and micro-interactions

## Structure

```
src/
  app/                Root layout, global styles, page assembly
  components/
    layout/            Navigation, Footer
    providers/          Lenis + GSAP smooth-scroll provider
    sections/            Hero, Philosophy, Architecture, Only Twelve,
                         Residences, Amenities, Sustainability, Location,
                         Gallery, Legacy, Contact
    ui/                 Reusable primitives (Container, Eyebrow, Button,
                         RevealText, FadeIn, FadeImage)
public/images/         Photography and floor plans sourced from the
                       official Émera by SPR brochure
```

## Build

```bash
npm run build
npm run start
```
