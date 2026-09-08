# knectar Design System

knectar (ships at knectar.dev) is a product of Legion Code Inc. This folder carries its complete design system.

knectar is a product of **Legion Code Inc.** and inherits the Legion parent brand (ink surfaces, verified-green `#3DDC97`, Inter + JetBrains Mono). The knectar mark is **Hover**: a hummingbird with one raised green wing beside a lowercase wordmark.

The token file exposes the full shadcn semantic contract (`--background`, `--card`, `--primary`, `--muted-foreground`, `--border`, `--input`, `--ring`, `--sidebar-*`) so shadcn-svelte's `app.css` can be replaced wholesale by `tokens/styles.css`.

## Sources

Assembled from the approved knectar logo system and the Legion parent brand kit (`../legion-code-inc/`).

## Product surfaces

One product surface: the **knectar app** (workspace). The authoritative screen inventory lives with the product team; this repo defines the design language that renders it.

## Content fundamentals

**Voice: the direct expert next door.** Calm, plain, technically literate. Never hedges, never hypes, never scolds. Short declaratives. Reads like a good README.

- **Casing:** Sentence case for everything — page titles ("Model Providers" is a proper noun-ish nav label and stays Title Case; body, buttons, descriptions are sentence case: "Send your first request to get started", "Resume setup", "View release notes").
- **Person:** Second person, "you/your". First person plural "we" only when the company is genuinely speaking ("We offer help with production setup"). Never "I".
- **Numbers & identifiers are mono.** Request ids, model names, hashes, token counts, latencies, costs, virtual-key prefixes, env labels (`PRODUCTION`) — all in JetBrains Mono. When it's mono, you can click it, copy it, search it.
- **Status words are exact:** `success`, `error`, `processing`, `cancelled`. Request types use their human labels ("Chat", "Chat Stream", "Responses", "Embedding", "Realtime Turn").
- **Empty states teach.** The logs empty state is a 60-second integration guide with tabbed code samples (cURL / OpenAI SDK / Anthropic SDK / …) — not an illustration and a sad sentence.
- **Errors are plain and actionable:** "Looks like you haven't configured the log store in your config file." / "Lost track of the recalculation job status. Please refresh and try again."
- **Warnings name the consequence:** "3 setup steps left. Not completing these steps keeps your knectar setup vulnerable."
- **No emoji. No exclamation marks in UI.** Tooltips explain the metric, not the feature: "Success rate as perceived by the end user. It includes fallback chains as one request."
- **Toasts** are terse status lines: "Starting cost recalculation...", "Cost recalculation complete", "Cost recalculation failed" + a description.
- **Brand name** is always lowercase `knectar`, never capitalised, never bolded for emphasis.

## Visual foundations

