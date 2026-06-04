import { Metadata } from "next";
import { LayoutGrid, Workflow } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Websites & Systems",
  description:
    "Website architecture, UX, conversion copy, and CRM integration — built to convert.",
};

const features = [
  {
    title: "Conversion Architecture",
    description:
      "Page structure, proof placement, and next-step logic designed to move intent into action.",
  },
  {
    title: "UX & Messaging",
    description:
      "Clear offer hierarchy, sharp headlines, and a visual system that builds trust before the pitch.",
  },
  {
    title: "CMS & Tech Integration",
    description:
      "CRM connection, form routing, analytics, and tag manager — all wired in from day one.",
  },
  {
    title: "Performance & SEO Baseline",
    description:
      "Core Web Vitals, technical SEO foundation, and structured data — built in, not retrofitted.",
  },
];

const services = [
  {
    number: "02",
    icon: <LayoutGrid size={26} strokeWidth={1.8} />,
    title: "Website & Conversion",
    forLine: "businesses whose site exists but doesn't convert",
    tags: ["UX", "Conversion Copy", "CRO"],
    href: "/websites-systems",
  },
  {
    number: "03",
    icon: <Workflow size={26} strokeWidth={1.8} />,
    title: "CRM & System Integration",
    forLine: "businesses who need the back-end connected to the front-end",
    tags: ["CRM", "Forms", "Analytics"],
    href: "/ai-automation",
  },
];

export default function WebsitesSystemsPage() {
  return (
    <>
      <PageHeader
        eyebrow="WEBSITES & SYSTEMS"
        headline="BUILT TO CONVERT. WIRED TO SCALE."
        lead="A website that looks right isn't enough. It needs to convert visitors, connect to your CRM, and feed your reporting."
        breadcrumb="Darling Martech / Websites & Systems"
      />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <Eyebrow className="mb-8">WHAT THIS COVERS</Eyebrow>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-[var(--radius-lg)] border bg-white p-6"
                style={{ borderColor: "var(--line)" }}
              >
                <h3 className="dm-h3 mb-2" style={{ color: "var(--charcoal)" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg2)" }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.number} {...s} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="YOUR SITE SHOULD BE DOING MORE."
        lead="Book a diagnostic call and I'll show you exactly where the conversion gaps are — before we build anything."
      />
    </>
  );
}
