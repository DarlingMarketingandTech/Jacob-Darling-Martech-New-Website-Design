// TrustStrip.jsx — cream strip with disciplines, plus markets served
function TrustStrip() {
  const disciplines = ["Strategy", "Websites", "CRM", "Automation", "SEO", "Reporting"];
  return (
    <section style={{ background: "var(--cream)", borderBottom: "1px solid var(--line)" }}>
      <Container style={{ padding: "26px 32px" }}>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700,
          letterSpacing: ".16em", textTransform: "uppercase", color: "var(--fg3)", textAlign: "center",
          marginBottom: 18 }}>Trusted by businesses ready to grow smarter</div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",
          flexWrap: "wrap", gap: "14px 0" }}>
          {disciplines.map((d, i) => (
            <React.Fragment key={d}>
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 17,
                color: "var(--charcoal)", padding: "0 22px", letterSpacing: ".01em" }}>{d}</span>
              {i < disciplines.length - 1 &&
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--crimson)" }}></span>}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { TrustStrip });
