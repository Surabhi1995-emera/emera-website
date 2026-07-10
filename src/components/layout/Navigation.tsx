"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import Container from "@/components/ui/Container";

const LINKS = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Architecture", href: "#architecture" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 80);
      if (y > lastY && y > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !menuOpen ? -110 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
          solid || menuOpen
            ? "bg-ivory/90 backdrop-blur-md border-b border-charcoal/10"
            : "bg-transparent"
        )}
      >
        <Container className="flex items-center justify-between py-6">
          <Link
            href="#top"
            className={clsx(
              "font-serif text-xl tracking-[0.3em] uppercase transition-colors duration-500",
              solid || menuOpen ? "text-emerald" : "text-ivory"
            )}
          >
            Émera
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-[11px] tracking-luxe uppercase transition-colors duration-300",
                  solid ? "text-charcoal/70 hover:text-emerald" : "text-ivory/80 hover:text-ivory"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className={clsx(
                "text-[11px] tracking-luxe uppercase border-b pb-1 transition-colors duration-300",
                solid ? "text-emerald border-emerald" : "text-ivory border-ivory/60"
              )}
            >
              Enquire
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden flex flex-col gap-[6px] w-8 h-8 items-end justify-center"
          >
            <span
              className={clsx(
                "block h-px transition-all duration-300",
                menuOpen ? "w-6 rotate-45 translate-y-[3.5px]" : "w-6",
                solid || menuOpen ? "bg-emerald" : "bg-ivory"
              )}
            />
            <span
              className={clsx(
                "block h-px transition-all duration-300",
                menuOpen ? "w-6 -rotate-45 -translate-y-[3.5px]" : "w-4",
                solid || menuOpen ? "bg-emerald" : "bg-ivory"
              )}
            />
          </button>
        </Container>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-ivory flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-6">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-4xl text-emerald hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
