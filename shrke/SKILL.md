---
name: shrke-design
description: Use this skill to generate well-branded interfaces and assets for shrke, the Legion desktop product whose UI kit is built on the rflectr design system. Contains the shrke logo set and its inherited design rules.
user-invocable: true
---

shrke is a desktop product in the Legion family. Its design language is inherited from rflectr (`../rflectr/`, read that skill for color, type, spacing, and voice rules); the shrke-desktop UI kit was built directly on the rflectr design system.

What shrke has of its own:

- `logos/svg/`, 10 lockups: horizontal + stacked in themeable / on-dark / on-light / mono-black / mono-white
- `logos/svg/wordmark.svg`, wordmark master; `logos/png/logo.png`, square symbol
- `../../UI_Kit/shrke-desktop/`, the UI kit (App/Shell/Overview/Providers/Harnesses/Observability screens)

Key rules:

- Spell the product `shrke`, lowercase; use the supplied logo files, never redraw them.
- Carry rflectr's rules into every surface: ink surfaces, hairline borders, green `#3DDC97` = the committed route and never a health color; metadata only, never render request content.
- No shrke-specific tokens, type, or voice docs exist yet (`brand-guide.md` §11), inherit rflectr's until real ones are exported.

If the user invokes this skill without other guidance, ask what they want to build, then act as an expert designer who outputs HTML artifacts or production code, depending on the need.
