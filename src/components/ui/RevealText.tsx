"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealTag = "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4";

export default function RevealText({
  children,
  as: Tag = "div",
  className,
  splitBy = "word",
  delay = 0,
  start = "top 85%",
}: {
  children: string;
  as?: RevealTag;
  className?: string;
  splitBy?: "word" | "line";
  delay?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll("[data-reveal-unit]");

    const ctx = gsap.context(() => {
      gsap.set(targets, { yPercent: 110, opacity: 0 });

      ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () => {
          gsap.to(targets, {
            yPercent: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power4.out",
            stagger: splitBy === "word" ? 0.035 : 0.09,
            delay,
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, splitBy, start]);

  const units = splitBy === "line" ? children.split("\n") : children.split(" ");

  return (
    <Tag ref={ref as never} className={className}>
      {units.map((unit, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top"
          style={splitBy === "line" ? { display: "block" } : undefined}
        >
          <span data-reveal-unit className="inline-block will-change-transform">
            {unit}
            {splitBy === "word" && i < units.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
