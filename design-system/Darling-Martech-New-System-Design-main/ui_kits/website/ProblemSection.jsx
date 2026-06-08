// ProblemSection.jsx — cream, crimson headline, 4 cards + interactive accordion
function ProblemSection() {
  const cards = [
    { icon: "layout-grid", t: "Website doesn't convert", d: "Visitors arrive, but structure, proof, and next step don't move them to act." },
    { icon: "inbox", t: "Leads fall through cracks", d: "Follow-up depends on memory — routing, timing, and ownership stay manual." },
    { icon: "unplug", t: "Tools don't talk", d: "CRM and inboxes tell different stories. Reporting and operations drift apart." },
    { icon: "search-x", t: "Marketing lacks visibility", d: "Good work exists, but search, local, and authority signals are under-structured." },
  ];
  const breaks = [
    { tag: "Clarity problem", t: "The website looks fine, but it does not move people.",
      d: "Visitors can reach the site, but the structure, proof, and next step are not sharp enough to turn intent into action.",
      points: ["Offer is understandable only after scrolling", "Proof is present but not decision-useful", "The next step feels buried or generic"] },
    { tag: "System problem", t: "Leads arrive, but follow-up depends on memory.",
      d: "The business has tools, but routing, reminders, lifecycle logic, and ownership are still too manual to trust at scale.",
      points: ["CRM and inboxes tell different stories", "Follow-up timing varies by person", "Reporting and operations drift apart"] },
    { tag: "Visibility problem", t: "The business is stronger than its discoverability.",
      d: "Good work exists, but search visibility, local trust, and authority signals are too weak to convert that strength into steady demand.",
      points: ["Search visibility is inconsistent", "Local or AI search signals are under-structured", "The right pages are not carrying the proof"] },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ background: "var(--cream)", padding: "92px 0" }}>
      <Container>
        <div style={{ maxWidth: 760 }}>
          <Eyebrow>The real problem</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "clamp(2rem,3.4vw,3rem)",
            lineHeight: 1.08, letterSpacing: "-.02em", color: "var(--crimson)", margin: "20px 0 0" }}>
            Most businesses don't have a marketing problem.<br />
            <span style={{ color: "var(--charcoal)" }}>They have a disconnected-system problem.</span>
          </h2>
        </div>

        <div className="dm-prob-cards" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          gap: 18, marginTop: 46 }}>
          {cards.map(c => (
            <div key={c.t} style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 12,
              padding: 24, boxShadow: "var(--shadow-md)" }}>
              <Icon name={c.icon} size={30} className="dm-crimson" stroke={1.75} />
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 16.5,
                color: "var(--charcoal)", margin: "16px 0 8px" }}>{c.t}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.55, color: "var(--fg2)" }}>{c.d}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "320px 1fr", gap: 48 }} className="dm-breaks">
          <div>
            <Eyebrow>Where it breaks</Eyebrow>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.5, color: "var(--fg2)", marginTop: 18 }}>
              Most growth bottlenecks start in one of three places. Usually not a traffic problem first.
            </p>
          </div>
          <div style={{ borderTop: "1px solid var(--line)" }}>
            {breaks.map((b, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: "100%", background: "transparent",
                    border: 0, cursor: "pointer", display: "flex", alignItems: "center", gap: 18,
                    padding: "24px 0", textAlign: "left" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--crimson)", fontWeight: 600 }}>0{i + 1}</span>
                    <span style={{ flex: 1, fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 19,
                      letterSpacing: "-.01em", color: isOpen ? "var(--crimson)" : "var(--charcoal)" }}>{b.t}</span>
                    <Icon name={isOpen ? "minus" : "plus"} size={20} className="dm-fg3" />
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 0 26px 42px" }}>
                      <Badge variant="outline">{b.tag}</Badge>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: 15.5, lineHeight: 1.6,
                        color: "var(--fg2)", margin: "16px 0 16px" }}>{b.d}</p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                        {b.points.map(p => (
                          <li key={p} style={{ display: "flex", gap: 11, alignItems: "flex-start",
                            fontFamily: "var(--font-sans)", fontSize: 14.5, color: "var(--charcoal)" }}>
                            <Icon name="corner-down-right" size={16} className="dm-crimson" style={{ marginTop: 2, flexShrink: 0 }} />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { ProblemSection });
