# OSPRY — Brand Kit

**Identity resolution, by Legion.** OSPRY turns anonymous traffic into person- and
company-level signal. This folder is the product's complete visual system: the
osprey mark, type, color palette, export assets, and the live UI kit.

OSPRY stands for: **Observe. Score. Profile. Reach. Yield.**

Open **`brand-kit.html`** for the full interactive brand kit (logos, palette with hex,
examples of use, type, usage rules).

OSPRY inherits the Legion design language and adds its own signature: the
**verified-green** `#3DDC97` on the bird's wing-tips and talons.

---

## Color palette

### Signature

| Name           | Hex                      | Role                                           |
|----------------|--------------------------|------------------------------------------------|
| OSPRY Green    | `#3DDC97`                | Primary accent · verified / identified · mark  |
| Green Hover    | `#2EC585`                | Primary button hover                           |
| Green Pressed  | `#22A26D`                | Primary button pressed                         |
| Green Subtle   | `rgba(61,220,151,.12)`   | Tint behind verified badges / pills            |
| Green on Light | `#18A968`                | Green re-tuned for white surfaces              |

### Accents · interactive & data

Green stays reserved for verified/identified. These three carry everything else, so
the green never does double duty. Each also doubles as a categorical chart series.

| Name           | Hex                      | Role                                          |
|----------------|--------------------------|-----------------------------------------------|
| Electric Blue  | `#2BA8FF`                | Interactive · links · selected · data series 1|
| Blue Hover     | `#1F93E8`                | Interactive hover                             |
| Blue Pressed   | `#1A7DC8`                | Interactive pressed                           |
| Blue Subtle    | `rgba(43,168,255,.12)`   | Tint behind blue chips                        |
| Blue on Light  | `#1273D6`                | Blue for white surfaces                       |
| Violet         | `#9B72FF`                | Enrichment · tags · data series 2             |
| Violet Hover   | `#885CF0`                | Violet hover                                  |
| Violet Pressed | `#7547D4`                | Violet pressed                                |
| Violet Subtle  | `rgba(155,114,255,.12)`  | Tint behind violet chips                      |
| Violet on Light| `#6D45D9`                | Violet for white surfaces                     |
| Burnt Orange   | `#E2683C`                | Highlight · attention · data series 3         |
| Orange Hover   | `#D0592F`                | Orange hover                                  |
| Orange Pressed | `#B84A24`                | Orange pressed                                |
| Orange Subtle  | `rgba(226,104,60,.12)`   | Tint behind orange chips                      |
| Orange on Light| `#C2541F`                | Orange for white surfaces                     |

**Categorical / chart series:** Green `#3DDC97` · Blue `#2BA8FF` · Violet `#9B72FF` ·
Orange `#E2683C`. Use the full hue for fills and bars, the subtle tints for chips and badges.

### Core surfaces · dark

| Name          | Hex       | Use                          |
|---------------|-----------|------------------------------|
| Ink / Canvas  | `#0A0B0D` | App background               |
| Inset         | `#06070A` | Code / terminal / strips     |
| Surface       | `#13151A` | Sidebar, rails, panels       |
| Elevated      | `#1C1F26` | Cards, rows, modals          |
| Subtle        | `#242831` | Hover / selected row         |

### Text on dark

| Name              | Hex       | Use                       |
|-------------------|-----------|---------------------------|
| Mist / Primary    | `#F5F6F7` | Headings, primary body    |
| Secondary         | `#A1A8B3` | Body, descriptions        |
| Tertiary          | `#858B97` | Captions, timestamps      |
| Disabled          | `#4A5160` | Ghosted controls          |

### Borders

| Name            | Hex       | Use                    |
|-----------------|-----------|------------------------|
| Border Subtle   | `#1F2229` | Hairlines in cards     |
| Border Default  | `#2A2E37` | Controls, dividers     |
| Border Strong   | `#3A3F4A` | Focus, selected edges  |

### Light surfaces · reports & print

| Name           | Hex       | Use                |
|----------------|-----------|--------------------|
| Paper          | `#FFFFFF` | Light canvas       |
| Surface Light  | `#FAFAFB` | Report sections    |
| Elevated Light | `#F4F5F7` | Cards in PDF       |
| Ink (text)     | `#0A0B0D` | Text on light      |

### Semantic · data states

| Name      | Dark      | Light     | Use                  |
|-----------|-----------|-----------|----------------------|
| Critical  | `#FF4D5E` | `#DC2839` | High-risk / errors   |
| Warning   | `#FFB02E` | `#C77A00` | Attention needed     |
| Info      | `#5B8AFF` | `#2E5BD9` | Advisory             |
| Success   | `#3DDC97` | `#18A968` | Verified / passed    |

**Green is scarce.** Use it once per visible region, only for verified / identified
states and the mark's fixed accents. It is the only loud color in the system.

---

## Typography

- **Inter** — UI, body, headings, and the OSPRY wordmark (700, tracking `-0.03em`).
- **JetBrains Mono** — IDs, evidence, coordinates, and the "Identity Resolution" tagline.

Wordmarks are outlined to paths, so the SVGs carry no font dependency.

---

## Logo system

The body is a single `currentColor` path (Mist on dark, Ink on light). The green
wing-tips and talons are fixed `#3DDC97` and are never recolored.

```
logos/
  svg/
    ospry-v2-symbol.svg             Bird only
    ospry-v2-wordmark.svg           "OSPRY" (Inter 700, outlined)
    ospry-v2-lockup-horizontal.svg  Bird + OSPRY / by Legion
    ospry-v2-lockup-tagline.svg     + "Identity Resolution"
    ospry-v2-lockup-stacked.svg     Bird above OSPRY / by Legion
  png/
    symbol/  wordmark/  lockup/     Quick exports (ink + white)
    png-assets/                     Full export matrix (see below)
```

### Export matrix — `logos/png/png-assets/`

Body color inverts between dark and light; green `#3DDC97` is retained on both.

```
transparent/         no padding — all 5 assets, white + ink, 4096 -> 128
square/dark|light/   1:1 padded — stacked, icon, wordmark, 4096 -> 128
landscape-16x9/      dark|light — horizontal, tagline, icon, wordmark
landscape-21x9/      dark|light — same assets
favicon/             ospry-favicon.ico (dark plate, 16-256),
                     ospry-icon-transparent.ico, PNG set 16-512
```

186 files total. Dark backgrounds use the white-body bird; light backgrounds use
the ink-body bird.

> **Note:** the `logos/png/core-assets/` folder came across from the move in a
> broken, unwritable state (empty, and can't be deleted in-session). The regenerated
> matrix lives in `logos/png/png-assets/` instead. Delete the empty
> `core-assets/` folder in your file explorer when convenient.

---

*Legion Code Inc. · OSPRY brand kit · Identity resolution, by Legion.*
