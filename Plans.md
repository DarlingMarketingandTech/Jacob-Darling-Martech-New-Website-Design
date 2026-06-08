# Darling Martech — Plans.md

Created: 2026-06-08

---

## Phase 3: Component Cleanup

| Task | Description | DoD | Depends | Status |
|------|-------------|-----|---------|--------|
| 3.1 | Fix `ToolCard.tsx` broken `href` prop — render as `<Link>` wrapper OR remove from interface | `ToolCard.tsx has no unused props; tools/page.tsx still renders correctly` | - | `cc:完了` |
| 3.2 | Audit `ServiceCard.tsx` and `ProofCard.tsx` — decide: wire them into pages or delete both | `Both cards either used in their pages OR deleted; no unused component files remain` | 3.1 | `cc:完了` |
| 3.3 | Wire up `SectionHeader.tsx` into priority sections (`HowIHelp`, `ProofSection`, `AboutFounder`, `ToolsLab`) | `SectionHeader.tsx imported and used in all 4 sections; no inline duplicates; no TypeScript errors; visual consistency verified` | 3.1 | `cc:完了` |
| 3.4 | Replace `Nav.tsx` CTA raw Tailwind styles with `<Button>` component | `Nav.tsx imports Button; CTA uses Button component; no style duplication; `npm run lint` passes` | - | `cc:完了` |
| 3.5 | Replace inline `style={{ background: "rgba(...)" }}` with utility classes in `Hero.tsx`, `PageHeader.tsx`, `CTASection.tsx`, `HowIHelp.tsx` | `All 4 files use className utilities (`.dot-texture`, `.crimson-glow`) instead of inline styles; `npm run build` succeeds; visual appearance unchanged` | 3.1, 3.3, 3.4 | `cc:完了` |

---

## Phase 4: Accessibility + Motion Polish

| Task | Description | DoD | Depends | Status |
|------|-------------|-----|---------|--------|
| 4a | Fix tab role semantics in `HowIHelp.tsx` and `ToolsLab.tsx` — convert `aria-pressed` to proper `role="tablist"`, `role="tab"`, `aria-selected`, `role="tabpanel"`, `aria-labelledby` | `Both sections use proper tab ARIA; no aria-pressed on buttons; axe or NVDA validation passes` | - | `cc:完了` |
| 4b | Fix `ProblemSection.tsx` accordion — add `aria-controls` to accordion buttons, add matching `id` to expandable content | `Each button has aria-expanded + aria-controls; each panel has matching id + role="region"`; axe passes | - | `cc:完了` |
| 4c | Fix mobile layout edge cases — `ProofSection` grid `grid-cols-1 sm:grid-cols-2`; `Hero` floating badge overflow guard | `ProofSection responsive on 375px (inspect); Hero badge clip guard in place; npm run build succeeds` | - | `cc:完了` |
| 4d | Add scroll-entrance animations (fade/slide in) to priority sections: `Hero`, `ProblemSection` cards, `ProofSection` wins (staggered), `HowIHelp` stages, `CTASection` — use `motion/react` `useInView`, respect `useReducedMotion()` | `All 5 sections animate on scroll; reduced-motion respected; animation library calls don't break build; visual spot-check` | - | `cc:完了` |
| 4e | Add panel transition animations — `HowIHelp` stage detail panel fade/slide on tab change with AnimatePresence; `ProblemSection` accordion height-animated expand/collapse | `HowIHelp panel transitions smoothly; ProblemSection accordion expands/collapses with height animation; reduced-motion respected; `npm run build` passes` | 4a, 4b | `cc:TODO` |
