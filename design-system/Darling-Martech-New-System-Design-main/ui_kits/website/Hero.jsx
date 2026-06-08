// Hero.jsx — dark hero with display headline + founder workspace image
function Hero() {
  return (
    <section id="top" style={{ position: "relative", background: "var(--navy)",
      backgroundImage: "radial-gradient(rgba(245,243,238,.045) 1px, transparent 1px)",
      backgroundSize: "16px 16px", overflow: "hidden" }}>
      <Container style={{ position: "relative", zIndex: 2 }}>
        <div className="dm-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr",
          gap: 56, alignItems: "center", padding: "84px 0 90px" }}>
          <div>
            <Eyebrow color="var(--clay)">One accountable partner</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, textTransform: "uppercase",
              fontSize: "clamp(2.6rem, 5vw, 4.4rem)", lineHeight: .98, letterSpacing: "-.02em",
              color: "#F5F3EE", margin: "22px 0 0" }}>
              Solo marketer.<br />Strategic thinker.<br /><span style={{ color: "var(--crimson)" }}>Systems builder.</span>
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 19, lineHeight: 1.55,
              color: "var(--fg-on-dark-2)", maxWidth: 480, margin: "26px 0 0" }}>
              I help growing businesses connect strategy, websites, CRM, automation, and demand
              generation into one system that actually works.
            </p>
            <div style={{ display: "flex", gap: 16, marginTop: 34, flexWrap: "wrap" }}>
              <Button variant="primary" icon="arrow-right">Book a Diagnostic Call</Button>
              <Button variant="secondary-light">See Case Studies</Button>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", borderRadius: 14, overflow: "hidden",
              border: "1px solid var(--line-on-dark)", boxShadow: "var(--shadow-dark)" }}>
              <img src="../../assets/founder-desk.jpg" alt="Founder at work"
                style={{ width: "100%", display: "block", aspectRatio: "4/5", objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", bottom: -18, left: -18, background: "var(--surface-dark)",
              border: "1px solid var(--line-on-dark)", borderRadius: 12, padding: "16px 20px",
              display: "flex", alignItems: "center", gap: 14, boxShadow: "var(--shadow-dark)" }}>
              <Icon name="badge-check" size={26} className="dm-crimson" stroke={1.9} />
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 15, color: "#F5F3EE" }}>No handoffs</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "var(--fg-on-dark-3)" }}>You work with me, directly</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { Hero });
