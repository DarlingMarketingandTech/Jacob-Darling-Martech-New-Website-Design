"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { diagnostics } from "@/content/diagnostics";

export function ToolsLab() {
  const [selected, setSelected] = useState(0);
  const active = diagnostics[selected];

  if (!active) {
    return null;
  }

  return (
    <section id="growth-leak-finder" className="section-padding bg-surface-sunken">
      <Container>
        <div className="mb-10 max-w-[760px]">
          <Eyebrow>DIAGNOSTIC STARTING POINTS</Eyebrow>
          <h2 className="dm-h2 mt-4" style={{ color: "var(--charcoal)" }}>
            Choose the problem you want to diagnose first.
          </h2>
          <p className="dm-lead mt-3" style={{ color: "var(--fg2)" }}>
            Start with the diagnostic that matches what feels broken: website conversion,
            follow-up, visibility, automation, or the whole growth system.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr]">
          <div className="flex flex-col gap-1">
            {diagnostics.map((tool, i) => {
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
                    }}
                  >
                    {tool.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="rounded-[var(--radius-lg)] border bg-white p-8"
            style={{ borderColor: "var(--line)", boxShadow: "var(--shadow-md)" }}
          >
            <div className="mb-1 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cool-sage" aria-hidden="true" />
              <span
                className="text-xs font-bold tracking-[0.14em] uppercase font-mono"
                style={{ color: "var(--fg3)" }}
              >
                DIAGNOSTIC PREVIEW
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
                className="mb-3 text-xs font-bold tracking-[0.14em] uppercase font-mono"
                style={{ color: "var(--fg3)" }}
              >
                WHO IT IS FOR
              </div>
              <p className="text-sm" style={{ color: "var(--charcoal)" }}>
                {active.audience}
              </p>
            </div>

            <div className="mt-6 border-t pt-5" style={{ borderColor: "var(--line)" }}>
              <div
                className="mb-3 text-xs font-bold tracking-[0.14em] uppercase font-mono"
                style={{ color: "var(--fg3)" }}
              >
                WHAT YOU RECEIVE
              </div>
              <ul className="space-y-2">
                {active.outputs.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--charcoal)" }}>
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <Button variant="primary" size="sm" href={active.href}>
                {active.ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
