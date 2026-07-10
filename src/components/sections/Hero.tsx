"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        imgRef.current,
        { scale: 1.18, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.2, ease: "power4.out" }
      )
        .fromTo(
          "[data-hero-eyebrow]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 1 },
          "-=1.4"
        )
        .fromTo(
          "[data-hero-line]",
          { yPercent: 110 },
          { yPercent: 0, duration: 1.3, stagger: 0.12, ease: "power4.out" },
          "-=0.8"
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.7"
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.7"
        )
        .fromTo(
          "[data-hero-scroll]",
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          "-=0.5"
        );

      gsap.to(imgRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-[100svh] w-full overflow-hidden bg-soft-black"
    >
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero-living-room.jpg"
          alt="A quiet living room at Émera opens onto a lush green garden through floor-to-ceiling glass"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-6 pb-20 md:pb-28">
        <span
          data-hero-eyebrow
          className="eyebrow text-gold-light mb-6 opacity-0"
        >
          SPR Luxury Collection
        </span>

        <h1 className="font-serif text-ivory text-balance">
          <span className="overflow-hidden block">
            <span
              data-hero-line
              className="block will-change-transform text-[13vw] sm:text-[9vw] md:text-[6.4vw] leading-[1.02] font-light tracking-tight"
            >
              A Gem of Quiet
            </span>
          </span>
          <span className="overflow-hidden block">
            <span
              data-hero-line
              className="block will-change-transform text-[13vw] sm:text-[9vw] md:text-[6.4vw] leading-[1.02] font-light italic tracking-tight"
            >
              Luxury.
            </span>
          </span>
        </h1>

        <p
          data-hero-sub
          className="opacity-0 mt-8 max-w-md text-ivory/80 font-light text-sm md:text-base leading-relaxed"
        >
          A rare expression of serenity in the heart of Chennai. Only twelve
          residences, quietly composed.
        </p>

        <a
          data-hero-cta
          href="#philosophy"
          className="opacity-0 mt-10 inline-flex items-center gap-3 border border-ivory/60 text-ivory px-8 py-4 eyebrow transition-all duration-500 hover:bg-ivory hover:text-charcoal"
        >
          Discover Émera
        </a>
      </div>

      <div
        data-hero-scroll
        className="opacity-0 absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-ivory/70 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <span className="relative h-10 w-px bg-ivory/30 overflow-hidden">
          <span className="absolute top-0 left-0 w-full h-1/2 bg-ivory animate-[scrolldash_2s_ease-in-out_infinite]" />
        </span>
      </div>

      <style>{`
        @keyframes scrolldash {
          0% { transform: translateY(-100%); }
          60% { transform: translateY(120%); }
          100% { transform: translateY(120%); }
        }
      `}</style>
    </section>
  );
}
