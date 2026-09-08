repo: legioncodeinc/rflectr
branch: main

## Last sync
date: 2026-09-04T02:28:48Z
### Updated in this project
- Copied logo system SVG/PNG masters (symbol, micro-symbol, wordmark, lockups, app icon, favicon, tray, menubar) into `assets/`
- Read logo usage standard + concept docs; palette and clear-space rules encoded in `tokens/colors.css` and readme
- Read product README, renderer index.html and demo-transport for object vocabulary (visuals intentionally not reused)

## Screen map
| Screen | Repo files |
|---|---|
| tokens/colors.css | assets/logo-system/docs/usage-standard.md |
| assets/** | assets/logo-system/svg/**, assets/logo-system/platform/app-icon/**, assets/logo-system/previews/rflectr-logo-system-overview.png |
| ui_kits/rflectr-desktop/data.js | src/renderer/src/demo-transport.ts, README.md (compatibility evidence table) |
| ui_kits/rflectr-desktop/*.jsx | new design; vocabulary from src/renderer/index.html |
