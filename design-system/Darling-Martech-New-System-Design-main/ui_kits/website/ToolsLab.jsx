// ToolsLab.jsx — cream "diagnostic lab" of self-serve tools
function ToolsLab() {
  const tools = [
    { icon: "gauge", t: "Growth System Audit", d: "A structured read on where demand leaks across your funnel.", tag: "Most popular" },
    { icon: "search", t: "GEO Readiness Auditor", d: "How well you surface in local and AI-driven search.", tag: null },
    { icon: "activity", t: "Attribution Snapshot", d: "See which channels actually drive qualified pipeline.", tag: null },
    { icon: "calculator", t: "ROI Projection Calculator", d: "Model the return before you spend on the next initiative.", tag: null },
    { icon: "map", t: "Technical Roadmap", d: "A prioritized, sequenced plan for the next two quarters.", tag: null },
  ];
  const [sel, setSel] = React.useState(0);
  return (
    <section style={{ background: "var(--surface-sunken)", padding: "92px 0", borderTop: "1px solid var(--line)" }}>
      <Container>
        <div style={{ maxWidth: 720 }}>
          <Eyebrow>Diagnostics</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "clamp(2rem,3.4vw,3rem)",
            lineHeight: 1.06, letterSpacing: "-.02em", color: "var(--charcoal)", margin: "20px 0 14px" }}>
            Start with clarity before you spend more on marketing.
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.55, color: "var(--fg2)" }}>
            Free, self-serve tools that diagnose the real bottleneck — no call required.
          </p>
        </div>

        <div className="dm-lab" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginTop: 46 }}>
          <div style={{ display: "grid", gap: 12 }}>
            {tools.map((t, i) => (
              <button key={t.t} onClick={() => setSel(i)} style={{ textAlign: "left", cursor: "pointer",
                background: sel === i ? "#fff" : "transparent",
                border: `1px solid ${sel === i ? "var(--crimson)" : "var(--line)"}`,
                borderRadius: 10, padding: "16px 18px", display: "flex", alignItems: "center", gap: 16,
                transition: "all .15s var(--ease-out)", boxShadow: sel === i ? "var(--shadow-md)" : "none" }}>
                <div style={{ width: 42, height: 42, borderRadius: 8, flexShrink: 0,
                  background: sel === i ? "var(--crimson)" : "#fff", border: "1px solid var(--line)",
                  display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={t.icon} size={20} stroke={1.85} style={{ color: sel === i ? "#fff" : "var(--crimson)" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, color: "var(--charcoal)" }}>{t.t}</span>
                    {t.tag && <Badge variant="crimson">{t.tag}</Badge>}
                  </div>
                </div>
                <Icon name="arrow-right" size={18} style={{ color: sel === i ? "var(--crimson)" : "var(--fg3)" }} />
              </button>
            ))}
          </div>

          {/* featured diagnostic preview — faux dashboard */}
          <div style={{ background: "var(--charcoal)", borderRadius: 14, padding: 30, color: "#F5F3EE",
            boxShadow: "var(--shadow-lg)", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Icon name={tools[sel].icon} size={26} className="dm-clay" stroke={1.8} />
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 19 }}>{tools[sel].t}</span>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--fg-on-dark-2)", lineHeight: 1.55, margin: "14px 0 24px" }}>{tools[sel].d}</p>
            {/* faux bars */}
            <div style={{ display: "grid", gap: 14, marginTop: "auto" }}>
              {[["Conversion clarity", 72, "var(--crimson)"], ["System integration", 48, "var(--clay)"], ["Search visibility", 61, "var(--steel-blue)"]].map(([lbl, val, col]) => (
                <div key={lbl}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-sans)",
                    fontSize: 12.5, color: "var(--fg-on-dark-2)", marginBottom: 7 }}>
                    <span>{lbl}</span><span style={{ fontFamily: "var(--font-mono)", color: "#F5F3EE" }}>{val}%</span>
                  </div>
                  <div style={{ height: 8, borderRadius: 4, background: "rgba(245,243,238,.10)", overflow: "hidden" }}>
                    <div style={{ width: `${val}%`, height: "100%", background: col, borderRadius: 4 }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 26 }}>
              <Button variant="primary" icon="arrow-right" style={{ width: "100%", justifyContent: "center" }}>Run this diagnostic</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { ToolsLab });
