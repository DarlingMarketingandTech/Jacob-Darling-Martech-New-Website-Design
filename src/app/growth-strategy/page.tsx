import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProofSection } from "@/components/sections/ProofSection";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Growth Strategy",
  description:
    "Demand generation, SEO/GEO, content, and attribution — connected to your system.",
};

const steps = [
  {
    n: "01",
    title: "Audit & Position",
    description:
      "Understand where demand is currently coming from, what's underperforming, and where the highest-leverage opportunities are.",
  },
  {
    n: "02",
    title: "Build the Foundation",
    description:
      "Search visibility, content architecture, GEO readiness, and authority signals — built in the right order.",
  },
  {
    n: "03",
    title: "Connect the Demand Loop",
    description:
      "Tie demand generation into CRM, automation, and reporting so every channel is measured and every lead is followed up.",
  },
  {
    n: "04",
    title: "Compound & Report",
    description:
      "Monthly reporting on what's working, what to double down on, and what to cut — so every decision is data-informed.",
  },
];

export default function GrowthStrategyPage() {
  return (
    <>
      <PageHeader
        eyebrow="GROWTH STRATEGY"
        headline="DEMAND THAT COMPOUNDS."
        lead="Search, content, GEO, and attribution — built into the system, not bolted on."
        breadcrumb="Darling Martech / Growth Strategy"
      />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <Eyebrow className="mb-10">THE APPROACH</Eyebrow>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-[var(--radius-lg)] border bg-white p-6"
                style={{ borderColor: "var(--line)" }}
              >
                <div
                  className="mb-3 text-xs font-bold tracking-[0.14em]"
                  style={{ color: "var(--crimson)", fontFamily: "var(--font-mono)" }}
                >
                  {step.n}
                </div>
                <h3 className="dm-h3 mb-2" style={{ color: "var(--charcoal)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg2)" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProofSection />

      <CTASection
        headline="GROWTH STARTS WITH A DIAGNOSTIC."
        lead="Before any campaign or retainer, I audit the system to find where demand is leaking — then we fix in order."
      />
    </>
  );
}
