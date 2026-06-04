import { Container } from "@/components/layout/Container";

const disciplines = [
  "Website Conversion",
  "CRM & Automation",
  "AI Workflows",
  "Reporting",
  "SEO/GEO",
];

export function TrustStrip() {
  return (
    <section
      className="border-b border-t"
      style={{ background: "var(--cream)", borderColor: "var(--line)" }}
    >
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2 py-5">
          {disciplines.map((item, i) => (
            <span key={item} className="flex items-center">
              {i > 0 && (
                <span
                  className="mx-3 text-[var(--crimson)]"
                  aria-hidden="true"
                >
                  &bull;
                </span>
              )}
              <span
                className="text-xs font-bold tracking-[0.14em] uppercase"
                style={{ color: "var(--fg2)", fontFamily: "var(--font-mono)" }}
              >
                {item}
              </span>
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
