# shrke, Brand Guide

shrke is a desktop product in the Legion family. Its design language is inherited from rflectr, the shrke-desktop UI kit was built directly on the rflectr design system, and its logo set lived scattered (kit inside rflectr, lockups in rflectr's uploads) until the 2026-09-07 consolidation.

Status legend: ✅ on file · ⚠️ partial · ❌ not on file.

## 1. Identity

- **Canonical spelling:** `shrke`, lowercase (all on-file artwork is lowercase).
- **Tagline / one-liner:** ❌ not on file.

## 2. Relationships

- Design system parent: rflectr (`../rflectr/`), ink surfaces, hairline borders, and the committed-route green semantics carry over.
- Parent brand: Legion Code Inc.
- UI kit provenance: exported from rflectr's design workspace; shrke lockups were authored alongside it.

## 3. Logo system, ✅

- **Lockups:** `logos/svg/`, 10 lockups: horizontal + stacked, each in themeable / on-dark / on-light / mono-black / mono-white (authored for the rflectr design system).
- **Marks:** `logos/svg/wordmark.svg` (wordmark master), `logos/png/logo.png` (square symbol, 1254×1254, local-only: rasters are untracked).

## 4. Color, ❌

Exact vector fills from the on-file SVG sources: ink `#0A0B0D`, mark green `#18A968` (the on-light Legion green; `#3DDC97` on dark surfaces). No token sheet yet; commit a shrke tokens sheet before new surfaces ship.

## 5. Typography, ❌

No type doc or font files on file (the kit inherits rflectr's Geist/Geist Mono rules).

## 6–7. Iconography & imagery · Voice

❌ Nothing on file.

## 8. Component library, ❌

None on file; the shrke-desktop kit carries its own `ui-kit-components.jsx`.

## 9. UI kits

| Kit | Location | Contents |
|---|---|---|
| shrke-desktop | `../../UI_Kit/shrke-desktop/` | App/Shell/Overview/Providers/Harnesses/Observability screens, ui-kit-components.jsx, vite config + dist |

Lives in the private UI_Kit workspace beside this repo, excluded from git.

## 10. Asset map

`logos/svg/` (10 lockups + wordmark) · `logos/png/` (logo.png), nothing else yet.

## 11. Gaps & provenance

Colors/tokens, typography, voice, favicon set, component library, all ❌. Best source: the rflectr design workspace / Claude Design. *Checked 2026-09-07.*

## 12. Changelog

- 2026-09-07, consolidated: lockups from `rflectr/uploads/`, kit from `rflectr/ui_kits/shrke-desktop/`, loose logo.png/wordmark.svg filed under logos/.
