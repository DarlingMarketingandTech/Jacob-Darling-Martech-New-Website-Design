import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowIHelp } from "@/components/sections/HowIHelp";
import { ProofSection } from "@/components/sections/ProofSection";
import { ToolsLab } from "@/components/sections/ToolsLab";
import { AboutFounder } from "@/components/sections/AboutFounder";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <HowIHelp />
      <ProofSection />
      <ToolsLab />
      <AboutFounder />
      <CTASection />
    </>
  );
}
