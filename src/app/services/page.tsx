import { Metadata } from "next";
import { Compass, LayoutGrid, Workflow, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Four-stage marketing system: Foundation, Build, Scale, and Grow — each stage sets up the next.",
};

const services = [
  {
    number: "01",
    icon: <Compass size={26} strokeWidth={1.8} />,
    title: "Foundation & Strategy",
    forLine: "businesses ready to fix the system before spending more",
    tags: ["Growth Audit", "Positioning", "Roadmap"],
    href: "/services",
  },
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
    title: "CRM, Automation & AI",
    forLine: "businesses running tools that aren't connected",
    tags: ["CRM Setup", "Automation", "AI Workflows"],
    href: "/ai-automation",
  },
  {
    number: "04",
    icon: <TrendingUp size={26} strokeWidth={1.8} />,
    title: "Growth & Demand",
    forLine: "businesses ready to build a consistent demand engine",
    tags: ["SEO/GEO", "Content", "Attribution"],
    href: "/growth-strategy",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="SERVICES"
        headline="THE SYSTEM. FOUR STAGES."
        lead="Not a menu of disconnected services. A sequence — each stage sets up the next."
        breadcrumb="Darling Martech / Services"
      />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <Eyebrow className="mb-8">WHAT I BUILD</Eyebrow>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.number} {...s} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="START WITH A DIAGNOSTIC."
        lead="Before any build or retainer, I run a diagnostic to find where the system is leaking. Then we fix in order."
      />
    </>
  );
}
