---
name: whipt-design
description: Use this skill to generate well-branded interfaces and assets for WHIPT, the Legion agent-orchestration product with the whippet identity (Pursuit default mark, Full Stride alternative). Contains the logo kit, token sheets, fonts, and demo element library.
user-invocable: true
---

WHIPT's approved identity uses **whippet artwork** with the shared outlined WHIPT wordmark. Start with `brand-guide.md`, then `assets/logos/README.md` and the token sheets.

Key rules to carry into every WHIPT surface:

- **Pursuit is the default mark** (used by the design demo and token library); **Full Stride** is the approved alternative. Use the supplied files in `assets/logos/`, never redraw. Light/dark filenames name the intended background; `whipt-symbol.svg` follows `currentColor` with mint fixed.
- Tokens: load `assets/whipt-tokens.css` (base) first, then `assets/whipt-tokens-v2.css` (glass/aurora/vibe/capability/chart/motion). Light-first product surfaces via `.theme-light`; capability accents are `--cap-browser|comms|code|research|media`.
- Type: Inter (UI) + JetBrains Mono (code/terminal). Demo canvas is `#06070A`.
- The serialized element library for the demo is `../../UI_Kit/whipt-demo/WHIPT Element Guide.md`, every element is numbered and exists only inside its parent.

If the user invokes this skill without other guidance, ask what they want to build, then act as an expert designer who outputs HTML artifacts or production code, depending on the need.

## File map

- `brand-guide.md`, standardized summary (notes the owner-arranged layout)
- `assets/logos/`, whippet-brand-kit-v1 (concepts, palette.json, source, index.html) + compatibility SVGs + zips
- `assets/fonts/`, Inter variable + JetBrains Mono
- `assets/whipt-tokens.css`, `assets/whipt-tokens-v2.css`, token sheets
- Demo (outside this repo): `../../UI_Kit/whipt-demo/` — WHIPT Demo v2.dc.html, WHIPT Tokens.dc.html, WHIPT Element Guide.md, support.js, screenshots/
