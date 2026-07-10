"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [pinOpen, setPinOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        imgRef.current,
        { scale: 1.25, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.4, ease: "power3.out" }
      ).fromTo(
        contentRef.current?.querySelectorAll("[data-hero-item]") ?? [],
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=1.6"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-emerald-deep">
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/exterior-hero-dusk.jpg"
          alt="Émera by SPR — residence facade at dusk, framed by palms"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soft-black/80 via-soft-black/20 to-soft-black/40" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col justify-end pb-20 md:pb-24"
      >
        <Container>
          <p
            data-hero-item
            className="text-[11px] tracking-luxe uppercase text-gold-light mb-6"
          >
            SPR Luxury Collection
          </p>

          <h1
            data-hero-item
            className="font-serif text-ivory text-balance leading-[1.05] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-4xl"
          >
            A Gem of<br /> Quiet Luxury.
          </h1>

          <p
            data-hero-item
            className="mt-8 max-w-md text-ivory/75 text-sm md:text-base font-light leading-relaxed"
          >
            Twelve residences set quietly apart in the heart of Chennai,
            shaped by the enduring grace of 19th-century Parisian
            architecture.
          </p>

          <div data-hero-item className="mt-10 flex items-center gap-6">
            <Button href="#philosophy" variant="primary">
              Discover Émera
            </Button>
            <Button href="#contact" variant="outline-light">
              Enquire Now
            </Button>
          </div>
        </Container>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-3 text-ivory/60">
        <span className="text-[10px] tracking-luxe uppercase">Scroll</span>
        <span className="h-10 w-px bg-ivory/40 overflow-hidden">
          <span className="block h-full w-full bg-ivory animate-[scrollcue_2.2s_ease-in-out_infinite]" />
        </span>
      </div>

      <div
        data-hero-item
        className="absolute bottom-8 right-6 md:right-12 z-10 flex flex-col items-end gap-3"
      >
        <AnimatePresence>
          {pinOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-soft-black/60 backdrop-blur-sm px-4 py-3 text-right"
            >
              <p className="text-[10px] tracking-luxe uppercase text-gold-light">
                Location
              </p>
              <p className="mt-1 text-sm text-ivory font-light">
                Nelson Manickam Road, Chennai
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setPinOpen((o) => !o)}
          aria-label="Show location"
          aria-expanded={pinOpen}
          className="flex items-center gap-2 text-ivory/80 hover:text-ivory transition-colors duration-300"
        >
          <span className="text-[11px] tracking-luxe uppercase hidden md:inline">
            Nelson Manickam Road
          </span>
          <span className="relative flex h-3 w-3">
            <span
              className={`absolute inline-flex h-full w-full rounded-full bg-gold-light/60 ${
                pinOpen ? "animate-ping" : ""
              }`}
            />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-gold-light ring-4 ring-gold-light/25" />
          </span>
        </button>
      </div>

      <style>{`
        @keyframes scrollcue {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
