"use client";

import { useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";

const UNITS = [
  {
    key: "3bhk",
    label: "3 BHK",
    size: "3,041 – 3,922 sq.ft.",
    plan: "/images/plans/unit-flat-03.jpg",
  },
  {
    key: "4bhk",
    label: "4 BHK",
    size: "5,044 sq.ft.",
    plan: "/images/plans/unit-4th-floor.jpg",
  },
  {
    key: "5bhk",
    label: "5 BHK",
    size: "6,922 sq.ft.",
    plan: "/images/plans/unit-combined-op2.jpg",
  },
];

export default function ResidenceTabs() {
  const [active, setActive] = useState(0);
  const unit = UNITS[active];

  return (
    <div>
      <div className="flex items-center gap-2 border-b border-charcoal/10">
        {UNITS.map((u, i) => (
          <button
            key={u.key}
            onClick={() => setActive(i)}
            className={clsx(
              "relative px-6 py-4 text-[11px] tracking-luxe uppercase transition-colors duration-300",
              active === i ? "text-emerald" : "text-charcoal/40 hover:text-charcoal/70"
            )}
          >
            {u.label}
            {active === i && (
              <motion.span
                layoutId="unit-underline"
                className="absolute left-0 right-0 -bottom-px h-px bg-emerald"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 relative aspect-[4/3] bg-stone-light overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={unit.key}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={unit.plan}
                alt={`${unit.label} floor plan at Émera`}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-contain p-4"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={unit.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-serif text-5xl text-charcoal">{unit.label}</p>
              <p className="mt-3 text-[11px] tracking-luxe uppercase text-gold">
                {unit.size}
              </p>
              <p className="mt-6 text-charcoal/60 font-light leading-relaxed max-w-sm">
                Expansive layouts, high ceilings, and wide openings create
                homes that feel adaptable and filled with natural light —
                allowing for both shared living and private retreat.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
