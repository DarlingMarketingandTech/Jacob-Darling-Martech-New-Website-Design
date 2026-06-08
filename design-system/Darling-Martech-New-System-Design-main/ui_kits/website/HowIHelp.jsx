// HowIHelp.jsx — Foundation → Build → Scale → Grow editorial systems map (dark blueprint)
function HowIHelp() {
  const stages = [
    { n: "01", k: "Foundation", icon: "compass", d: "Strategy, positioning, audit, roadmap.",
      items: ["Growth system audit", "Positioning & messaging", "Prioritized roadmap"] },
    { n: "02", k: "Build", icon: "layout-grid", d: "Website, UX, messaging, conversion paths.",
      items: ["Site architecture & UX", "Conversion copy & proof", "Next-step logic"] },
    { n: "03", k: "Scale", icon: "workflow", d: "CRM, automation, AI, workflows.",
      items: ["CRM & lifecycle setup", "Automated follow-up", "AI-assisted workflows"] },
    { n: "04", k: "Grow", icon: "trending-up", d: "SEO, content, demand, reporting.",
      items: ["Search & GEO visibility", "Content & demand", "Attribution & reporting"] },
  ];
  const [active, setActive] = React.useState(0);
  return (
    <section style={{ background: "var(--charcoal)", padding: "92px 0",
      backgroundImage: "radial-gradient(rgba(245,243,238,.04) 1px, transparent 1px)", backgroundSize: "18px 18px" }}>
      <Container>
        <div style={{ maxWidth: 720 }}>
          <Eyebrow color="var(--clay)">How I help</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "clamp(2rem,3.4vw,3rem)",
            lineHeight: 1.06, letterSpacing: "-.02em", color: "#F5F3EE", margin: "20px 0 14px" }}>
            One connected system, built in four moves.
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.55, color: "var(--fg-on-dark-2)" }}>
            Not a menu of disconnected services. A sequence — each stage sets up the next.
          </p>
        </div>

        {/* connected stage rail */}
        <div className="dm-stage-rail" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          gap: 0, marginTop: 56, position: "relative" }}>
          <div className="dm-rail-line" style={{ position: "absolute", top: 27, left: "12.5%", right: "12.5%",
            height: 2, background: "linear-gradient(90deg, var(--crimson), var(--clay))" }}></div>
          {stages.map((s, i) => (
            <button key={s.k} onClick={() => setActive(i)} style={{ background: "transparent", border: 0,
              cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
              position: "relative", zIndex: 2, padding: "0 8px" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%",
                background: active === i ? "var(--crimson)" : "var(--surface-dark)",
                border: `2px solid ${active === i ? "var(--crimson)" : "var(--line-on-dark)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all .2s var(--ease-out)" }}>
                <Icon name={s.icon} size={24} stroke={1.9} style={{ color: active === i ? "#fff" : "var(--fg-on-dark-2)" }} />
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--clay)", marginBottom: 4 }}>{s.n}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 17,
                  color: active === i ? "#F5F3EE" : "var(--fg-on-dark-2)" }}>{s.k}</div>
              </div>
            </button>
          ))}
        </div>

        {/* active detail panel */}
        <div style={{ marginTop: 40, background: "var(--surface-dark)", border: "1px solid var(--line-on-dark)",
          borderLeft: "3px solid var(--crimson)", borderRadius: 12, padding: "32px 36px",
          display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 36 }} className="dm-stage-detail">
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--clay)" }}>{stages[active].n} — Stage</div>
            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 30, color: "#F5F3EE",
              margin: "8px 0 10px", letterSpacing: "-.01em" }}>{stages[active].k}</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--fg-on-dark-2)", lineHeight: 1.5 }}>{stages[active].d}</p>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14, alignContent: "center" }}>
            {stages[active].items.map(it => (
              <li key={it} style={{ display: "flex", gap: 12, alignItems: "center",
                fontFamily: "var(--font-sans)", fontSize: 16, color: "#F5F3EE",
                borderBottom: "1px solid var(--line-on-dark)", paddingBottom: 13 }}>
                <Icon name="check" size={18} className="dm-crimson" stroke={2.6} style={{ flexShrink: 0 }} />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { HowIHelp });
