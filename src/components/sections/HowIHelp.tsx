"use client";

import { useState } from "react";
import { Compass, LayoutGrid, Workflow, TrendingUp, Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { servicePaths } from "@/content/services";

const stageMetadata = [
  {
    n: "01",
    key: "Foundation",
    icon: Compass,
    description:
      "Clarify the bottleneck, position the offer, and map the highest-leverage path forward.",
  },
  {
    n: "02",
    key: "Build",
    icon: LayoutGrid,
    description: "Turn the website into a clearer path from attention to action.",
  },
  {
    n: "03",
    key: "Scale",
    icon: Workflow,
    description: "Connect lead capture, follow-up, CRM, automation, and AI-assisted workflows.",
  },
  {
    n: "04",
    key: "Grow",
    icon: TrendingUp,
    description:
      "Improve visibility, content, reporting, and measurement so the system keeps learning.",
  },
];

const stages = stageMetadata.map((meta) => ({
  ...meta,
  items:
    servicePaths.find((sp) => sp.stage === meta.key)?.includes ||
    [],
}));

export function HowIHelp() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding dot-texture bg-charcoal">
      <Container>
        <SectionHeader
          eyebrow="THE OPERATOR LAYER"
          eyebrowColor="var(--clay)"
          headline="The Operator Layer connects the parts that usually drift apart."
          lead="Most growth problems are not fixed by another campaign. They are fixed by connecting the layer underneath it: offer, website, CRM, automation, visibility, and reporting."
          dark
          className="max-w-[820px]"
        />

        <div className="relative mt-14">
          <div
            className="pointer-events-none absolute left-[7%] right-[7%] top-7 hidden h-[2px] lg:block"
            style={{
              background: "linear-gradient(90deg, var(--crimson), var(--clay))",
            }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-0" role="tablist">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              const isActive = active === i;
              return (
                <button
                  key={stage.key}
                  onClick={() => setActive(i)}
                  className="relative z-10 flex flex-col items-center gap-3 px-2 py-2 text-center"
                  role="tab"
                  aria-selected={isActive}
                  id={`stage-tab-${stage.key}`}
                  aria-controls={`stage-panel-${stage.key}`}
                  tabIndex={isActive ? 0 : -1}
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
                      className="text-xs font-bold tracking-wider font-mono"
                      style={{ color: "var(--clay)" }}
                    >
                      {stage.n}
                    </div>
                    <div
                      className="mt-0.5 text-base font-bold transition-colors"
                      style={{
                        color: isActive ? "var(--fg-on-dark-1)" : "var(--fg-on-dark-2)",
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

        <div
          className="mt-10 grid grid-cols-1 gap-8 rounded-[var(--radius-lg)] border-l-[3px] border p-8 lg:grid-cols-[1fr_1.4fr]"
          style={{
            background: "var(--surface-dark)",
            borderColor: "var(--line-on-dark)",
            borderLeftColor: "var(--crimson)",
          }}
          role="tabpanel"
          id={`stage-panel-${stages[active].key}`}
          aria-labelledby={`stage-tab-${stages[active].key}`}
        >
          <div>
            <div
              className="text-xs font-bold tracking-wider font-mono"
              style={{ color: "var(--clay)" }}
            >
              {stages[active].n} — Stage
            </div>
            <h3 className="mt-2 text-3xl font-bold tracking-[-0.01em]" style={{ color: "var(--fg-on-dark-1)" }}>
              {stages[active].key}
            </h3>
            <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--fg-on-dark-2)" }}>
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
