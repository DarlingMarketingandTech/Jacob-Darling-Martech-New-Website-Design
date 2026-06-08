import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { segmentCtas } from "@/content/ctas";
import { createMetadata } from "@/lib/metadata";
import { seoPages } from "@/content/seo";

export const metadata: Metadata = createMetadata(seoPages.websitesSystems);

const painPoints = [
  {
    title: "Unclear offer",
    description: "Visitors should understand what you do, who it is for, and why to trust it in seconds.",
  },
  {
    title: "Weak proof placement",
    description: "Proof should appear where decisions happen, not buried below generic claims.",
  },
  {
    title: "Buried CTAs",
    description: "Every priority page needs one obvious next step aligned to buyer intent.",
  },
  {
    title: "Confusing page hierarchy",
    description: "Page structure should guide scanning and move the right buyer to action.",
  },
  {
    title: "Poor lead capture",
    description: "Forms, contact paths, and qualification prompts should reduce friction.",
  },
  {
    title: "No CRM/follow-up connection",
    description: "Your website should hand leads into CRM and follow-up workflows automatically.",
  },
];

export default function WebsitesSystemsPage() {
  return (
    <>
      <PageHeader
        eyebrow="WEBSITES & SYSTEMS"
        headline="A website should guide the right visitor to the right next step."
        lead="If the site looks fine but conversion is weak, the issue is usually clarity, proof, CTA structure, and follow-up connection."
        breadcrumb="Darling Martech / Websites & Systems"
      />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <Eyebrow className="mb-8">CONVERSION BOTTLENECKS</Eyebrow>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-[var(--radius-lg)] border bg-white p-6"
                style={{ borderColor: "var(--line)" }}
              >
                <h3 className="dm-h3 mb-2" style={{ color: "var(--charcoal)" }}>
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg2)" }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="Ready to fix website conversion leaks?"
        lead="Not more traffic. Better conversion. Start with a review and leave with priority fixes."
        primaryLabel={segmentCtas.website.primary.label}
        primaryHref={segmentCtas.website.primary.href}
        secondaryLabel={segmentCtas.website.secondary.label}
        secondaryHref={segmentCtas.website.secondary.href}
      />
    </>
  );
}
