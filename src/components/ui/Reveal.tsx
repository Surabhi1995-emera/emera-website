"use client";

import { createElement, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  y?: number;
  duration?: number;
  start?: string;
};

/** Fades and lifts content into place as it enters the viewport. */
export default function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  y = 40,
  duration = 1.1,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 0, y });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, [delay, y, duration, start]);

  // `as` is always a host element string (never a custom component), so
  // forwarding the ref here is safe despite the generic dynamic-tag shape.
  // eslint-disable-next-line react-hooks/refs
  return createElement(as, { ref, className }, children);
}
