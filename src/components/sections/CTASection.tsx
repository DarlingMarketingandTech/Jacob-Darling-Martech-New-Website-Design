import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  headline?: string;
  lead?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  finePrint?: string;
}

export function CTASection({
  headline = "READY TO BUILD A SYSTEM THAT COMPOUNDS?",
  lead = "Book a diagnostic call. We identify the gaps, prioritise the fixes, and build the system together — no handoffs, no surprises.",
  primaryLabel = "Book a Diagnostic Call",
  primaryHref = "/contact",
  secondaryLabel = "Run the Growth System Audit",
  secondaryHref = "/tools",
  finePrint = "No commitment required. 30-minute diagnostic. Direct access.",
}: CTASectionProps) {
  return (
    <section
      className="section-padding dot-texture crimson-glow relative overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      {/* Centered glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="h-[600px] w-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(153,0,0,0.14) 0%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10 text-center">
        <h2
          className="dm-display mx-auto max-w-[760px]"
          style={{ color: "var(--fg-on-dark-1)" }}
        >
          {headline}
        </h2>

        <p
          className="dm-lead mx-auto mt-5 max-w-[520px]"
          style={{ color: "var(--fg-on-dark-2)" }}
        >
          {lead}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" size="lg" href={primaryHref}>
            {primaryLabel}
          </Button>
          <Button variant="secondary-light" size="lg" href={secondaryHref} arrow>
            {secondaryLabel}
          </Button>
        </div>

        {finePrint && (
          <p
            className="mt-6 text-xs"
            style={{ color: "var(--fg-on-dark-3)", fontFamily: "var(--font-mono)" }}
          >
            {finePrint}
          </p>
        )}
      </Container>
    </section>
  );
}
