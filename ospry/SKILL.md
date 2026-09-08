---
name: ospry-design
description: Use this skill to generate well-branded interfaces and assets for OSPRY (identity resolution by Legion), for production or throwaway prototypes. Contains the OSPRY palette, logo system, and usage rules.
user-invocable: true
---

OSPRY stands for **Observe. Score. Profile. Reach. Yield.**, identity resolution that turns anonymous traffic into person- and company-level signal. Start with `brand-guide.md` (standard summary), `readme.md` (deep palette/usage reference), and `brand-guide.html` (interactive).

Key rules to carry into every OSPRY surface:

- Green `#3DDC97` is reserved for **verified/identified** (it lives on the osprey's wing-tips and talons). Blue `#2BA8FF` (interactive), violet `#9B72FF` (enrichment/tags), and burnt orange `#E2683C` (highlight) carry everything else so the green never does double duty.
- Each accent has hover / pressed / subtle-tint / on-light variants, use them, never ad-hoc shades.
- Inherits the Legion design language: dark-native, Legion type and voice (see `../legion-code-inc/`).
- Use the supplied logo files in `logos/` (5 SVG masters + PNG matrix), never redraw the osprey.

If the user invokes this skill without other guidance, ask what they want to build, then act as an expert designer who outputs HTML artifacts or production code, depending on the need.

## File map

- `brand-guide.md` / `readme.md` / `brand-guide.html`, summary / deep reference / interactive guide
- `logos/svg/`, v2 lockup horizontal, stacked, tagline, symbol, wordmark
- `logos/png/`, favicon, landscape, square, transparent export matrix
- `docs/`, 10 public PDFs (one-pagers, product guide, trust brief, competitor briefs)
