import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { HowIHelp } from "@/components/sections/HowIHelp";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "AI + Automation",
  description:
    "CRM setup, lifecycle automation, and AI-assisted workflows — connected and measurable.",
};

const features = [
  {
    title: "CRM Setup & Cleanup",
    description:
      "Pipeline stages, contact properties, and deal flows set up so your team can trust the data.",
  },
  {
    title: "Lifecycle Automation",
    description:
      "Lead routing, follow-up sequences, and re-engagement flows — running without manual effort.",
  },
  {
    title: "AI Workflow Integration",
    description:
      "Practical AI tools embedded in your marketing process — content, research, and reporting acceleration.",
  },
  {
    title: "Tech Stack Audit",
    description:
      "A clear picture of what you own, what's connected, what's redundant, and what to add next.",
  },
];

export default function AIAutomationPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI + AUTOMATION"
        headline="SYSTEMS THAT RUN WHILE YOU FOCUS."
        lead="CRM, automation, and AI — connected to your strategy, not bolted on as an afterthought."
        breadcrumb="Darling Martech / AI + Automation"
      />

      <HowIHelp />

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
                <div className="flex items-start gap-3">
                  <Check
                    size={18}
                    strokeWidth={2.5}
                    className="mt-1 shrink-0"
                    style={{ color: "var(--crimson)" }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="dm-h3 mb-2" style={{ color: "var(--charcoal)" }}>
                      {f.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--fg2)" }}>
                      {f.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="READY TO CONNECT THE SYSTEM?"
        lead="Book a diagnostic call. I map your current stack, find the disconnections, and build a plan to automate what should be automated."
      />
    </>
  );
}
