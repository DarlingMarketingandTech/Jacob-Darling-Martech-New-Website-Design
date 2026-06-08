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
      className="section-padding dot-texture crimson-glow relative overflow-hidden bg-navy"
    >

      <Container className="relative z-10">
        {breadcrumb && (
          <p
            className="mb-4 text-xs tracking-[0.12em] uppercase font-mono"
            style={{ color: "var(--fg-on-dark-3)" }}
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
