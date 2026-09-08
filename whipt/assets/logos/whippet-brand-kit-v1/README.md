# WHIPT brand asset kit

Two approved directions for WHIPT, the agent fleet management platform:

- **01 · Pursuit:** the focused whippet profile.
- **02 · Full Stride:** the whippet in motion.

Open **[index.html](index.html)** in a browser to preview both directions, switch color treatments, and download individual files. The catalog works offline and requires no installation. The outlined WHIPT wordmark is identical in both direction folders so each folder can be used independently.

## Choose a treatment

The treatment name describes the **background the artwork is intended for**. It does not mean the artwork includes that background.

| Treatment | Artwork | Intended background |
| --- | --- | --- |
| `light` | Ink `#0A0B0D` with mint `#3DDC97` | White or another light surface |
| `dark` | Off-white `#F5F6F7` with mint `#3DDC97` | Ink or another dark surface |
| `black` | Solid `#000000` | Light surfaces; single-color reproduction |
| `white` | Solid `#FFFFFF` | Dark surfaces; single-color reproduction |

SVG and PNG artwork has a transparent background, **except `app-icon`**, which intentionally includes an opaque square tile. App icons and favicons are provided in the `light` and `dark` treatments only. A white or dark mark can appear invisible against a matching preview background; place it on the intended contrasting surface.

## Choose a layout

| Layout | Use |
| --- | --- |
| `symbol` | The animal mark in its natural proportions; tight artwork bounds |
| `icon` | The animal mark centered within a padded square; avatars and compact UI |
| `wordmark` | WHIPT lettering only |
| `lockup-horizontal` | Symbol and wordmark arranged side by side; navigation and wide placements |
| `lockup-stacked` | Symbol above wordmark; centered and portrait placements |
| `app-icon` | Symbol on an opaque square tile; app and launcher use |
| `favicon` | Browser icon in SVG and multi-resolution ICO formats |

Use SVG wherever a scalable vector file is supported. The vector artwork consists of paths, and wordmark lettering is outlined: no installed font or external resource is required. PNG files are convenient for presentations, documents, social platforms, and tools that accept raster images.

## PNG sizes

Numbers in filenames are **pixel widths**. Height follows the layout's proportions. `icon` and `app-icon` exports are square, so their filenames give both width and height.

| Layout | Available widths in pixels |
| --- | --- |
| `symbol` | 64, 128, 256, 512, 1024, 2048, 4096 |
| `icon` | 32, 64, 128, 256, 512, 1024, 2048 |
| `wordmark` | 256, 512, 1024, 2048, 4096 |
| `lockup-horizontal` | 512, 1024, 2048, 4096 |
| `lockup-stacked` | 256, 512, 1024, 2048, 4096 |
| `app-icon` | 16, 32, 48, 64, 128, 180, 192, 256, 512, 1024 |

For sharp raster display, choose an export at least twice the intended on-screen width. Prefer the dedicated favicon files for browser tabs.

Each direction's `favicon/` folder also includes ready-named PNG aliases for an Apple touch icon at 180 × 180 pixels and Android/Chrome icons at 192 × 192 and 512 × 512 pixels, in both light and dark treatments.

## File structure

```text
whippet-brand-kit-v1/
├── index.html                    Offline visual catalog
├── README.md                     This guide
├── manifest.json                 Machine-readable asset inventory
├── palette.json                  Brand color values
├── preview/
│   └── overview.png              Overview of the asset kit
├── source/                       Vector source masters
├── 01-pursuit/
│   ├── svg/
│   ├── png/
│   │   ├── light/
│   │   ├── dark/
│   │   ├── black/
│   │   └── white/
│   └── favicon/
└── 02-full-stride/
    ├── svg/
    ├── png/
    │   ├── light/
    │   ├── dark/
    │   ├── black/
    │   └── white/
    └── favicon/
```

Filename examples:

```text
01-pursuit/svg/whipt-pursuit-lockup-horizontal-dark.svg
01-pursuit/png/dark/whipt-pursuit-lockup-horizontal-dark-2048.png
02-full-stride/svg/whipt-full-stride-icon-light.svg
02-full-stride/favicon/whipt-full-stride-favicon-dark.ico
```

## Placement guidance

- Preserve proportions when scaling. Avoid stretching, skewing, rotating, or adding outlines, shadows, gradients, or new colors.
- As a starting clear-space rule, leave at least one quarter of the animal symbol's displayed height around a symbol or lockup. For the standalone wordmark, leave at least half the capital-letter height. Give the mark more room where space allows.
- Keep the mint accent and the surrounding silhouette clearly distinguishable from the background. Use monochrome artwork when color reproduction is limited.
- Use a consistent animal direction within a product surface or campaign. Both directions share the same wordmark and palette.
- For very small UI placements, start with Pursuit and check legibility in context. Full Stride has a naturally wide silhouette and benefits from more horizontal room.
- The padding inside an `icon` or `app-icon` is intentional. Keep it when placing a square asset in an avatar or launcher container.
