"use client";

import { useState } from "react";
import { Plus, Minus, CornerDownRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { globalCtas } from "@/content/ctas";

const problemCards = [
  {
    code: "LEAK-01",
    title: "Website is not converting",
    description: "People visit, but the offer, proof, and next step do not make action obvious.",
    cost: "Intent leaks before it becomes a lead.",
  },
  {
    code: "LEAK-02",
    title: "Follow-up depends on memory",
    description: "Leads arrive, but routing, reminders, ownership, and timing are still manual.",
    cost: "Good leads go quiet.",
  },
  {
    code: "LEAK-03",
    title: "Tools do not connect",
    description:
      "The website, CRM, forms, inbox, automations, and reports each tell a different story.",
    cost: "The team works around the system instead of through it.",
  },
  {
    code: "LEAK-04",
    title: "Visibility is too weak",
    description:
      "The business is stronger than what search, local pages, and AI systems can understand.",
    cost: "Good work stays hard to find.",
  },
];

const breakdowns = [
  {
    id: "conversion-gap",
    tag: "Conversion gap",
    title: "Not more traffic. Better conversion.",
    description:
      "The website may look polished, but if the offer is unclear and the CTA is buried, qualified visitors leave without acting.",
    points: [
      "Offer clarity arrives too late",
      "Proof exists but is not decision-ready",
      "The next step is generic or hidden",
    ],
  },
  {
    id: "follow-up-gap",
    tag: "Follow-up gap",
    title: "Not more leads. Better follow-up.",
    description:
      "When ownership, timing, and reminders depend on memory, speed drops and lead quality decays before sales conversations start.",
    points: [
      "Routing rules are unclear",
      "Follow-up timing changes by person",
      "CRM activity and inbox activity do not match",
    ],
  },
  {
    id: "system-gap",
    tag: "System gap",
    title: "Not more tools. A system that connects.",
    description:
      "Disconnected software creates rework, blind spots, and reporting noise. The real fix is the connective layer underneath the stack.",
    points: [
      "Tools are deployed but not orchestrated",
      "Manual work blocks consistency",
      "Reporting does not guide the next decision",
    ],
  },
];

export function ProblemSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="section-padding" style={{ background: "var(--cream)" }}>
      <Container>
        <div className="max-w-[760px]">
          <Eyebrow>WHERE IT BREAKS</Eyebrow>
          <h2 className="dm-h2 mt-4" style={{ color: "var(--crimson)" }}>
            Most growth slowdowns are disconnected-system problems.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((card) => (
            <div
              key={card.code}
              className="group relative overflow-hidden rounded-[var(--radius-lg)] border bg-white p-6 transition-all duration-[240ms] hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
              style={{ borderColor: "var(--line)" }}
            >
              <div
                className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 rounded-l-lg bg-[var(--crimson)] transition-transform duration-[240ms] group-hover:scale-y-100"
                aria-hidden="true"
              />
              <div
                className="mb-3 text-xs font-bold tracking-[0.14em] uppercase"
                style={{ color: "var(--fg3)", fontFamily: "var(--font-mono)" }}
              >
                {card.code}
              </div>
              <h3 className="dm-h3 mb-2" style={{ color: "var(--charcoal)" }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg2)" }}>
                {card.description}
              </p>
              <p
                className="mt-3 text-xs font-bold"
                style={{ color: "var(--crimson)", fontFamily: "var(--font-mono)" }}
              >
                {card.cost}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="primary" href={globalCtas.findGrowthLeak.href}>
            {globalCtas.findGrowthLeak.label}
          </Button>
          <Button variant="secondary" href={globalCtas.chooseStartingPoint.href}>
            {globalCtas.chooseStartingPoint.label}
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
          <div>
            <Eyebrow>DIAGNOSIS</Eyebrow>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--fg2)" }}>
              Not more campaigns. Better operating rhythm.
            </p>
          </div>

          <div className="border-t" style={{ borderColor: "var(--line)" }}>
            {breakdowns.map((b, i) => {
              const isOpen = open === i;
              return (
                <div key={b.id} className="border-b" style={{ borderColor: "var(--line)" }}>
                  <button
                    className="flex w-full items-center gap-4 py-6 text-left"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className="text-sm font-bold"
                      style={{ color: "var(--crimson)", fontFamily: "var(--font-mono)" }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="flex-1 text-lg font-bold tracking-[-0.01em]"
                      style={{
                        color: isOpen ? "var(--crimson)" : "var(--charcoal)",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {b.title}
                    </span>
                    {isOpen ? (
                      <Minus size={20} strokeWidth={2} color="var(--fg3)" aria-hidden="true" />
                    ) : (
                      <Plus size={20} strokeWidth={2} color="var(--fg3)" aria-hidden="true" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="pb-6 pl-10">
                      <span
                        className="inline-block rounded-[var(--radius-pill)] border px-3 py-1 text-[11px] font-bold tracking-[0.14em] uppercase"
                        style={{
                          borderColor: "var(--line-strong)",
                          color: "var(--charcoal)",
                        }}
                      >
                        {b.tag}
                      </span>
                      <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--fg2)" }}>
                        {b.description}
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {b.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2.5 text-sm"
                            style={{ color: "var(--charcoal)" }}
                          >
                            <CornerDownRight
                              size={15}
                              strokeWidth={2}
                              className="mt-0.5 shrink-0"
                              style={{ color: "var(--crimson)" }}
                              aria-hidden="true"
                            />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
