"use client";

import { useRef } from "react";
import { useState } from "react";
import { Plus, Minus, CornerDownRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { globalCtas } from "@/content/ctas";
import { problemCards, breakdowns } from "@/content/problem";

export function ProblemSection() {
  const [open, setOpen] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <Container>
        <div className="max-w-[760px]">
          <Eyebrow>WHERE IT BREAKS</Eyebrow>
          <h2 className="dm-h2 mt-4" style={{ color: "var(--crimson)" }}>
            Most growth slowdowns are disconnected-system problems.
          </h2>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.08,
              },
            },
          }}
        >
          {problemCards.map((card) => (
            <motion.div
              key={card.code}
              className="group relative overflow-hidden rounded-[var(--radius-lg)] border bg-white p-6 transition-all duration-[240ms] hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
              style={{ borderColor: "var(--line)" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div
                className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 rounded-l-lg bg-[var(--crimson)] transition-transform duration-[240ms] group-hover:scale-y-100"
                aria-hidden="true"
              />
              <div
                className="mb-3 text-xs font-bold tracking-[0.14em] uppercase font-mono"
                style={{ color: "var(--fg3)" }}
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
                className="mt-3 text-xs font-bold font-mono text-crimson"
              >
                {card.cost}
              </p>
            </motion.div>
          ))}
        </motion.div>

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
                    aria-controls={`accordion-panel-${b.id}`}
                    id={`accordion-button-${b.id}`}
                  >
                    <span
                      className="text-sm font-bold font-mono text-crimson"
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="flex-1 text-lg font-bold tracking-[-0.01em]"
                      style={{
                        color: isOpen ? "var(--crimson)" : "var(--charcoal)",
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
                    <div
                      className="pb-6 pl-10"
                      id={`accordion-panel-${b.id}`}
                      role="region"
                      aria-labelledby={`accordion-button-${b.id}`}
                    >
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
