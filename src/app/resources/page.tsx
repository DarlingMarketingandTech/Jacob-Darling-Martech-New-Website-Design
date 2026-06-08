import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { createMetadata } from "@/lib/metadata";
import { seoPages } from "@/content/seo";

export const metadata: Metadata = createMetadata(seoPages.resources);

const resources = [
  {
    tag: "GUIDE",
    title: "The Disconnected-System Problem",
    description:
      "Why most marketing failures aren't traffic or budget problems — and how to diagnose the real disconnection.",
    href: "/resources/disconnected-system-problem",
    comingSoon: false,
  },
  {
    tag: "FRAMEWORK",
    title: "The Four-Stage System Map",
    description:
      "Foundation → Build → Scale → Grow. How each stage connects to the next and why order matters.",
    href: "/resources/four-stage-system-map",
    comingSoon: false,
  },
  {
    tag: "CHECKLIST",
    title: "CRM Readiness Checklist",
    description:
      "Before you automate anything, make sure the foundation is right. 20-point checklist.",
    href: "#",
    comingSoon: true,
  },
  {
    tag: "GUIDE",
    title: "GEO Readiness for SMBs",
    description:
      "How to structure your content and site for AI-driven search discovery — without a full SEO team.",
    href: "#",
    comingSoon: true,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="RESOURCES"
        headline="SYSTEMS THINKING. PRACTICAL TOOLS."
        lead="Frameworks, guides, and checklists for building a marketing system that compounds."
        breadcrumb="Darling Martech / Resources"
      />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <Eyebrow className="mb-8">ALL RESOURCES</Eyebrow>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {resources.map((r) => {
              const cardClassName = "rounded-[var(--radius-lg)] border bg-white p-6 transition-all duration-200 hover:shadow-md";
              const CardContent = (
                <>
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className="rounded-[var(--radius-pill)] px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] uppercase"
                      style={{
                        background: "var(--crimson-100)",
                        color: "var(--crimson)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {r.tag}
                    </span>
                    {r.comingSoon && (
                      <span
                        className="text-[10px] font-bold tracking-[0.12em] uppercase"
                        style={{ color: "var(--fg3)", fontFamily: "var(--font-mono)" }}
                      >
                        COMING SOON
                      </span>
                    )}
                  </div>
                  <h3 className="dm-h3 mb-2" style={{ color: "var(--charcoal)" }}>
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--fg2)" }}>
                    {r.description}
                  </p>
                </>
              );

              if (r.comingSoon) {
                return (
                  <div
                    key={r.title}
                    className={cardClassName}
                    style={{ borderColor: "var(--line)" }}
                  >
                    {CardContent}
                  </div>
                );
              }

              return (
                <Link
                  key={r.title}
                  href={r.href}
                  className={cardClassName}
                  style={{ borderColor: "var(--line)" }}
                >
                  {CardContent}
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        headline="WANT THESE DELIVERED?"
        lead="Book a diagnostic call and I'll walk you through the frameworks most relevant to your business."
      />
    </>
  );
}
