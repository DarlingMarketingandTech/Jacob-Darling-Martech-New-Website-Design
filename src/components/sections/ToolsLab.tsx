"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const tools = [
  {
    id: "audit",
    label: "Growth System Audit",
    description:
      "Identify the highest-leverage gaps in your marketing system — website, CRM, automation, and demand — before you spend on anything new.",
    outputs: ["System gap scorecard", "Priority fix list", "Recommended next move"],
  },
  {
    id: "geo",
    label: "GEO Readiness Auditor",
    description:
      "Assess how well your content and site structure are positioned for AI-driven search discovery (Generative Engine Optimization).",
    outputs: ["GEO readiness score", "Content gap map", "Entity & structure checklist"],
  },
  {
    id: "attribution",
    label: "Attribution Snapshot",
    description:
      "Get a clear picture of which channels and touchpoints are generating pipeline — even without a complex analytics stack.",
    outputs: ["Channel attribution map", "Data quality check", "Reporting recommendations"],
  },
  {
    id: "roi",
    label: "ROI Projection Calculator",
    description:
      "Model the expected return before committing budget — based on your current conversion rates and average deal value.",
    outputs: ["Revenue projection", "Break-even timeline", "Sensitivity ranges"],
  },
  {
    id: "roadmap",
    label: "Technical Roadmap",
    description:
      "A sequenced plan for your marketing tech stack — what to fix, what to connect, and what to defer.",
    outputs: ["Stack audit", "Integration priorities", "Phased roadmap"],
  },
];

export function ToolsLab() {
  const [selected, setSelected] = useState(0);
  const active = tools[selected];

  return (
    <section className="section-padding" style={{ background: "var(--surface-sunken)" }}>
      <Container>
        <div className="mb-10 max-w-[640px]">
          <Eyebrow>DIAGNOSTIC TOOLS</Eyebrow>
          <h2 className="dm-h2 mt-4" style={{ color: "var(--charcoal)" }}>
            Find the gaps before you spend.
          </h2>
          <p className="dm-lead mt-3" style={{ color: "var(--fg2)" }}>
            Run a diagnostic before committing to any campaign, project, or retainer.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr]">
          {/* Tool selector */}
          <div className="flex flex-col gap-1">
            {tools.map((tool, i) => {
              const isActive = selected === i;
              return (
                <button
                  key={tool.id}
                  onClick={() => setSelected(i)}
                  className="rounded-[var(--radius-md)] border px-4 py-3 text-left transition-all duration-[140ms]"
                  style={{
                    background: isActive ? "white" : "transparent",
                    borderColor: isActive ? "var(--crimson)" : "var(--line)",
                    boxShadow: isActive ? "var(--shadow-sm)" : "none",
                  }}
                  aria-pressed={isActive}
                >
                  <span
                    className="text-sm font-semibold transition-colors"
                    style={{
                      color: isActive ? "var(--crimson)" : "var(--charcoal)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {tool.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dashboard preview panel */}
          <div
            className="rounded-[var(--radius-lg)] border bg-white p-8"
            style={{ borderColor: "var(--line)", boxShadow: "var(--shadow-md)" }}
          >
            <div className="mb-1 flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--cool-sage)" }}
                aria-hidden="true"
              />
              <span
                className="text-xs font-bold tracking-[0.14em] uppercase"
                style={{ color: "var(--fg3)", fontFamily: "var(--font-mono)" }}
              >
                TOOL PREVIEW
              </span>
            </div>
            <h3 className="dm-h3 mt-3" style={{ color: "var(--charcoal)" }}>
              {active.label}
            </h3>
            <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--fg2)" }}>
              {active.description}
            </p>

            <div className="mt-6 border-t pt-5" style={{ borderColor: "var(--line)" }}>
              <div
                className="mb-3 text-xs font-bold tracking-[0.14em] uppercase"
                style={{ color: "var(--fg3)", fontFamily: "var(--font-mono)" }}
              >
                OUTPUTS
              </div>
              <ul className="space-y-2">
                {active.outputs.map((o) => (
                  <li
                    key={o}
                    className="flex items-center gap-2 text-sm font-medium"
                    style={{ color: "var(--charcoal)" }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ background: "var(--crimson)" }}
                      aria-hidden="true"
                    />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <Button variant="primary" size="sm" href="/tools">
                Run This Tool
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
