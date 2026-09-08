# knectar, Brand Guide

knectar (knectar.dev, codename rflectr lineage) is the Legion Code AI inference control plane built on rflectr. Dark-native ink surfaces tuned for a Svelte 5 + shadcn-svelte + WorkOS AuthKit production stack, the token file speaks the full shadcn semantic contract, so `tokens/styles.css` can replace an app's `app.css` directly.

Status legend: ✅ on file · ⚠️ referenced but missing · ❌ not on file.

## 1. Identity

- **Canonical spelling:** `knectar`, lowercase, always.
- **Tagline:** ❌ not on file.
- **One-liner:** The AI inference control plane: route, observe, and spend-control for AI coding traffic.

## 2. Relationships

- Built on rflectr (`../rflectr/`), shares its control-plane vocabulary and Legion green, with its own surface language.
- Parent brand: Legion Code Inc. (`../legion-code-inc/`).

## 3. Logo system, ✅

- **Production exports:** `logos/png/` + `logos/svg/` (landscape-16x9, native, square-1x1). Favicon in `logos/png/`.
- **Skill-facing copies:** `assets/logo*.svg`, `assets/mark*.svg`, `assets/wordmark*.svg` (on-light / mono-on-dark / mono-on-light / stacked variants), `assets/app-icon-512.png`, `assets/app-icon-square.svg`.
- **History:** `logos/archive/2026-09-05-exploration/` (round-01 + hummingbird concepts), masters in `logos/source/`, export tooling `logos/scripts/export_brand.py`, proofs + verification in `logos/review/`, packaged `logos/knectar-hover-brand-kit.zip`.
- **Rule:** use the supplied logo files, never redraw them.
- **Provenance note:** the loose SVGs in `assets/` carry C2PA AI-generation manifests, treat the `logos/` export set as canonical for production.

## 4. Color, ✅

- **Token files:** `tokens/`, base.css, colors.css, fonts.css, spacing.css, typography.css; plus `tokens/styles.css` (single-file shadcn-contract layer: `--background`, `--card`, `--primary`, `--muted-foreground`, `--border`, `--input`, `--ring`, `--sidebar-*`).
- **Signature:** brand green `#3DDC97`, one appearance per visible region, no exceptions (Legion scarcity rule).
- **Surfaces:** dark-native ink; a light-surfaces guideline card exists (`guidelines/colors-surfaces-light.html`).

## 5. Typography, ✅

| Family | Job | Files |
|---|---|---|
| **Inter** (variable) | UI, headings, body | `assets/fonts/Inter-Variable.ttf`, `Inter-Italic-Variable.ttf` |
| **JetBrains Mono** | every identifier and number | `assets/fonts/JetBrainsMono-{Regular,Medium,SemiBold,Bold}.woff2` |

- **Rules:** sentence case; no emoji; mono for all identifiers/numbers.

## 6. Iconography & imagery, ✅

Lucide icons at 16px (`guidelines/brand-icons.html`); MCP icon in `assets/icons/mcp.svg`.

## 7. Voice & content, ✅

Sentence case, no emoji, lowercase `knectar`. Full voice doc: `guidelines/brand-voice.html` + `readme.md`.

## 8. Component library, ✅

- **Location:** `components/`, core (17), navigation (9), overlay (7) = 33 components. Each ships as `.jsx` + `.d.ts` + `.prompt.md`; category preview cards (`*.card.html`) included.
- **Manifest:** `system/_ds_manifest.json`; bundle `system/_ds_bundle.js`; adherence lint `system/_adherence.oxlintrc.json`.
- **Guidelines:** `guidelines/`, 20 HTML cards (colors, type, spacing, brand logo/mark/icons/voice).

## 9. UI kits

| Kit | Location | Contents |
|---|---|---|
| knectar-app | `../../UI_Kit/knectar-app/` | index.html, data.js, screens: dashboard, logs, logDetail, login, providers, virtualKeys |

Lives in the private UI_Kit workspace beside this repo, excluded from git.

## 10. Asset map

| Path | What's there |
|---|---|
| `tokens/` | 5 domain sheets + styles.css |
| `assets/` | skill-facing logos, fonts, icons, app icons |
| `logos/` | production logo system + archive + source + scripts + review |
| `components/` `guidelines/` | 33 components, 20 guideline cards |
| `system/` | DS bundle/manifest/adherence, thumbnail |
| `readme.md` / `SKILL.md` | deep reference / agent skill |

## 11. Gaps & provenance

- ❌ Tagline, none on file. *Checked 2026-09-07.*
- ⚠️ `assets/*.svg` logo copies are AI-generated (C2PA); prefer `logos/` exports for production; re-export clean copies from the logo source when convenient.

## 12. Changelog

- 2026-09-07, rolled into the brands standard: `design/*` lifted to product root, `logo/` folded into `logos/`, UI kit isolated out of the repo (now `../../UI_Kit/knectar-app/`).
