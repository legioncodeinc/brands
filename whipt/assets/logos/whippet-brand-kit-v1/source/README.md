# Vector source and reproducible exports

The three SVG masters in this folder are the authoritative, hand-refined artwork:

- `pursuit-symbol-master.svg`
- `full-stride-symbol-master.svg`
- `wordmark-master.svg`

Each master contains editable paths. Lettering is outlined. Keep these masters together; both directions deliberately share the same wordmark.

The final family can be rebuilt with:

1. Python 3: `python source/build-kit.py`
2. Node.js with Sharp available: `node source/render-kit.mjs`
3. Python with Pillow: `python source/verify-and-icons.py`

Run these commands from the kit folder. The scripts also resolve paths from their own locations, so they do not depend on the working directory. If Sharp is installed outside normal Node module resolution, set `WHIPT_SHARP_PATH` to its package directory before running the renderer.

The builder writes the SVGs, palette, render manifest, and preview layout. The renderer exports PNGs directly from each SVG at the requested dimensions. The verifier adds platform icon aliases and multi-resolution ICOs, then checks dimensions, alpha transparency, canvas clear space, and geometry consistency across color treatments.

`overview-build.svg` is the intermediate catalog illustration. Its editorial labels use a system font; the WHIPT logo artwork and all delivered logo SVGs use paths only.

