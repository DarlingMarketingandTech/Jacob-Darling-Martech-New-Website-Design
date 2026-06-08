import Link from "next/link";
import { Container } from "./Container";
import { Rule } from "@/components/ui/Rule";

const footerLinks = {
  Services: [
    { label: "Foundation & Strategy", href: "/services" },
    { label: "Website & UX", href: "/websites-systems" },
    { label: "AI & Automation", href: "/ai-automation" },
    { label: "Growth & Demand", href: "/growth-strategy" },
  ],
  Resources: [
    { label: "Diagnostic Tools", href: "/tools" },
    { label: "Resources", href: "/resources" },
    { label: "Selected Proof", href: "/proof" },
  ],
  Contact: [
    { label: "Book a Call", href: "/contact" },
    { label: "About", href: "/about" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-[var(--fg-on-dark-1)]">
      <Container className="pt-16 pb-8">
        <Rule className="mb-12" light />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div
              className="mb-2 text-sm font-black tracking-[0.16em] uppercase text-cream"
            >
              DARLING MARTECH
            </div>
            <p
              className="mb-4 text-xs font-mono"
              style={{ color: "var(--fg-on-dark-3)" }}
            >
              One accountable operator.
            </p>
            <p
              className="text-sm leading-relaxed max-w-[260px]"
              style={{ color: "var(--fg-on-dark-2)" }}
            >
              Marketing systems that connect strategy, websites, CRM, automation, and demand
              generation.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <div
                className="mb-4 text-xs font-bold tracking-[0.16em] uppercase"
                style={{ color: "var(--clay)" }}
              >
                {heading}
              </div>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-150 hover:text-[var(--cream)]"
                      style={{ color: "var(--fg-on-dark-2)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col gap-2 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--line-on-dark)" }}
        >
          <p className="text-xs font-mono" style={{ color: "var(--fg-on-dark-3)" }}>
            &copy; {new Date().getFullYear()} Darling Martech. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-xs transition-colors hover:text-[var(--cream)]"
              style={{ color: "var(--fg-on-dark-3)" }}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs transition-colors hover:text-[var(--cream)]"
              style={{ color: "var(--fg-on-dark-3)" }}
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
