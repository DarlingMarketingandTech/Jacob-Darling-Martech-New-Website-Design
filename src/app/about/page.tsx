import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { AboutFounder } from "@/components/sections/AboutFounder";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CTASection } from "@/components/sections/CTASection";
import { globalCtas } from "@/content/ctas";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founder-led marketing systems partner model with direct accountability from diagnosis through implementation.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT"
        headline="Built by the person doing the work."
        lead="I do not run a handoff-heavy agency model. I work directly with clients to diagnose, build, connect, and improve the system."
        breadcrumb="Darling Martech / About"
      />

      <AboutFounder />
      <TrustStrip />

      <CTASection
        headline="Want direct accountability on the work?"
        lead="Book the diagnostic call if you want one operator to connect strategy and execution."
        primaryLabel={globalCtas.bookDiagnosticCall.label}
        primaryHref={globalCtas.bookDiagnosticCall.href}
        secondaryLabel={globalCtas.seeProofInAction.label}
        secondaryHref={globalCtas.seeProofInAction.href}
      />
    </>
  );
}
