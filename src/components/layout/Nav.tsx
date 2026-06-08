"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "AI + Automation", href: "/ai-automation" },
  { label: "Growth", href: "/growth-strategy" },
  { label: "Websites", href: "/websites-systems" },
  { label: "Tools", href: "/tools" },
  { label: "Proof", href: "/proof" },
  { label: "About", href: "/about" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            <span
              className="text-sm font-black tracking-[0.14em] uppercase"
              style={{ color: "var(--cream)", fontFamily: "var(--font-sans)" }}
            >
              DARLING MARTECH
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="ml-4 hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-150 hover:text-[var(--cream)]"
                style={{ color: "var(--fg-on-dark-2)", fontFamily: "var(--font-sans)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTA + Burger */}
          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-[var(--radius-md)] px-5 py-[11px] text-sm font-bold text-white transition-colors duration-[140ms] hover:bg-[var(--burgundy)] lg:block"
              style={{ background: "var(--crimson)", fontFamily: "var(--font-sans)" }}
            >
              Book a Call
            </Link>
            <button
              className="flex items-center justify-center rounded-[var(--radius-sm)] p-1.5 text-[var(--cream)] lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
            >
              {open ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div
          className="border-t lg:hidden"
          style={{ borderColor: "var(--line-on-dark)", background: "rgba(11,19,32,0.98)" }}
        >
          <Container className="py-4">
            <nav
              className="flex flex-col"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b py-3 text-base font-semibold transition-colors hover:text-[var(--cream)]"
                  style={{
                    color: "var(--fg-on-dark-1)",
                    borderColor: "var(--line-on-dark)",
                    fontFamily: "var(--font-sans)",
                  }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex rounded-[var(--radius-md)] px-6 py-3 text-sm font-bold text-white"
                  style={{ background: "var(--crimson)" }}
                  onClick={() => setOpen(false)}
                >
                  Book a Call
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
