# OSPRY, Brand Guide

**Identity resolution, by Legion.** OSPRY turns anonymous traffic into person- and company-level signal. OSPRY stands for **Observe. Score. Profile. Reach. Yield.**

Status legend: ✅ on file · ⚠️ partial · ❌ not on file.

## 1. Identity

- **Canonical spelling:** OSPRY (uppercase).
- **Tagline:** "Identity resolution, by Legion."
- **One-liner:** Anonymous traffic → person- and company-level signal.

## 2. Relationships

- Inherits the Legion design language (`../legion-code-inc/`) with its own signature: verified-green `#3DDC97` on the osprey's wing-tips and talons.

## 3. Logo system, ✅

- **SVG masters:** `logos/svg/`, ospry-v2 lockup horizontal / stacked / tagline, symbol, wordmark.
- **PNG export matrix:** `logos/png/`, favicon, landscape 16x9 + 21x9 (dark/light), square (dark/light), transparent, lockup, symbol, wordmark sets (in `core-assets/` and `png-assets/`).
- **Rules and usage:** see `brand-guide.html` (interactive) and `readme.md`.

## 4. Color, ✅

| Name | Hex | Role |
|---|---|---|
| OSPRY Green | `#3DDC97` | Primary accent · verified / identified · mark |
| Green Hover / Pressed | `#2EC585` / `#22A26D` | Primary button states |
| Green Subtle / on Light | `rgba(61,220,151,.12)` / `#18A968` | Badge tint / white surfaces |
| Electric Blue | `#2BA8FF` | Interactive · links · selected · data series 1 |
| Violet | `#9B72FF` | Enrichment · tags · data series 2 |
| Burnt Orange | `#E2683C` | Highlight · attention · data series 3 |

- **Rule:** green stays reserved for verified/identified; blue/violet/orange carry everything else so the green never does double duty. Each accent has hover/pressed/subtle/on-light variants, full table in `readme.md`.
- **Token file:** ❌ no CSS token sheet on file (palette documented in `readme.md` and the kit's `brand-guide.html`).

## 5. Typography, ⚠️

Inherits Legion type (Inter + JetBrains Mono per `../legion-code-inc/`); no font files in this folder.

## 6. Iconography & imagery, ⚠️

Covered by `brand-guide.html`; no separate icon set on file.

## 7. Voice & content, ⚠️

Inherits Legion voice; no OSPRY-specific voice doc on file.

## 8. Component library, ❌

No component library on file.

## 9. UI kits

None on file. The "live UI kit" mentioned in readme.md is the interactive `brand-guide.html`, which stays in this folder.

## 10. Asset map

| Path | What's there |
|---|---|
| `logos/` | 5 SVG masters + full PNG matrix + favicons |
| `docs/` | 10 public PDFs (one-pagers, product guide, trust/privacy brief, competitor briefs, agency partner kit) |
| `brand-guide.html` / `readme.md` | interactive guide / deep reference |

## 11. Gaps & provenance

- ❌ CSS token sheet; ❌ component library; ⚠️ type/voice/iconography docs. Source: Claude Design. *Checked 2026-09-07.*
- Note: `logos/png/core-assets/` and `logos/png/png-assets/` are parallel export trees with stray test files (`_t.txt`, `_wtest.txt`), candidates for consolidation on a future pass.

## 12. Changelog

- 2026-09-07, rolled into the brands standard; readme.md case-normalized; added SKILL.md and this guide.
