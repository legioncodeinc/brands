# knectar

The selected knectar identity is **Hover**, the hummingbird with one raised green wing and a lowercase wordmark. Selected by Mario on 5 September 2026.

The approved silhouette, wordmark outlines, spacing, and horizontal proportions are preserved from option B. Earlier explorations live in `archive/`; use `logos/` for current artwork.

## Download

[Download the complete Hover brand kit](knectar-hover-brand-kit.zip).

**192 transparent artwork files: 48 SVGs and 144 PNGs.** Every composition is supplied in every appearance and canvas format.

| Composition | Contents |
|---|---|
| `horizontal` | Hummingbird to the left of the knectar wordmark; the selected original lockup |
| `stacked` | Hummingbird centered above the knectar wordmark |
| `mark` | Hummingbird only |
| `wordmark` | Lowercase knectar lettering only |

| Appearance | Body and lettering | Wing | Intended placement |
|---|---|---|---|
| `color-on-light` | Ink `#0A0B0D` | Green `#3DDC97` | Light surfaces |
| `color-on-dark` | Soft white `#F5F6F7` | Green `#3DDC97` | Dark surfaces |
| `mono-on-light` | Black `#000000` | Black `#000000` | Light surfaces, single-color reproduction |
| `mono-on-dark` | White `#FFFFFF` | White `#FFFFFF` | Dark surfaces, reversed single-color reproduction |

The wordmark stays neutral in color versions; it does not acquire a green letter. The standalone wordmark has no wing.

**On-light and on-dark describe the surface beneath the artwork. No background is baked into any logo SVG or PNG.** All exported artwork has true transparency. Review proof sheets are separate and intentionally show solid light and dark backgrounds.

## Canvas and export matrix

Square and 1:1 are the same aspect ratio and are combined as `square-1x1`.

| Canvas | SVG | PNG sizes |
|---|---|---|
| `native` | Natural proportions with clear space | 512, 1024, and 2048 pixels wide; height follows the composition |
| `square-1x1` | 1024 × 1024 viewBox | 512 × 512, 1024 × 1024, 2048 × 2048 |
| `landscape-16x9` | 1920 × 1080 viewBox | 1280 × 720, 1920 × 1080, 3840 × 2160 |

All SVGs scale without loss and use outlined lettering. No external fonts, embedded bitmap images, external resources, or scripts are required. Wordmark type originated from Inter SemiBold supplied in the parent brand repository; the selected outlines are preserved.

Fixed-ratio canvases center the intact composition with safe margins. They do not stretch the mark or wordmark. Use native files when a website or document should control its own spacing.

## Find the right file

`logos/{svg|png}/{canvas}/knectar-{composition}-{appearance}-{canvas}[-{width}x{height}].{svg|png}`

Examples:

- Website header on white: [horizontal color SVG](logos/svg/native/knectar-horizontal-color-on-light-native.svg)
- Website header on dark: [horizontal reversed color SVG](logos/svg/native/knectar-horizontal-color-on-dark-native.svg)
- App mark: [square color mark SVG](logos/svg/square-1x1/knectar-mark-color-on-light-square-1x1.svg)
- Stacked identity: [stacked color SVG](logos/svg/native/knectar-stacked-color-on-light-native.svg)
- Single-color printing: [black horizontal SVG](logos/svg/native/knectar-horizontal-mono-on-light-native.svg)
- Lettering alone: [wordmark SVG](logos/svg/native/knectar-wordmark-color-on-light-native.svg)

## Use

Keep the hummingbird upright, its bill facing right, and the lowercase spelling `knectar`. Keep the original proportions. Use the green accent only on the selected wing. Do not add shadows, gradients, outlines, or background boxes to the master artwork.

For initial implementation, use the mark at 32 pixels or larger and the horizontal lockup at 160 pixels wide or larger. The selected master retains fine bill and tail tips; this package does not silently alter them to create a different favicon design.

## Verification and source

- `source/` preserves the four selected concept SVGs byte-for-byte.
- `manifest.json` lists every delivered artwork file, dimensions, appearance, and SHA-256 digest.
- Exports are checked for real alpha transparency, palette compliance, correct aspect ratio, clear margins, and no embedded fonts or bitmap images.
- The native color horizontal lockups are rendered and compared pixel-for-pixel with the selected source at 2000 pixels wide in both light and dark appearances.
- `review/` contains 16-variant proof sheets for each of the three canvas formats.
- `scripts/export_brand.py` reproducibly exports the complete set from the selected source. Requires Python, resvg-py, Pillow, and fonttools.

The ZIP includes current artwork, this guide, and the manifest. Archived explorations are excluded.
