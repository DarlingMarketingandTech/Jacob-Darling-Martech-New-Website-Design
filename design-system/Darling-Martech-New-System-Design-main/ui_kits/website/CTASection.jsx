// CTASection.jsx — dark crimson/navy closing call-to-action + Footer
function CTASection() {
  return (
    <section style={{ position: "relative", background: "var(--burgundy)",
      backgroundImage: "linear-gradient(135deg, var(--burgundy) 0%, #4a0a12 55%, var(--navy) 100%)",
      overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(245,243,238,.05) 1px, transparent 1px)", backgroundSize: "18px 18px" }}></div>
      <Container style={{ position: "relative", zIndex: 2, padding: "96px 32px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <Rule color="rgba(245,243,238,.55)" width={160} />
        </div>
        <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, textTransform: "uppercase",
          fontSize: "clamp(2.2rem,4.4vw,3.8rem)", lineHeight: 1.02, letterSpacing: "-.02em",
          color: "#F5F3EE", margin: "0 auto", maxWidth: 880 }}>
          Let's find the gaps in your growth system.
        </h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.55, color: "rgba(245,243,238,.78)",
          maxWidth: 560, margin: "24px auto 36px" }}>
          One diagnostic call. A clear read on the real bottleneck — and the system that fixes it.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary" icon="arrow-right" style={{ background: "#F5F3EE", color: "var(--burgundy)" }}>Book Your Diagnostic Call</Button>
          <Button variant="secondary-light">Run the Growth Audit</Button>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: "Services", links: ["Strategy & Audit", "Websites & UX", "CRM & Automation", "SEO & Demand"] },
    { h: "Company", links: ["Approach", "Case Studies", "About", "Contact"] },
    { h: "Diagnostics", links: ["Growth System Audit", "GEO Readiness", "Attribution Snapshot", "ROI Calculator"] },
  ];
  return (
    <footer style={{ background: "var(--charcoal)", padding: "64px 0 40px" }}>
      <Container>
        <div className="dm-footer" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40 }}>
          <div>
            <img src="../../assets/logo-horizontal-dark.png" alt="Darling Martech" style={{ height: 36 }} />
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--fg-on-dark-2)",
              margin: "20px 0 0", maxWidth: 280 }}>
              Helping businesses build smarter systems, better websites, and stronger growth engines.
            </p>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, letterSpacing: ".16em",
              textTransform: "uppercase", color: "var(--clay)", marginTop: 20 }}>
              Marketing · Websites · AI · Growth
            </div>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 13, letterSpacing: ".1em",
                textTransform: "uppercase", color: "#F5F3EE", marginBottom: 16 }}>{c.h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 11 }}>
                {c.links.map(l => (
                  <li key={l}><a href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 14,
                    color: "var(--fg-on-dark-2)", textDecoration: "none" }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid var(--line-on-dark)", marginTop: 44, paddingTop: 24,
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
          fontFamily: "var(--font-sans)", fontSize: 12.5, color: "var(--fg-on-dark-3)" }}>
          <span>© 2026 Darling Martech. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </Container>
    </footer>
  );
}
Object.assign(window, { CTASection, Footer });
