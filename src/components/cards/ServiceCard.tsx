import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  forLine: string;
  tags: string[];
  href: string;
}

export function ServiceCard({ number, icon, title, forLine, tags, href }: ServiceCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-[var(--radius-lg)] border bg-white transition-all duration-[240ms] hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
      style={{ borderColor: "var(--line)" }}
    >
      {/* Crimson left bar */}
      <div
        className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-[var(--crimson)] transition-transform duration-[240ms] group-hover:scale-y-100"
        aria-hidden="true"
      />

      <div className="p-6">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <span
            className="text-xs font-bold tracking-[0.14em] uppercase"
            style={{ color: "var(--fg3)", fontFamily: "var(--font-mono)" }}
          >
            {number}
          </span>
          <div
            className="flex h-[52px] w-[52px] items-center justify-center rounded-[13px]"
            style={{ background: "var(--crimson-100)", color: "var(--crimson)" }}
          >
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3
          className="dm-h3 mt-4"
          style={{ color: "var(--charcoal)" }}
        >
          {title}
        </h3>

        {/* For line */}
        <p className="mt-2 text-sm" style={{ color: "var(--fg2)" }}>
          <strong>For:</strong> {forLine}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[var(--radius-pill)] px-2.5 py-1 text-[11px] font-bold tracking-[0.1em] uppercase"
              style={{
                background: "var(--surface-sunken)",
                color: "var(--fg2)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow link */}
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold transition-colors hover:text-[var(--burgundy)]"
          style={{ color: "var(--crimson)" }}
        >
          Learn more
          <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
