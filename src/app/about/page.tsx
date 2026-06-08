import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { AboutFounder } from "@/components/sections/AboutFounder";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jacob Darling — marketing systems operator. Direct access, strategic execution, measurable results.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT"
        headline="ONE OPERATOR. FULL ACCOUNTABILITY."
        lead="You work with me — directly. No account managers. No handoffs. One person who owns the strategy and the execution."
        breadcrumb="Darling Martech / About"
      />

      <AboutFounder />
      <TrustStrip />

      <CTASection
        headline="READY TO WORK DIRECTLY?"
        lead="Book a diagnostic call. I'll show you exactly how I'd approach your system — before you commit to anything."
      />
    </>
  );
}
