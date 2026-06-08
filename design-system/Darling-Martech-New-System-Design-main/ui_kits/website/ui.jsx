// ui.jsx — shared atoms for the Darling Martech website UI kit
// Exposes: Icon, Button, Eyebrow, Badge, Rule, Section, Container

function Icon({ name, size = 20, stroke = 2, className = "", style = {} }) {
  // Renders a Lucide glyph. lucide.createIcons() is invoked app-wide on each render.
  return (
    <i
      data-lucide={name}
      className={className}
      style={{ width: size, height: size, strokeWidth: stroke, display: "inline-flex", ...style }}
    ></i>
  );
}

function Button({ variant = "primary", children, icon, onClick, type, style = {} }) {
  const base = {
    fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, cursor: "pointer",
    display: "inline-flex", alignItems: "center", gap: 9, border: 0, whiteSpace: "nowrap",
    transition: "all .18s var(--ease-out)", letterSpacing: ".01em", lineHeight: 1,
  };
  const variants = {
    primary: { background: "var(--crimson)", color: "#fff", padding: "15px 26px", borderRadius: 8 },
    secondary: { background: "transparent", color: "var(--crimson)", padding: "13.5px 24px", borderRadius: 8, border: "1.5px solid var(--crimson)" },
    "secondary-light": { background: "transparent", color: "#F5F3EE", padding: "13.5px 24px", borderRadius: 8, border: "1.5px solid rgba(245,243,238,.45)" },
    link: { background: "transparent", color: "var(--crimson)", padding: "6px 0", fontWeight: 700 },
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover ? {
    primary: { background: "var(--burgundy)" },
    secondary: { background: "var(--crimson)", color: "#fff" },
    "secondary-light": { background: "rgba(245,243,238,.10)", borderColor: "#F5F3EE" },
    link: { gap: 13 },
  }[variant] : {};
  return (
    <button type={type} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...hoverStyle, ...style }}>
      {children}
      {icon && <Icon name={icon} size={17} stroke={2.4}
        style={{ transition: "transform .18s var(--ease-out)", transform: hover && variant === "link" ? "translateX(3px)" : "none" }} />}
    </button>
  );
}

function Eyebrow({ children, color = "var(--crimson)", style = {} }) {
  return (
    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 12.5,
      letterSpacing: ".16em", textTransform: "uppercase", color, display: "inline-flex",
      alignItems: "center", gap: 10, ...style }}>
      <span style={{ width: 22, height: 1.5, background: color, display: "inline-block" }}></span>
      {children}
    </div>
  );
}

function Badge({ children, variant = "neutral" }) {
  const v = {
    neutral: { background: "var(--charcoal)", color: "var(--cream)" },
    crimson: { background: "var(--crimson)", color: "#fff" },
    outline: { background: "transparent", color: "var(--charcoal)", border: "1.5px solid var(--line-strong)" },
  }[variant];
  return (
    <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11,
      letterSpacing: ".16em", textTransform: "uppercase", padding: "7px 14px",
      borderRadius: 6, whiteSpace: "nowrap", ...v }}>{children}</span>
  );
}

function Rule({ color = "var(--crimson)", width = 220, taper = true }) {
  const ln = taper ? `linear-gradient(90deg, transparent, ${color})` : color;
  const lnR = taper ? `linear-gradient(90deg, ${color}, transparent)` : color;
  return (
    <div style={{ display: "flex", alignItems: "center", width, maxWidth: "100%" }}>
      <div style={{ flex: 1, height: 1.5, background: ln }}></div>
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: color, margin: "0 0" }}></div>
      <div style={{ flex: 1, height: 1.5, background: lnR }}></div>
    </div>
  );
}

function Container({ children, style = {} }) {
  return <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", width: "100%", boxSizing: "border-box", ...style }}>{children}</div>;
}

Object.assign(window, { Icon, Button, Eyebrow, Badge, Rule, Container });
