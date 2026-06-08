// Nav.jsx — sticky dark top navigation
function Nav() {
  const [open, setOpen] = React.useState(false);
  const links = ["Services", "Approach", "Case Studies", "About"];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(11,19,32,0.92)",
      backdropFilter: "blur(10px)", borderBottom: "1px solid var(--line-on-dark)" }}>
      <Container style={{ display: "flex", alignItems: "center", height: 74, gap: 24 }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="../../assets/logo-horizontal-dark.png" alt="Darling Martech" style={{ height: 34 }} />
        </a>
        <nav className="dm-navlinks" style={{ display: "flex", gap: 30, marginLeft: 18 }}>
          {links.map(l => (
            <a key={l} href="#" style={{ color: "var(--fg-on-dark-2)", textDecoration: "none",
              fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 500, transition: "color .15s" }}
              onMouseEnter={e => e.target.style.color = "#F5F3EE"}
              onMouseLeave={e => e.target.style.color = "var(--fg-on-dark-2)"}>{l}</a>
          ))}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 14 }}>
          <div className="dm-nav-cta"><Button variant="primary" style={{ padding: "11px 20px", fontSize: 14 }}>Book a Call</Button></div>
          <button className="dm-burger" onClick={() => setOpen(o => !o)} aria-label="Menu"
            style={{ display: "none", background: "transparent", border: 0, color: "#F5F3EE", cursor: "pointer" }}>
            <Icon name={open ? "x" : "menu"} size={26} />
          </button>
        </div>
      </Container>
      {open && (
        <div style={{ borderTop: "1px solid var(--line-on-dark)", padding: "12px 32px 20px" }}>
          {links.map(l => (
            <a key={l} href="#" style={{ display: "block", color: "var(--fg-on-dark-1)", textDecoration: "none",
              fontFamily: "var(--font-sans)", fontSize: 17, fontWeight: 600, padding: "12px 0",
              borderBottom: "1px solid var(--line-on-dark)" }}>{l}</a>
          ))}
          <div style={{ marginTop: 16 }}><Button variant="primary">Book a Call</Button></div>
        </div>
      )}
    </header>
  );
}
Object.assign(window, { Nav });
