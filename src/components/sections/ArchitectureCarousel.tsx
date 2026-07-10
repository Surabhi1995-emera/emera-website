"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const SLIDES = [
  {
    src: "/images/driveway-palms.jpg",
    alt: "Tree-lined landscaped driveway leading to Émera",
  },
  {
    src: "/images/french-window-bougainvillea.jpg",
    alt: "French window detail framed by bougainvillea",
  },
  {
    src: "/images/pergola-entrance-dusk.jpg",
    alt: "Entrance gate and pergola at dusk",
  },
  {
    src: "/images/exterior-night-road.jpg",
    alt: "Émera facade viewed from the street at night",
  },
];

export default function ArchitectureCarousel() {
  const [index, setIndex] = useState(0);

  const go = (d: number) => setIndex((i) => (i + d + SLIDES.length) % SLIDES.length);
  const slide = SLIDES[index];

  return (
    <div className="relative aspect-[4/5] md:aspect-[16/9] w-full overflow-hidden bg-stone-light">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.src}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 md:px-8 md:py-6">
        <span className="text-[11px] tracking-luxe text-ivory bg-soft-black/40 backdrop-blur-sm px-3 py-1.5">
          {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>
        <div className="flex gap-3">
          <button
            aria-label="Previous image"
            onClick={() => go(-1)}
            className="h-11 w-11 border border-ivory/50 bg-soft-black/30 backdrop-blur-sm text-ivory flex items-center justify-center transition-colors duration-300 hover:border-ivory hover:bg-soft-black/50"
          >
            &#8592;
          </button>
          <button
            aria-label="Next image"
            onClick={() => go(1)}
            className="h-11 w-11 border border-ivory/50 bg-soft-black/30 backdrop-blur-sm text-ivory flex items-center justify-center transition-colors duration-300 hover:border-ivory hover:bg-soft-black/50"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
