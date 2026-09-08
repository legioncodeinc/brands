# WHIPT, Brand Guide

WHIPT's approved identity uses **whippet artwork** with the shared outlined WHIPT wordmark. **Pursuit** is the default mark (used by the design demo and token library); **Full Stride** is the approved alternative.

> Layout note (2026-09-07): WHIPT was hand-arranged by the owner with the real brand kit and deviates from the repo folder contract on purpose, the logo kit lives under `assets/` instead of `logos/`; the demo app and element guide now live in the private UI_Kit workspace. Documented as-is below; do not "fix" without the owner.

Status legend: ✅ on file · ⚠️ partial · ❌ not on file.

## 1. Identity

- **Canonical spelling:** WHIPT (uppercase).
- **Tagline:** ❌ not on file.
- **One-liner:** ❌ not on file (the demo shows an agent-orchestration product with browser/comms/code/research/media capability modes).

## 2. Relationships

- Legion Code Inc. family product; token layer shares the Legion family green (`--border-focus: #3DDC97`, brand glow `rgba(61,220,151,.35)`).

## 3. Logo system, ✅

- **Catalog:** `assets/logos/whippet-brand-kit-v1/`, concepts `01-pursuit/` (default) and `02-full-stride/`, each with favicon/ PNG sizes/ SVG; plus `index.html` browser, `manifest.json`, `palette.json`, `preview/`, `source/`, `checksums.sha256`, `validation.json`.
- **Compatibility copies:** `assets/logos/whipt-logo-{light,dark}.svg` (horizontal Pursuit lockup), `whipt-symbol-{light,dark}.svg` + `whipt-symbol.svg` (square symbol; silhouette follows `currentColor`, mint fixed), `whipt-wordmark-{light,dark}.svg` (shared outlined wordmark), `whipt-favicon.svg` (Pursuit on solid dark square). Light/dark filenames name the intended background.
- **Packages:** `whipt-complete-brand-kit-v1.zip` plus per-concept zips (local-only, untracked).
- **Rules:** use the supplied files, never redraw; see `assets/logos/README.md` and the kit's usage guide.

## 4. Color, ✅ (token sheets, no prose doc)

- **Files:** `assets/whipt-tokens.css` (base: fonts + core palette) and `assets/whipt-tokens-v2.css` (premium layer: glass, aurora, vibe accents `--vibe-*`, capability accents `--cap-browser|comms|code|research|media` + subtle tints, chart, motion tokens). Load base first; v2 extends it.
- **Theme:** light-first product surfaces via `.theme-light`; dark `#06070A` canvas for the demo stage.
- Machine-readable palette: `assets/logos/whippet-brand-kit-v1/palette.json` (ink `#0A0B0D`, white `#F5F6F7`, mint `#3DDC97`).

## 5. Typography, ✅

| Family | Job | Files |
|---|---|---|
| **Inter** (variable) | UI | `assets/fonts/Inter-VariableFont_opsz_wght.ttf`, italic variant |
| **JetBrains Mono** | code/terminal contexts | `assets/fonts/JetBrainsMono-{Regular,Medium,SemiBold,Bold}.woff2` |

## 6. Iconography & imagery, ⚠️

Lucide-style 1.5px stroke icons in the demo; xterm + Monaco chrome for terminal/editor surfaces (demo deps). No standalone icon set on file.

## 7. Voice & content, ❌

No voice doc on file; the demo's copy is the only reference.

## 8. Component library, ❌

None as a reusable library; the serialized element library in the Element Guide (in the UI_Kit workspace) plays that role for the demo.

## 9. UI kits

| Kit | Location | Contents |
|---|---|---|
| whipt-demo | `../../UI_Kit/whipt-demo/`, private UI_Kit workspace outside this repo | WHIPT Demo v2.dc.html, WHIPT Tokens.dc.html, WHIPT Element Guide.md (serialized element library of every numbered element), support.js, screenshots/ (15, true PNG) |

Lives in the private UI_Kit workspace beside this repo, excluded from git.

## 10. Asset map (actual, per owner's layout)

| Path | What's there |
|---|---|
| `assets/logos/` | whippet brand kit v1 + compatibility SVGs + zips + README |
| `assets/fonts/` | Inter + JetBrains Mono |
| `assets/whipt-tokens*.css` | token sheets |
| demo app + element guide + screenshots | moved to `../../UI_Kit/whipt-demo/` (private UI_Kit workspace) |

## 11. Gaps & provenance

- ❌ Tagline, one-liner, voice doc, standalone icon set. *Checked 2026-09-07.*
- Note: the previous logo set on file was AI-generated placeholders (C2PA manifests), fully replaced by the real whippet kit on 2026-09-07.

## 12. Changelog

- 2026-09-07, owner replaced the logo set with the real whippet brand kit and restored the demo to the product root; screenshots converted from mislabeled JPEG to true PNG; `ui_kits/whipt-demo/` kept in sync as the migration copy. Later the same day the demo left the repo entirely: it now lives only in `../../UI_Kit/whipt-demo/`.
