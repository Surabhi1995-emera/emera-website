"use client";

import { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type RevealImageProps = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Enables a slow continuous zoom (Ken Burns) tied to scroll position. */
  parallax?: boolean;
  /** Positions the wrapper absolutely to fill its positioned parent, instead of sizing itself in normal flow. */
  fill?: boolean;
};

/** Architectural image reveal: a soft clip-mask opens while the photo gently scales, like a page turning. */
export default function RevealImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "100vw",
  priority = false,
  parallax = true,
  fill = false,
}: RevealImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    const ctx = gsap.context(() => {
      gsap.set(wrap, { clipPath: "inset(6% 6% 6% 6% round 2px)" });
      gsap.set(img, { scale: 1.28, opacity: 0.001 });

      gsap.to(wrap, {
        clipPath: "inset(0% 0% 0% 0% round 2px)",
        duration: 1.6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: wrap,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(img, {
        scale: parallax ? 1.08 : 1,
        opacity: 1,
        duration: 1.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrap,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });

      if (parallax) {
        gsap.to(img, {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });

    return () => ctx.revert();
  }, [parallax]);

  return (
    <div
      ref={wrapRef}
      className={cn(
        fill ? "absolute inset-0" : "relative",
        "overflow-hidden",
        className
      )}
    >
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      </div>
    </div>
  );
}
