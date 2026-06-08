# Darling Martech — Website UI Kit

A high-fidelity, interactive recreation of the Darling Martech marketing website, built as
modular React (inline JSX + Babel) components. It mirrors the brand style guide's "UI /
Website Example" and the homepage copy flow from the brief.

> **Source of truth:** No live codebase or Figma was provided — this kit recreates the
> client **brand style guide image** (`../../uploads/...png`) plus the supplied homepage
> copy. If a real codebase/Figma exists, re-attach it and the kit can be made pixel-exact.

## Run it
Open `index.html`. It loads `../../colors_and_type.css` for tokens, Lucide (CDN) for icons,
and React 18 + Babel, then mounts the section components below.

## Components
| File | What it is |
|---|---|
| `ui.jsx` | Shared atoms — `Icon` (Lucide), `Button` (primary/secondary/secondary-light/link), `Eyebrow`, `Badge`, `Rule` (crimson dot divider), `Container` |
| `Nav.jsx` | Sticky translucent dark nav, logo lockup, links, crimson CTA, mobile burger menu |
| `Hero.jsx` | Navy dotted-grid hero — uppercase Archivo display headline, founder image, floating badge |
| `TrustStrip.jsx` | Cream discipline strip with crimson dot separators |
| `ProblemSection.jsx` | Cream — crimson headline, 4 problem cards, **interactive "Where it breaks" accordion** |
| `HowIHelp.jsx` | Charcoal blueprint — **Foundation → Build → Scale → Grow** clickable stage rail + detail panel |
| `ProofSection.jsx` | Navy premium — big crimson case-win stats + editorial serif quote |
| `ToolsLab.jsx` | Sunken cream "diagnostic lab" — **selectable tool list + faux dashboard preview** |
| `AboutFounder.jsx` | Cream — solo-operator story, value chips, founder image |
| `CTASection.jsx` | Crimson→navy closing CTA, plus the site `Footer` |

## Interactions implemented
- Mobile nav toggle (resize below 880px)
- "Where it breaks" accordion (one open at a time)
- "How I help" stage rail — click a stage to swap the detail panel
- "Diagnostics" tool selector — click a tool to update the dashboard preview

## Conventions
- All color/type/spacing values come from `colors_and_type.css` CSS variables — never
  hard-coded hex except inside the kit's own faux-data accents.
- Each component file ends with `Object.assign(window, {...})` so siblings share scope
  (required for multi-file Babel).
- Icons are Lucide via a thin `<Icon>` wrapper; `lucide.createIcons()` runs in `App`'s
  effect on every render.

## Known substitutions / gaps
- **Fonts:** Archivo + Spectral (Google Fonts) stand in for the to-be-defined brand pairing.
- **Icons:** Lucide stands in for the guide's bespoke line set.
- **Imagery:** founder/workspace photos are cropped from the brand guide itself — swap for
  final high-res shoot assets when available.
