---
name: legion-design
description: Use this skill to generate well-branded interfaces and assets for Legion, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Legion Design Skill

Read the `README.md` file within this skill, and explore the other available files. The key references:

- `README.md` — brand overview, content fundamentals, visual foundations, iconography, index of files.
- `colors_and_type.css` — the canonical token layer. Use these CSS variables; never raw hex. Drop the file into any new HTML artifact via `<link rel="stylesheet" href="path/to/colors_and_type.css">`.
- `assets/logos/` — 19 SVG logo variants. Use `legion-logo-dark.svg` on dark, `legion-logo-light.svg` on light, `legion-symbol.svg` (currentColor) for inline.
- `assets/legion-social-bg.png` — the OG/social background. The only ambient image in the system.
- `preview/` — design-system cards, one concept per file, useful as reference snippets when you need to recall a token usage.
- `ui_kits/legion-portal/` — production-fidelity React components for the five core product pages. Copy components from here when building related surfaces.

## When this skill is invoked

If the user invokes this skill without other guidance, ask what they want to build and ask focused questions, then act as an expert designer. Outputs may be HTML artifacts (mocks, prototypes, decks) or production-ready code — choose based on the need.

## Hard rules that distinguish Legion from a generic dev tool

1. **Brand-primary scarcity.** `#3DDC97` appears no more than once per visible region. It is the verified/signed signal. If a screen already has a Signed pill, don't make the primary CTA green too — outline it, or promote a neutral CTA.

2. **Mono is the texture of trust.** Every file path, line number, commit hash, snippet, DNS record, code, and timestamp uses JetBrains Mono. Inter is for prose only. The presence of mono signals "this is verifiable evidence."

3. **Severity is semantic, never decorative.** `severity.critical` red is what a finding *is*, not how the user should feel. Never use severity colors as accent decoration, divider colors, or marketing energy.

4. **Voice: direct expert next door.** State facts. Never alarm. Never moralize. Never celebrate bad results. No emoji in product UI or reports. No military metaphors. No "Oops!", no "Great news!". Use the plain-English equivalent — and always pair the technical term with a concrete user-facing explanation.

5. **Dark theme is primary.** Light theme exists only for the signed PDF report and printed material.

6. **No decorative motion.** Only the L mark's cap may pulse (during scan, on scan complete). Everything else settles in under 1.2 s using `--ease-out`. No bounce, no spring, no shimmer except the skeleton.

7. **Animation respects `prefers-reduced-motion`.** Disable the cap pulse and any rise/fade animations when set.

## Producing artifacts

For mocks, decks, throwaway prototypes:
- Copy `colors_and_type.css` into the project (or link via relative path).
- Copy the specific logo SVGs you need from `assets/logos/`.
- Use the dark canvas (`background: var(--bg-canvas)`); only switch to light for a PDF/report layout.
- Lean on `preview/` for visual reference of how tokens combine.

For production code:
- The token names map 1:1 to what production CSS variables should be. The team ships SvelteKit + shadcn-svelte anatomy.
- Treat the React components in `ui_kits/legion-portal/` as the visual specification, not the implementation. Port to Svelte; keep the token references and the structural anatomy.

## Forbidden in any Legion artifact

- Emoji inside product UI or signed reports.
- Bluish-purple gradient backgrounds, glow effects, decorative drop-shadows on dark.
- Stock dev photography, illustrations of people, hand-drawn graphics.
- "100% secure", "Enterprise", "Vulnerability" (to non-tech audiences) — see `messaging-and-naming.md` in the source codebase for the full forbidden list.
- Recoloring or animating the logo's green cap (the cap is fixed brand equity; subtle pulse on scan-complete only).
- Inventing new accent colors or new severity hues — there are exactly four severities and one brand color.
