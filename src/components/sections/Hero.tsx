import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const stages = ["Foundation", "Build", "Scale", "Grow"];

  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      {/* Dot texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(245,243,238,.045) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />
      {/* Crimson glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-16 h-[480px] w-[480px]"
        style={{
          background: "radial-gradient(circle, rgba(153,0,0,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
          {/* Left col */}
          <div>
            <Eyebrow color="var(--clay)">MARKETING. WEBSITES. AI. GROWTH.</Eyebrow>

            <h1
              className="dm-display mt-5"
              style={{ color: "var(--cream)" }}
            >
              SOLO MARKETER.
              <br />
              STRATEGIC THINKER.
              <br />
              <span style={{ color: "var(--crimson)" }}>SYSTEMS BUILDER.</span>
            </h1>

            <p
              className="dm-lead mt-6 max-w-[480px]"
              style={{ color: "var(--fg-on-dark-2)" }}
            >
              Your marketing tools are running. Your strategy exists. But the website, CRM,
              automation, and reporting aren&rsquo;t connected — so nothing compounds. I build the
              system that ties it all together.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="md" href="/contact" arrow>
                Book a Diagnostic Call
              </Button>
              <Button variant="secondary-light" size="md" href="/tools">
                Run the Growth Audit
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {["Direct Access", "No Handoffs", "Measurable Results"].map((badge, i) => (
                <span
                  key={badge}
                  className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase"
                  style={{ color: "var(--fg-on-dark-3)", fontFamily: "var(--font-mono)" }}
                >
                  {i > 0 && (
                    <span className="text-[var(--crimson)]" aria-hidden="true">
                      &bull;
                    </span>
                  )}
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right col — System Map card */}
          <div className="relative">
            <div
              className="rounded-[var(--radius-lg)] border p-6"
              style={{
                background: "var(--surface-dark)",
                borderColor: "var(--line-on-dark)",
                boxShadow: "var(--shadow-dark)",
              }}
            >
              <div
                className="mb-4 text-xs font-bold tracking-[0.16em] uppercase"
                style={{ color: "var(--clay)", fontFamily: "var(--font-mono)" }}
              >
                THE SYSTEM MAP
              </div>

              {/* Stages */}
              <div className="relative flex flex-col gap-0">
                {stages.map((stage, i) => (
                  <div key={stage} className="relative flex items-start gap-4">
                    {/* Connector line */}
                    {i < stages.length - 1 && (
                      <div
                        className="absolute left-[15px] top-8 z-0 h-full w-[2px]"
                        style={{
                          background:
                            "linear-gradient(180deg, var(--crimson), rgba(153,0,0,0.2))",
                        }}
                        aria-hidden="true"
                      />
                    )}
                    {/* Node */}
                    <div
                      className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-black"
                      style={{
                        background: "var(--crimson)",
                        borderColor: "var(--crimson)",
                        color: "white",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="pb-5">
                      <div
                        className="text-sm font-bold"
                        style={{ color: "var(--fg-on-dark-1)" }}
                      >
                        {stage}
                      </div>
                      <div
                        className="mt-0.5 text-xs leading-snug"
                        style={{ color: "var(--fg-on-dark-3)" }}
                      >
                        {
                          {
                            Foundation: "Strategy, audit & roadmap",
                            Build: "Website, UX & conversion",
                            Scale: "CRM, automation & AI",
                            Grow: "SEO, demand & reporting",
                          }[stage]
                        }
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-2 border-t pt-4 text-xs"
                style={{
                  borderColor: "var(--line-on-dark)",
                  color: "var(--fg-on-dark-3)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Each stage sets up the next. No handoffs.
              </div>
            </div>

            {/* Float badge */}
            <div
              className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-xl border px-4 py-3"
              style={{
                background: "var(--surface-dark)",
                borderColor: "var(--line-on-dark)",
                boxShadow: "var(--shadow-dark)",
              }}
            >
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: "var(--cool-sage)" }}
              />
              <div>
                <div
                  className="text-xs font-bold"
                  style={{ color: "var(--fg-on-dark-1)" }}
                >
                  You work with me — directly
                </div>
                <div className="text-xs" style={{ color: "var(--fg-on-dark-3)" }}>
                  One operator. Full accountability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
