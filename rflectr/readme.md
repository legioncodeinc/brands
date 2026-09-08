# rflectr Design System

rflectr (Legion Code Inc.) is a local desktop control plane — a lightweight Tauri 2 / Rust app for Windows 11 and macOS 14+ — that lets a developer decide, per harness, whether AI inference traffic from Cursor, Codex, ZCode, Claude Code, and Claude Desktop is left alone (**Off**), classified as metadata on its native path (**Observe**), or sent through a selected provider, local model, or authorized subscription bridge (**Route**). It never touches harness credentials or sessions, stores metadata only, and shows request-level provider, model, latency, tokens, cost, and usage-window data so the user can control spend.

This design system is a **new visual direction** built around the approved rflectr logo system. It intentionally does not reuse the existing Tauri renderer's appearance.

## Sources

- GitHub: https://github.com/legioncodeinc/rflectr — logo system (`assets/logo-system/`, docs + SVG/PNG masters), product README, PRD-009 library, and the current renderer (read for vocabulary only; visuals discarded on request). See `github.md` for sync state.
- Uploaded lockups: `uploads/rflectr-lockup-*.svg` (10 files) → copied to `assets/lockup/`.
- Product brief: "rflectr Complete Product Interface Brief" (September 2026) — information architecture, object vocabulary, state vocabulary, and privacy rules. Its terminology governs all copy here.

Explore the repository for deeper context (PRDs under `library/requirements/`, logo docs under `assets/logo-system/docs/`) before designing new rflectr surfaces.

## Content fundamentals

- **Plain, exact, non-promotional.** Sentences state what happens and what does not. "Turning routing off affects new traffic. Existing streams finish on their current route."
- **Product terms are fixed nouns:** Harness, Provider, Account, Policy, Rule, Observe, Route, Native passthrough, Usage window. State words are capitalized as-is: Off / Observe / Route (intent); Off, Starting, Ready, Observing, Routing, Draining, Failed (runtime); Supported / Unsupported / Inconclusive / Not tested / Stale (compatibility); Verified / Partial / Open / Blocked / External (evidence work).
- **The name is exactly `rflectr`** — five uppercase letters, never "Rflectr", never with an I.
- **Casing:** sentence case for headings, labels, buttons ("Turn Off & drain", "Run compatibility probe"). Uppercase only for eyebrow labels (11px, .08em tracking).
- **Second person, sparingly.** "You" appears in explanations; the UI otherwise speaks in object labels, not narration. No "we".
- **Provenance is always attached to a number.** Estimates are prefixed `~` and carry a source ("Tokenizer estimated", "API rate est."). Cost bases — provider-reported charge, estimated API cost, subscription fee, API-equivalent estimate — are never merged and never called "savings".
- **Reason codes** appear in mono uppercase snake case: `COMPAT_STALE`, `TRUST_RESTART`, `QUOTA_EXHAUSTED`.
- **Never:** exclamation marks, emoji, marketing adjectives ("seamless", "unlimited", "first-party"), universal claims not bound to a version and evidence record, transient-only failure messages.
- Examples — good: "Claude Code 2.1.259 · Routing via Anthropic · Verified 3 d ago" / "Route unavailable: compatibility Inconclusive for Cursor 3.18.25". Bad: "Works with every version!" / "You saved $12 this week".

## Visual foundations

**Mood.** A quiet instrument panel. Near-black, flat, hairline-separated, with one living element: the committed route line flowing green. Dense but calm; nothing decorative competes with data.

**Color.** Ink `#0A0B0D` app background; sidebar one step darker (`--n-0`); panels/cards step up through `--n-2`…`--n-4`. Text is `--n-12` paper → `--n-10` secondary → `--n-8` tertiary. **Green (`#3DDC97` dark / `#18A968` light) is the committed route** — used for Route/Routing state, route lines, the route button, Supported/Verified. It is *not* a health color: Healthy is neutral paper, Degraded/Draining are amber, Failed/Offline are red, Observe is slate-blue. Light theme via `[data-theme="light"]` flips surfaces to white/paper and deepens the accent.

**Type.** Geist (UI) + Geist Mono (all numbers, IDs, digests, durations, reason codes). 13px body, 12px caption, 11px eyebrow, 15/22/36 headings, 28px mono metrics. Tabular numerals everywhere. Wordmark is a custom outlined construction (Inter-derived) — never typeset it live.

**Spacing.** 4px base; card padding 16, dense 12; row padding 8/12; section gap 12–24; page gutter 24. Sidebar 220, topbar 48, controls 26/32/38.

**Backgrounds.** Solid surfaces only. No gradients, textures, illustrations, or imagery. The only "graphic" is the route line and simple bar charts.

