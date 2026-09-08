---
name: knectar-design
description: Use this skill to generate well-branded interfaces and assets for knectar (knectar.dev), either for production Svelte 5 / shadcn-svelte code or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files (`tokens/styles.css` + `tokens/`, `assets/`, `components/**`, `guidelines/`; the knectar-app UI kit lives in `../../UI_Kit/knectar-app/`, the private UI_Kit workspace outside this repo).
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand, the token file already speaks the shadcn-svelte variable contract, so `tokens/styles.css` can replace `app.css` directly.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Non-negotiables: dark-native ink surfaces; one brand green (`#3DDC97`) per visible region; Inter for UI, JetBrains Mono for every identifier/number; 4px control radius, 30px buttons, 36px inputs; Lucide icons at 16px; sentence case, no emoji, lowercase `knectar`.
