# Darling Martech — Design System

> Strategy with systems. Creativity with purpose. Growth with accountability.

This is the design system for **Darling Martech**, a solo-operator marketing-technology
practice. It contains brand foundations (color, type, motifs), real logo assets, a
component-level UI kit recreating the marketing website, and ready-to-use HTML preview
cards.

---

## 1. Company / Product Context

**Darling Martech** is a *one-person, fully accountable* growth partner — positioned as
"creative operator meets growth architect." The pitch: most businesses don't have a
*marketing* problem, they have a **disconnected-system problem**. Darling Martech provides
a single operating layer across **website conversion, CRM, automation, reporting, and
visibility (SEO/GEO)** so the real bottleneck gets diagnosed, rebuilt, and tied to better
decisions.

- **Tagline / lockup line:** `MARKETING. WEBSITES. AI. GROWTH.`
- **Positioning line:** "Solo marketer. Strategic thinker. Systems builder."
- **The Solo Advantage:** Direct Access · Strategic Execution · Systems Builder · Measurable Results
- **Service arc:** **Foundation → Build → Scale → Grow**
  - *Foundation* — strategy, positioning, audit, roadmap
  - *Build* — website, UX, messaging, conversion paths
  - *Scale* — CRM, automation, AI, workflows
  - *Grow* — SEO, content, demand, reporting
- **Diagnostic tools** (lead magnets, presented as a "lab"): Growth System Audit · GEO
  Readiness Auditor · Attribution Snapshot · ROI Projection Calculator · Technical Roadmap
- **Proof points (case wins):** +40% order conversion · +212% qualified leads · +90% online
  bookings · +45% patient growth.
- **Markets served:** Healthcare · Local Services · Ecommerce · SaaS · Nonprofit ·
  Professional Services.

### Product surfaces represented
1. **Marketing website** — the primary surface. Dark navy/charcoal hero with crimson
   accents, cream editorial mid-sections, dark premium proof sections. Recreated in
   `ui_kits/website/`.

### Source material
- **Brand Style Guide** (single image, provided by client): `uploads/6e96ba85-e211-467a-89ba-add8b43a3c6e.png`
  — primary logo, primary + expanded palettes, accents & motifs, mood/voice, application
  examples, and a website UI mock. All foundations below are lifted from this guide.
- No codebase or Figma file was provided. The website UI kit is a faithful recreation of
  the style guide's "UI / Website Example" panel plus the homepage copy flow supplied in
  the brief. *(If a live codebase/Figma exists, re-attach it so the kit can be made
  pixel-exact.)*

---

## 2. Content Fundamentals (voice & copy)

The voice is **confident, plainspoken, and operator-grade** — a sharp founder who has done
the work, not an agency deck. Premium but approachable; editorial, not corporate.

