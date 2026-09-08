# rflectr

The selected identity is the **Echo bat**: an asymmetrical bat in banking flight, with a lowercase `rflectr` wordmark and one green inner-wing accent. Mario selected the bat direction on 5 September 2026.

[Open the visual preview](preview.html) · [Download the brand kit](rflectr-echo-bat-brand-kit.zip) · [View the proof sheet](review/rflectr-echo-bat-proof.png)

## Choose a file

| Need | Artwork |
|---|---|
| Logo on a light surface | [Horizontal color SVG](logos/svg/native/rflectr-horizontal-color-on-light-native.svg) |
| Logo on a dark surface | [Horizontal reversed SVG](logos/svg/native/rflectr-horizontal-color-on-dark-native.svg) |
| Bat by itself | [Color symbol SVG](logos/svg/native/rflectr-mark-color-on-light-native.svg) |
| Stacked composition | [Stacked color SVG](logos/svg/native/rflectr-stacked-color-on-light-native.svg) |
| Lowercase lettering | [Outlined wordmark SVG](logos/svg/native/rflectr-wordmark-color-on-light-native.svg) |
| Black, single-color printing | [Monochrome SVG](logos/svg/native/rflectr-horizontal-mono-on-light-native.svg) |
| White, single-color printing | [Reversed monochrome SVG](logos/svg/native/rflectr-horizontal-mono-on-dark-native.svg) |
| Dark app icon | [SVG](application/rflectr-app-dark.svg), [1024px PNG](application/rflectr-app-dark-1024.png), [Windows ICO](application/rflectr-app-dark.ico) |
| Light app icon | [SVG](application/rflectr-app-light.svg), [1024px PNG](application/rflectr-app-light-1024.png), [Windows ICO](application/rflectr-app-light.ico) |
| Template icon artwork | [Black transparent SVG](application/rflectr-template.svg) |

## Included

**130 artwork files:**

- 96 logo files: four compositions (horizontal, stacked, mark, wordmark), four appearances, two canvas formats (native and square), each as SVG plus 512px and 2048px PNG exports.
- 22 app icon files: dark and light SVGs; 16, 24, 32, 48, 64, 128, 256, 512, and 1024px PNGs; and two multi-resolution Windows ICOs.
- 12 monochrome template files: one SVG plus 11 PNG sizes between 16 and 64px.

Logo SVGs contain actual vector paths and outlined letters, without embedded bitmaps or font dependencies. Logo PNGs have real alpha transparency. App icons intentionally include a rounded square plate with transparent corners. The proof sheet intentionally includes opaque backgrounds and is not master artwork.

## Appearance

| Version | Bat and lettering | Inner wing |
|---|---|---|
| Color on light | Ink `#0A0B0D` | Green `#3DDC97` |
| Color on dark | Soft white `#F5F6F7` | Green `#3DDC97` |
| Mono on light | Black `#000000` | Black `#000000` |
| Mono on dark | White `#FFFFFF` | White `#FFFFFF` |

The wordmark is exactly `rflectr`, lowercase. Its letters stay neutral. The green wing is a fixed brand accent. Never animate or recolor the logo to communicate runtime state. Preserve rflectr's existing interface semantics: Route green, Observe blue, Degraded/Draining amber, Failed red, Healthy neutral.

Keep the bat facing right in its selected banking pose. Do not rotate, stretch, mirror, add an oval enclosure, or add a gradient, glow, or shadow. The rounded app-icon plate is a separate application treatment.

Use the full symbol at 32px or larger and the horizontal logo at 160px wide or larger as initial placement guidance. Smaller app and template exports are provided for evaluation. They preserve the full silhouette rather than introduce a separately approved micro-symbol; thin membrane cuts lose definition at 16px. Native Windows tray and macOS menu-bar appearance still needs testing in the application.

## Source and verification

The visual direction was generated with the built-in image-generation tool. The complete selected comparison board is preserved in `source/selected-concept-board.png`; the prompt is in `source/concept-prompt.txt`. The standalone generated extraction clipped a wing and was not used for the delivered master.

The bat master is a smooth vector trace of the intact selected bat in the board, normalized to the exact Legion palette. It preserves the selected pose and composition but is a production adaptation, not a claim of pixel-identical recovery. The source-region silhouette comparison has 95.88% intersection-over-union, with no mismatched pixels beyond a two-pixel boundary tolerance at the 364 by 291px source region. This checks outline proximity, not ownership, uniqueness, or native usability.

The lowercase wordmark is newly outlined from the supplied Inter 24pt Bold font with adjusted spacing. It matches the chosen direction's typography but is not an exact trace of the generated lettering. Its provenance is recorded separately.

Validation checks actual vector paths, outlined lettering, palette tokens, transparent logo exports, unclipped bounds, square aspect ratios, icon dimensions, ICO frames, file hashes, local preview links, and archive integrity. The light/dark proof and monochrome proof were inspected visually. `manifest.json` lists artwork and hashes. Source geometry is held stable on subsequent exports unless `--retrace` is explicitly requested.

This folder contains the new brand artwork. Application code, existing SHRKE assets, and historical kit paths have not been migrated in this logo exploration.

## Re-export

From an environment with Python, Pillow, fonttools, and resvg-py installed:

```powershell
python scripts/export_brand.py
```

The checked-in SVG masters are sufficient for normal exports; VTracer is needed only to reconstruct the trace. Outlined lettering does not require installing a font. The supplied Inter font in the parent brands repository is used only to regenerate a missing wordmark source and to render proof labels. The package includes sources, exports, preview, manifest, and the export script.
