"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "12", label: "Residences in Total" },
  { value: "3", label: "Residences per Floor" },
  { value: "1", label: "Private Elevator, Yours Alone" },
];

export default function OnlyTwelve() {
  const pinRef = useRef<HTMLDivElement>(null);
  const numeralRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.set(detailRef.current, { opacity: 0, y: 40 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: "+=140%",
            scrub: 1,
            pin: true,
          },
        });

        tl.to(numeralRef.current, {
          scale: 0.42,
          y: "-18vh",
          ease: "power2.inOut",
        })
          .to(introRef.current, { opacity: 0, ease: "power1.out" }, "<")
          .to(
            detailRef.current,
            { opacity: 1, y: 0, ease: "power2.out" },
            "<0.2"
          );
      });
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="residences-count" className="bg-soft-black text-ivory">
      <div
        ref={pinRef}
        className="relative w-full overflow-hidden md:h-[100svh] h-auto py-24 md:py-0"
      >
        <div
          ref={introRef}
          className="relative md:absolute md:top-20 inset-x-0 flex flex-col items-center text-center px-6 z-10 mb-10 md:mb-0"
        >
          <span className="eyebrow text-gold-light">Exclusivity by Design</span>
        </div>

        <div className="relative md:absolute md:inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <div
              ref={numeralRef}
              className="font-serif font-light leading-none text-[46vw] md:text-[30vw] select-none"
            >
              12
            </div>
            <span className="hidden md:block absolute text-xs tracking-[0.4em] uppercase text-ivory/60 -top-2 left-1/2 -translate-x-1/2">
              Only
            </span>
            <span className="hidden md:block absolute text-xs tracking-[0.4em] uppercase text-ivory/60 -bottom-2 left-1/2 -translate-x-1/2">
              Residences
            </span>
          </div>
        </div>

        <div
          ref={detailRef}
          className="relative md:absolute inset-x-0 md:bottom-0 md:pb-16 px-6 z-10 mt-10 md:mt-0"
        >
          <p className="max-w-xl mx-auto text-center text-ivory/75 font-light text-sm md:text-base leading-relaxed mb-10 md:mb-14">
            With only a few residences, life at Émera is defined by personal
            space, yet shaped by the ease of a close-knit community — where
            neighbors are few, familiar, and like-minded.
          </p>
          <div className="grid grid-cols-3 max-w-2xl mx-auto divide-x divide-ivory/15">
            {STATS.map((s) => (
              <div key={s.label} className="text-center px-2 md:px-4">
                <div className="font-serif font-light text-2xl md:text-4xl text-gold-light">
                  {s.value}
                </div>
                <div className="mt-2 text-[9px] md:text-xs tracking-[0.12em] md:tracking-[0.15em] uppercase text-ivory/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
