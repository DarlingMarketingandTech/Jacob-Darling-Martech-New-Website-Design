# Darling Martech — CLAUDE.md

## Development Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build (validates TypeScript + routes)
npm run lint      # ESLint — src/**/*.ts, *.tsx
npm run format    # Prettier — whole project
```

No test suite configured. `npm run lint` and `npm run build` are the validation checkpoints.

---

## Project Overview

**Darling Martech** (`darlingmartech.com`) — personal business website for **Jacob Darling**, an Indianapolis-based marketing systems operator. Positions Jacob as "the operator layer" connecting strategy, websites, CRM, automation, AI, visibility, and reporting into one measurable growth system.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Radix UI · Motion · Vercel

---

## Repository Structure

```
src/
  app/              # Next.js App Router — one folder per route
    page.tsx        # Homepage: Hero, TrustStrip, ProblemSection, HowIHelp, ProofSection, ToolsLab, AboutFounder, CTASection
    about/  services/  websites-systems/  ai-automation/  growth-strategy/
    proof/  tools/  resources/  contact/  privacy/  terms/
    layout.tsx      # Root layout: fonts, Nav, Footer, JsonLd
    globals.css     # Tailwind v4 @theme tokens + all base styles
  components/
    layout/         # Nav, Footer, Container
    sections/       # Full-width page sections
    cards/          # ProofCard, ServiceCard, ToolCard
    ui/             # Button, Badge, Eyebrow, Rule, SectionHeader
    seo/            # JsonLd
  content/          # Typed content constants — single source of truth, no CMS
    services.ts     # servicePaths[] — 4 stages: Foundation, Build, Scale, Grow
    diagnostics.ts  # diagnostics[] — 6 diagnostic tools
    ctas.ts         # globalCtas, segmentCtas
    seo.ts          # seoPages[] — per-page metadata
  lib/
    site.ts         # site constants (name, url, founder, email, location)
    metadata.ts     # createMetadata() helper
    utils.ts        # cn() (clsx + tailwind-merge)
public/             # Static assets
```

---

## Coding Conventions

- **Tailwind v4** — configured via `@theme {}` in `src/app/globals.css`. **No `tailwind.config.ts`.**
- **Path alias** — all imports use `@/` (maps to `src/`)
- **Components** — named exports, PascalCase filenames
- **Classnames** — use `cn()` from `src/lib/utils.ts` for conditional classes
- **Colors** — static brand colors use Tailwind classes (`bg-navy`, `text-crimson`); dynamic/semantic values use `var(--token)` inline styles
- **Typography** — use `.dm-display`, `.dm-h1`, `.dm-h2`, `.dm-h3`, `.dm-lead`, `.dm-label`, `.dm-mono` utility classes
- **Content** — all page content lives in `src/content/*.ts` as typed constants; do not hardcode strings in components
- **Interactive elements** — use Radix UI primitives (Accordion, Separator, Slot)
- **Animations** — use Motion (`motion/react`); always respect `useReducedMotion()`

---

## Design System Quick Reference

**Brand colors:**
- `bg-crimson` / `#990000` — primary accent, CTAs, bullets
- `bg-navy` / `#0b1320` — dark section backgrounds
- `--cream` `#f5f3ee` — page background
- `--clay` `#c47e61` — eyebrow labels on dark
- `--surface-dark` `#131c2b` — card backgrounds on dark

**Semantic aliases (inline styles only):**
- `var(--fg-on-dark-1/2/3)` — text hierarchy on dark sections
- `var(--line-on-dark)` `rgba(245,243,238,0.14)` — borders on dark

**Section spacing:** `.section-padding` (fluid 80–140px). **Container:** use `<Container>` component.

---

## Business Context

**Brand voice:** Direct, honest, systems-thinker. No hype. No agency jargon. Operator-to-owner.

**Four service stages:** Foundation (diagnose) → Build (website conversion) → Scale (CRM + automation) → Grow (visibility + reporting)

**Primary audience:** Growing SMB owners (Indianapolis + US) with traction but leaky, disconnected marketing systems.

**Six diagnostic tools:** Growth Leak Finder · Website Conversion Review · Follow-Up System Map · Local + AI Visibility Scan · Automation ROI Estimate · Revenue System Roadmap

---

## Specialist Sub-Agents

Eight specialist agents in `.claude/agents/`. Claude Code will invoke them automatically when the task matches, or you can invoke by name:

| Agent name | Specialty |
|------------|-----------|
| `strategy-director` | Positioning, messaging, audience clarity, strategic direction |
| `ux-architect` | IA, page structure, user flows, layout hierarchy |
| `conversion-copywriter` | Website copy, headlines, CTAs, brand voice |
| `brand-visual-designer` | Design system, visual identity, UI direction |
| `qa-launch-auditor` | Accessibility, SEO, conversion-readiness, launch QA |
| `image-asset-director` | Image strategy, alt text, asset optimization |
| `proof-case-study-strategist` | Case studies, social proof, trust assets |
| `front-end-architect` | Component architecture, responsive layouts, performance |

---

## Memory Guidance

Per Claude Code best practices:

- **CLAUDE.md** (this file) — behavioral rules, conventions, project facts, how Claude should operate. Keep it current and concise.
- **Auto-memory / memory files** — facts from recent sessions: user decisions, feedback, project-specific choices that aren't yet conventions. Do not store instructions or how-tos in memory; those belong here.
- When memory fills with instructional content, move it into the relevant section of this file.