- **Direction: "Nectar & wing."** Light-first (canvas `#F6F8F7`, white surfaces, hairline `#E1E7E4` borders); dark theme via `.dark` (ink `#0A0B0D` / `#13151A` / `#1C1F26`). The signature is the **nectar gradient** `--grad-nectar` (green `#3DDC97` → teal `#2DD4BF`) used on the primary button, active nav icon tile, avatar, card top-rail (`accent`) and gradient headline text (`.nectar-text`), plus a soft green **glow** (`--glow-nectar`) on hover of primary actions and the ⌘K trigger.
- **Colour:** One brand green `#3DDC97` (`#18A968` on light). **Scarcity rule:** green appears at most once per visible region — active nav item, primary button, success status, or the wing; not all four at once. Status colours are semantic only: red error, amber warning, blue info/processing, gray cancelled. Request-type chips use a wider tinted set (blue chat, yellow chat-stream, teal responses, violet stream/speech, orange transcription, pink embedding) at 12% tint backgrounds.
- **Type:** Inter for all UI; JetBrains Mono for identifiers. Type scale (odd sizes intentional): xs 12px, **sm 13.2px** (`0.825rem`, the app's working size), **base 15.2px** (`0.95rem`), lg 18, xl 20, 2xl 24. Headings 600, tracking −0.02em. Page title in header: 15.2px/600. Eyebrow labels: mono 12px uppercase +0.08em tertiary.
- **Spacing:** 4px base. Dense: controls 30px tall (`h-7.5`), inputs 36px, table rows 36–40px, cell padding 8×16, sidebar items 30px, sub-items 28px.
- **Radii:** rounded and friendly — controls 8px (`--radius-sm`: buttons, inputs, badges, popovers, nav rows), surfaces 12px (`--radius-lg`: cards, tables), dialogs & command bar 16px, sheets 16px on the open edge. Avatars, live dots and the user tile are round.
- **Borders:** 1px everywhere; `--border` on dark is `#2A2E37`, subtle dividers `#1F2229`. Inputs use `--input` (`#3A3F4A`) with a 3% white fill. Focus = 1px ring of `--ring` (green) with 1px offset; keyboard focus outline 2px green.
- **Cards:** white surface, 1px border, 12px radius, `shadow-sm`; `interactive` cards lift 2px with `shadow-md` on hover; `accent` adds a 2px nectar top-rail. Stat tiles carry the icon in a small nectar-tinted 8px square.
- **Shadows:** three steps, all soft black; popovers `shadow-md`, dialogs `shadow-lg`. Never coloured shadows.
- **Backgrounds:** flat. No imagery, textures or patterns in-app. The only decorative element is the Hover mark. Login page is the mark + wordmark centred on canvas.
- **Motion ("go wild", but purposeful):** shared keyframes live in `tokens/base.css` — `kn-route-in` (page fade+slide 480ms), `kn-row-in` (new log rows slide in with a green flash), `kn-stagger-in` (sidebar items reveal 22ms apart on expand/collapse), `kn-grow-y` (chart bars grow from the baseline, 14ms stagger), `kn-shimmer` (skeletons), `kn-flutter` / `kn-bob` (hummingbird flutters while navigating, bobs on hover), `kn-drift` (ambient blobs on login), `kn-ticker` (live request strip), `kn-live-ring` (expanding ring on live dots). Stat values count up with cubic ease-out. Dialogs and the command bar pop in with `--ease-spring`. Press = `scale(.98)`. `prefers-reduced-motion` disables all of it.
- **Hover:** primary buttons gain the nectar glow; outline controls shift to `--accent`; nav rows tint; interactive cards lift. **Press:** `scale(.98)`. **Disabled:** 50% opacity, `cursor: not-allowed`.
- **Transparency/blur:** only on the login page (blurred drifting nectar blobs + dot grid). Overlay behind dialogs/⌘K is `rgba(10,11,13,.45)`. Sidebar is opaque white.
- **Layout:** **rail-first** — the sidebar defaults to a 56px icon rail (active icon in a nectar tile) and expands to 256px; **⌘K command bar** is the primary way to move around (sidebar button, header button, keyboard). 52px header carries breadcrumbs left, ⌘K + theme toggle right. **Dashboard is the landing page** with a greeting headline and a scrolling **live request ticker**; Logs stream new rows in while polling is on. Content padded 32px. Log detail opens in a right **Sheet**.
- **Data viz:** thin bars/lines in `--chart-*`, no fills under lines, mono axis labels.
- **Imagery:** none in-product. Provider logos (OpenAI, Anthropic, Azure, Bedrock…) rendered as 16px monochrome icons in tables and 24px in provider cards.

## Iconography

- **System:** [Lucide](https://lucide.dev) (`lucide-react`; use `@lucide/svelte` in the port). 24-grid, 1.5–2px stroke, stroked not filled. Rendered at 16px (`size-4`) in controls and table cells, 14px (`size-3.5`) in sub-nav, 20–22px in the sidebar footer link row.
- **Loading:** `Loader2` with `animate-spin`, replaces button label while `isLoading`.
- **Custom SVGs:** the MCP glyph (`assets/icons/mcp.svg`) used for MCP Gateway + MCP Logs nav items. Footer social links use Lucide `github`, `book-open`, `message-circle`.
- **Provider logos:** third-party marks are not included; render the provider name in mono when a mark is unavailable.
- **Loading via CDN in HTML artifacts:** `<script src="https://unpkg.com/lucide@latest"></script>` then `<i data-lucide="telescope"></i>` + `lucide.createIcons()`. The `Icon` component in `components/core/` wraps this.
- **Emoji:** never. **Unicode-as-icon:** only `⌘` `K` in the sidebar search kbd hint.
- **Nav icon map:** one Lucide name per nav item, authored in `components/navigation/Sidebar`.

## Intentional additions

- `Icon` — thin Lucide wrapper so components and kits share one glyph source.
- `CommandBar` — ⌘K palette, the primary way to move around the app.
- `Sidebar` is authored as a knectar-specific composite (nav groups + footer + collapse) rather than the generic shadcn sidebar primitive family, since every screen uses exactly one configuration.

## Components

Core: Icon, Button, IconButton, Badge, Card, Input, Textarea, Label, Select, Checkbox, Switch, Slider, Toggle, Separator, Skeleton, Progress, Avatar. Overlay: Alert, Dialog, Sheet, Tooltip, Popover, DropdownMenu, Toast. Navigation & data: Tabs, Breadcrumb, Sidebar, CommandBar, Accordion, Table, Pagination, StatCard, EmptyState.

## Index

```
readme.md · SKILL.md · tokens/styles.css · system/thumbnail.html
tokens/        fonts.css colors.css typography.css spacing.css base.css
assets/        logo*.svg mark*.svg wordmark*.svg app-icon-* fonts/ icons/mcp.svg
guidelines/    foundation specimen cards (Colors, Type, Spacing, Brand groups)
components/
  core/        Button IconButton Badge Card Input Textarea Label Select Checkbox Switch Slider Toggle Separator Skeleton Progress Avatar Icon
  overlay/     Dialog Sheet Tooltip Popover DropdownMenu Alert Toast
  navigation/  Tabs Breadcrumb Sidebar CommandBar Accordion Table Pagination StatCard EmptyState
ui_kits/knectar-app/   → ../../UI_Kit/knectar-app/ (private UI_Kit workspace, outside the repo) · index.html + Login (ambient), Dashboard (ticker), Logs (live rows), LogDetailSheet, Providers, VirtualKeys
```

See `check_design_system` / `_ds_manifest.json` for the compiled namespace and full export list.
