import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { globalCtas } from "@/content/ctas";
import { createMetadata } from "@/lib/metadata";
import { seoPages } from "@/content/seo";
import { proofItems } from "@/content/proof";

export const metadata: Metadata = createMetadata(seoPages.proof);

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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {proofItems.map((item) => (
              <article
                key={item.result}
                className="rounded-[var(--radius-lg)] border p-6"
                style={{
                  background: "var(--surface-dark)",
                  borderColor: "var(--line-on-dark)",
                }}
              >
                <div>
                  <p className="font-bold" style={{ color: "var(--fg-on-dark-1)" }}>
                    Problem
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "var(--fg-on-dark-2)" }}>
                    {item.problem}
                  </p>
                  {item.problemDetail && (
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-on-dark-3)" }}>
                      {item.problemDetail}
                    </p>
                  )}
                </div>

                <div className="mt-4">
                  <p className="font-bold" style={{ color: "var(--fg-on-dark-1)" }}>
                    Work performed
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "var(--fg-on-dark-2)" }}>
                    {item.work}
                  </p>
                  {item.workDetail && (
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-on-dark-3)" }}>
                      {item.workDetail}
                    </p>
                  )}
                </div>

                <div className="mt-4">
                  <p className="text-lg font-bold" style={{ color: "var(--crimson)" }}>
                    {item.result}
                  </p>
                  {item.resultDetail && (
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-on-dark-3)" }}>
                      {item.resultDetail}
                    </p>
                  )}
                </div>

                <p
                  className="mt-4 text-xs font-bold tracking-[0.12em] uppercase"
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
