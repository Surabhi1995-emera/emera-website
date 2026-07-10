"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import MaskLines from "@/components/ui/MaskLines";

const IMAGES = [
  {
    src: "/images/interior-lobby-night.jpg",
    alt: "The indoor games room at Émera, lit by a sculptural chandelier",
    tall: true,
  },
  {
    src: "/images/exterior-twilight-tall.jpg",
    alt: "The residence facade rising against a twilight sky",
    tall: true,
  },
  {
    src: "/images/sanctuary-window-flowers.jpg",
    alt: "A Parisian-style window framed by bougainvillea",
    tall: false,
  },
  {
    src: "/images/exterior-twilight-wide.jpg",
    alt: "Émera at dusk, warmly lit against the Chennai skyline",
    tall: false,
  },
  {
    src: "/images/interior-dining-night.jpg",
    alt: "An intimate dining room interior in the evening",
    tall: false,
  },
  {
    src: "/images/amenities-pool-deck-portrait.jpg",
    alt: "Poolside seating at dusk with lantern light",
    tall: true,
  },
  {
    src: "/images/amenities-pool-pergola.jpg",
    alt: "A pergola-covered terrace glowing at sunset",
    tall: false,
  },
  {
    src: "/images/exterior-garden-door.jpg",
    alt: "A garden entrance glowing at dusk",
    tall: false,
  },
  {
    src: "/images/gallery-rose-window.jpg",
    alt: "A weathered door framed by climbing roses",
    tall: true,
  },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i + IMAGES.length - 1) % IMAGES.length)),
    []
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % IMAGES.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <section id="gallery" className="bg-ivory">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-28 md:pt-40 pb-16 md:pb-20">
        <Reveal as="span" className="eyebrow block text-gold-dark text-center">
          Gallery
        </Reveal>
        <MaskLines
          as="h2"
          lines={["A Visual Journey."]}
          className="mt-6 text-center"
          lineClassName="font-serif font-light text-charcoal text-[9vw] sm:text-6xl md:text-[4.4vw] leading-[1.1]"
        />
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pb-24 md:pb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[26vw] md:auto-rows-[22vw]">
          {IMAGES.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 3) * 0.08}
              className={img.tall ? "row-span-2" : "row-span-1"}
            >
              <button
                onClick={() => setActive(i)}
                className="group relative block h-full w-full overflow-hidden bg-charcoal/5"
                aria-label={`Open image: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-soft-black/95 backdrop-blur-sm flex items-center justify-center px-4"
          >
            <button
              onClick={close}
              aria-label="Close gallery"
              className="absolute top-6 right-6 md:top-8 md:right-10 text-ivory/70 hover:text-ivory eyebrow z-10"
            >
              Close
            </button>

            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 md:left-8 text-ivory/60 hover:text-ivory text-3xl font-serif z-10 px-3 py-6"
            >
              &#8249;
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 md:right-8 text-ivory/60 hover:text-ivory text-3xl font-serif z-10 px-3 py-6"
            >
              &#8250;
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl h-[70vh] md:h-[80vh]"
            >
              <Image
                src={IMAGES[active].src}
                alt={IMAGES[active].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
