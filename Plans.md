# Darling Martech — Plans.md

Created: 2026-06-08

---

## Phase 3: Component Cleanup

| Task | Description | DoD | Depends | Status |
|------|-------------|-----|---------|--------|
| 3.1 | Fix `ToolCard.tsx` broken `href` prop — render as `<Link>` wrapper OR remove from interface | `ToolCard.tsx has no unused props; tools/page.tsx still renders correctly` | - | `cc:完了` |
| 3.2 | Audit `ServiceCard.tsx` and `ProofCard.tsx` — decide: wire them into pages or delete both | `Both cards either used in their pages OR deleted; no unused component files remain` | 3.1 | `cc:TODO` |
| 3.3 | Wire up `SectionHeader.tsx` into priority sections (`HowIHelp`, `ProofSection`, `AboutFounder`, `ToolsLab`) | `SectionHeader.tsx imported and used in all 4 sections; no inline duplicates; no TypeScript errors; visual consistency verified` | 3.1 | `cc:TODO` |
| 3.4 | Replace `Nav.tsx` CTA raw Tailwind styles with `<Button>` component | `Nav.tsx imports Button; CTA uses Button component; no style duplication; `npm run lint` passes` | - | `cc:完了` |
| 3.5 | Replace inline `style={{ background: "rgba(...)" }}` with utility classes in `Hero.tsx`, `PageHeader.tsx`, `CTASection.tsx`, `HowIHelp.tsx` | `All 4 files use className utilities (`.dot-texture`, `.crimson-glow`) instead of inline styles; `npm run build` succeeds; visual appearance unchanged` | 3.1, 3.3, 3.4 | `cc:TODO` |
