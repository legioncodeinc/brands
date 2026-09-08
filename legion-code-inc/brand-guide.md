# Legion Code Inc., Brand Guide

The parent identity of Legion Code Inc. and every product brand in this repo. Dark-native, modern dev-tool minimal, one electric-green accent reserved for verified and signed states. Every Legion product inherits this language.

Status legend: ✅ on file · ⚠️ referenced but missing · ❌ not on file.

## 1. Identity

- **Canonical spelling:** Legion
- **Tagline:** "The developer toolchain, for the time of AI."
- **One-liner:** The parent company identity; products inherit its palette, type, and voice.

## 2. Relationships

- Parent of: ospry, knectar, rflectr, shrke, whipt, macsitna, llamaforce, myidentityprovider (all in this repo).
- Products inherit the Legion token layer and the verified-green semantics; each adds its own signature on top (see the child guides).

## 3. Logo system, ✅

- **Files:** `logos/`, 19 SVG marks, 200+ PNGs (16px–2048px), ICO set.
- **Variants:** logo dark/light, icon (green-dark/green-light, sharp/rounded, outline, mono black/green/white), symbol dark/light, favicon.
- **Rules:** the green cap is fixed brand equity, never recolor or animate it (subtle pulse on scan-complete only). Use `legion-logo-dark.svg` on dark, `legion-logo-light.svg` on light, `legion-symbol.svg` (currentColor) inline.
- **Quick picks:**

| Need | File |
|---|---|
| Lockup on dark | `logos/legion-logo-dark.svg` |
| Lockup on light | `logos/legion-logo-light.svg` |
| Inline mark | `logos/legion-symbol.svg` |

## 4. Color, ✅

| Token | Hex | Use |
|---|---|---|
| `brand.primary` | `#3DDC97` | Verified green. Logo accent cap, signed badges, verified states. Nothing else. |
| `bg.canvas` | `#0A0B0D` | Base dark background |
| `bg.surface` | `#13151A` | Sidebars, rails, panels |
| `bg.elevated` | `#1C1F26` | Cards, rows, modals |
| `text.primary` | `#F5F6F7` | Headings, primary body |
| `text.secondary` | `#A1A8B3` | Body copy, descriptions |
| `severity.critical` | `#FF4D5E` | Critical findings |
| `severity.warning` | `#FFB02E` | Warnings |
| `severity.info` | `#5B8AFF` | Informational |

- **Token file:** `tokens/colors_and_type.css`, CSS custom properties, drop-in for any Legion property.
- **The scarcity rule:** `#3DDC97` appears no more than once per visible region. It means one thing: verified. This is the most-violated rule on new surfaces, audit for it.
- **Severity is semantic, never decorative**, never accent decoration, divider colors, or marketing energy.

## 5. Typography, ✅

| Family | Job | Weights |
|---|---|---|
| **Inter** | UI, marketing, headings, body, the wordmark | 400 / 500 / 600 / 700 |
| **JetBrains Mono** | Code, file paths, hashes, line numbers, coordinates | 400 / 500 / 600 |

- **Font files:** `assets/fonts/` (Inter variable + static 18/24/28pt optical sets, JetBrains Mono woff2).
- **Rule:** mono is the texture of trust, if it's evidence, it renders in JetBrains Mono. No exceptions.

## 6. Iconography & imagery, ✅ (policy on file)

Dark theme is primary; light theme exists only for the signed PDF report and print. No decorative motion (only the L-mark cap pulse), everything settles under 1.2s on `--ease-out`, respect `prefers-reduced-motion`. Forbidden: bluish-purple gradients, glow effects, decorative drop-shadows on dark, stock dev photography, illustrations of people.

## 7. Voice & content, ✅

Direct expert next door. State facts; never alarm, moralize, or celebrate bad results. No emoji in product UI or reports. No military metaphors, no "Oops!", no "Great news!". Always pair a technical term with a concrete user-facing explanation. Forbidden words: "100% secure", "Enterprise", "Vulnerability" (to non-tech audiences), full list in the source codebase's `messaging-and-naming.md`.

## 8. Component library, ⚠️ referenced but missing

`ui_kits/legion-portal/` (production-fidelity React components for five core product pages) is referenced by SKILL.md but not on file in this repo, treat it as visual specification to port to Svelte when exported.

## 9. UI kits

| Kit | Location | Contents |
|---|---|---|
| legion-portal | ❌ not on file (see §8) |, |

## 10. Asset map

| Path | What's there |
|---|---|
| `tokens/colors_and_type.css` | canonical token layer |
| `assets/fonts/` | Inter + JetBrains Mono |
| `logos/` | full logo system |
| `docs/preview/` | 34 design-system cards (tokens, components, logo usage) |
| `docs/slides/` | signed-pdf-report.html |
| `brand-guide.html` | interactive brand guide |
| `readme.md` / `SKILL.md` | deep reference / agent skill |

## 11. Gaps & provenance

- ⚠️ `assets/legion-social-bg.png` (OG/social background, referenced by SKILL.md), not on file; export from Claude Design. *Checked 2026-09-07.*
- ⚠️ `ui_kits/legion-portal/` React components, not on file; export from Claude Design / portal repo. *Checked 2026-09-07.*

## 12. Changelog

- 2026-09-07, rolled into the brands standard: tokens/, assets/fonts/, docs/preview/, docs/slides/, readme.md case-normalized.
