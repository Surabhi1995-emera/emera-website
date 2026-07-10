"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";

gsap.registerPlugin(ScrollTrigger);

const TRAITS = [
  { value: "12", label: "Residences in total" },
  { value: "03", label: "Residences per floor" },
  { value: "01", label: "Private elevator access" },
];

export default function OnlyTwelve() {
  const numeralRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = numeralRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: 0.82, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="only-twelve"
      className="relative bg-emerald-deep text-ivory py-32 md:py-44 overflow-hidden"
    >
      <div
        ref={numeralRef}
        aria-hidden
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center"
      >
        <span className="font-serif leading-none text-[46vw] md:text-[34vw] text-ivory/[0.05]">
          12
        </span>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <Eyebrow light className="justify-center">
            Only Twelve Residences
          </Eyebrow>

          <RevealText
            as="h2"
            className="mt-8 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] max-w-3xl text-balance"
          >
            Life, beautifully composed.
          </RevealText>

          <FadeIn delay={0.2} className="mt-8 max-w-xl">
            <p className="text-ivory/65 font-light leading-relaxed text-base md:text-lg">
              With only a few residences, life at Émera is defined by
              personal space, yet shaped by the ease of a close-knit
              community — where neighbors are few, familiar, and
              like-minded. Arrival is unhurried, and the rhythm of living
              slows to a more leisurely pace.
            </p>
          </FadeIn>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 w-full max-w-3xl">
            {TRAITS.map((t, i) => (
              <FadeIn key={t.label} delay={0.1 * i} className="border-t border-ivory/15 pt-6">
                <p className="font-serif text-3xl md:text-4xl text-gold-light">
                  {t.value}
                </p>
                <p className="mt-3 text-[11px] tracking-luxe uppercase text-ivory/50">
                  {t.label}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
