# ui_kits/ — pointer and move manifest

UI kits no longer live in this repo. They live in the private **UI_Kit** workspace beside it (`../UI_Kit/` from the repo root), which is what the private UI_Kit repo is built from. This folder is a gitignored drop zone: `ui_kits/*` is excluded and only this README is tracked, so kit content can never be committed by accident.

Product brand guides reference their kit from section 9 by pointer only; kit internals are not brand material.

## Kits (external)

| Kit | Product | Location (from repo root) | Contents |
|---|---|---|---|
| `knectar-app/` | knectar | `../UI_Kit/knectar-app/` | index.html, data.js, 6 screens (dashboard, logs, logDetail, login, providers, virtualKeys) |
| `shrke-desktop/` | shrke (exported from the rflectr design system) | `../UI_Kit/shrke-desktop/` | React screens (App, Shell, Overview, Providers, Harnesses, Observability), ui-kit-components, vite build + dist |
| `whipt-demo/` | whipt | `../UI_Kit/whipt-demo/` | WHIPT Demo v2.dc.html, WHIPT Tokens.dc.html, WHIPT Element Guide.md, support.js, screenshots/ (15, true PNG) |

## Move manifest (original → current)

| Original path | Current path |
|---|---|
| `knectar/design/ui_kits/knectar-app/` | `../UI_Kit/knectar-app/` |
| `rflectr/ui_kits/shrke-desktop/` | `../UI_Kit/shrke-desktop/` |
| `rflectr/uploads/shrke-lockup-*.svg` (brand logos, not a kit) | `shrke/logos/svg/` (kept in this repo) |
| `whipt/WHIPT Demo v2.dc.html` + `WHIPT Tokens.dc.html` + `WHIPT Element Guide.md` + `support.js` + `screenshots/` | `../UI_Kit/whipt-demo/` |

## Rules

- Never commit kit content: the .gitignore exception tracks only this README.
- Brand material (logos, tokens, fonts, voice, components) never moves to UI_Kit/.
- When the private UI_Kit repo goes live, record each kit's destination here.