- **Person:** Mostly **"I" / "you"** ("I help growing businesses…", "Let's find the gaps in
  your growth system"). First-person singular reinforces the solo-operator brand — never
  "we" or "our team."
- **Sentence shape:** Short declaratives, often in **diagnostic pairs** — a confident claim
  followed by the nuance. e.g. *"The website looks fine, but it does not move people."* /
  *"Leads arrive, but follow-up depends on memory."*
- **Headlines:** Punchy, three-beat rhythm, frequently set in **all-caps display** with the
  final beat in crimson: `SOLO MARKETER. STRATEGIC THINKER. SYSTEMS BUILDER.`
- **Reframes over hype:** Lead by reframing the problem ("not a traffic problem first… a
  clarity problem, a system problem, or a visibility problem"). No buzzword soup.
- **Casing:** Sentence case for body and subheads; ALL-CAPS (tracked) for eyebrows, labels,
  badges, and hero display lines. Title Case for nav and buttons.
- **Tricolons everywhere:** "Clarity. Built to run. Results that last." / "Focused.
  Resourceful. Reliable. Real-world results." Periods used as rhythmic separators.
- **Emoji:** **Never.** Not part of the brand.
- **CTA language:** Action + specificity — *"Book a Diagnostic Call"*, *"Run the Growth
  System Audit"*, *"See Case Studies"*, *"See Selected Proof"*. The word **diagnostic**
  recurs — frame engagement as diagnosis before spend.
- **Proof:** Concrete, numeric, outcome-first ("+212% more qualified leads"), never vague.
- **What to avoid in copy:** fake-corporate "we", agency bloat language, vague adjectives,
  AI-hype, "synergy"-style filler.

---

## 3. Visual Foundations

### Color
- **Grounds:** Two worlds. **Dark** (midnight navy `#0B1320` / charcoal `#11151C`) for hero,
  proof, and CTA sections — premium, focused. **Light** (soft cream `#F5F3EE`) for editorial
  problem/process sections — paper-like, approachable. Use **1–2 dark grounds and the cream
  ground**, alternating for rhythm; avoid a third background color.
- **Primary accent:** **Indiana crimson `#990000`** — the single hero accent. Used for the
  final headline beat, primary CTAs, dividers, icon strokes, and key data bars. **Burgundy
  `#6B0F1A`** for pressed/active. **Clay `#C47E61`** is the "subtle copper" — sparing warm
  highlights, never gold/yellow.
- **Expanded accents** (burgundy, dusty rose, clay, warm gray, slate/steel blue, cool sage,
  light taupe): reserved for **data visualization and secondary hierarchy** — used
  intentionally, never decoratively. Blues are muted/slate, *not* bright SaaS blue.
- **Neutrals:** warm grays and light taupe carry secondary text and lines so nothing reads
  cold.

### Type
- **Sans — Archivo** (substitute): hero display (Black, uppercase, tight tracking),
  headings, UI, body, and tracked labels. Carries the "modern systems builder" weight.
- **Serif — Spectral** (substitute): editorial **quotes and display moments** only
  ("Good strategy is the advantage. Great systems make it scalable."). Brings the
  strategy-notebook / premium-editorial feel.
- **Labels/eyebrows:** ALL-CAPS, `0.16em` tracking, bold, often crimson.
- See `colors_and_type.css` for the full token set, scale, and element map.

### Backgrounds, texture & motif
- **Cream is paper** — treat light sections as editorial paper, not flat white.
- **Dark sections** carry subtle texture: a faint **dotted grid** (`assets/texture-dotted-dark.png`)
  or low-contrast mountainous/diagonal overlays. Texture is *felt, not seen* — keep ~3–6%
  opacity.
- **Crimson dividers:** thin horizontal rules, often with a centered dot terminal — an
  editorial signature (see the logo's tagline rule). Use to separate display from body.
- **Diagrams & annotated screenshots** over stock photography. Data viz uses crimson + navy
  bars. Dashboards appear **sparingly** and in the dark/warm palette — never bright SaaS UI.
- **Imagery:** candid, real founder/workspace (laptop, notebook, dashboard, coffee, crimson
  IU mug). Warm, slightly moody, natural light. **Avoid:** fake corporate stock people,
  high-rise "executive" skylines, AI-robot graphics, gold/yellow accents, shiny blue SaaS
  dashboards.

### Shape, borders, elevation
- **Corner radii:** small and restrained — `8px` for cards/buttons, `4px` for chips,
  `14px` for large panels. Nothing pill-soft except true pills (badges).
- **Cards (light):** white surface, hairline `#DAD6CC` border, soft low shadow
  (`--shadow-md`). **Cards (dark):** raised navy `#131C2B`, `rgba(255,255,255,.14)`
  hairline, deep soft shadow. Some hero/feature cards use a **crimson border** for emphasis.
- **No heavy drop shadows, no glows, no neon.** Elevation is quiet and editorial.

### Motion & states
- **Motion:** restrained and confident — short fades + small translate-ups
  (`cubic-bezier(.22,1,.36,1)`, ~140–240ms). No bounce, no parallax theatrics.
- **Hover:** buttons darken (crimson → burgundy); links reveal/slide their `→`; cards lift
  slightly (shadow + `translateY(-2px)`).
- **Press:** subtle `scale(0.98)` + deeper color.
- **Focus:** 2px crimson ring offset for accessibility.

### Layout rules
- Generous editorial whitespace; max content width ~1200px; 8pt spacing scale.
- Sticky top nav (dark) with crimson primary CTA at right.
- Eyebrow → headline → lead → supporting columns is the canonical section rhythm.

---

## 4. Iconography
See **ICONOGRAPHY** section below (§6).

---

## 5. File Index / Manifest

| Path | What it is |
|---|---|
| `README.md` | This file — context, content & visual foundations, iconography, index |
| `colors_and_type.css` | Color tokens + type system + spacing/shape/elevation/motion vars |
| `SKILL.md` | Agent-Skill front-matter wrapper for use in Claude Code |
| `assets/` | Logos, the D monogram, dark dotted texture |
| `preview/` | Standalone HTML cards rendered in the Design System tab |
| `ui_kits/website/` | Marketing-website UI kit — `index.html` + JSX components |

### assets/
- `logo-primary-stacked.png` — full DM monogram + wordmark + tagline (on cream)
- `logo-horizontal-dark.png` — horizontal DARLING MARTECH lockup (on navy)
- `mark-d-dark.png` — standalone D monogram (favicon / compact mark, on navy)
- `texture-dotted-dark.png` — subtle dotted-grid section background swatch

---

## 6. Iconography

The brand uses a **single, consistent line-icon system**: thin, **single-weight crimson (or
charcoal) strokes**, geometric, rounded joints, no fills, no duotone, no shadows. Recurring
glyphs in the guide: **target/bullseye** (strategy), **bar-chart-with-arrow** (growth),
**connected nodes** (systems/automation), **person/profile** (direct access), **lightbulb**
(creative), **mountains/peak** (grounded). These read as a small, hand-curated set rather
than a sprawling library.

- **No built-in icon font or SVG sprite was provided** in the source (image-only guide).
- **Substitution:** use **[Lucide](https://lucide.dev)** (CDN) — its 1.5–2px geometric
  single-stroke style is the closest match to the guide's line icons. Recommended mappings:
  `target` (strategy), `trending-up` / `bar-chart-3` (growth), `share-2` / `network`
  (systems & automation), `user` (direct access), `lightbulb` (creative), `mountain`
  (grounded), `search` (visibility/SEO), `gauge` / `activity` (diagnostics).
  Stroke `crimson` or `charcoal`, ~1.75px, on transparent. **⚠ Flagged substitution** — if
  the real icon set exists as SVG, drop it into `assets/icons/` and update this section.
- **Emoji:** never. **Unicode glyphs:** only the `→` arrow on text links and the `•` dot in
  dividers/tricolons.
- **Logo mark** doubles as a brand glyph: the **D monogram** (`assets/mark-d-dark.png`) for
  favicons and compact placements.

---

*Foundations sourced from the client brand style guide. Type faces are Google Fonts
substitutions pending the final licensed pairing — see note in `colors_and_type.css`.*
