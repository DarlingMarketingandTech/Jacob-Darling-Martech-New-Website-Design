import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { globalCtas } from "@/content/ctas";
import { wins } from "@/content/proof";

export function ProofSection() {
  return (
    <section className="section-padding bg-navy">
      <Container>
        <SectionHeader
          eyebrow="SELECTED PROOF"
          eyebrowColor="var(--clay)"
          headline="Proof that connected systems work harder."
          lead="Every project starts with a bottleneck. The work is not more activity for its own sake. It is a clearer path from interest to action, follow-up, measurement, and growth."
          dark
        />

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {wins.map((w) => (
            <div
              key={w.label}
              className="rounded-[var(--radius-lg)] border p-6"
              style={{
                background: "var(--surface-dark)",
                borderColor: "var(--line-on-dark)",
                boxShadow: "var(--shadow-dark)",
              }}
            >
              <w.Icon size={24} strokeWidth={1.8} style={{ color: "var(--clay)" }} aria-hidden="true" />
              <div
                className="mt-4 text-lg font-bold leading-snug"
                style={{ color: "var(--fg-on-dark-1)" }}
              >
                {w.label}
              </div>
              <div className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-on-dark-2)" }}>
                {w.detail}
              </div>
              <div
                className="mt-4 border-t pt-3 text-xs font-bold tracking-[0.12em] uppercase font-mono"
                style={{
                  borderColor: "var(--line-on-dark)",
                  color: "var(--fg-on-dark-3)",
                }}
              >
                {w.who}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed" style={{ color: "var(--fg-on-dark-3)" }}>
          Outcomes are real. Full case studies — with named context and verified metrics — are
          published as client permission is granted.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button variant="primary" href={globalCtas.seeProofInAction.href}>
            {globalCtas.seeProofInAction.label}
          </Button>
          <Button variant="secondary-light" href={globalCtas.findGrowthLeak.href}>
            {globalCtas.findGrowthLeak.label}
          </Button>
        </div>

        <div className="mt-14 flex gap-6 border-t pt-10" style={{ borderColor: "var(--line-on-dark)" }}>
          <div
            className="hidden w-[3px] self-stretch rounded-sm sm:block"
            style={{ background: "var(--crimson)" }}
            aria-hidden="true"
          />
          <div>
            <blockquote className="dm-quote max-w-[820px]" style={{ color: "var(--fg-on-dark-1)" }}>
              Clarity. Connection. Compounding.
            </blockquote>
            <div
              className="mt-4 text-xs font-bold tracking-[0.16em] uppercase font-mono"
              style={{ color: "var(--fg-on-dark-3)" }}
            >
              &#10043; Darling Martech
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
