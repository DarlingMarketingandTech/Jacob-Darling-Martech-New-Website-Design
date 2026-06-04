import { Metadata } from "next";
import { ShoppingCart, UserPlus, CalendarCheck, HeartPulse } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProofSection } from "@/components/sections/ProofSection";
import { CTASection } from "@/components/sections/CTASection";
import { ProofCard } from "@/components/cards/ProofCard";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Selected Proof",
  description: "Real outcomes from real marketing systems. Selected results across industries.",
};

const proofCards = [
  {
    stat: "+40%",
    label: "order conversion",
    descriptor: "Ecommerce. Conversion architecture + CRO.",
    icon: <ShoppingCart size={22} strokeWidth={1.8} />,
  },
  {
    stat: "+212%",
    label: "qualified leads",
    descriptor: "Professional services. Positioning + demand.",
    icon: <UserPlus size={22} strokeWidth={1.8} />,
  },
  {
    stat: "+90%",
    label: "online bookings",
    descriptor: "Local services. Website + automation.",
    icon: <CalendarCheck size={22} strokeWidth={1.8} />,
  },
  {
    stat: "+45%",
    label: "patient growth",
    descriptor: "Healthcare. Local SEO + conversion.",
    icon: <HeartPulse size={22} strokeWidth={1.8} />,
  },
];

export default function ProofPage() {
  return (
    <>
      <PageHeader
        eyebrow="SELECTED PROOF"
        headline="REAL SYSTEMS. REAL OUTCOMES."
        lead="Selected results from businesses that connected strategy, website, CRM, and demand into one system."
        breadcrumb="Darling Martech / Proof"
      />

      <ProofSection />

      <section className="section-padding" style={{ background: "var(--navy)" }}>
        <Container>
          <Eyebrow color="var(--clay)" className="mb-8">
            RESULT CARDS
          </Eyebrow>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {proofCards.map((card) => (
              <ProofCard key={card.label} {...card} />
            ))}
          </div>
          <p
            className="mt-8 text-xs"
            style={{ color: "var(--fg-on-dark-3)", fontFamily: "var(--font-mono)" }}
          >
            Results are representative of documented client outcomes. Individual results vary by
            business, starting point, and engagement scope.
          </p>
        </Container>
      </section>

      <CTASection
        headline="READY TO BUILD YOUR PROOF?"
        lead="Book a diagnostic call and we start by mapping the system — what's working, what's not, and what to fix first."
      />
    </>
  );
}
