import { Container } from "@/components/layout/Container";
import { trustPoints } from "@/content/trust";

export function TrustStrip() {
  return (
    <section
      className="border-b border-t bg-cream"
      style={{ borderColor: "var(--line)" }}
    >
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2 py-5">
          {trustPoints.map((item, i) => (
            <span key={item} className="flex items-center">
              {i > 0 && (
                <span className="mx-3 text-[var(--crimson)]" aria-hidden="true">
                  &bull;
                </span>
              )}
              <span
                className="text-xs font-bold tracking-[0.14em] uppercase font-mono"
                style={{ color: "var(--fg2)" }}
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
