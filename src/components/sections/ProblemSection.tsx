"use client";

import { useState } from "react";
import { Plus, Minus, CornerDownRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const problemCards = [
  {
    code: "LEAK-01",
    icon: "layout-grid",
    title: "Website doesn't convert",
    description: "Visitors arrive, but structure, proof, and next step don't move them to act.",
    cost: "Lost intent = lost revenue.",
  },
  {
    code: "LEAK-02",
    icon: "inbox",
    title: "CRM isn't being used",
    description: "Follow-up depends on memory — routing, timing, and ownership stay manual.",
    cost: "Leaky pipeline = compounding loss.",
  },
  {
    code: "LEAK-03",
    icon: "unplug",
    title: "No automation in place",
    description: "CRM and inboxes tell different stories. Operations drift from strategy.",
    cost: "Manual = slow, inconsistent, unscalable.",
  },
  {
    code: "LEAK-04",
    icon: "search-x",
    title: "No visibility into what works",
    description: "Good work exists, but search, local, and authority signals are under-structured.",
    cost: "Unknown ROI = frozen budgets.",
  },
];

const breakdowns = [
  {
    tag: "Clarity problem",
    title: "The website looks fine, but it does not move people.",
    description:
      "Visitors can reach the site, but the structure, proof, and next step are not sharp enough to turn intent into action.",
    points: [
      "Offer is understandable only after scrolling",
      "Proof is present but not decision-useful",
      "The next step feels buried or generic",
    ],
  },
  {
    tag: "System problem",
    title: "Leads arrive, but follow-up depends on memory.",
    description:
      "The business has tools, but routing, reminders, lifecycle logic, and ownership are still too manual to trust at scale.",
    points: [
      "CRM and inboxes tell different stories",
      "Follow-up timing varies by person",
      "Reporting and operations drift apart",
    ],
  },
  {
    tag: "Visibility problem",
    title: "The business is stronger than its discoverability.",
    description:
      "Good work exists, but search visibility, local trust, and authority signals are too weak to convert that strength into steady demand.",
    points: [
      "Search visibility is inconsistent",
      "Local or AI search signals are under-structured",
      "The right pages are not carrying the proof",
    ],
  },
];

export function ProblemSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="section-padding" style={{ background: "var(--cream)" }}>
      <Container>
        {/* Header */}
        <div className="max-w-[760px]">
          <Eyebrow>WHERE IT BREAKS</Eyebrow>
          <h2
            className="dm-h2 mt-4"
            style={{ color: "var(--crimson)" }}
          >
            Most businesses don&rsquo;t have a marketing problem.{" "}
            <span style={{ color: "var(--charcoal)" }}>
              They have a disconnected-system problem.
            </span>
          </h2>
        </div>

        {/* Problem cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((card) => (
            <div
              key={card.code}
              className="group relative overflow-hidden rounded-[var(--radius-lg)] border bg-white p-6 transition-all duration-[240ms] hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
              style={{ borderColor: "var(--line)" }}
            >
              {/* Crimson left bar — animates in on hover */}
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
              <h3
                className="dm-h3 mb-2"
                style={{ color: "var(--charcoal)" }}
              >
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

        {/* Accordion — Where it breaks */}
        <div
          className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]"
        >
          <div>
            <Eyebrow>DIAGNOSIS</Eyebrow>
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: "var(--fg2)" }}
            >
              Most growth bottlenecks start in one of three places. Usually not a traffic problem
              first.
            </p>
          </div>

          <div className="border-t" style={{ borderColor: "var(--line)" }}>
            {breakdowns.map((b, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b" style={{ borderColor: "var(--line)" }}>
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
