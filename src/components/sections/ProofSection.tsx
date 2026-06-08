import { ShoppingCart, UserPlus, CalendarCheck, HeartPulse } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { globalCtas } from "@/content/ctas";

const wins = [
  {
    stat: "+40%",
    label: "order conversion",
    who: "Ecommerce",
    Icon: ShoppingCart,
  },
  {
    stat: "+212%",
    label: "qualified leads",
    who: "Professional Services",
    Icon: UserPlus,
  },
  {
    stat: "+90%",
    label: "online bookings",
    who: "Local Services",
    Icon: CalendarCheck,
  },
  {
    stat: "+45%",
    label: "patient growth",
    who: "Healthcare",
    Icon: HeartPulse,
  },
];

export function ProofSection() {
  return (
    <section className="section-padding" style={{ background: "var(--navy)" }}>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[760px]">
            <Eyebrow color="var(--clay)">SELECTED PROOF</Eyebrow>
            <h2 className="dm-h2 mt-4" style={{ color: "var(--fg-on-dark-1)" }}>
              Proof that connected systems work harder.
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--fg-on-dark-2)" }}>
              Every project starts with a bottleneck. The work is not more activity for its own
              sake. It is a clearer path from interest to action, follow-up, measurement, and
              growth.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {wins.map((w) => (
            <div
              key={w.label}
              className="rounded-[var(--radius-lg)] border p-6"
              style={{
                background: "var(--surface-dark)",
                borderColor: "var(--line-on-dark)",
                boxShadow: "var(--shadow-dark)",
              }}
            >
              <w.Icon size={24} strokeWidth={1.8} style={{ color: "var(--clay)" }} aria-hidden="true" />
              <div
                className="mt-4 text-5xl font-black leading-none tracking-[-0.03em]"
                style={{ color: "var(--fg-on-dark-1)" }}
              >
                {w.stat}
              </div>
              <div className="mt-1 text-[15px] font-semibold" style={{ color: "var(--fg-on-dark-1)" }}>
                {w.label}
              </div>
              <div
                className="mt-4 border-t pt-3 text-xs font-bold tracking-[0.12em] uppercase"
                style={{
                  borderColor: "var(--line-on-dark)",
                  color: "var(--fg-on-dark-3)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {w.who}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="primary" href={globalCtas.seeProofInAction.href}>
            {globalCtas.seeProofInAction.label}
          </Button>
          <Button variant="secondary-light" href={globalCtas.findGrowthLeak.href}>
            {globalCtas.findGrowthLeak.label}
          </Button>
        </div>

        <div className="mt-14 flex gap-6 border-t pt-10" style={{ borderColor: "var(--line-on-dark)" }}>
          <div
            className="hidden w-[3px] self-stretch rounded-sm sm:block"
            style={{ background: "var(--crimson)" }}
            aria-hidden="true"
          />
          <div>
            <blockquote className="dm-quote max-w-[820px]" style={{ color: "var(--fg-on-dark-1)" }}>
              Clarity. Connection. Compounding.
            </blockquote>
            <div
              className="mt-4 text-xs font-bold tracking-[0.16em] uppercase"
              style={{ color: "var(--fg-on-dark-3)", fontFamily: "var(--font-mono)" }}
            >
              &#10043; Darling Martech
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
