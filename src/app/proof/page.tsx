import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { globalCtas } from "@/content/ctas";
import { createMetadata } from "@/lib/metadata";
import { seoPages } from "@/content/seo";

export const metadata: Metadata = createMetadata(seoPages.proof);

const proofItems = [
  {
    problem: "Website traffic with low inquiry conversion",
    work: "Rebuilt page hierarchy, proof blocks, and CTA structure",
    result: "+40% order conversion",
    relatedService: "Build",
    ctaLabel: "Get a Website Conversion Review",
    ctaHref: "/tools",
  },
  {
    problem: "Lead follow-up depended on inbox memory",
    work: "Mapped lifecycle and implemented CRM routing with automated reminders",
    result: "+212% qualified leads",
    relatedService: "Scale",
    ctaLabel: "Map My Follow-Up System",
    ctaHref: "/tools",
  },
  {
    problem: "Weak local visibility and inconsistent booking flow",
    work: "Connected local trust signals, page intent, and booking follow-up",
    result: "+90% online bookings",
    relatedService: "Grow",
    ctaLabel: "Check My Local Visibility",
    ctaHref: "/tools",
  },
  {
    problem: "Disconnected reporting across campaigns and operations",
    work: "Aligned attribution, dashboards, and weekly operating rhythm",
    result: "+45% patient growth",
    relatedService: "Foundation + Grow",
    ctaLabel: "Build My Growth Roadmap",
    ctaHref: "/contact",
  },
];

export default function ProofPage() {
  return (
    <>
      <PageHeader
        eyebrow="PROOF"
        headline="Proof that the system matters."
        lead="Every result started with a real bottleneck: unclear conversion path, manual follow-up, weak visibility, or disconnected reporting."
        breadcrumb="Darling Martech / Proof"
      />

      <section className="section-padding" style={{ background: "var(--navy)" }}>
        <Container>
          <Eyebrow color="var(--clay)" className="mb-8">
            RESULTS CONNECTED TO FIXES
          </Eyebrow>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {proofItems.map((item) => (
              <article
                key={item.result}
                className="rounded-[var(--radius-lg)] border p-6"
                style={{
                  background: "var(--surface-dark)",
                  borderColor: "var(--line-on-dark)",
                }}
              >
                <p className="text-sm" style={{ color: "var(--fg-on-dark-2)" }}>
                  <strong>Problem:</strong> {item.problem}
                </p>
                <p className="mt-2 text-sm" style={{ color: "var(--fg-on-dark-2)" }}>
                  <strong>Work performed:</strong> {item.work}
                </p>
                <p className="mt-3 text-lg font-bold" style={{ color: "var(--fg-on-dark-1)" }}>
                  {item.result}
                </p>
                <p
                  className="mt-2 text-xs font-bold tracking-[0.12em] uppercase"
                  style={{ color: "var(--clay)", fontFamily: "var(--font-mono)" }}
                >
                  Related service: {item.relatedService}
                </p>
                <div className="mt-4">
                  <Button variant="secondary-light" size="sm" href={item.ctaHref}>
                    {item.ctaLabel}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="Want to see what this looks like in your system?"
        lead="Start with the bottleneck, not a guess."
        primaryLabel={globalCtas.bookDiagnosticCall.label}
        primaryHref={globalCtas.bookDiagnosticCall.href}
        secondaryLabel={globalCtas.findGrowthLeak.label}
        secondaryHref={globalCtas.findGrowthLeak.href}
      />
    </>
  );
}
