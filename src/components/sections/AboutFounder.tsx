import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const chips = [
  "Direct access",
  "Strategy + implementation",
  "Systems builder",
  "Measurable results",
  "Indianapolis-based",
];

export function AboutFounder() {
  return (
    <section className="section-padding bg-cream">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-lg)] border"
            style={{
              borderColor: "var(--line)",
              maxWidth: 440,
            }}
          >
            <Image
              src="/founder-workspace.jpg"
              alt="Jacob Darling at his workspace — Darling Martech founder"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 440px"
              priority
            />
          </div>

          <div className="pt-2">
            <Eyebrow>ABOUT</Eyebrow>

            <h2 className="dm-h2 mt-4" style={{ color: "var(--charcoal)" }}>
              One operator. Full accountability.
            </h2>

            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--fg2)" }}>
              I&rsquo;m Jacob Darling. I work directly with growing businesses to connect the parts
              of marketing that usually drift apart: strategy, websites, CRM, automation, AI
              workflows, visibility, and reporting.
            </p>

            <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--fg2)" }}>
              Most marketing problems are not traffic problems first. They are disconnected-system
              problems. The offer is unclear. The website does not move people. Follow-up depends
              on memory. Reporting does not show what to do next.
            </p>

            <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--fg2)" }}>
              I help diagnose the real bottleneck, build the fix, and stay close enough to make
              sure the system can actually run.
            </p>

            <div className="mt-8 border-l-[3px] pl-5" style={{ borderColor: "var(--crimson)" }}>
              <p className="dm-quote" style={{ color: "var(--charcoal)" }}>
                Good strategy points the way. A connected system makes it repeatable.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-[var(--radius-pill)] border px-3.5 py-1.5 text-xs font-bold tracking-[0.12em] uppercase"
                  style={{
                    borderColor: "var(--line-strong)",
                    color: "var(--charcoal)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm font-mono" style={{ color: "var(--fg3)" }}>
              &#10043; Jacob Darling &mdash; Darling Martech
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
