"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type MaskLinesProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  start?: string;
  stagger?: number;
};

/** Each line rises from behind a mask, like a title page revealing itself. */
export default function MaskLines({
  lines,
  className,
  lineClassName,
  as = "h2",
  delay = 0,
  start = "top 85%",
  stagger = 0.12,
}: MaskLinesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll("[data-mask-line]");

    const ctx = gsap.context(() => {
      gsap.set(targets, { yPercent: 110 });
      gsap.to(targets, {
        yPercent: 0,
        duration: 1.15,
        delay,
        stagger,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, [delay, start, stagger]);

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <Tag key={i} className={cn("overflow-hidden block", lineClassName)}>
          <span data-mask-line className="block will-change-transform">
            {line}
          </span>
        </Tag>
      ))}
    </div>
  );
}
