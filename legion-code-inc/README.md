# Legion Design System

> The interactive design system lives at [`design-system.html`](./design-system.html). This document is the markdown reference for machine consumption (AI agents, build scripts, audits).

The design system, brand guide, token library, and UI kit for **Legion Code Inc.**, the connected toolchain for developers in the time of AI.

**Visual experiences:**
- [`design-system.html`](./design-system.html) - Interactive design system showcase
- [`../brand-preview.html`](../brand-preview.html) - Main brand portal
- [`../brand-guide.html`](../brand-guide.html) - Interactive brand guide
- [`../assets.html`](../assets.html) - Visual asset browser

---

## What lives here

```
brand_kit/
├── README.md                       This file
├── SKILL.md                        Claude Skill manifest
├── brand-guide.html                HTML render of the parent brand guide
├── design-system.html              Visual design system showcase
├── colors_and_type.css             Token stylesheet (CSS custom properties)
│
├── logos/                          19 canonical SVG mark variants
│   ├── ico/                        16 ICO files (multi-resolution)
│   └── png/                        247 PNGs across 13 sizes
│
├── fonts/                          Inter + JetBrains Mono
│   ├── Inter_18pt-*.ttf            (18pt: all weights + italic)
│   ├── Inter_24pt-*.ttf            (24pt: all weights + italic)
│   ├── Inter_28pt-*.ttf            (28pt: partial)
│   ├── Inter-VariableFont*.ttf     Variable fonts
│   └── JetBrainsMono-*.woff2       (16 weights/styles)
│
├── graphic-assets/                 Social backgrounds, 4K renders, PSDs
├── social/                         Social-specific assets
│
├── preview/                        34 component preview HTML cards
│   ├── colors-*.html               surfaces, text, borders, brand, severity, light
│   ├── type-*.html                 scale, mono, eyebrow
│   ├── spacing.html / radii.html / motion.html
│   ├── logo-*.html                 lockups, symbols, icons
│   └── component-*.html            buttons, inputs, forms, badges, cards, etc.
│
└── slides/
    └── signed-pdf-report.html      Slide render of signed PDF format
```

---

## Content fundamentals

The brand the design system serves: **Legion Code Inc.** A four-founder software company building a connected toolchain for developers in the time of AI. Six products organized around one loop: FIND → MAP → SHIP.

**Voice:** the direct expert next door. Calm, plain, technically literate, never hedging, never preachy.

**Six manifesto principles** (the full set lives in [`../brand-guide.md`](../brand-guide.md) Section 5):

1. We serve everyone, equally.
2. We build the moat with you, not around you.
3. Every finding has evidence.
4. Your code never leaves a sandbox.
5. Mono is the texture of trust.
6. We never celebrate bad results.

**Mono is the texture of trust.** Every coordinate, file path, commit hash, line number, and snippet appears in JetBrains Mono. When the user sees mono, they know they can click it, copy it, search for it.

---

## Visual foundations (summary)

The full visual specification lives in [`../brand-guide.md`](../brand-guide.md) Sections 2 through 8.

**Palette.** Dark-native by default. Five surfaces, four text levels, three border weights. One brand color (`#3DDC97`, verified-green) reserved for signed/trusted states. Four severity colors. The light palette exists only for the signed PDF report.

**The brand-primary scarcity rule.** `#3DDC97` appears no more than once per visible region. Over-using it dilutes the trust it conveys. This is the most-violated rule in any new Legion surface. Audit for it.

**Typography.** Inter for everything UI and prose. JetBrains Mono for every coordinate, file path, hash, snippet, DNS record, code, and timestamp. Modular 1.25 scale on a 16px base.

**Spacing.** 4px base unit. Every value is a multiple of 4. Generous whitespace.

**Radii.** Five-step ladder: 4 (chips), 8 (buttons), 12 (cards), 16 (hero), full (avatars only).

**Motion.** Disciplined and brief. Default easing `cubic-bezier(0.2, 0.8, 0.2, 1)`. Default durations 120ms fast, 200ms base, 400ms slow. `prefers-reduced-motion` disables motion entirely.

**Cards.** Background `bg.elevated`, 1px border, 12px radius. No shadow. No gradient.

---

## Logo system

The Legion symbol is an L-form with a verified-signal cap. It reads three ways: the letter L (Legion), the corner of the `file:line` coordinate bracket every finding uses, and the cryptographic signature seal.

| File | When to use |
|---|---|
| `logos/legion-logo-dark.svg` | Primary lockup on dark surfaces |
| `logos/legion-logo-light.svg` | Primary lockup on light surfaces / signed PDF |
| `logos/legion-symbol.svg` | Symbol alone with `currentColor` |
| `logos/legion-favicon.svg` | Browser tabs, PWA icons |

19 SVG variants ship in `logos/`. See [`../ASSETS.md`](../ASSETS.md) for the full matrix or [`../assets.html`](../assets.html) for the visual browser.

---

## Iconography

Legion's own component icons follow: 24x24 grid, 1.5px stroke, stroked (not filled), geometric construction. No mascots, no metaphors.

**One exception.** The brand-primary checkmark used for verified or signed has a slightly thicker stroke (2px). The icon that signals "trust" gets the slight weight bump.

**Recommended library.** [Lucide](https://lucide.dev). Open-source, identical visual rules. CDN: `https://unpkg.com/lucide-static/icons/<name>.svg`.

---

## Preview pages (component cards)

All cards live in `preview/` and are organized by category. They are deliberately small and focused (one concept per card, ~700px wide). Five groups:

| Category | Cards |
|---|---|
| **Colors** | surfaces, text, borders, brand, severity, light theme |
| **Typography** | scale, mono, eyebrow |
| **Layout** | spacing, radii, motion |
| **Logo** | lockups, symbols, icons |
| **Components** | buttons, inputs, forms, badges, finding cards, toasts, modals, tabs, tables, progress, command palette |

Open any `.html` file in a browser to see the visual specification. Or browse all of them in [`design-system.html`](./design-system.html).

---

## Fonts

The `fonts/` directory contains the complete Inter and JetBrains Mono families:

- **Inter** (18pt, 24pt, 28pt, plus variable) for UI, marketing, body, headings
- **JetBrains Mono** (woff2) for code, file paths, hashes, coordinates

Both are open-source, free for commercial use. Load via `@font-face` or link to Google Fonts.

---

## Tokens (CSS)

The single-file `colors_and_type.css` exposes every token as a CSS custom property:

```css
:root {
  --bg-canvas: #0A0B0D;
  --bg-surface: #13151A;
  --text-primary: #F5F6F7;
  --brand-primary: #3DDC97;
  --severity-critical: #FF4D5E;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --space-1: 4px;
  --radius-md: 8px;
  --dur-base: 200ms;
  --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
  /* ... and more */
}
```

Drop it into any Legion product to get the full token set.

---

## Related

- [`../brand-guide.html`](../brand-guide.html) - Interactive brand guide
- [`../brand-guide.md`](../brand-guide.md) - Brand guide (markdown source)
- [`../ASSETS.md`](../ASSETS.md) - Full asset manifest
- [`../brand-preview.html`](../brand-preview.html) - Main brand portal
- [`../assets.html`](../assets.html) - Visual asset browser
- [`design-system.html`](./design-system.html) - Visual design system showcase
- [`../ui_kits/`](../ui_kits/) - Property-specific UI kits
