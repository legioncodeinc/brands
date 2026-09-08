# rflectr, Brand Guide

rflectr (Legion Code Inc.) is a local desktop control plane, a lightweight Tauri 2 / Rust app for Windows 11 and macOS 14+, that lets a developer decide, per harness, whether AI inference traffic from Cursor, Codex, ZCode, Claude Code, and Claude Desktop is left alone (**Off**), classified as metadata on its native path (**Observe**), or sent through a selected provider, local model, or authorized subscription bridge (**Route**). It never touches harness credentials or sessions, stores metadata only, and shows request-level provider, model, latency, tokens, cost, and usage-window data.

Status legend: ✅ on file · ⚠️ partial · ❌ not on file.

## 1. Identity

- **Canonical spelling:** `rflectr`, exactly five lowercase letters plus r; never "Rflectr", never with an I.
- **Tagline:** ❌ none on file; the product brief's terminology governs copy.
- **One-liner:** Per-harness AI inference control: Off / Observe / Route, with metadata-only observability.

## 2. Relationships

- Parent brand: Legion Code Inc. Product repo: `legioncodeinc/rflectr` (sync state in `system/github.md`).
- knectar (`../knectar/`) is built on rflectr and extends this design system.
- The `shrke-desktop` UI kit (see §9) belongs to the shrke product (`../shrke/`).

## 3. Logo system, ✅

- **Files:** `logos/`, the echo-bat system: SVG masters (`source/`), full PNG export matrix at native + square ratios in color/mono on dark/light (`png/`, `svg/`), application icon set dark/light + tray template icons (`application/`), proofs and verification (`review/`), manifest.json, preview.html, packaged `rflectr-echo-bat-brand-kit.zip`.
- **Rule:** the wordmark is a custom outlined construction (Inter-derived), never typeset it live; use the supplied files, never redraw.

## 4. Color, ✅

- **Token files:** `tokens/`, base, colors, fonts, motion, spacing, typography; plus `tokens/styles.css` (single-file skill layer).
- **Ink scale:** `#0A0B0D` app background; sidebar one step darker (`--n-0`); panels/cards step up `--n-2`…`--n-4`; text `--n-12` paper → `--n-10` secondary → `--n-8` tertiary.
- **The core rule:** green (`#3DDC97` dark / `#18A968` light) is **the committed route**, Route/Routing state, route lines, the route button, Supported/Verified. It is *not* a health color: Healthy is neutral paper, Observe is slate-blue, Degraded/Draining amber, Failed/Offline red. Configured intent and effective runtime state are always shown separately.
- **Borders:** 1px alpha-white hairlines (7% / 11% / 20%); radii 3/5/8/12/16 (controls 5, cards 12, dialogs 16); cards have no shadow, shadows only on floating layers; route-focused elements get a soft 3px green glow ring.
- **Backgrounds:** solid surfaces only. No gradients, textures, illustrations, or imagery. The only "graphic" is the route line and simple bar charts.

## 5. Typography, ⚠️

| Family | Job | Notes |
|---|---|---|
| **Geist** | UI | 13px body, 12px caption, 11px eyebrow (.08em tracking), 15/22/36 headings |
| **Geist Mono** | all numbers, IDs, digests, durations, reason codes | 28px mono metrics; tabular numerals everywhere |

- **Font files:** `tokens/fonts.css` on file; binary font files ❌ not in this repo.

## 6. Iconography & imagery, ✅ (policy)

Quiet instrument panel: dense but calm, nothing decorative competes with data. See §4 backgrounds rule.

## 7. Voice & content, ✅

- Plain, exact, non-promotional; sentences state what happens and what does not.
- **Fixed nouns:** Harness, Provider, Account, Policy, Rule, Observe, Route, Native passthrough, Usage window.
- **State words capitalized as-is:** Off / Observe / Route (intent); Off, Starting, Ready, Observing, Routing, Draining, Failed (runtime); Supported / Unsupported / Inconclusive / Not tested / Stale (compatibility); Verified / Partial / Open / Blocked / External (evidence).
- **Provenance on every number:** estimates prefixed `~` with a source; cost bases never merge and are never called "savings".
- **Reason codes** in mono uppercase snake case: `COMPAT_STALE`, `TRUST_RESTART`, `QUOTA_EXHAUSTED`.
- Sentence case for headings/labels/buttons; uppercase only for eyebrow labels. Second person sparingly; no "we".
- **Never:** exclamation marks, emoji, marketing adjectives ("seamless", "unlimited", "first-party"), universal claims not bound to a version and evidence record, transient-only failure messages.
- Good: "Claude Code 2.1.259 · Routing via Anthropic · Verified 3 d ago". Bad: "Works with every version!" / "You saved $12 this week".

## 8. Component library, ✅

- **Location:** `components/`, core (5), data (7), feedback (3), forms (5), navigation (2) = 22 components, each `.jsx` + `.d.ts` + `.prompt.md`, with category preview cards.
- **Manifest:** `system/_ds_manifest.json`; bundle `system/_ds_bundle.js`; adherence lint `system/_adherence.oxlintrc.json`.
- **Guidelines:** `guidelines/`, 18 HTML cards (brand lockups/mono/symbol/voice, colors incl. route/semantic/neutral/light, motion route/timing, spacing, type).

## 9. UI kits

| Kit | Location | Contents |
|---|---|---|
| shrke-desktop | `../../UI_Kit/shrke-desktop/` | App/Shell/Overview/Providers/Harnesses/Observability screens, ui-kit-components, vite build + dist |

Belongs to the shrke product; lives in the private UI_Kit workspace, excluded from git. (The former `ui_kits/rflectr-desktop/` referenced in older docs was never in this repo.)

## 10. Asset map

| Path | What's there |
|---|---|
| `tokens/` | 6 domain sheets + styles.css |
| `logos/` | echo-bat logo system + application icons + source masters |
| `components/` `guidelines/` | 22 components, 18 guideline cards |
| `system/` | DS bundle/manifest/adherence, thumbnail, github.md sync notes |
| `readme.md` / `SKILL.md` | deep reference / agent skill |

## 11. Gaps & provenance

- ❌ Geist / Geist Mono binary font files, not in this repo (tokens/fonts.css references them). *Checked 2026-09-07.*
- ⚠️ Product brief ("rflectr Complete Product Interface Brief", September 2026) referenced by readme.md, lives in the product repo, not here.

## 12. Changelog

- 2026-09-07, rolled into the brands standard: assets/logo/ → logos/, styles.css → tokens/, tooling → system/, shrke lockups → shrke/, shrke-desktop kit moved out of the repo to UI_Kit/.
