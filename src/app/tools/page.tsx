import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ToolsLab } from "@/components/sections/ToolsLab";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { diagnosticsByProblem } from "@/content/diagnostics";
import { segmentCtas } from "@/content/ctas";
import { createMetadata } from "@/lib/metadata";
import { seoPages } from "@/content/seo";

export const metadata: Metadata = createMetadata(seoPages.tools);

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="DIAGNOSTIC HUB"
        headline="Start with the diagnostic that matches the bottleneck."
        lead="If you are not ready to book a call, start here. Each diagnostic is designed to clarify what is broken, what it is costing, and what should happen next."
        breadcrumb="Darling Martech / Tools"
      />

      <ToolsLab />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <Eyebrow className="mb-8">STARTING POINTS BY PROBLEM</Eyebrow>
          <div className="space-y-4">
              {diagnosticsByProblem.map((group) => (
                <div
                  key={group.problem}
                  className="rounded-[var(--radius-lg)] border bg-white p-6"
                  style={{ borderColor: "var(--line)" }}
                >
                  <h2 className="dm-h3" style={{ color: "var(--charcoal)" }}>
                    {group.problem}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {group.tools.map((tool) => (
                      <div
                        key={tool.id}
                        className="rounded-[var(--radius-pill)] border px-4 py-2 text-sm"
                        style={{ borderColor: "var(--line)", color: "var(--charcoal)" }}
                      >
                        {tool.label}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </Container>
      </section>

      <CTASection
        headline="Still unsure where to begin?"
        lead="Start with the Growth Leak Finder and leave with a clear next-step recommendation."
        primaryLabel={segmentCtas.unsure.primary.label}
        primaryHref="/tools#growth-leak-finder"
        secondaryLabel={segmentCtas.ready.primary.label}
        secondaryHref={segmentCtas.ready.primary.href}
      />
    </>
  );
}
