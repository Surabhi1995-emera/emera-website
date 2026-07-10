"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clsx } from "clsx";

gsap.registerPlugin(ScrollTrigger);

export default function FadeImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "100vw",
  priority = false,
  parallax = true,
  fill = true,
  width,
  height,
  absolute = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  absolute?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const imgWrap = imgWrapRef.current;
    if (!container || !imgWrap) return;

    const ctx = gsap.context(() => {
      gsap.set(imgWrap, { scale: 1.18, opacity: 0.4 });

      ScrollTrigger.create({
        trigger: container,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.to(imgWrap, {
            scale: parallax ? 1.06 : 1,
            opacity: 1,
            duration: 1.6,
            ease: "power3.out",
          });
        },
      });

      if (parallax) {
        gsap.to(imgWrap, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, [parallax]);

  return (
    <div
      ref={containerRef}
      className={clsx(absolute ? "absolute inset-0" : "relative", "overflow-hidden", className)}
    >
      <div ref={imgWrapRef} className="absolute inset-0 will-change-transform">
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={clsx("object-cover", imgClassName)}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            priority={priority}
            className={clsx("object-cover w-full h-full", imgClassName)}
          />
        )}
      </div>
    </div>
  );
}
