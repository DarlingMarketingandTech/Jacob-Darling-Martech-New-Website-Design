"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { globalCtas } from "@/content/ctas";
import { heroBadges } from "@/content/trust";

export function Hero() {
  const stages = ["Foundation", "Build", "Scale", "Grow"];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="dot-texture crimson-glow relative overflow-hidden bg-navy"
      ref={ref}
    >

      <Container className="relative z-10">
        <motion.div
          className="grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <Eyebrow color="var(--clay)">THE OPERATOR LAYER</Eyebrow>

            <h1 className="dm-display mt-5 text-cream">
              Your website, CRM, and marketing should work like one system.
            </h1>

            <p className="dm-lead mt-6 max-w-[560px]" style={{ color: "var(--fg-on-dark-2)" }}>
              I help growing businesses connect strategy, websites, CRM, automation, AI,
              visibility, and reporting, so leads are easier to capture, follow up with, measure,
              and grow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="md" href={globalCtas.findGrowthLeak.href} arrow>
                {globalCtas.findGrowthLeak.label}
              </Button>
              <Button variant="secondary-light" size="md" href={globalCtas.seeProofInAction.href}>
                {globalCtas.seeProofInAction.label}
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {heroBadges.map((badge, i) => (
                <span
                  key={badge}
                  className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase font-mono"
                  style={{ color: "var(--fg-on-dark-3)" }}
                >
                  {i > 0 && (
                    <span className="text-crimson" aria-hidden="true">
                      &bull;
                    </span>
                  )}
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-visible">
            <div
              className="rounded-[var(--radius-lg)] border p-6"
              style={{
                background: "var(--surface-dark)",
                borderColor: "var(--line-on-dark)",
                boxShadow: "var(--shadow-dark)",
              }}
            >
              <div
                className="mb-4 text-xs font-bold tracking-[0.16em] uppercase font-mono"
                style={{ color: "var(--clay)" }}
              >
                THE OPERATOR LAYER
              </div>

              <div className="relative flex flex-col gap-0">
                {stages.map((stage, i) => (
                  <div key={stage} className="relative flex items-start gap-4">
                    {i < stages.length - 1 && (
                      <div
                        className="absolute left-[15px] top-8 z-0 h-full w-[2px]"
                        style={{
                          background: "linear-gradient(180deg, var(--crimson), rgba(153,0,0,0.2))",
                        }}
                        aria-hidden="true"
                      />
                    )}
                    <div
                      className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-black font-mono bg-crimson border-crimson text-white"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="pb-5">
                      <div className="text-sm font-bold" style={{ color: "var(--fg-on-dark-1)" }}>
                        {stage}
                      </div>
                      <div
                        className="mt-0.5 text-xs leading-snug"
                        style={{ color: "var(--fg-on-dark-3)" }}
                      >
                        {
                          {
                            Foundation: "Clarify bottleneck and roadmap",
                            Build: "Create the conversion path",
                            Scale: "Connect CRM, follow-up, and AI",
                            Grow: "Compound visibility and reporting",
                          }[stage]
                        }
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-2 border-t pt-4 text-xs font-mono"
                style={{
                  borderColor: "var(--line-on-dark)",
                  color: "var(--fg-on-dark-3)",
                }}
              >
                Not more tools. A system that connects.
              </div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-xl border px-4 py-3"
              style={{
                background: "var(--surface-dark)",
                borderColor: "var(--line-on-dark)",
                boxShadow: "var(--shadow-dark)",
              }}
            >
              <div className="h-2.5 w-2.5 rounded-full bg-cool-sage" />
              <div>
                <div className="text-xs font-bold" style={{ color: "var(--fg-on-dark-1)" }}>
                  One accountable operator
                </div>
                <div className="text-xs" style={{ color: "var(--fg-on-dark-3)" }}>
                  Strategy. Systems. Execution.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
