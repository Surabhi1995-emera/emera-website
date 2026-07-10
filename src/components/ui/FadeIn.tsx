"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clsx } from "clsx";

gsap.registerPlugin(ScrollTrigger);

export default function FadeIn({
  children,
  className,
  y = 32,
  delay = 0,
  duration = 1.1,
  start = "top 85%",
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.set(el, { y, opacity: 0 });
      ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () => {
          gsap.to(el, {
            y: 0,
            opacity: 1,
            duration,
            delay,
            ease: "power3.out",
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, [y, delay, duration, start]);

  return (
    <div ref={ref} className={clsx("will-change-transform", className)}>
      {children}
    </div>
  );
}
