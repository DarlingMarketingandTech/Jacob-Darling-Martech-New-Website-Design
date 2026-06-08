import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { globalCtas } from "@/content/ctas";
import { createMetadata } from "@/lib/metadata";
import { seoPages } from "@/content/seo";

export const metadata: Metadata = createMetadata(seoPages.contact);

const callExpectations = [
  "30-minute diagnostic call",
  "I review what you share before we talk",
  "You leave with a recommended next step",
  "No pressure, no handoffs",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        headline="Book a diagnostic call."
        lead="Tell me what feels disconnected. I&rsquo;ll review the current system, map the likely bottleneck, and give you a clear next-step recommendation."
        breadcrumb="Darling Martech / Contact"
      />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <Eyebrow className="mb-4">WHAT TO EXPECT</Eyebrow>
              <h2 className="dm-h2 mb-4" style={{ color: "var(--charcoal)" }}>
                Low-friction first step.
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--fg2)" }}>
                Start with the context you already have. I review what you share before we talk, and
                you leave with a recommended next step.
              </p>
              <div
                className="mt-8 rounded-[var(--radius-lg)] border p-5"
                style={{ borderColor: "var(--line)", background: "white" }}
              >
                <div
                  className="mb-3 text-xs font-bold tracking-[0.14em] uppercase"
                  style={{ color: "var(--fg3)", fontFamily: "var(--font-mono)" }}
                >
                  DIAGNOSTIC CALL EXPECTATIONS
                </div>
                {callExpectations.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 border-t py-2 text-sm"
                    style={{ borderColor: "var(--line)", color: "var(--charcoal)" }}
                  >
                    <span
                      className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--crimson)" }}
                      aria-hidden="true"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>

      <CTASection
        headline="Prefer to start with a diagnostic first?"
        lead="If you are still narrowing the bottleneck, start in the tools hub and bring the results to the call."
        primaryLabel={globalCtas.findGrowthLeak.label}
        primaryHref={globalCtas.findGrowthLeak.href}
        secondaryLabel={globalCtas.bookDiagnosticCall.label}
        secondaryHref={globalCtas.bookDiagnosticCall.href}
      />
    </>
  );
}
