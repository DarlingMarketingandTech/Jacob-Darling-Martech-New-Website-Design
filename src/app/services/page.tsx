import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { servicePaths } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Foundation, Build, Scale, and Grow service paths that connect website conversion, CRM, automation, visibility, and reporting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="SERVICES"
        headline="The Operator Layer in four stages."
        lead="Each stage solves a specific bottleneck, defines what gets built, and gives you a clear next step."
        breadcrumb="Darling Martech / Services"
      />

      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <Container>
          <Eyebrow className="mb-8">FOUNDATION / BUILD / SCALE / GROW</Eyebrow>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {servicePaths.map((path) => (
              <article
                key={path.id}
                className="rounded-[var(--radius-lg)] border bg-white p-6"
                style={{ borderColor: "var(--line)" }}
              >
                <p
                  className="text-xs font-bold tracking-[0.14em] uppercase"
                  style={{ color: "var(--crimson)", fontFamily: "var(--font-mono)" }}
                >
                  {path.stage}
                </p>
                <h2 className="dm-h3 mt-2" style={{ color: "var(--charcoal)" }}>
                  {path.title}
                </h2>

                <p className="mt-3 text-sm" style={{ color: "var(--fg2)" }}>
                  <strong>Problem it solves:</strong> {path.problem}
                </p>
                <p className="mt-2 text-sm" style={{ color: "var(--fg2)" }}>
                  <strong>Outcome:</strong> {path.outcome}
                </p>
                <p className="mt-2 text-sm" style={{ color: "var(--fg2)" }}>
                  <strong>Best fit:</strong> {path.bestFit}
                </p>

                <div className="mt-4 border-t pt-4" style={{ borderColor: "var(--line)" }}>
                  <p
                    className="text-xs font-bold tracking-[0.14em] uppercase"
                    style={{ color: "var(--fg3)", fontFamily: "var(--font-mono)" }}
                  >
                    What gets built
                  </p>
                  <ul className="mt-2 space-y-2">
                    {path.includes.map((item) => (
                      <li key={item} className="text-sm" style={{ color: "var(--charcoal)" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-4 text-sm" style={{ color: "var(--fg2)" }}>
                  <strong>Related proof or tool:</strong>{" "}
                  <Link href={path.relatedAsset.href} className="text-[var(--crimson)] hover:underline">
                    {path.relatedAsset.label}
                  </Link>
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Button variant="primary" size="sm" href={path.primaryCta.href}>
                    {path.primaryCta.label}
                  </Button>
                  {path.secondaryCta && (
                    <Button variant="secondary" size="sm" href={path.secondaryCta.href}>
                      {path.secondaryCta.label}
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
