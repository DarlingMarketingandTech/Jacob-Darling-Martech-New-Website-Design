import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

interface PageHeaderProps {
  eyebrow?: string;
  headline: string;
  lead?: string;
  ctaLabel?: string;
  ctaHref?: string;
  breadcrumb?: string;
}

export function PageHeader({
  eyebrow,
  headline,
  lead,
  ctaLabel,
  ctaHref,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section
      className="section-padding dot-texture relative overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      {/* Crimson glow — top right */}
      <div
        className="pointer-events-none absolute -top-20 -right-16 h-[420px] w-[420px]"
        style={{
          background: "radial-gradient(circle, rgba(153,0,0,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {breadcrumb && (
          <p
            className="mb-4 text-xs tracking-[0.12em] uppercase"
            style={{ color: "var(--fg-on-dark-3)", fontFamily: "var(--font-mono)" }}
          >
            {breadcrumb}
          </p>
        )}
        {eyebrow && (
          <Eyebrow color="var(--clay)" className="mb-4">
            {eyebrow}
          </Eyebrow>
        )}
        <h1
          className="dm-display max-w-[820px]"
          style={{ color: "var(--fg-on-dark-1)" }}
        >
          {headline}
        </h1>
        {lead && (
          <p
            className="dm-lead mt-5 max-w-[560px]"
            style={{ color: "var(--fg-on-dark-2)" }}
          >
            {lead}
          </p>
        )}
        {ctaLabel && ctaHref && (
          <div className="mt-7">
            <Button variant="primary" size="md" href={ctaHref}>
              {ctaLabel}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
