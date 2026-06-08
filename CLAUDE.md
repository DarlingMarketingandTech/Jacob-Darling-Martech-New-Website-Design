# Darling Martech — Claude Project Knowledge

## What This Project Is

**Darling Martech** (`darlingmartech.com`) is the personal business website for **Jacob Darling**, an Indianapolis-based marketing systems operator. The site positions Jacob as "the operator layer" — someone who connects strategy, websites, CRM, automation, AI, visibility, and reporting into one measurable growth system for growing businesses.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Radix UI · Motion · Vercel

---

## Development Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run lint      # ESLint (src/**/*.ts, *.tsx)
npm run format    # Prettier (whole project)
```

---

## Repository Structure

```
src/
  app/                    # Next.js App Router pages
    page.tsx              # Homepage (Hero, TrustStrip, ProblemSection, HowIHelp, ProofSection, ToolsLab, AboutFounder, CTASection)
    about/                # About Jacob page
    services/             # Services overview page
    websites-systems/     # Website conversion services page
    ai-automation/        # CRM & automation services page
    growth-strategy/      # Growth strategy & operator support page
    proof/                # Case studies & proof page
    tools/                # Diagnostic tools page
    resources/            # Resources & guides (noIndex)
    contact/              # Book a diagnostic call page
    privacy/ terms/       # Legal pages
    layout.tsx            # Root layout: fonts, Nav, Footer, JsonLd
    globals.css           # Tailwind v4 @theme tokens + base styles
  components/
    layout/               # Nav, Footer, Container
    sections/             # Hero, TrustStrip, ProblemSection, HowIHelp, ProofSection, ToolsLab, AboutFounder, CTASection, PageHeader, ContactForm
    cards/                # ProofCard, ServiceCard, ToolCard
    ui/                   # Button, Badge, Eyebrow, Rule, SectionHeader
    seo/                  # JsonLd
  content/                # Typed content constants (no CMS)
    services.ts           # servicePaths[] — 4 stages: Foundation, Build, Scale, Grow
    diagnostics.ts        # diagnostics[] — 6 diagnostic tools
    ctas.ts               # globalCtas, segmentCtas — all CTA labels/hrefs
    seo.ts                # seoPages[] — per-page metadata
  lib/
    site.ts               # site.name, site.url, site.founder, site.email, site.location
    metadata.ts           # createMetadata() helper
    utils.ts              # cn() (clsx + tailwind-merge)
public/                   # Static assets (images, icons)
```

---

## Design System

**Tailwind v4** — configured via `@theme {}` in `src/app/globals.css`. No `tailwind.config.ts`.

### Brand Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--crimson` / `bg-crimson` | `#990000` | Primary accent, CTAs, bullets |
| `--navy` / `bg-navy` | `#0b1320` | Dark section backgrounds |
| `--charcoal` | `#11151c` | Body text |
| `--cream` | `#f5f3ee` | Page background |
| `--clay` | `#c47e61` | Eyebrow labels on dark |
| `--cool-sage` | `#6f7f76` | Status indicators |
| `--surface-dark` | `#131c2b` | Card backgrounds on dark |

### Typography Classes
| Class | Description |
|-------|-------------|
| `.dm-display` | Archivo Black 900, uppercase, fluid 3–5.25rem |
| `.dm-h1` | Archivo 800, fluid 2.25–3.5rem |
| `.dm-h2` | Archivo 700, fluid 1.75–2.5rem |
| `.dm-h3` | Archivo 600, fluid 1.3–1.6rem |
| `.dm-quote` | Spectral 400 (serif), fluid 1.75–2.6rem |
| `.dm-lead` | Archivo 400, fluid 1.125–1.375rem |
| `.dm-label` | Archivo 700, 0.75rem, uppercase, tracked |

**Fonts:** Archivo (sans, all weights via variable font) · Spectral (serif) · IBM Plex Mono (mono). All self-hosted via `@fontsource` packages.

### Semantic Color Aliases (inline styles only)
- `var(--fg-on-dark-1)` `#f5f3ee` — primary text on dark
- `var(--fg-on-dark-2)` `#aab4c0` — secondary text on dark
- `var(--fg-on-dark-3)` `#8896a6` — tertiary text on dark (WCAG AA ✓)
- `var(--line-on-dark)` `rgba(245,243,238,0.14)` — borders on dark
- `var(--surface-dark)` `#131c2b` — card/panel on dark bg

### Pattern: Static colors → Tailwind classes. Dynamic/inline → `var(--token)`.

---

## Business Context

**Brand voice:** Direct, honest, systems-thinker. No hype. No agency jargon. Operator-to-owner.

**Four service stages:**
1. **Foundation** — Diagnose the bottleneck, set strategic direction
2. **Build** — Website conversion: architecture, copy, proof, CTA structure
3. **Scale** — CRM + automation + AI-assisted follow-up
4. **Grow** — Visibility, SEO, AI search signals, reporting

**Primary audience:** Growing SMB owners (Indianapolis + US) who are getting some traction but have leaky, disconnected marketing systems.

**Six diagnostic tools:** Growth Leak Finder · Website Conversion Review · Follow-Up System Map · Local + AI Visibility Scan · Automation ROI Estimate · Revenue System Roadmap

---

## Specialist Agents

This project includes 8 specialist sub-agents in `.claude/agents/`. Invoke them for focused work:

| Agent | Trigger phrase / Task type |
|-------|---------------------------|
| `strategy-director` | Positioning, messaging hierarchy, audience clarity, strategic direction |
| `ux-architect` | Page structure, user flows, layout hierarchy, conversion IA |
| `conversion-copywriter` | Writing or auditing website copy, headlines, CTAs, proof copy |
| `brand-visual-designer` | Visual identity, design system, UI direction, layout aesthetics |
| `qa-launch-auditor` | Full-site QA, accessibility, usability, conversion-readiness audits |
| `image-asset-director` | Image strategy, alt text, asset optimization, visual asset direction |
| `proof-case-study-strategist` | Case studies, social proof, outcome framing, trust assets |
| `front-end-architect` | Component architecture, responsive layouts, interactions, implementation |

In Claude Code, use `/agents` or reference by name. In Claude.ai Projects, each agent file adds specialist context to your conversation.

---

## Coding Conventions

- **No `tailwind.config.ts`** — all tokens in `@theme {}` in `globals.css`
- **Imports** use `@/` path alias (maps to `src/`)
- **Components** are named exports, PascalCase files
- **Content** lives in `src/content/*.ts` as typed constants (no CMS)
- **`cn()`** from `src/lib/utils.ts` for conditional classnames (clsx + tailwind-merge)
- **Inline styles** only for dynamic runtime values or semantic CSS vars not covered by Tailwind classes
- **Radix UI** primitives for interactive elements (Accordion, Separator, Slot)
- **Motion** (`motion/react`) for animations
- **No test suite** is currently configured — lint and build are the validation checkpoints
