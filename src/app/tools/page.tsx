import { Metadata } from "next";
import { Search, BarChart2, Calculator, Map, Radar } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ToolsLab } from "@/components/sections/ToolsLab";
import { CTASection } from "@/components/sections/CTASection";
import { ToolCard } from "@/components/cards/ToolCard";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Diagnostic Tools",
  description:
    "Free diagnostic tools to find the gaps in your marketing system before you spend.",
};

const toolCards = [
  {
    icon: <Search size={22} strokeWidth={1.8} />,
    title: "Growth System Audit",
    description: "Identify the highest-leverage gaps in your marketing system before you spend on anything new.",
    status: "Available",
  },
  {
    icon: <Radar size={22} strokeWidth={1.8} />,
    title: "GEO Readiness Auditor",
    description: "Assess how well your content is positioned for AI-driven search discovery.",
    status: "Available",
  },
  {
    icon: <BarChart2 size={22} strokeWidth={1.8} />,
    title: "Attribution Snapshot",
    description: "Get a clear picture of which channels are generating pipeline.",
    status: "Available",
  },
  {
    icon: <Calculator size={22} strokeWidth={1.8} />,
    title: "ROI Projection Calculator",
    description: "Model expected return before committing budget.",
    status: "Available",
  },
  {
    icon: <Map size={22} strokeWidth={1.8} />,
    title: "Technical Roadmap",
    description: "A sequenced plan for your marketing tech stack.",
    status: "Coming soon",
  },
];

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="DIAGNOSTIC TOOLS"
        headline="FIND THE GAPS BEFORE YOU SPEND."
        lead="Run a free diagnostic before committing to any campaign, project, or retainer. Know what to fix first."
        breadcrumb="Darling Martech / Tools"
      />

      <ToolsLab />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <Eyebrow className="mb-8">ALL TOOLS</Eyebrow>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolCards.map((t) => (
              <ToolCard key={t.title} {...t} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="DIAGNOSTIC FIRST. PLAN SECOND."
        lead="Every engagement starts with a diagnostic. Book a call and we run it together."
      />
    </>
  );
}
