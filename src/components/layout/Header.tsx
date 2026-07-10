"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Architecture", href: "#architecture" },
  { label: "Residences", href: "#residences" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Gallery", href: "#gallery" },
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 40);
        if (y > lastY.current && y > 160) {
          setHidden(true);
        } else {
          setHidden(false);
        }
        lastY.current = y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div
        className={cn(
          "transition-colors duration-500",
          scrolled || menuOpen
            ? "bg-warmwhite/90 backdrop-blur-md border-b border-charcoal/10"
            : "bg-gradient-to-b from-black/40 to-transparent"
        )}
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">
          <Link
            href="#hero"
            className={cn(
              "font-serif text-lg md:text-xl tracking-[0.28em] transition-colors duration-500",
              scrolled || menuOpen ? "text-charcoal" : "text-ivory"
            )}
          >
            ÉMERA
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "eyebrow transition-colors duration-500 hover:opacity-60",
                  scrolled ? "text-charcoal" : "text-ivory"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className={cn(
              "hidden lg:inline-flex items-center border px-6 py-3 eyebrow transition-all duration-500",
              scrolled
                ? "border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory"
                : "border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal"
            )}
          >
            Enquire
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              "lg:hidden flex flex-col gap-[6px] w-8",
              scrolled || menuOpen ? "text-charcoal" : "text-ivory"
            )}
          >
            <span
              className={cn(
                "h-px w-full bg-current transition-transform duration-300",
                menuOpen && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-current transition-transform duration-300",
                menuOpen && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden bg-warmwhite transition-[max-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          menuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="eyebrow text-charcoal"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="eyebrow text-gold-dark">
            Enquire
          </a>
        </nav>
      </div>
    </header>
  );
}