**Borders, radii, shadows.** Everything is separated by 1px alpha-white hairlines (`--border-hairline` 7% → `--border-subtle` 11% → `--border-strong` 20%). Radii are small and technical: 3/5/8/12/16 (controls 5, cards 12, dialogs 16). Cards have no shadow; shadows exist only on floating layers (popover, dialog, drawer). Route-focused elements get a soft 3px green glow ring.

**Cards.** `--surface-card` fill, hairline border, 12px radius, optional header row with hairline divider, no shadow. Hover on interactive cards: border strengthens and fill lifts one step.

**Animation.** Fast and physical: 120ms micro, 180ms base, 280ms slow, 360ms enter; `cubic-bezier(.2,.8,.2,1)` for enters, a mild spring for the ModeSegment thumb and switches. Signature motion: `rflectr-route-flow` — dashed route lines flow left→right at 1.6s while routing (2.4s dotted blue in Observe, slow amber while Draining, static grey Off). Lists stagger in with a 6px rise. Active-request dots emit an expanding ring. Skeleton rows shimmer. `prefers-reduced-motion` zeros all durations.

**Hover / press.** Hover = one-step surface lift (`--surface-hover` 4% white) and stronger border, no color shifts beyond that; primary buttons brighten to pure white. Press = `scale(.98)` (icon buttons `.94`). Focus = 2px app-color gap + 2px green ring (`--shadow-focus`).

**Transparency & blur.** Only the dialog scrim (72% ink + 4px blur). Panels are opaque.

**Layout.** Fixed sidebar + fixed topbar; content scrolls. Detail surfaces open as a right drawer (520px) or master/detail split, never a new window. Dialogs are 520/760px centered.

**Imagery.** None. Placeholders are labelled empty states, not pictures.

## Iconography

- **Icon set:** Lucide (MIT), 1.75px stroke, 16px default (14 inline, 20 in empty states). A curated subset of path data ships inside `components/core/Icon.jsx` so consumers need no CDN; add glyphs by copying Lucide path data into `ICON_PATHS`. The original renderer used unicode glyphs (⌁ ≋ ↻) — replaced; do not use unicode characters or emoji as icons.
- **Logo assets** (`assets/`): `symbol/` full + micro symbol in themeable/dark/light/black/white; `wordmark/`; `lockup/` horizontal + stacked (on-dark, on-light, mono, themeable); `application/` app icon, favicon, macOS menubar template, Windows tray. `assets/logo.svg` is the themeable symbol. Rules: full symbol ≥32px, micro-symbol below; green only in the route junction; never recolor, badge, glow, or animate the mark for runtime state.
- **No illustrations** exist for this brand and none were invented.

## Components

Standard set authored for rflectr (no component source existed; the old renderer was excluded by request). All under `components/`:

- **core/** — `Button` (primary · route · secondary · ghost · danger; sm/md/lg; loading), `IconButton`, `Badge` (state-word → tone inference), `Icon`, `Tooltip`
- **forms/** — `Input` (mono, one-way `secret`), `Select`, `Switch` (route/neutral tone), `Checkbox`, `ModeSegment` (Off / Observe / Route, Route-disabled with reason)
- **data/** — `Card`, `MetricCard` (provenance + `~` estimates), `UsageWindow`, `RouteLine` (animated harness→provider line), `DataTable` (dense, sortable, skeleton), `Tabs`, `EmptyState`
- **feedback/** — `Dialog`, `Toast`, `ActionItem`
- **navigation/** — `NavItem`, `StatusDot`

Intentional additions beyond a generic kit: `ModeSegment`, `RouteLine`, `UsageWindow`, `ActionItem`, `StatusDot`, `MetricCard` — each maps to a rflectr product object from the brief.

## UI kits

- `../../UI_Kit/shrke-desktop/` — the desktop control plane kit, exported to the shrke product (Overview, Providers, Harnesses, Observability; Shell/App shell), held in the private UI_Kit workspace outside this repo. See its README. (The originally planned `ui_kits/rflectr-desktop/` set was never in this repo.)

## Index

- `tokens/styles.css` — entry; imports `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `motion.css`, `base.css`
- `guidelines/` — 17 specimen cards (Colors, Type, Spacing, Motion, Brand)
- `components/` — see above; each has `.jsx`, `.d.ts`, `.prompt.md`, and a `*.card.html`
- `../../UI_Kit/shrke-desktop/` — interactive product recreation (private UI_Kit workspace, outside this repo)
- `logos/` — logo system + app icons
- `SKILL.md`, `system/` — thumbnail.html, _ds_bundle.js, _ds_manifest.json, github.md sync notes
