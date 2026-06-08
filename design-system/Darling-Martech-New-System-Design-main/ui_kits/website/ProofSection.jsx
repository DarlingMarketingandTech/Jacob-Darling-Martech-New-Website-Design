// ProofSection.jsx — dark premium proof / case wins
function ProofSection() {
  const wins = [
    { stat: "+40%", label: "order conversion", who: "Ecommerce", icon: "shopping-cart" },
    { stat: "+212%", label: "qualified leads", who: "Professional Services", icon: "user-plus" },
    { stat: "+90%", label: "online bookings", who: "Local Services", icon: "calendar-check" },
    { stat: "+45%", label: "patient growth", who: "Healthcare", icon: "heart-pulse" },
  ];
  return (
    <section style={{ background: "var(--navy)", padding: "92px 0" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          gap: 32, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 620 }}>
            <Eyebrow color="var(--clay)">Selected proof</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "clamp(2rem,3.4vw,3rem)",
              lineHeight: 1.06, letterSpacing: "-.02em", color: "#F5F3EE", margin: "20px 0 0" }}>
              Real systems. <span style={{ color: "var(--crimson)" }}>Real outcomes.</span>
            </h2>
          </div>
          <Button variant="link" icon="arrow-right" style={{ color: "var(--clay)" }}>See all case studies</Button>
        </div>

        <div className="dm-proof-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          gap: 18, marginTop: 48 }}>
          {wins.map(w => (
            <div key={w.label} style={{ background: "var(--surface-dark)", border: "1px solid var(--line-on-dark)",
              borderRadius: 12, padding: 26, boxShadow: "var(--shadow-dark)" }}>
              <Icon name={w.icon} size={24} className="dm-clay" stroke={1.8} />
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: 46,
                color: "#F5F3EE", letterSpacing: "-.03em", margin: "18px 0 2px", lineHeight: 1 }}>{w.stat}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--fg-on-dark-1)", fontWeight: 600 }}>{w.label}</div>
              <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--line-on-dark)",
                fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700, letterSpacing: ".12em",
                textTransform: "uppercase", color: "var(--fg-on-dark-3)" }}>{w.who}</div>
            </div>
          ))}
        </div>

        {/* editorial quote */}
        <div style={{ marginTop: 56, display: "flex", gap: 24, alignItems: "flex-start",
          borderTop: "1px solid var(--line-on-dark)", paddingTop: 44 }}>
          <div style={{ width: 3, alignSelf: "stretch", background: "var(--crimson)", borderRadius: 2 }}></div>
          <div>
            <p style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(1.6rem,2.6vw,2.3rem)",
              lineHeight: 1.24, letterSpacing: "-.01em", color: "#F5F3EE", margin: 0, maxWidth: 820 }}>
              Good strategy is the advantage. <em style={{ color: "var(--clay)", fontStyle: "italic" }}>Great systems</em> make it scalable.
            </p>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 12,
              letterSpacing: ".16em", textTransform: "uppercase", color: "var(--fg-on-dark-3)", marginTop: 18 }}>
              ✻ Darling Martech
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { ProofSection });
