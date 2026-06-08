import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Check } from "lucide-react";
import { segmentCtas } from "@/content/ctas";

export const metadata: Metadata = {
  title: "AI + Automation",
  description:
    "Follow-up and CRM automation systems for businesses with manual handoffs and inconsistent lifecycle execution.",
};

const features = [
  {
    title: "Lead routing",
    description: "Route new leads to the right owner quickly with clear ownership and response windows.",
  },
  {
    title: "Reminders and follow-up",
    description: "Set automated reminders and lifecycle sequences so follow-up never depends on memory.",
  },
  {
    title: "Lifecycle workflows",
    description: "Move contacts through lifecycle stages with defined triggers, actions, and checkpoints.",
  },
  {
    title: "Intake and CRM cleanup",
    description: "Standardize intake fields, clean key properties, and make CRM reporting usable.",
  },
  {
    title: "AI-assisted workflows",
    description: "Use AI where it reduces drag, improves response speed, and supports consistency.",
  },
  {
    title: "Reporting",
    description: "Track what gets captured, followed up, and converted so decisions are measurable.",
  },
];

export default function AIAutomationPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI + AUTOMATION"
        headline="Automation should make the business easier to run."
        lead="When follow-up is manual and tools are disconnected, response speed drops and opportunities leak. I connect the system so it runs cleanly."
        breadcrumb="Darling Martech / AI + Automation"
      />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <Eyebrow className="mb-8">FOLLOW-UP SYSTEM PRIORITIES</Eyebrow>
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
        headline="Ready to remove follow-up drag?"
        lead="Map the handoffs first, then automate what should be automated."
        primaryLabel={segmentCtas.automation.primary.label}
        primaryHref={segmentCtas.automation.primary.href}
        secondaryLabel={segmentCtas.automation.secondary.label}
        secondaryHref={segmentCtas.automation.secondary.href}
      />
    </>
  );
}
