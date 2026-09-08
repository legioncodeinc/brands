---
name: rflectr-design
description: Use this skill to generate well-branded interfaces and assets for rflectr, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key rules to carry into every rflectr surface:
- Green is the committed route, never a health color. Observe is slate-blue; Draining/Degraded amber; Failed red; Healthy neutral.
- Configured intent (Off/Observe/Route) and effective runtime state are always shown separately.
- Every number carries provenance; estimates are prefixed `~`; cost bases never merge.
- Metadata only, never render prompt, response, tool, header, or credential content.
- Spell the product `rflectr`; use the supplied logo files in `assets/`, never redraw them.
