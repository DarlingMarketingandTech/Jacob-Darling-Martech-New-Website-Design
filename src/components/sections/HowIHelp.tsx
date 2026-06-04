"use client";

import { useState } from "react";
import { Compass, LayoutGrid, Workflow, TrendingUp, Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const stages = [
  {
    n: "01",
    key: "Foundation",
    icon: Compass,
    description: "Strategy, positioning, audit, and a prioritised roadmap — before anything is built.",
    items: ["Growth system audit", "Positioning & messaging", "Prioritised roadmap"],
  },
  {
    n: "02",
    key: "Build",
    icon: LayoutGrid,
    description: "Website architecture, UX, conversion copy, and clear next-step logic.",
    items: ["Site architecture & UX", "Conversion copy & proof", "Next-step logic"],
  },
  {
    n: "03",
    key: "Scale",
    icon: Workflow,
    description: "CRM setup, lifecycle automation, AI-assisted workflows, and clean handoffs.",
    items: ["CRM & lifecycle setup", "Automated follow-up", "AI-assisted workflows"],
  },
  {
    n: "04",
    key: "Grow",
    icon: TrendingUp,
    description: "Search visibility, content demand, and attribution so every channel reports back.",
    items: ["Search & GEO visibility", "Content & demand", "Attribution & reporting"],
  },
];

export function HowIHelp() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="section-padding dot-texture"
      style={{ background: "var(--charcoal)" }}
    >
      <Container>
        {/* Header */}
        <div className="max-w-[720px]">
          <Eyebrow color="var(--clay)">THE SYSTEM</Eyebrow>
          <h2 className="dm-h2 mt-4" style={{ color: "var(--fg-on-dark-1)" }}>
            One connected system, built in four moves.
          </h2>
          <p className="dm-lead mt-3" style={{ color: "var(--fg-on-dark-2)" }}>
            Not a menu of disconnected services. A sequence — each stage sets up the next.
          </p>
        </div>

        {/* Stage rail */}
        <div className="relative mt-14">
          {/* Connecting line */}
          <div
            className="pointer-events-none absolute left-[7%] right-[7%] top-7 hidden h-[2px] lg:block"
            style={{
              background: "linear-gradient(90deg, var(--crimson), var(--clay))",
            }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-0">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              const isActive = active === i;
              return (
                <button
                  key={stage.key}
                  onClick={() => setActive(i)}
                  className="relative z-10 flex flex-col items-center gap-3 px-2 py-2 text-center"
                  aria-pressed={isActive}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-[240ms]"
                    style={{
                      background: isActive ? "var(--crimson)" : "var(--surface-dark)",
                      borderColor: isActive ? "var(--crimson)" : "var(--line-on-dark)",
                    }}
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.9}
                      style={{ color: isActive ? "white" : "var(--fg-on-dark-2)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold tracking-wider"
                      style={{ color: "var(--clay)", fontFamily: "var(--font-mono)" }}
                    >
                      {stage.n}
                    </div>
                    <div
                      className="mt-0.5 text-base font-bold transition-colors"
                      style={{
                        color: isActive ? "var(--fg-on-dark-1)" : "var(--fg-on-dark-2)",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {stage.key}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div
          className="mt-10 grid grid-cols-1 gap-8 rounded-[var(--radius-lg)] border-l-[3px] border p-8 lg:grid-cols-[1fr_1.4fr]"
          style={{
            background: "var(--surface-dark)",
            borderColor: "var(--line-on-dark)",
            borderLeftColor: "var(--crimson)",
          }}
        >
          <div>
            <div
              className="text-xs font-bold tracking-wider"
              style={{ color: "var(--clay)", fontFamily: "var(--font-mono)" }}
            >
              {stages[active].n} — Stage
            </div>
            <h3
              className="mt-2 text-3xl font-bold tracking-[-0.01em]"
              style={{ color: "var(--fg-on-dark-1)" }}
            >
              {stages[active].key}
            </h3>
            <p
              className="mt-3 text-base leading-relaxed"
              style={{ color: "var(--fg-on-dark-2)" }}
            >
              {stages[active].description}
            </p>
          </div>

          <ul className="flex flex-col justify-center gap-3">
            {stages[active].items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b pb-3 text-base"
                style={{
                  color: "var(--fg-on-dark-1)",
                  borderColor: "var(--line-on-dark)",
                }}
              >
                <Check
                  size={18}
                  strokeWidth={2.6}
                  className="shrink-0"
                  style={{ color: "var(--crimson)" }}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
