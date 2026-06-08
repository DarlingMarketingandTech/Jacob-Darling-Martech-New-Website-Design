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
  headline = "Ready to find the real bottleneck?",
  lead = "Start with a diagnostic if the problem is still fuzzy. Book a call if you already know the system needs to be rebuilt.",
  primaryLabel = "Find the Growth Leak",
  primaryHref = "/tools",
  secondaryLabel = "Book a Diagnostic Call",
  secondaryHref = "/contact",
  finePrint = "No pressure. No handoffs. Just a clear next step.",
}: CTASectionProps) {
  return (
    <section
      className="section-padding dot-texture crimson-glow relative overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
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
        <h2 className="dm-display mx-auto max-w-[760px]" style={{ color: "var(--fg-on-dark-1)" }}>
          {headline}
        </h2>

        <p className="dm-lead mx-auto mt-5 max-w-[520px]" style={{ color: "var(--fg-on-dark-2)" }}>
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
          <p className="mt-6 text-xs" style={{ color: "var(--fg-on-dark-3)", fontFamily: "var(--font-mono)" }}>
            {finePrint}
          </p>
        )}
      </Container>
    </section>
  );
}
