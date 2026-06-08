// AboutFounder.jsx — cream, the solo-operator story
function AboutFounder() {
  const values = [
    { icon: "target", t: "Strategic" },
    { icon: "lightbulb", t: "Creative" },
    { icon: "mountain", t: "Grounded" },
    { icon: "shield-check", t: "Accountable" },
    { icon: "cpu", t: "Modern" },
  ];
  return (
    <section style={{ background: "var(--cream)", padding: "92px 0" }}>
      <Container>
        <div className="dm-about" style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 56, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <img src="../../assets/founder-desk.jpg" alt="Founder"
              style={{ width: "100%", borderRadius: 14, display: "block", aspectRatio: "4/5",
                objectFit: "cover", border: "1px solid var(--line)", boxShadow: "var(--shadow-lg)" }} />
            <div style={{ position: "absolute", right: -16, bottom: 28, background: "var(--crimson)",
              color: "#fff", borderRadius: 12, padding: "16px 20px", boxShadow: "var(--shadow-lg)" }}>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: 26, lineHeight: 1 }}>1:1</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: ".05em", marginTop: 4 }}>Direct, the whole way</div>
            </div>
          </div>
          <div>
            <Eyebrow>The solo advantage</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "clamp(1.9rem,3vw,2.7rem)",
              lineHeight: 1.1, letterSpacing: "-.02em", color: "var(--charcoal)", margin: "20px 0 18px" }}>
              No handoffs. No bloated agency layers. <span style={{ color: "var(--crimson)" }}>Just one strategist building the system with you.</span>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.6, color: "var(--fg2)", margin: 0, maxWidth: 540 }}>
              Darling Martech is the one-person partner businesses rely on to bring clarity, build
              systems, and drive measurable growth. Creative and technical, practical and resilient —
              polished enough to trust, not polished to death.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "28px 0 26px" }}>
              {values.map(v => (
                <div key={v.t} style={{ display: "flex", alignItems: "center", gap: 9, background: "#fff",
                  border: "1px solid var(--line)", borderRadius: 999, padding: "9px 16px 9px 13px" }}>
                  <Icon name={v.icon} size={17} className="dm-crimson" stroke={1.9} />
                  <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13.5, color: "var(--charcoal)" }}>{v.t}</span>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 13,
              letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg3)" }}>
              Focused. <span style={{ color: "var(--crimson)" }}>·</span> Resourceful. <span style={{ color: "var(--crimson)" }}>·</span> Reliable. <span style={{ color: "var(--crimson)" }}>·</span> Real-world results.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { AboutFounder });
