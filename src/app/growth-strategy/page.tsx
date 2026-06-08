import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { segmentCtas } from "@/content/ctas";

export const metadata: Metadata = {
  title: "Growth Strategy",
  description:
    "Growth strategy for founders and teams who need positioning, priorities, and execution tied to measurable systems.",
};

const priorities = [
  {
    n: "01",
    title: "Positioning and offer clarity",
    description: "Align message, offer, and buyer intent so demand quality improves before spend scales.",
  },
  {
    n: "02",
    title: "Priority decisions",
    description: "Choose the highest-leverage channel and system fixes instead of scattering effort.",
  },
  {
    n: "03",
    title: "Campaign direction",
    description: "Run campaigns that match the actual bottleneck in conversion, follow-up, or visibility.",
  },
  {
    n: "04",
    title: "Measurement and operating rhythm",
    description: "Track what matters, review consistently, and keep execution tied to roadmap outcomes.",
  },
];

export default function GrowthStrategyPage() {
  return (
    <>
      <PageHeader
        eyebrow="GROWTH STRATEGY"
        headline="A growth strategy only matters if the system can execute it."
        lead="I help founders and small teams connect positioning, priorities, and execution so growth decisions are clear and measurable."
        breadcrumb="Darling Martech / Growth Strategy"
      />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <Eyebrow className="mb-10">STRATEGY PRIORITIES</Eyebrow>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {priorities.map((item) => (
              <div
                key={item.n}
                className="rounded-[var(--radius-lg)] border bg-white p-6"
                style={{ borderColor: "var(--line)" }}
              >
                <div
                  className="mb-3 text-xs font-bold tracking-[0.14em]"
                  style={{ color: "var(--crimson)", fontFamily: "var(--font-mono)" }}
                >
                  {item.n}
                </div>
                <h3 className="dm-h3 mb-2" style={{ color: "var(--charcoal)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg2)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="Need strategic direction and execution in one plan?"
        lead="Not a bigger stack. A clearer path. Start with the roadmap or a diagnostic leak check."
        primaryLabel={segmentCtas.strategy.primary.label}
        primaryHref={segmentCtas.strategy.primary.href}
        secondaryLabel={segmentCtas.strategy.secondary.label}
        secondaryHref={segmentCtas.strategy.secondary.href}
      />
    </>
  );
}
