"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealText from "@/components/ui/RevealText";

const SLIDES = [
  { src: "/images/hero-window-forest.jpg", alt: "Living room framed by floor-to-ceiling windows overlooking greenery", caption: "Interiors" },
  { src: "/images/exterior-night-road.jpg", alt: "Émera facade viewed from the street at night", caption: "Facade" },
  { src: "/images/terrace-sunset-lounge.jpg", alt: "Private terrace lounge at sunset", caption: "Terrace" },
  { src: "/images/home-automation-panel.jpg", alt: "Home automation control panel detail", caption: "Detail" },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (d: number) => {
    setDirection(d);
    setIndex((i) => (i + d + SLIDES.length) % SLIDES.length);
  };

  const slide = SLIDES[index];

  return (
    <section id="gallery" className="bg-soft-black py-24 md:py-28">
      <Container className="max-w-2xl">
        <Eyebrow light>Gallery</Eyebrow>
        <RevealText
          as="h2"
          className="mt-8 font-serif text-4xl md:text-5xl leading-[1.15] text-ivory text-balance"
        >
          A closer look.
        </RevealText>
      </Container>

      <div className="mt-16 relative h-[62vh] min-h-[420px] md:h-[80vh] w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={slide.src}
            custom={direction}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soft-black/70 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        <Container className="absolute bottom-8 left-0 right-0 flex items-end justify-between">
          <p className="font-serif text-2xl text-ivory">{slide.caption}</p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] tracking-luxe text-ivory/60">
              {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
            <div className="flex gap-3">
              <button
                aria-label="Previous image"
                onClick={() => go(-1)}
                className="h-11 w-11 border border-ivory/30 text-ivory flex items-center justify-center transition-colors duration-300 hover:border-ivory hover:bg-ivory/10"
              >
                &#8592;
              </button>
              <button
                aria-label="Next image"
                onClick={() => go(1)}
                className="h-11 w-11 border border-ivory/30 text-ivory flex items-center justify-center transition-colors duration-300 hover:border-ivory hover:bg-ivory/10"
              >
                &#8594;
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
