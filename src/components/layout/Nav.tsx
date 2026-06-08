"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Diagnostics", href: "/tools" },
  { label: "Proof", href: "/proof" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-[240ms]"
      style={{
        background: "rgba(11,19,32,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: scrolled ? "1px solid rgba(245,243,238,0.14)" : "1px solid transparent",
      }}
    >
      <Container>
        <div className="flex h-[74px] items-center gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 text-decoration-none"
            aria-label="Darling Martech home"
          >
            <span className="text-sm font-black tracking-[0.14em] uppercase text-cream">
              DARLING MARTECH
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="ml-4 hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-150 hover:text-cream"
                style={{ color: "var(--fg-on-dark-2)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTA + Burger */}
          <div className="ml-auto flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex"
            >
              Book Diagnostic
            </Button>
            <button
              className="flex items-center justify-center rounded-[var(--radius-sm)] p-1.5 text-cream lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reducedMotion ? 0 : 0.2, ease: "easeOut" }}
            className="border-t lg:hidden"
            style={{ borderColor: "var(--line-on-dark)", background: "rgba(11,19,32,0.98)" }}
          >
            <Container className="py-4">
              <nav
                id="mobile-nav"
                className="flex flex-col"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="border-b py-3 text-base font-semibold transition-colors hover:text-cream"
                    style={{
                      color: "var(--fg-on-dark-1)",
                      borderColor: "var(--line-on-dark)",
                    }}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4">
                  <Button
                    href="/contact"
                    variant="primary"
                    onClick={() => setOpen(false)}
                  >
                    Book Diagnostic
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
