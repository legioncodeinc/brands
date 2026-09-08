/* @ds-bundle: {"format":4,"namespace":"rflectrDesignSystem_c36c9e","components":[{"name":"STATE_TONE","sourcePath":"components/core/Badge.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ICON_PATHS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"EmptyState","sourcePath":"components/data/EmptyState.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"},{"name":"RouteLine","sourcePath":"components/data/RouteLine.jsx"},{"name":"Tabs","sourcePath":"components/data/Tabs.jsx"},{"name":"UsageWindow","sourcePath":"components/data/UsageWindow.jsx"},{"name":"ActionItem","sourcePath":"components/feedback/ActionItem.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"ModeSegment","sourcePath":"components/forms/ModeSegment.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"StatusDot","sourcePath":"components/navigation/StatusDot.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"0f35b124b37e","components/core/Button.jsx":"057b38748c34","components/core/Icon.jsx":"b66b89830102","components/core/IconButton.jsx":"49e48c278af2","components/core/Tooltip.jsx":"6b8390dad604","components/data/Card.jsx":"a2e0c7f5950f","components/data/DataTable.jsx":"cf71491ab563","components/data/EmptyState.jsx":"c03e46935fa1","components/data/MetricCard.jsx":"9f7f9f3f7756","components/data/RouteLine.jsx":"c2fb3a1e1bba","components/data/Tabs.jsx":"f89f90726835","components/data/UsageWindow.jsx":"cdc6b9b6782a","components/feedback/ActionItem.jsx":"e309d4212363","components/feedback/Dialog.jsx":"8e8d38857afd","components/feedback/Toast.jsx":"a336a34ae1dc","components/forms/Checkbox.jsx":"8149020bde12","components/forms/Input.jsx":"868fa8aa54f0","components/forms/ModeSegment.jsx":"58e1aa8cfb86","components/forms/Select.jsx":"b5356917a48e","components/forms/Switch.jsx":"946b40bc5ad1","components/navigation/NavItem.jsx":"d02d3be4e206","components/navigation/StatusDot.jsx":"c351cff1d702","ui_kits/rflectr-desktop/Harnesses.jsx":"a37060cdf162","ui_kits/rflectr-desktop/Observability.jsx":"156ba616255d","ui_kits/rflectr-desktop/Overview.jsx":"830bd60ad9ca","ui_kits/rflectr-desktop/Providers.jsx":"68200a97ee1e","ui_kits/rflectr-desktop/Shell.jsx":"694f814f13ee","ui_kits/rflectr-desktop/data.js":"6f417c0fe33b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.rflectrDesignSystem_c36c9e = window.rflectrDesignSystem_c36c9e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const Badge_CSS = `
.sk-badge{display:inline-flex;align-items:center;gap:6px;height:20px;padding:0 8px;border-radius:var(--r-pill);font:var(--type-caption);font-weight:var(--fw-medium);letter-spacing:var(--ls-tight);white-space:nowrap;border:1px solid transparent;background:var(--fill-neutral-soft);color:var(--text-secondary)}
.sk-badge--sm{height:18px;padding:0 6px;font-size:var(--fs-xs)}
.sk-badge i{width:6px;height:6px;border-radius:50%;background:currentColor;flex:none}
.sk-badge--route{background:var(--fill-route-soft);color:var(--text-route);border-color:var(--border-route)}
.sk-badge--observe{background:var(--fill-observe-soft);color:var(--text-observe)}
.sk-badge--warn{background:var(--fill-warn-soft);color:var(--text-warn)}
.sk-badge--danger{background:var(--fill-danger-soft);color:var(--text-danger)}
.sk-badge--neutral{color:var(--text-secondary)}
.sk-badge--off{color:var(--text-tertiary)}
.sk-badge--mono{font-family:var(--font-mono);font-weight:var(--fw-regular)}
.sk-badge--live i{animation:rflectr-pulse 1.4s var(--ease-in-out) infinite}
`;
let Badge_done = false;
function Badge_inject() {
  if (Badge_done || typeof document === "undefined") return;
  Badge_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "Badge");
  s.textContent = Badge_CSS;
  document.head.appendChild(s);
}
const STATE_TONE = {
  Off: "off",
  Starting: "neutral",
  Ready: "neutral",
  Observing: "observe",
  Observe: "observe",
  Routing: "route",
  Route: "route",
  Draining: "warn",
  Failed: "danger",
  Supported: "route",
  Unsupported: "danger",
  Inconclusive: "warn",
  Stale: "warn",
  "Not tested": "neutral",
  Healthy: "neutral",
  Degraded: "warn",
  Offline: "danger",
  Verified: "route",
  Partial: "warn",
  Open: "neutral",
  Blocked: "danger",
  External: "neutral",
  Native: "neutral",
  Translated: "observe",
  "Dropped with warning": "warn",
  Succeeded: "neutral",
  Cancelled: "neutral",
  Active: "route"
};
function Badge({
  tone,
  dot = false,
  live = false,
  mono = false,
  size = "md",
  children,
  className = "",
  ...rest
}) {
  Badge_inject();
  const t = tone || STATE_TONE[typeof children === "string" ? children : ""] || "neutral";
  return React.createElement("span", {
    className: `sk-badge sk-badge--${t} sk-badge--${size} ${mono ? "sk-badge--mono" : ""} ${live ? "sk-badge--live" : ""} ${className}`,
    ...rest
  }, dot || live ? React.createElement("i", {
    "aria-hidden": true
  }) : null, children);
}
Object.assign(__ds_scope, { STATE_TONE, Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const ICON_PATHS = {
  activity: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
  route: "M6 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM9 16h4.5a3.5 3.5 0 0 0 0-7H9",
  layers: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83zM2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
  boxes: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42zM7 16.5l-4.74-2.85M7 16.5l5-3M7 16.5v5.17M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3zM17 16.5l-5-3M17 16.5l4.74-2.85M17 16.5v5.17M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8zM12 8L7.26 5.15M12 8l4.74-2.85M12 13.5V8",
  wallet: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",
  scroll: "M15 12h-5M15 8h-5M19 17V5a2 2 0 0 0-2-2H4M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
  grid: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
  stethoscope: "M11 2v2M5 2v2M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1M8 15a6 6 0 0 0 12 0v-3M20 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  settings: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  search: "M21 21l-4.34-4.34M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z",
  refresh: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5",
  play: "M6 3l14 9-14 9V3z",
  square: "M3 3h18v18H3z",
  power: "M12 2v10M18.4 6.6a9 9 0 1 1-12.77.04",
  eye: "M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  check: "M20 6L9 17l-5-5",
  x: "M18 6L6 18M6 6l12 12",
  chevronDown: "M6 9l6 6 6-6",
  chevronRight: "M9 18l6-6-6-6",
  alertTriangle: "M21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4M12 17h.01",
  alertCircle: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 8v4M12 16h.01",
  info: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01",
  bell: "M10.27 21a2 2 0 0 0 3.46 0M3.26 15.33A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.67C19.41 13.87 18 12.53 18 8A6 6 0 0 0 6 8c0 4.53-1.42 5.87-2.74 7.33",
  plus: "M5 12h14M12 5v14",
  more: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
  externalLink: "M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
  lock: "M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM7 11V7a5 5 0 0 1 10 0v4",
  shield: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  clock: "M12 6v6l4 2M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z",
  terminal: "M4 17l6-6-6-6M12 19h8",
  monitor: "M2 3h20v14H2zM8 21h8M12 17v4",
  download: "M12 15V3M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5",
  copy: "M8 8h12v12H8zM16 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2",
  filter: "M3 6h18M7 12h10M10 18h4",
  arrowRight: "M5 12h14M12 5l7 7-7 7",
  minimize: "M5 12h14",
  maximize: "M3 3h18v18H3z",
  sidebar: "M3 3h18v18H3zM9 3v18",
  zap: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
  loader: "M12 2v4M16.2 7.8l2.9-2.9M18 12h4M16.2 16.2l2.9 2.9M12 18v4M4.9 19.1l2.9-2.9M2 12h4M4.9 4.9l2.9 2.9",
  cpu: "M4 4h16v16H4zM9 9h6v6H9zM15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2",
  database: "M12 8c4.97 0 9-1.34 9-3s-4.03-3-9-3-9 1.34-9 3 4.03 3 9 3zM3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3",
  key: "M2.59 21.41a2 2 0 1 1 2.83-2.83l4.24-4.24M21 2l-1 1M16 8l-4.24 4.24M7.5 15.5l2 2M15.5 8.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
};
function Icon({
  name,
  size = 16,
  strokeWidth = 1.75,
  color = "currentColor",
  style,
  title,
  ...rest
}) {
  const d = ICON_PATHS[name];
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": title ? undefined : true,
    role: title ? "img" : undefined,
    style: {
      flex: "none",
      display: "inline-block",
      verticalAlign: "middle",
      ...style
    },
    ...rest
  }, title ? React.createElement("title", null, title) : null, React.createElement("path", {
    d
  }));
}
Object.assign(__ds_scope, { ICON_PATHS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const Button_CSS = `
.sk-btn{appearance:none;border:1px solid transparent;border-radius:var(--r-sm);font:var(--type-body-strong);letter-spacing:var(--ls-tight);display:inline-flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;white-space:nowrap;position:relative;transition:background var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out)}
.sk-btn:active:not(:disabled){transform:scale(.98)}
.sk-btn:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.sk-btn:disabled{opacity:.45;cursor:not-allowed}
.sk-btn--md{height:var(--control-h-md);padding:0 12px}.sk-btn--sm{height:var(--control-h-sm);padding:0 9px;font-size:var(--fs-sm)}.sk-btn--lg{height:var(--control-h-lg);padding:0 16px;font-size:var(--fs-lg)}
.sk-btn--primary{background:var(--btn-primary-bg);color:var(--btn-primary-fg)}.sk-btn--primary:hover:not(:disabled){background:var(--btn-primary-hover)}
.sk-btn--route{background:var(--btn-route-bg);color:var(--btn-route-fg)}.sk-btn--route:hover:not(:disabled){background:var(--btn-route-hover);box-shadow:var(--shadow-route-glow)}
.sk-btn--secondary{background:var(--surface-raised);color:var(--text-primary);border-color:var(--border-subtle)}.sk-btn--secondary:hover:not(:disabled){background:var(--surface-active);border-color:var(--border-strong)}
.sk-btn--ghost{background:transparent;color:var(--text-secondary)}.sk-btn--ghost:hover:not(:disabled){background:var(--surface-hover);color:var(--text-primary)}
.sk-btn--danger{background:transparent;color:var(--text-danger);border-color:rgba(249,124,114,.35)}.sk-btn--danger:hover:not(:disabled){background:var(--fill-danger-soft);border-color:var(--danger-7)}
.sk-btn__spin{animation:rflectr-spin .9s linear infinite}
`;
let Button_done = false;
function Button_inject() {
  if (Button_done || typeof document === "undefined") return;
  Button_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "Button");
  s.textContent = Button_CSS;
  document.head.appendChild(s);
}
function Button({
  variant = "secondary",
  size = "md",
  icon,
  iconRight,
  loading = false,
  disabled,
  children,
  className = "",
  ...rest
}) {
  Button_inject();
  const iconSize = size === "sm" ? 14 : 16;
  return React.createElement("button", {
    type: "button",
    className: `sk-btn sk-btn--${variant} sk-btn--${size} ${className}`,
    disabled: disabled || loading,
    "aria-busy": loading || undefined,
    ...rest
  }, loading ? React.createElement(__ds_scope.Icon, {
    name: "loader",
    size: iconSize,
    className: "sk-btn__spin"
  }) : icon ? React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }) : null, children, iconRight ? React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: iconSize
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const IconButton_CSS = `
.sk-ibtn{appearance:none;border:1px solid transparent;background:transparent;color:var(--text-secondary);border-radius:var(--r-sm);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:background var(--dur-fast) var(--ease-out),color var(--dur-fast),transform var(--dur-fast) var(--ease-out)}
.sk-ibtn--md{width:var(--control-h-md);height:var(--control-h-md)}.sk-ibtn--sm{width:var(--control-h-sm);height:var(--control-h-sm)}
.sk-ibtn:hover:not(:disabled){background:var(--surface-hover);color:var(--text-primary)}.sk-ibtn:active:not(:disabled){transform:scale(.94);background:var(--surface-active)}
.sk-ibtn--outline{border-color:var(--border-subtle);background:var(--surface-raised)}
.sk-ibtn:focus-visible{outline:none;box-shadow:var(--shadow-focus)}.sk-ibtn:disabled{opacity:.45;cursor:not-allowed}
.sk-ibtn[data-active="true"]{color:var(--text-route);background:var(--fill-route-soft)}
`;
let IconButton_done = false;
function IconButton_inject() {
  if (IconButton_done || typeof document === "undefined") return;
  IconButton_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "IconButton");
  s.textContent = IconButton_CSS;
  document.head.appendChild(s);
}
function IconButton({
  icon,
  label,
  size = "md",
  variant = "ghost",
  active,
  className = "",
  ...rest
}) {
  IconButton_inject();
  return React.createElement("button", {
    type: "button",
    className: `sk-ibtn sk-ibtn--${size} sk-ibtn--${variant} ${className}`,
    "aria-label": label,
    title: label,
    "data-active": active ? "true" : undefined,
    ...rest
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "sm" ? 14 : 16
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
const Tooltip_CSS = `
.sk-tip{position:relative;display:inline-flex}
.sk-tip__bubble{position:absolute;left:50%;bottom:calc(100% + 6px);transform:translate(-50%,4px);background:var(--n-12);color:var(--n-1);font:var(--type-caption);padding:4px 8px;border-radius:var(--r-sm);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out);z-index:50;box-shadow:var(--shadow-popover)}
.sk-tip:hover .sk-tip__bubble,.sk-tip:focus-within .sk-tip__bubble{opacity:1;transform:translate(-50%,0)}
`;
let Tooltip_done = false;
function Tooltip_inject() {
  if (Tooltip_done || typeof document === "undefined") return;
  Tooltip_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "Tooltip");
  s.textContent = Tooltip_CSS;
  document.head.appendChild(s);
}
function Tooltip({
  label,
  children
}) {
  Tooltip_inject();
  return React.createElement("span", {
    className: "sk-tip"
  }, children, React.createElement("span", {
    className: "sk-tip__bubble",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
const Card_CSS = `
.sk-card{background:var(--surface-card);border:1px solid var(--border-hairline);border-radius:var(--r-lg);display:flex;flex-direction:column;min-width:0}
.sk-card--interactive{cursor:pointer;transition:border-color var(--dur-fast) var(--ease-out),transform var(--dur-base) var(--ease-out),background var(--dur-fast)}
.sk-card--interactive:hover{border-color:var(--border-strong);background:var(--surface-raised)}
.sk-card--selected{border-color:var(--border-route);box-shadow:var(--shadow-route-glow)}
.sk-card--panel{background:var(--surface-panel)}
.sk-card__head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;border-bottom:1px solid var(--border-hairline)}
.sk-card__title{font:var(--type-heading);color:var(--text-primary);display:flex;align-items:center;gap:8px}
.sk-card__body{padding:16px}.sk-card--dense .sk-card__body{padding:12px}.sk-card--flush .sk-card__body{padding:0}
.sk-card__foot{padding:10px 16px;border-top:1px solid var(--border-hairline);display:flex;gap:8px;align-items:center;justify-content:flex-end}
`;
let Card_done = false;
function Card_inject() {
  if (Card_done || typeof document === "undefined") return;
  Card_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "Card");
  s.textContent = Card_CSS;
  document.head.appendChild(s);
}
function Card({
  title,
  actions,
  footer,
  variant = "card",
  dense = false,
  flush = false,
  interactive = false,
  selected = false,
  children,
  className = "",
  ...rest
}) {
  Card_inject();
  return React.createElement("section", {
    className: `sk-card sk-card--${variant} ${dense ? "sk-card--dense" : ""} ${flush ? "sk-card--flush" : ""} ${interactive ? "sk-card--interactive" : ""} ${selected ? "sk-card--selected" : ""} ${className}`,
    ...rest
  }, title || actions ? React.createElement("header", {
    className: "sk-card__head"
  }, React.createElement("div", {
    className: "sk-card__title"
  }, title), actions ? React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, actions) : null) : null, React.createElement("div", {
    className: "sk-card__body"
  }, children), footer ? React.createElement("footer", {
    className: "sk-card__foot"
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
const DataTable_CSS = `
.sk-table{width:100%;border-collapse:separate;border-spacing:0;font:var(--type-caption);color:var(--text-primary)}
.sk-table th{position:sticky;top:0;background:var(--surface-panel);text-align:left;font:var(--type-eyebrow);letter-spacing:var(--ls-caps);text-transform:uppercase;color:var(--text-tertiary);padding:8px 12px;border-bottom:1px solid var(--border-subtle);white-space:nowrap;user-select:none}
.sk-table th[aria-sort]{cursor:pointer;color:var(--text-secondary)}.sk-table th svg{margin-left:4px;opacity:.6}
.sk-table td{padding:8px 12px;border-bottom:1px solid var(--border-hairline);vertical-align:middle;white-space:nowrap}
.sk-table tbody tr{transition:background var(--dur-fast)}.sk-table tbody tr:hover{background:var(--surface-hover)}
.sk-table tbody tr[data-selected="true"]{background:var(--surface-selected)}
.sk-table--clickable tbody tr{cursor:pointer}
.sk-table .num,.sk-table .mono{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.sk-table .num{text-align:right}
.sk-table--dense td{padding:5px 10px}.sk-table--dense th{padding:6px 10px}
.sk-table__empty{padding:32px;text-align:center;color:var(--text-tertiary);font:var(--type-caption)}
.sk-table__skel td span{display:block;height:10px;border-radius:3px;background:linear-gradient(90deg,var(--n-3) 25%,var(--n-4) 50%,var(--n-3) 75%);background-size:200% 100%;animation:rflectr-shimmer 1.6s linear infinite}
`;
let DataTable_done = false;
function DataTable_inject() {
  if (DataTable_done || typeof document === "undefined") return;
  DataTable_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "DataTable");
  s.textContent = DataTable_CSS;
  document.head.appendChild(s);
}
function DataTable({
  columns = [],
  rows = [],
  rowKey = (r, i) => r.id ?? i,
  onRowClick,
  selectedKey,
  sort,
  onSort,
  dense = false,
  loading = false,
  emptyText = "No records",
  className = "",
  ...rest
}) {
  DataTable_inject();
  return React.createElement("table", {
    className: `sk-table ${dense ? "sk-table--dense" : ""} ${onRowClick ? "sk-table--clickable" : ""} ${className}`,
    ...rest
  }, React.createElement("thead", null, React.createElement("tr", null, columns.map(c => React.createElement("th", {
    key: c.key,
    scope: "col",
    className: c.align === "right" ? "num" : "",
    style: {
      width: c.width
    },
    "aria-sort": c.sortable ? sort && sort.key === c.key ? sort.dir === "asc" ? "ascending" : "descending" : "none" : undefined,
    onClick: c.sortable && onSort ? () => onSort(c.key) : undefined
  }, c.label, c.sortable && sort && sort.key === c.key ? React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 12,
    style: {
      transform: sort.dir === "asc" ? "rotate(180deg)" : "none"
    }
  }) : null)))), React.createElement("tbody", null, loading ? [0, 1, 2, 3].map(i => React.createElement("tr", {
    key: "s" + i,
    className: "sk-table__skel"
  }, columns.map(c => React.createElement("td", {
    key: c.key
  }, React.createElement("span", {
    style: {
      width: 40 + (i * 37 + c.key.length * 13) % 50 + "%"
    }
  }))))) : rows.length === 0 ? React.createElement("tr", null, React.createElement("td", {
    colSpan: columns.length,
    className: "sk-table__empty"
  }, emptyText)) : rows.map((r, i) => {
    const k = rowKey(r, i);
    return React.createElement("tr", {
      key: k,
      "data-selected": selectedKey === k ? "true" : undefined,
      onClick: onRowClick ? () => onRowClick(r) : undefined,
      tabIndex: onRowClick ? 0 : undefined
    }, columns.map(c => React.createElement("td", {
      key: c.key,
      className: [c.align === "right" ? "num" : "", c.mono ? "mono" : ""].join(" ")
    }, c.render ? c.render(r) : r[c.key])));
  })));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/EmptyState.jsx
try { (() => {
const EmptyState_CSS = `
.sk-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:8px;padding:40px 24px;color:var(--text-secondary);animation:rflectr-fade var(--dur-enter) var(--ease-out)}
.sk-empty__icon{width:36px;height:36px;border-radius:var(--r-md);display:grid;place-items:center;background:var(--fill-neutral-soft);color:var(--text-tertiary);border:1px solid var(--border-hairline)}
.sk-empty__title{font:var(--type-body-strong);color:var(--text-primary)}.sk-empty__desc{font:var(--type-caption);max-width:360px;text-wrap:pretty}
.sk-empty__actions{display:flex;gap:8px;margin-top:6px}
.sk-empty--error .sk-empty__icon{color:var(--text-danger);background:var(--fill-danger-soft)}
.sk-empty--stale .sk-empty__icon{color:var(--text-warn);background:var(--fill-warn-soft)}
`;
let EmptyState_done = false;
function EmptyState_inject() {
  if (EmptyState_done || typeof document === "undefined") return;
  EmptyState_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "EmptyState");
  s.textContent = EmptyState_CSS;
  document.head.appendChild(s);
}
function EmptyState({
  icon = "layers",
  title,
  description,
  actions,
  tone,
  className = "",
  ...rest
}) {
  EmptyState_inject();
  return React.createElement("div", {
    className: `sk-empty ${tone ? "sk-empty--" + tone : ""} ${className}`,
    role: tone === "error" ? "alert" : undefined,
    ...rest
  }, React.createElement("div", {
    className: "sk-empty__icon"
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), React.createElement("div", {
    className: "sk-empty__title"
  }, title), description ? React.createElement("div", {
    className: "sk-empty__desc"
  }, description) : null, actions ? React.createElement("div", {
    className: "sk-empty__actions"
  }, actions) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
const MetricCard_CSS = `
.sk-metric{background:var(--surface-card);border:1px solid var(--border-hairline);border-radius:var(--r-lg);padding:14px 16px;display:flex;flex-direction:column;gap:6px;min-width:0;animation:rflectr-rise var(--dur-enter) var(--ease-out) both}
.sk-metric__label{font:var(--type-eyebrow);letter-spacing:var(--ls-caps);text-transform:uppercase;color:var(--text-tertiary);display:flex;justify-content:space-between;gap:8px}
.sk-metric__value{font:var(--type-metric);color:var(--text-primary);letter-spacing:var(--ls-tight);display:flex;align-items:baseline;gap:4px;font-variant-numeric:tabular-nums}
.sk-metric__value small{font:var(--type-data);color:var(--text-tertiary)}
.sk-metric__est{color:var(--text-tertiary);font-weight:400}
.sk-metric__meta{font:var(--type-caption);color:var(--text-secondary);display:flex;gap:6px;align-items:center;flex-wrap:wrap}
.sk-metric__src{font:var(--type-code);color:var(--text-tertiary);padding:1px 5px;border:1px solid var(--border-hairline);border-radius:var(--r-xs)}
.sk-metric--route .sk-metric__value{color:var(--text-route)}
`;
let MetricCard_done = false;
function MetricCard_inject() {
  if (MetricCard_done || typeof document === "undefined") return;
  MetricCard_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "MetricCard");
  s.textContent = MetricCard_CSS;
  document.head.appendChild(s);
}
function MetricCard({
  label,
  value,
  unit,
  estimated = false,
  source,
  meta,
  tone,
  className = "",
  ...rest
}) {
  MetricCard_inject();
  return React.createElement("div", {
    className: `sk-metric ${tone ? "sk-metric--" + tone : ""} ${className}`,
    ...rest
  }, React.createElement("div", {
    className: "sk-metric__label"
  }, React.createElement("span", null, label), source ? React.createElement("span", {
    className: "sk-metric__src"
  }, source) : null), React.createElement("div", {
    className: "sk-metric__value"
  }, estimated ? React.createElement("span", {
    className: "sk-metric__est",
    "aria-label": "estimated"
  }, "~") : null, value, unit ? React.createElement("small", null, unit) : null), meta ? React.createElement("div", {
    className: "sk-metric__meta"
  }, meta) : null);
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/data/RouteLine.jsx
try { (() => {
const RouteLine_CSS = `
.sk-rl{display:flex;align-items:center;gap:10px;min-width:0}
.sk-rl__node{font:var(--type-caption);font-weight:var(--fw-medium);color:var(--text-primary);padding:3px 8px;border:1px solid var(--border-subtle);border-radius:var(--r-sm);background:var(--surface-raised);white-space:nowrap;display:inline-flex;align-items:center;gap:6px}
.sk-rl__node small{font:var(--type-code);color:var(--text-tertiary)}
.sk-rl__path{flex:1;min-width:24px;height:12px}
.sk-rl__path line{stroke:var(--n-6);stroke-width:2;fill:none}
.sk-rl--Route .sk-rl__path line{stroke:var(--route-9);stroke-dasharray:6 6;animation:rflectr-route-flow var(--route-flow-speed) linear infinite}
.sk-rl--Observe .sk-rl__path line{stroke:var(--observe-9);stroke-dasharray:2 6;animation:rflectr-route-flow 2.4s linear infinite}
.sk-rl--Draining .sk-rl__path line{stroke:var(--warn-9);stroke-dasharray:6 6;animation:rflectr-route-flow 3.2s linear infinite}
.sk-rl--Failed .sk-rl__path line{stroke:var(--danger-9);stroke-dasharray:2 4}
.sk-rl--Route .sk-rl__node--to{border-color:var(--border-route);color:var(--text-route)}
.sk-rl--Off .sk-rl__node--to{color:var(--text-tertiary)}
`;
let RouteLine_done = false;
function RouteLine_inject() {
  if (RouteLine_done || typeof document === "undefined") return;
  RouteLine_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "RouteLine");
  s.textContent = RouteLine_CSS;
  document.head.appendChild(s);
}
function RouteLine({
  from,
  fromMeta,
  to,
  toMeta,
  state = "Off",
  className = "",
  ...rest
}) {
  RouteLine_inject();
  const path = React.createElement("svg", {
    className: "sk-rl__path",
    preserveAspectRatio: "none",
    viewBox: "0 0 100 12",
    "aria-hidden": true
  }, React.createElement("line", {
    x1: 0,
    y1: 6,
    x2: 100,
    y2: 6,
    vectorEffect: "non-scaling-stroke"
  }));
  return React.createElement("div", {
    className: `sk-rl sk-rl--${state} ${className}`,
    "aria-label": `${from} → ${to || "native"} (${state})`,
    ...rest
  }, React.createElement("span", {
    className: "sk-rl__node"
  }, from, fromMeta ? React.createElement("small", null, fromMeta) : null), path, React.createElement("span", {
    className: "sk-rl__node sk-rl__node--to"
  }, to || "Native destination", toMeta ? React.createElement("small", null, toMeta) : null));
}
Object.assign(__ds_scope, { RouteLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/RouteLine.jsx", error: String((e && e.message) || e) }); }

// components/data/Tabs.jsx
try { (() => {
const Tabs_CSS = `
.sk-tabs{display:flex;gap:2px;border-bottom:1px solid var(--border-hairline);position:relative;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none}.sk-tabs::-webkit-scrollbar{display:none}
.sk-tabs button{appearance:none;background:none;border:0;padding:8px 12px;font:var(--type-body);color:var(--text-tertiary);cursor:pointer;position:relative;white-space:nowrap;flex:none;border-radius:var(--r-sm) var(--r-sm) 0 0;transition:color var(--dur-fast);display:inline-flex;gap:6px;align-items:center}
.sk-tabs button:hover{color:var(--text-secondary);background:var(--surface-hover)}
.sk-tabs button[aria-selected="true"]{color:var(--text-primary);font-weight:var(--fw-medium)}
.sk-tabs button[aria-selected="true"]::after{content:"";position:absolute;left:8px;right:8px;bottom:-1px;height:2px;background:var(--n-12);border-radius:1px;animation:rflectr-fade var(--dur-base) var(--ease-out)}
.sk-tabs button:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.sk-tabs__count{font:var(--type-code);color:var(--text-tertiary);padding:0 5px;border-radius:var(--r-pill);background:var(--fill-neutral-soft)}
`;
let Tabs_done = false;
function Tabs_inject() {
  if (Tabs_done || typeof document === "undefined") return;
  Tabs_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "Tabs");
  s.textContent = Tabs_CSS;
  document.head.appendChild(s);
}
function Tabs({
  items = [],
  value,
  onChange,
  className = "",
  ...rest
}) {
  Tabs_inject();
  return React.createElement("div", {
    role: "tablist",
    className: `sk-tabs ${className}`,
    ...rest
  }, items.map(it => {
    const o = typeof it === "string" ? {
      id: it,
      label: it
    } : it;
    return React.createElement("button", {
      key: o.id,
      role: "tab",
      type: "button",
      "aria-selected": value === o.id,
      onClick: () => onChange && onChange(o.id)
    }, o.label, o.count != null ? React.createElement("span", {
      className: "sk-tabs__count"
    }, o.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/data/UsageWindow.jsx
try { (() => {
const UsageWindow_CSS = `
.sk-uw{display:flex;flex-direction:column;gap:8px;min-width:0}
.sk-uw__top{display:flex;justify-content:space-between;gap:8px;align-items:baseline}
.sk-uw__name{font:var(--type-body-strong);color:var(--text-primary)}.sk-uw__acct{font:var(--type-caption);color:var(--text-tertiary)}
.sk-uw__nums{font:var(--type-data);color:var(--text-secondary);white-space:nowrap}.sk-uw__nums b{color:var(--text-primary);font-weight:var(--fw-medium)}
.sk-uw__bar{height:6px;border-radius:var(--r-pill);background:var(--n-4);overflow:hidden;position:relative}
.sk-uw__fill{height:100%;border-radius:inherit;background:var(--n-10);transform-origin:left;transition:width var(--dur-slow) var(--ease-out),background var(--dur-base)}
.sk-uw--warn .sk-uw__fill{background:var(--warn-9)}.sk-uw--block .sk-uw__fill{background:var(--danger-9)}
.sk-uw--unknown .sk-uw__bar{background:repeating-linear-gradient(90deg,var(--n-4) 0 4px,transparent 4px 8px)}
.sk-uw__foot{display:flex;justify-content:space-between;gap:8px;font:var(--type-code);color:var(--text-tertiary)}
.sk-uw__foot time{color:var(--text-secondary)}
.sk-uw--stale .sk-uw__fill{opacity:.5}.sk-uw__tag{padding:0 5px;border:1px solid var(--border-hairline);border-radius:var(--r-xs)}
.sk-uw__tag--stale{color:var(--text-warn);border-color:rgba(245,184,75,.35)}
`;
let UsageWindow_done = false;
function UsageWindow_inject() {
  if (UsageWindow_done || typeof document === "undefined") return;
  UsageWindow_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "UsageWindow");
  s.textContent = UsageWindow_CSS;
  document.head.appendChild(s);
}
function UsageWindow({
  name,
  account,
  unit = "requests",
  used,
  limit,
  resetLabel,
  resetAt,
  source = "Provider API",
  confidence,
  stale = false,
  warnAt = .8,
  blockAt,
  className = "",
  ...rest
}) {
  UsageWindow_inject();
  const known = typeof used === "number" && typeof limit === "number" && limit > 0;
  const pct = known ? Math.min(100, used / limit * 100) : 0;
  const tone = !known ? "unknown" : blockAt && pct >= blockAt * 100 ? "block" : pct >= warnAt * 100 ? "warn" : "ok";
  return React.createElement("div", {
    className: `sk-uw sk-uw--${tone} ${stale ? "sk-uw--stale" : ""} ${className}`,
    ...rest
  }, React.createElement("div", {
    className: "sk-uw__top"
  }, React.createElement("div", null, React.createElement("span", {
    className: "sk-uw__name"
  }, name), account ? React.createElement("span", {
    className: "sk-uw__acct"
  }, " · ", account) : null), React.createElement("span", {
    className: "sk-uw__nums"
  }, known ? [React.createElement("b", {
    key: "u"
  }, used.toLocaleString()), " / ", limit.toLocaleString(), " ", unit] : "Unknown")), React.createElement("div", {
    className: "sk-uw__bar",
    role: "progressbar",
    "aria-valuenow": known ? Math.round(pct) : undefined,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-label": name
  }, known ? React.createElement("div", {
    className: "sk-uw__fill",
    style: {
      width: pct + "%"
    }
  }) : null), React.createElement("div", {
    className: "sk-uw__foot"
  }, React.createElement("span", null, resetLabel || "Resets", " ", resetAt ? React.createElement("time", {
    dateTime: resetAt.iso,
    title: resetAt.iso
  }, resetAt.label) : "—"), React.createElement("span", {
    style: {
      display: "flex",
      gap: 4
    }
  }, React.createElement("span", {
    className: "sk-uw__tag"
  }, source), confidence ? React.createElement("span", {
    className: "sk-uw__tag"
  }, confidence) : null, stale ? React.createElement("span", {
    className: "sk-uw__tag sk-uw__tag--stale"
  }, "Stale") : null)));
}
Object.assign(__ds_scope, { UsageWindow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/UsageWindow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ActionItem.jsx
try { (() => {
const ActionItem_CSS = `
.sk-act{display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:start;padding:10px 12px;border:1px solid var(--border-hairline);border-radius:var(--r-md);background:var(--surface-card);font:var(--type-caption);color:var(--text-primary);transition:border-color var(--dur-fast)}
.sk-act:hover{border-color:var(--border-subtle)}
.sk-act__sev{width:24px;height:24px;border-radius:var(--r-sm);display:grid;place-items:center;flex:none}
.sk-act--blocking .sk-act__sev{background:var(--fill-danger-soft);color:var(--text-danger)}.sk-act--warning .sk-act__sev{background:var(--fill-warn-soft);color:var(--text-warn)}.sk-act--info .sk-act__sev{background:var(--fill-observe-soft);color:var(--text-observe)}
.sk-act__title{font-weight:var(--fw-medium)}.sk-act__meta{display:flex;flex-wrap:wrap;gap:4px 10px;color:var(--text-tertiary);font:var(--type-code);margin-top:3px}
.sk-act__effect{color:var(--text-secondary);margin-top:4px}
.sk-act__actions{display:flex;gap:6px;align-items:center}
.sk-act--Resolved{opacity:.55}
`;
let ActionItem_done = false;
function ActionItem_inject() {
  if (ActionItem_done || typeof document === "undefined") return;
  ActionItem_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "ActionItem");
  s.textContent = ActionItem_CSS;
  document.head.appendChild(s);
}
function ActionItem({
  severity = "warning",
  title,
  source,
  reason,
  effect,
  time,
  count,
  state = "Open",
  actions,
  className = "",
  ...rest
}) {
  ActionItem_inject();
  return React.createElement("div", {
    className: `sk-act sk-act--${severity} sk-act--${state} ${className}`,
    ...rest
  }, React.createElement("div", {
    className: "sk-act__sev"
  }, React.createElement(__ds_scope.Icon, {
    name: severity === "blocking" ? "alertCircle" : severity === "warning" ? "alertTriangle" : "info",
    size: 14
  })), React.createElement("div", null, React.createElement("div", {
    className: "sk-act__title"
  }, title), React.createElement("div", {
    className: "sk-act__meta"
  }, source ? React.createElement("span", null, source) : null, reason ? React.createElement("span", null, reason) : null, time ? React.createElement("span", null, time) : null, count > 1 ? React.createElement("span", null, "×", count) : null), effect ? React.createElement("div", {
    className: "sk-act__effect"
  }, effect) : null), actions ? React.createElement("div", {
    className: "sk-act__actions"
  }, actions) : null);
}
Object.assign(__ds_scope, { ActionItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ActionItem.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const Dialog_CSS = `
.sk-dlg__scrim{position:fixed;inset:0;background:var(--surface-overlay);backdrop-filter:blur(4px);display:grid;place-items:center;z-index:100;animation:rflectr-fade var(--dur-base) var(--ease-out)}
.sk-dlg{width:min(520px,calc(100vw - 48px));background:var(--surface-panel);border:1px solid var(--border-subtle);border-radius:var(--r-xl);box-shadow:var(--shadow-dialog);display:flex;flex-direction:column;animation:rflectr-rise var(--dur-enter) var(--ease-out);max-height:calc(100vh - 48px)}
.sk-dlg--wide{width:min(760px,calc(100vw - 48px))}
.sk-dlg__head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:18px 20px 0}
.sk-dlg__title{font:var(--type-title);letter-spacing:var(--ls-tight);color:var(--text-primary)}
.sk-dlg__desc{font:var(--type-caption);color:var(--text-secondary);margin-top:4px;text-wrap:pretty}
.sk-dlg__body{padding:16px 20px;overflow:auto;font:var(--type-body);color:var(--text-primary)}
.sk-dlg__foot{padding:12px 20px 16px;display:flex;gap:8px;justify-content:flex-end;border-top:1px solid var(--border-hairline)}
.sk-dlg--danger .sk-dlg__title{color:var(--text-danger)}
`;
let Dialog_done = false;
function Dialog_inject() {
  if (Dialog_done || typeof document === "undefined") return;
  Dialog_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "Dialog");
  s.textContent = Dialog_CSS;
  document.head.appendChild(s);
}
function Dialog({
  open = true,
  title,
  description,
  footer,
  onClose,
  tone,
  wide = false,
  children,
  inline = false,
  className = "",
  ...rest
}) {
  Dialog_inject();
  if (!open) return null;
  const box = React.createElement("div", {
    role: "dialog",
    "aria-modal": !inline,
    "aria-label": typeof title === "string" ? title : undefined,
    className: `sk-dlg ${wide ? "sk-dlg--wide" : ""} ${tone ? "sk-dlg--" + tone : ""} ${className}`,
    ...rest
  }, React.createElement("div", {
    className: "sk-dlg__head"
  }, React.createElement("div", null, React.createElement("div", {
    className: "sk-dlg__title"
  }, title), description ? React.createElement("div", {
    className: "sk-dlg__desc"
  }, description) : null), onClose ? React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  }) : null), React.createElement("div", {
    className: "sk-dlg__body"
  }, children), footer ? React.createElement("div", {
    className: "sk-dlg__foot"
  }, footer) : null);
  return inline ? box : React.createElement("div", {
    className: "sk-dlg__scrim",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, box);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const Toast_CSS = `
.sk-toast{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;min-width:280px;max-width:420px;background:var(--surface-raised);border:1px solid var(--border-subtle);border-radius:var(--r-md);box-shadow:var(--shadow-popover);font:var(--type-caption);color:var(--text-primary);animation:rflectr-rise var(--dur-enter) var(--ease-out)}
.sk-toast svg{margin-top:1px;flex:none}
.sk-toast--success svg{color:var(--text-primary)}.sk-toast--info svg{color:var(--text-observe)}.sk-toast--warn svg{color:var(--text-warn)}.sk-toast--error svg{color:var(--text-danger)}
.sk-toast__body{flex:1;min-width:0}.sk-toast__title{font-weight:var(--fw-medium)}.sk-toast__desc{color:var(--text-secondary);margin-top:2px}
.sk-toast__action{appearance:none;background:none;border:0;color:var(--text-primary);font:inherit;font-weight:var(--fw-medium);cursor:pointer;text-decoration:underline;text-underline-offset:2px;padding:0}
`;
let Toast_done = false;
function Toast_inject() {
  if (Toast_done || typeof document === "undefined") return;
  Toast_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "Toast");
  s.textContent = Toast_CSS;
  document.head.appendChild(s);
}
const ICONS = {
  success: "check",
  info: "info",
  warn: "alertTriangle",
  error: "alertCircle"
};
function Toast({
  tone = "success",
  title,
  description,
  action,
  onAction,
  className = "",
  ...rest
}) {
  Toast_inject();
  return React.createElement("div", {
    role: "status",
    className: `sk-toast sk-toast--${tone} ${className}`,
    ...rest
  }, React.createElement(__ds_scope.Icon, {
    name: ICONS[tone],
    size: 16
  }), React.createElement("div", {
    className: "sk-toast__body"
  }, React.createElement("div", {
    className: "sk-toast__title"
  }, title), description ? React.createElement("div", {
    className: "sk-toast__desc"
  }, description) : null), action ? React.createElement("button", {
    className: "sk-toast__action",
    type: "button",
    onClick: onAction
  }, action) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const Checkbox_CSS = `
.sk-check{display:inline-flex;align-items:flex-start;gap:8px;cursor:pointer;font:var(--type-body);color:var(--text-primary)}
.sk-check input{position:absolute;opacity:0;width:0;height:0}
.sk-check__box{width:16px;height:16px;margin-top:2px;border-radius:var(--r-xs);border:1px solid var(--border-strong);background:var(--surface-input);display:inline-flex;align-items:center;justify-content:center;color:var(--n-1);flex:none;transition:background var(--dur-fast) var(--ease-out),border-color var(--dur-fast)}
.sk-check__box svg{opacity:0;transform:scale(.6);transition:transform var(--dur-fast) var(--ease-spring),opacity var(--dur-fast)}
.sk-check input:checked+.sk-check__box{background:var(--n-12);border-color:var(--n-12)}.sk-check input:checked+.sk-check__box svg{opacity:1;transform:none}
.sk-check input:focus-visible+.sk-check__box{box-shadow:var(--shadow-focus)}
.sk-check--disabled{opacity:.45;cursor:not-allowed}
`;
let Checkbox_done = false;
function Checkbox_inject() {
  if (Checkbox_done || typeof document === "undefined") return;
  Checkbox_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "Checkbox");
  s.textContent = Checkbox_CSS;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  disabled,
  className = "",
  ...rest
}) {
  Checkbox_inject();
  return React.createElement("label", {
    className: `sk-check ${disabled ? "sk-check--disabled" : ""} ${className}`
  }, React.createElement("input", {
    type: "checkbox",
    disabled,
    ...rest
  }), React.createElement("span", {
    className: "sk-check__box",
    "aria-hidden": true
  }, React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    strokeWidth: 2.5
  })), label ? React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const Input_CSS = `
.sk-field{display:flex;flex-direction:column;gap:6px;font:var(--type-caption);color:var(--text-secondary)}
.sk-field__label{font:var(--type-caption);font-weight:var(--fw-medium);color:var(--text-secondary)}
.sk-input{display:flex;align-items:center;gap:8px;height:var(--control-h-md);padding:0 10px;background:var(--surface-input);border:1px solid var(--border-subtle);border-radius:var(--r-sm);color:var(--text-primary);transition:border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out)}
.sk-input:hover{border-color:var(--border-strong)}.sk-input:focus-within{border-color:var(--border-focus);box-shadow:var(--shadow-route-glow)}
.sk-input--invalid{border-color:var(--danger-7)}.sk-input--invalid:focus-within{box-shadow:0 0 0 3px var(--fill-danger-soft)}
.sk-input input{flex:1;min-width:0;background:none;border:0;outline:0;color:inherit;font:var(--type-body);height:100%}
.sk-input input::placeholder{color:var(--text-tertiary)}
.sk-input--mono input{font:var(--type-data);font-size:var(--fs-md)}
.sk-input svg{color:var(--text-tertiary)}
.sk-input[aria-disabled="true"]{opacity:.5}
.sk-field__hint{font:var(--type-code);color:var(--text-tertiary)}.sk-field__hint--err{color:var(--text-danger)}
`;
let Input_done = false;
function Input_inject() {
  if (Input_done || typeof document === "undefined") return;
  Input_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "Input");
  s.textContent = Input_CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  icon,
  mono = false,
  secret = false,
  disabled,
  style,
  className = "",
  ...rest
}) {
  Input_inject();
  const box = React.createElement("div", {
    className: `sk-input ${error ? "sk-input--invalid" : ""} ${mono ? "sk-input--mono" : ""}`,
    "aria-disabled": disabled || undefined
  }, icon ? React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }) : null, React.createElement("input", {
    type: secret ? "password" : "text",
    disabled,
    autoComplete: secret ? "off" : undefined,
    ...rest
  }), secret ? React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 14,
    title: "One-way secret entry"
  }) : null);
  if (!label && !hint && !error) return React.cloneElement(box, {
    style,
    className: box.props.className + " " + className
  });
  return React.createElement("label", {
    className: `sk-field ${className}`,
    style
  }, label ? React.createElement("span", {
    className: "sk-field__label"
  }, label) : null, box, error || hint ? React.createElement("span", {
    className: `sk-field__hint ${error ? "sk-field__hint--err" : ""}`
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/ModeSegment.jsx
try { (() => {
const ModeSegment_CSS = `
.sk-mode{display:inline-grid;grid-template-columns:repeat(3,1fr);position:relative;background:var(--surface-input);border:1px solid var(--border-subtle);border-radius:var(--r-md);padding:2px;isolation:isolate}
.sk-mode__thumb{position:absolute;top:2px;bottom:2px;width:calc((100% - 4px)/3);border-radius:var(--r-sm);background:var(--surface-raised);border:1px solid var(--border-subtle);transition:transform var(--dur-slow) var(--ease-spring),background var(--dur-base),border-color var(--dur-base);z-index:0}
.sk-mode[data-value="Observe"] .sk-mode__thumb{transform:translateX(100%)}.sk-mode[data-value="Route"] .sk-mode__thumb{transform:translateX(200%);background:var(--fill-route-soft);border-color:var(--border-route)}
.sk-mode button{appearance:none;background:none;border:0;position:relative;z-index:1;height:26px;min-width:76px;padding:0 10px;border-radius:var(--r-sm);font:var(--type-caption);font-weight:var(--fw-medium);color:var(--text-tertiary);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:6px;transition:color var(--dur-fast)}
.sk-mode button:hover{color:var(--text-secondary)}.sk-mode button[aria-checked="true"]{color:var(--text-primary)}
.sk-mode[data-value="Route"] button[aria-checked="true"]{color:var(--text-route)}.sk-mode[data-value="Observe"] button[aria-checked="true"]{color:var(--text-observe)}
.sk-mode button:disabled{cursor:not-allowed;opacity:.4}
.sk-mode button:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.sk-mode--sm button{height:22px;min-width:64px;font-size:var(--fs-xs)}
`;
let ModeSegment_done = false;
function ModeSegment_inject() {
  if (ModeSegment_done || typeof document === "undefined") return;
  ModeSegment_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "ModeSegment");
  s.textContent = ModeSegment_CSS;
  document.head.appendChild(s);
}
const MODES = [["Off", "power"], ["Observe", "eye"], ["Route", "route"]];
function ModeSegment({
  value = "Off",
  onChange,
  routeDisabled = false,
  routeDisabledReason,
  size = "md",
  className = "",
  ...rest
}) {
  ModeSegment_inject();
  return React.createElement("div", {
    role: "radiogroup",
    "aria-label": "Harness mode",
    className: `sk-mode sk-mode--${size} ${className}`,
    "data-value": value,
    ...rest
  }, React.createElement("span", {
    className: "sk-mode__thumb",
    "aria-hidden": true
  }), MODES.map(([m, ic]) => React.createElement("button", {
    key: m,
    type: "button",
    role: "radio",
    "aria-checked": value === m,
    disabled: m === "Route" && routeDisabled,
    title: m === "Route" && routeDisabled ? routeDisabledReason : undefined,
    onClick: () => onChange && onChange(m)
  }, React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 13
  }), m)));
}
Object.assign(__ds_scope, { ModeSegment });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ModeSegment.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const Select_CSS = `
.sk-select{position:relative;display:inline-flex;align-items:center;height:var(--control-h-md);background:var(--surface-input);border:1px solid var(--border-subtle);border-radius:var(--r-sm);color:var(--text-primary);transition:border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast)}
.sk-select:hover{border-color:var(--border-strong)}.sk-select:focus-within{border-color:var(--border-focus);box-shadow:var(--shadow-route-glow)}
.sk-select select{appearance:none;background:none;border:0;outline:0;color:inherit;font:var(--type-body);height:100%;padding:0 28px 0 10px;cursor:pointer;width:100%}
.sk-select svg{position:absolute;right:8px;pointer-events:none;color:var(--text-tertiary)}
.sk-select--sm{height:var(--control-h-sm)}.sk-select--sm select{font-size:var(--fs-sm);padding:0 24px 0 8px}
.sk-select option{background:var(--surface-raised);color:var(--text-primary)}
.sk-selwrap{display:flex;flex-direction:column;gap:6px}.sk-selwrap__label{font:var(--type-caption);font-weight:var(--fw-medium);color:var(--text-secondary)}
`;
let Select_done = false;
function Select_inject() {
  if (Select_done || typeof document === "undefined") return;
  Select_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "Select");
  s.textContent = Select_CSS;
  document.head.appendChild(s);
}
function Select({
  label,
  options = [],
  size = "md",
  style,
  className = "",
  ...rest
}) {
  Select_inject();
  const el = React.createElement("span", {
    className: `sk-select sk-select--${size} ${label ? "" : className}`,
    style: label ? undefined : style
  }, React.createElement("select", rest, options.map(o => typeof o === "string" ? React.createElement("option", {
    key: o,
    value: o
  }, o) : React.createElement("option", {
    key: o.value,
    value: o.value,
    disabled: o.disabled
  }, o.label))), React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 14
  }));
  return label ? React.createElement("label", {
    className: `sk-selwrap ${className}`,
    style
  }, React.createElement("span", {
    className: "sk-selwrap__label"
  }, label), el) : el;
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const Switch_CSS = `
.sk-switch{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font:var(--type-body);color:var(--text-primary);user-select:none}
.sk-switch input{position:absolute;opacity:0;width:0;height:0}
.sk-switch__track{width:32px;height:18px;border-radius:var(--r-pill);background:var(--n-6);position:relative;transition:background var(--dur-base) var(--ease-out);flex:none}
.sk-switch__track::after{content:"";position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:var(--n-12);transition:transform var(--dur-base) var(--ease-spring)}
.sk-switch input:checked+.sk-switch__track{background:var(--route-9)}.sk-switch input:checked+.sk-switch__track::after{transform:translateX(14px);background:var(--n-1)}
.sk-switch--neutral input:checked+.sk-switch__track{background:var(--n-12)}
.sk-switch input:focus-visible+.sk-switch__track{box-shadow:var(--shadow-focus)}
.sk-switch--disabled{opacity:.45;cursor:not-allowed}
.sk-switch__desc{display:block;font:var(--type-caption);color:var(--text-tertiary)}
`;
let Switch_done = false;
function Switch_inject() {
  if (Switch_done || typeof document === "undefined") return;
  Switch_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "Switch");
  s.textContent = Switch_CSS;
  document.head.appendChild(s);
}
function Switch({
  label,
  description,
  tone = "route",
  disabled,
  className = "",
  ...rest
}) {
  Switch_inject();
  return React.createElement("label", {
    className: `sk-switch sk-switch--${tone} ${disabled ? "sk-switch--disabled" : ""} ${className}`
  }, React.createElement("input", {
    type: "checkbox",
    role: "switch",
    disabled,
    ...rest
  }), React.createElement("span", {
    className: "sk-switch__track",
    "aria-hidden": true
  }), label ? React.createElement("span", null, label, description ? React.createElement("span", {
    className: "sk-switch__desc"
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
const NavItem_CSS = `
.sk-nav{appearance:none;width:100%;display:flex;align-items:center;gap:10px;height:32px;padding:0 10px;border:0;border-radius:var(--r-sm);background:transparent;color:var(--text-secondary);font:var(--type-body);cursor:pointer;text-align:left;position:relative;transition:background var(--dur-fast) var(--ease-out),color var(--dur-fast)}
.sk-nav:hover{background:var(--surface-hover);color:var(--text-primary)}
.sk-nav[aria-current="page"]{background:var(--surface-active);color:var(--text-primary);font-weight:var(--fw-medium)}
.sk-nav[aria-current="page"]::before{content:"";position:absolute;left:-8px;top:8px;bottom:8px;width:2px;border-radius:1px;background:var(--n-12);animation:rflectr-fade var(--dur-base)}
.sk-nav svg{color:var(--text-tertiary);transition:color var(--dur-fast)}.sk-nav:hover svg,.sk-nav[aria-current="page"] svg{color:var(--text-primary)}
.sk-nav__label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sk-nav__count{font:var(--type-code);color:var(--text-tertiary);padding:0 6px;border-radius:var(--r-pill);background:var(--fill-neutral-soft);min-width:18px;text-align:center}
.sk-nav__count--alert{color:var(--text-warn);background:var(--fill-warn-soft)}
.sk-nav:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
`;
let NavItem_done = false;
function NavItem_inject() {
  if (NavItem_done || typeof document === "undefined") return;
  NavItem_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "NavItem");
  s.textContent = NavItem_CSS;
  document.head.appendChild(s);
}
function NavItem({
  icon,
  label,
  active = false,
  count,
  alert = false,
  className = "",
  ...rest
}) {
  NavItem_inject();
  return React.createElement("button", {
    type: "button",
    className: `sk-nav ${className}`,
    "aria-current": active ? "page" : undefined,
    ...rest
  }, icon ? React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null, React.createElement("span", {
    className: "sk-nav__label"
  }, label), count != null ? React.createElement("span", {
    className: `sk-nav__count ${alert ? "sk-nav__count--alert" : ""}`
  }, count) : null);
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StatusDot.jsx
try { (() => {
const StatusDot_CSS = `
.sk-dot{display:inline-flex;align-items:center;gap:7px;font:var(--type-caption);color:var(--text-secondary);white-space:nowrap}
.sk-dot i{width:8px;height:8px;border-radius:50%;background:var(--state-off);flex:none;position:relative}
.sk-dot--Observing i,.sk-dot--Observe i{background:var(--state-observe)}.sk-dot--Routing i,.sk-dot--Route i{background:var(--state-route)}.sk-dot--Draining i{background:var(--state-draining)}.sk-dot--Failed i,.sk-dot--Offline i{background:var(--state-failed)}.sk-dot--Starting i,.sk-dot--Ready i{background:var(--state-starting)}
.sk-dot--Degraded i{background:var(--warn-9)}.sk-dot--Healthy i{background:var(--n-10)}
.sk-dot--live i::after{content:"";position:absolute;inset:-1px;border-radius:50%;box-shadow:0 0 0 0 currentColor;animation:rflectr-ring 1.6s var(--ease-out) infinite;color:inherit}
.sk-dot--Routing.sk-dot--live i::after{color:var(--state-route)}.sk-dot--Observing.sk-dot--live i::after{color:var(--state-observe)}.sk-dot--Draining i{animation:rflectr-pulse 1.2s var(--ease-in-out) infinite}
.sk-dot--Starting i{animation:rflectr-pulse 1s var(--ease-in-out) infinite}
`;
let StatusDot_done = false;
function StatusDot_inject() {
  if (StatusDot_done || typeof document === "undefined") return;
  StatusDot_done = true;
  const s = document.createElement("style");
  s.setAttribute("data-rflectr", "StatusDot");
  s.textContent = StatusDot_CSS;
  document.head.appendChild(s);
}
function StatusDot({
  state = "Off",
  live = false,
  label,
  className = "",
  ...rest
}) {
  StatusDot_inject();
  return React.createElement("span", {
    className: `sk-dot sk-dot--${state} ${live ? "sk-dot--live" : ""} ${className}`,
    ...rest
  }, React.createElement("i", {
    "aria-hidden": true
  }), label === undefined ? state : label);
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StatusDot.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rflectr-desktop/Harnesses.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  IconButton,
  StatusDot,
  Icon,
  DataTable,
  ModeSegment,
  Tabs,
  RouteLine,
  Dialog,
  Input,
  Select,
  EmptyState
} = window.rflectrDesignSystem_c36c9e;
function Harnesses({
  harnesses,
  setMode,
  selected,
  setSelected
}) {
  const [tab, setTab] = React.useState("Status");
  const [confirm, setConfirm] = React.useState(null);
  const h = harnesses.find(x => x.id === selected) || harnesses[0];
  const request = mode => {
    if (mode === h.mode) return;
    if (mode === "Off" && h.active > 0) setConfirm(mode);else setMode(h.id, mode);
  };
  const routeDisabled = h.compat !== "Supported";
  const rowState = x => x.state === "Routing" ? "Route" : x.state === "Observing" ? "Observe" : x.state === "Draining" ? "Draining" : x.state === "Failed" ? "Failed" : "Off";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Harnesses",
    desc: "Each harness is configured independently. Route is unavailable until compatibility is Supported for the exact installed version.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "refresh"
    }, "Rescan"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "plus"
    }, "Add executable"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "300px minmax(0,1fr)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    flush: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Filter harnesses"
  })), harnesses.map(x => /*#__PURE__*/React.createElement("button", {
    key: x.id,
    onClick: () => setSelected(x.id),
    className: "hitem",
    "aria-current": x.id === h.id,
    style: {
      all: "unset",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "10px 12px",
      width: "100%",
      boxSizing: "border-box",
      cursor: "pointer",
      borderBottom: "1px solid var(--border-hairline)",
      borderLeft: x.id === h.id ? "2px solid var(--n-12)" : "2px solid transparent",
      background: x.id === h.id ? "var(--surface-active)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-strong)"
    }
  }, x.name), /*#__PURE__*/React.createElement(StatusDot, {
    state: x.state,
    live: x.active > 0
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-code)",
      color: "var(--text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, x.surface, " \xB7 ", x.version), /*#__PURE__*/React.createElement("span", null, x.mode))))), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    key: h.id,
    style: {
      animation: "rflectr-rise var(--dur-enter) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-title)",
      letterSpacing: "var(--ls-tight)"
    }
  }, h.name), /*#__PURE__*/React.createElement(Badge, null, h.compat), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, h.evidence)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, h.surface, " \xB7 ", h.version, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, h.digest), " \xB7 adapter ", h.adapter)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: h.mode === "Route" ? "route" : "secondary",
    icon: "play",
    disabled: h.mode === "Off"
  }, "Launch in ", h.mode === "Off" ? "…" : h.mode), /*#__PURE__*/React.createElement(IconButton, {
    icon: "more",
    label: "More",
    variant: "outline"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "12px 24px",
      alignItems: "center",
      marginTop: 18,
      padding: 14,
      background: "var(--surface-panel)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--r-md)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rflectr-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Configured mode"), /*#__PURE__*/React.createElement(ModeSegment, {
    value: h.mode,
    onChange: request,
    routeDisabled: routeDisabled,
    routeDisabledReason: `Route unavailable: compatibility ${h.compat} for ${h.name} ${h.version}`
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rflectr-eyebrow",
    style: {
      marginBottom: 8,
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Effective runtime state"), /*#__PURE__*/React.createElement(StatusDot, {
    state: h.state,
    live: h.active > 0
  })), /*#__PURE__*/React.createElement(RouteLine, {
    from: h.name,
    fromMeta: h.version,
    to: h.mode === "Route" ? h.provider : undefined,
    toMeta: h.mode === "Route" ? h.model : undefined,
    state: rowState(h)
  })), routeDisabled && /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1/-1",
      font: "var(--type-code)",
      color: "var(--text-warn)",
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alertTriangle",
    size: 12
  }), "Route unavailable \xB7 compatibility ", h.compat, " for ", h.name, " ", h.version, ". ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Run probe"))), h.warnings.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: 6,
      marginTop: 12
    }
  }, h.warnings.map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      font: "var(--type-caption)",
      color: "var(--text-warn)",
      padding: "6px 10px",
      background: "var(--fill-warn-soft)",
      borderRadius: "var(--r-sm)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alertTriangle",
    size: 13
  }), w, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    style: {
      marginLeft: "auto"
    }
  }, "Resolve"))))), /*#__PURE__*/React.createElement(Card, {
    flush: true
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ["Status", {
      id: "Routing assignment",
      label: "Routing"
    }, {
      id: "Launch sessions",
      label: "Sessions"
    }, {
      id: "Traffic classes",
      label: "Traffic"
    }, "Compatibility", {
      id: "Trust & fallback",
      label: "Trust"
    }, {
      id: "Activity",
      label: "Activity",
      count: 42
    }],
    value: tab,
    onChange: setTab,
    style: {
      padding: "0 8px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    },
    key: tab
  }, tab === "Status" && /*#__PURE__*/React.createElement("dl", {
    className: "kv",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("dt", null, "Installation"), /*#__PURE__*/React.createElement("dd", null, "Installed \xB7 ", h.processes, " process", h.processes === 1 ? "" : "es"), /*#__PURE__*/React.createElement("dt", null, "Launch"), /*#__PURE__*/React.createElement("dd", null, h.launch), /*#__PURE__*/React.createElement("dt", null, "Assigned policy"), /*#__PURE__*/React.createElement("dd", null, h.policy), /*#__PURE__*/React.createElement("dt", null, "Provider / model"), /*#__PURE__*/React.createElement("dd", null, h.provider, " / ", h.model), /*#__PURE__*/React.createElement("dt", null, "Trust method"), /*#__PURE__*/React.createElement("dd", null, h.trust), /*#__PURE__*/React.createElement("dt", null, "Evidence age"), /*#__PURE__*/React.createElement("dd", null, h.evidenceAge), /*#__PURE__*/React.createElement("dt", null, "Last activity"), /*#__PURE__*/React.createElement("dd", null, h.last, " \xB7 ", h.lastOutcome)), tab === "Routing assignment" && /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Policy",
    options: ["Default · rev 14", "Economy · rev 3", "Reasoning-only · rev 2"]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Primary target",
    options: ["Anthropic · Work / claude-sonnet-4", "OpenAI · Personal / gpt-5", "Ollama / qwen3-coder"]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Traffic",
    options: ["All eligible inference", "Selected rules only"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1/-1",
      font: "var(--type-caption)",
      color: "var(--text-tertiary)"
    }
  }, "Changes apply at the next new-turn boundary. Active streams keep their current route.")), tab === "Traffic classes" && /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: [{
      key: "cls",
      label: "Class"
    }, {
      key: "action",
      label: "Action",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        size: "sm",
        dot: true
      }, r.action)
    }, {
      key: "reason",
      label: "Reason",
      mono: true
    }],
    rows: [["Inference eligible", h.mode === "Route" ? "Routing" : h.mode === "Observe" ? "Observing" : "Off", h.mode === "Route" ? "POLICY_MATCH R-02" : "MODE_" + h.mode.toUpperCase()], ["Inference passthrough", "Native passthrough", "CLASS_PASSTHROUGH"], ["Auth", "Native passthrough", "NEVER_ROUTED"], ["Account", "Native passthrough", "NEVER_ROUTED"], ["Billing / usage", "Native passthrough", "NEVER_ROUTED"], ["Model catalog", "Native passthrough", "NEVER_ROUTED"], ["Telemetry", "Native passthrough", "NEVER_ROUTED"], ["Updates / extensions", "Native passthrough", "NEVER_ROUTED"], ["Unknown", h.mode === "Route" ? "Rejected from Route" : "Native passthrough", "UNKNOWN_FAIL_CLOSED"]].map(([cls, action, reason], i) => ({
      id: i,
      cls,
      action,
      reason
    }))
  }), tab === "Compatibility" && /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement("dl", {
    className: "kv",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("dt", null, "Result"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement(Badge, {
    size: "sm"
  }, h.compat)), /*#__PURE__*/React.createElement("dt", null, "Evidence work"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement(Badge, {
    size: "sm",
    tone: "neutral"
  }, h.evidence)), /*#__PURE__*/React.createElement("dt", null, "Tested version"), /*#__PURE__*/React.createElement("dd", null, h.version, " \xB7 Windows 11 x64"), /*#__PURE__*/React.createElement("dt", null, "Routing method"), /*#__PURE__*/React.createElement("dd", null, "Process-scoped proxy + CA"), /*#__PURE__*/React.createElement("dt", null, "Feature cases"), /*#__PURE__*/React.createElement("dd", null, "text \u2713 \xB7 streaming \u2713 \xB7 tools \u2713 \xB7 reasoning \u2713 \xB7 images \u2014 \xB7 cancel \u2713 \xB7 reconnect \u2014 \xB7 usage \u2713")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    icon: "play"
  }, "Run compatibility probe"))), (tab === "Launch sessions" || tab === "Trust & fallback" || tab === "Activity") && /*#__PURE__*/React.createElement(EmptyState, {
    icon: "layers",
    title: `${tab} for ${h.name}`,
    description: "Scoped summary. Open the canonical destination for full history.",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      iconRight: "arrowRight"
    }, "Open ", tab === "Activity" ? "Observability" : "Diagnostics & Recovery")
  }))))), /*#__PURE__*/React.createElement("style", null, `.hitem{transition:background var(--dur-fast)}.hitem:hover{background:var(--surface-hover)!important}`), confirm && /*#__PURE__*/React.createElement(Dialog, {
    title: `Turn ${h.name} Off and drain`,
    description: "New eligible traffic returns to the native path immediately. Credentials, sessions, and history are unchanged.",
    onClose: () => setConfirm(null),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setConfirm(null)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "power",
      onClick: () => {
        setMode(h.id, "Off");
        setConfirm(null);
      }
    }, "Turn Off & drain"))
  }, /*#__PURE__*/React.createElement("dl", {
    className: "kv",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("dt", null, "Active streams"), /*#__PURE__*/React.createElement("dd", null, h.active, " \xB7 finish on ", h.provider), /*#__PURE__*/React.createElement("dt", null, "Configured intent"), /*#__PURE__*/React.createElement("dd", null, h.mode, " \u2192 Off"), /*#__PURE__*/React.createElement("dt", null, "Drain deadline"), /*#__PURE__*/React.createElement("dd", null, "120 s"), /*#__PURE__*/React.createElement("dt", null, "Other harnesses"), /*#__PURE__*/React.createElement("dd", null, "Unchanged"))));
}
Object.assign(window, {
  Harnesses
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rflectr-desktop/Harnesses.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rflectr-desktop/Observability.jsx
try { (() => {
const {
  Card,
  MetricCard,
  Badge,
  Button,
  IconButton,
  Icon,
  DataTable,
  Tabs,
  Input,
  Select,
  Dialog,
  UsageWindow,
  Switch,
  Toast
} = window.rflectrDesignSystem_c36c9e;
function Observability() {
  const D = window.RFLECTR_DATA;
  const [q, setQ] = React.useState("");
  const [mode, setMode] = React.useState("All route modes");
  const [sel, setSel] = React.useState(null);
  const rows = D.requests.filter(r => (mode === "All route modes" || r.mode === mode) && (!q || (r.id + r.harness + r.provider + r.model).toLowerCase().includes(q.toLowerCase())));
  const cols = [{
    key: "time",
    label: "Time",
    mono: true,
    sortable: true
  }, {
    key: "id",
    label: "Request",
    mono: true,
    render: r => /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-secondary)"
      }
    }, r.id)
  }, {
    key: "harness",
    label: "Harness",
    render: r => /*#__PURE__*/React.createElement("span", null, r.harness, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-tertiary)",
        fontFamily: "var(--font-mono)",
        fontSize: 11
      }
    }, r.version))
  }, {
    key: "cls",
    label: "Class"
  }, {
    key: "mode",
    label: "Route mode",
    render: r => /*#__PURE__*/React.createElement(Badge, {
      size: "sm",
      dot: true,
      tone: r.mode === "Routed" ? "route" : r.mode === "Observed" ? "observe" : "off"
    }, r.mode)
  }, {
    key: "model",
    label: "Provider / model",
    mono: true,
    render: r => /*#__PURE__*/React.createElement("span", null, r.provider, r.model !== "—" && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-tertiary)"
      }
    }, " / ", r.model))
  }, {
    key: "ttft",
    label: "TTFT",
    align: "right",
    render: r => r.ttft == null ? "—" : r.ttft + " ms"
  }, {
    key: "total",
    label: "Total",
    align: "right",
    render: r => r.total + " ms"
  }, {
    key: "tokens",
    label: "Tokens",
    align: "right",
    render: r => r.tokens ? /*#__PURE__*/React.createElement("span", null, r.tokens.src.startsWith("Tokenizer") && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-tertiary)"
      }
    }, "~"), (r.tokens.in + r.tokens.out).toLocaleString()) : "—"
  }, {
    key: "cost",
    label: "Cost",
    align: "right",
    render: r => r.cost ? r.cost.reported !== "—" ? r.cost.reported : /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-secondary)"
      }
    }, r.cost.est) : "—"
  }, {
    key: "outcome",
    label: "Outcome",
    render: r => /*#__PURE__*/React.createElement(Badge, {
      size: "sm",
      tone: r.outcome === "Failed" ? "danger" : r.outcome.startsWith("Fallback") ? "warn" : "neutral"
    }, r.outcome, r.attempts > 1 ? ` · ${r.attempts} attempts` : "")
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Request ledger",
    desc: "Metadata only. No prompt, response, tool, header, or credential content is stored or shown.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "wallet"
    }, "Open in Usage & Spend"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "download"
    }, "Export"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "repeat(6,1fr)",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "Requests",
    value: "2,871"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Errors",
    value: "9"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Cancellations",
    value: "5"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Failovers",
    value: "3"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Avg first token",
    value: "412",
    unit: "ms"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Provider tokens",
    value: "128,904",
    source: "Provider reported"
  })), /*#__PURE__*/React.createElement(Card, {
    flush: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: 10,
      borderBottom: "1px solid var(--border-hairline)",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Request ID, harness, provider, model",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      width: 300
    }
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ["Last 24 hours", "Last 7 days", "Last 30 days"]
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ["All harnesses", "Claude Code", "Codex CLI", "Cursor"]
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    value: mode,
    onChange: e => setMode(e.target.value),
    options: ["All route modes", "Routed", "Observed", "Native passthrough"]
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ["All classes", "Inference eligible", "Auth", "Telemetry"]
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "var(--type-code)",
      color: "var(--text-tertiary)"
    }
  }, rows.length, " of ", D.requests.length, " shown \xB7 2,871 total")), /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: cols,
    rows: rows,
    onRowClick: r => setSel(r),
    selectedKey: sel?.id,
    sort: {
      key: "time",
      dir: "desc"
    },
    emptyText: "No requests match. Clear a filter or widen the time range."
  })), sel && /*#__PURE__*/React.createElement(RequestDrawer, {
    r: sel,
    onClose: () => setSel(null)
  }));
}
function RequestDrawer({
  r,
  onClose
}) {
  const [tab, setTab] = React.useState("Route decision");
  const est = r.tokens && r.tokens.src.startsWith("Tokenizer");
  return /*#__PURE__*/React.createElement("div", {
    className: "drawer",
    role: "dialog",
    "aria-label": `Request ${r.id}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawer__head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-heading)",
      fontFamily: "var(--font-mono)"
    }
  }, r.id, " ", /*#__PURE__*/React.createElement(IconButton, {
    icon: "copy",
    label: "Copy request ID",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-secondary)"
    }
  }, r.harness, " ", r.version, " \xB7 ", r.time, " \xB7 ", /*#__PURE__*/React.createElement(Badge, {
    size: "sm",
    tone: r.mode === "Routed" ? "route" : r.mode === "Observed" ? "observe" : "off"
  }, r.mode))), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: "Route decision",
      label: "Route"
    }, "Attempts", "Latency", {
      id: "Tokens & cost",
      label: "Tokens"
    }, "Attribution", "Privacy"],
    value: tab,
    onChange: setTab,
    style: {
      padding: "0 8px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "drawer__body",
    key: tab
  }, tab === "Route decision" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("dl", {
    className: "kv",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("dt", null, "Traffic class"), /*#__PURE__*/React.createElement("dd", null, r.cls), /*#__PURE__*/React.createElement("dt", null, "Policy \xB7 rule"), /*#__PURE__*/React.createElement("dd", null, r.policy), /*#__PURE__*/React.createElement("dt", null, "Selected route"), /*#__PURE__*/React.createElement("dd", null, r.provider, " / ", r.model), /*#__PURE__*/React.createElement("dt", null, "Reason code"), /*#__PURE__*/React.createElement("dd", null, r.mode === "Routed" ? "POLICY_MATCH" : r.mode === "Observed" ? "MODE_OBSERVE" : "CLASS_PASSTHROUGH"), /*#__PURE__*/React.createElement("dt", null, "Affinity"), /*#__PURE__*/React.createElement("dd", null, "aff_7c2e\u2026 \xB7 next turn owned by rev 14"), /*#__PURE__*/React.createElement("dt", null, "Fallback eligible"), /*#__PURE__*/React.createElement("dd", null, r.attempts > 1 ? "Yes · quota-only, used" : "Yes · quota-only, not used")), /*#__PURE__*/React.createElement(Section, {
    title: "Capability results"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, [["Text stream", "Native"], ["Tools", "Native"], ["Parallel tools", "Translated"], ["Reasoning", "Native"], ["Images", "Dropped with warning"], ["Cancellation", "Native"], ["Reconnect", "Unsupported"]].map(([k, v]) => /*#__PURE__*/React.createElement(Badge, {
    key: k,
    size: "sm",
    tone: v === "Native" ? "neutral" : v === "Translated" ? "observe" : v === "Unsupported" ? "danger" : "warn"
  }, k, ": ", v))))), tab === "Attempts" && /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, [...Array(r.attempts)].map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "24px 1fr auto",
      gap: 12,
      padding: 12,
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--r-md)",
      background: "var(--surface-card)",
      font: "var(--type-caption)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-metric)",
      fontSize: 18,
      color: "var(--text-tertiary)"
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-strong)"
    }
  }, i === 0 && r.attempts > 1 ? "Anthropic · Work / claude-sonnet-4" : r.provider + " / " + r.model), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-secondary)"
    }
  }, i === 0 && r.attempts > 1 ? "Primary · QUOTA_EXHAUSTED before first byte" : "BYOK/API · response started")), /*#__PURE__*/React.createElement(Badge, {
    size: "sm",
    tone: i === 0 && r.attempts > 1 ? "warn" : "neutral"
  }, i === 0 && r.attempts > 1 ? "Primary quota exhausted" : r.outcome))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-code)",
      color: "var(--text-tertiary)"
    }
  }, "One end-user request. Tokens and cost aggregate every upstream contribution exactly once.")), tab === "Latency" && /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, [["Queue", 12], ["Connect", 38], ["TLS", 61], ["First byte", r.ttft ? r.ttft - 90 : 0], ["First token", r.ttft || 0], ["Stream", r.total - (r.ttft || 0)], ["Total", r.total]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "grid",
      gridTemplateColumns: "90px 1fr 70px",
      gap: 10,
      alignItems: "center",
      font: "var(--type-caption)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "var(--n-4)",
      borderRadius: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.min(100, v / r.total * 100) + "%",
      height: "100%",
      background: k === "Total" ? "var(--n-10)" : "var(--n-8)",
      borderRadius: 3,
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right",
      fontFamily: "var(--font-mono)"
    }
  }, v, " ms")))), tab === "Tokens & cost" && (r.tokens ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    title: `Tokens · ${r.tokens.src}`
  }, /*#__PURE__*/React.createElement("dl", {
    className: "kv",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("dt", null, "Input"), /*#__PURE__*/React.createElement("dd", null, est ? "~" : "", r.tokens.in.toLocaleString()), /*#__PURE__*/React.createElement("dt", null, "Output"), /*#__PURE__*/React.createElement("dd", null, est ? "~" : "", r.tokens.out.toLocaleString()), /*#__PURE__*/React.createElement("dt", null, "Cached input"), /*#__PURE__*/React.createElement("dd", null, r.tokens.cached.toLocaleString()), /*#__PURE__*/React.createElement("dt", null, "Cache creation"), /*#__PURE__*/React.createElement("dd", null, "Unknown"), /*#__PURE__*/React.createElement("dt", null, "Reasoning"), /*#__PURE__*/React.createElement("dd", null, "Unknown"), /*#__PURE__*/React.createElement("dt", null, "Confidence"), /*#__PURE__*/React.createElement("dd", null, est ? "Medium" : "High"))), /*#__PURE__*/React.createElement(Section, {
    title: "Cost records (kept separate)"
  }, /*#__PURE__*/React.createElement("dl", {
    className: "kv",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("dt", null, "Provider-reported"), /*#__PURE__*/React.createElement("dd", null, r.cost?.reported || "—"), /*#__PURE__*/React.createElement("dt", null, "Estimated API cost"), /*#__PURE__*/React.createElement("dd", null, r.cost?.est || "—", " \xB7 rate card rev 3"), /*#__PURE__*/React.createElement("dt", null, "Subscription fee"), /*#__PURE__*/React.createElement("dd", null, "Not applicable to this route")))) : /*#__PURE__*/React.createElement("dl", {
    className: "kv",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("dt", null, "Tokens"), /*#__PURE__*/React.createElement("dd", null, "Unknown \xB7 ", r.cls, " traffic is not metered"), /*#__PURE__*/React.createElement("dt", null, "Cost"), /*#__PURE__*/React.createElement("dd", null, "Unknown"))), tab === "Attribution" && /*#__PURE__*/React.createElement("dl", {
    className: "kv",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("dt", null, "Launch ID"), /*#__PURE__*/React.createElement("dd", null, "L-0419"), /*#__PURE__*/React.createElement("dt", null, "Source PID"), /*#__PURE__*/React.createElement("dd", null, "18422 \xB7 started 14:02:11"), /*#__PURE__*/React.createElement("dt", null, "Root process"), /*#__PURE__*/React.createElement("dd", null, "claude.exe \xB7 verified descendant"), /*#__PURE__*/React.createElement("dt", null, "Executable digest"), /*#__PURE__*/React.createElement("dd", null, "sha256:4f1c\u2026a9e0"), /*#__PURE__*/React.createElement("dt", null, "Adapter"), /*#__PURE__*/React.createElement("dd", null, "claude-code/1.4.0"), /*#__PURE__*/React.createElement("dt", null, "Source protocol"), /*#__PURE__*/React.createElement("dd", null, "anthropic.messages v1"), /*#__PURE__*/React.createElement("dt", null, "Destination"), /*#__PURE__*/React.createElement("dd", null, "api.anthropic.com /v1/messages"), /*#__PURE__*/React.createElement("dt", null, "Reason"), /*#__PURE__*/React.createElement("dd", null, "ANCESTRY_VERIFIED")), tab === "Privacy" && /*#__PURE__*/React.createElement("dl", {
    className: "kv",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("dt", null, "Redaction revision"), /*#__PURE__*/React.createElement("dd", null, "rp-2026.08"), /*#__PURE__*/React.createElement("dt", null, "Omitted"), /*#__PURE__*/React.createElement("dd", null, "prompt \xB7 response \xB7 tool args \xB7 headers \xB7 cookies \xB7 query strings"), /*#__PURE__*/React.createElement("dt", null, "Admission"), /*#__PURE__*/React.createElement("dd", null, "Metadata-only \xB7 passed"))));
}
function Usage() {
  const D = window.RFLECTR_DATA;
  const [basis, setBasis] = React.useState("Estimated API cost");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Usage & Spend",
    desc: "Measured usage, reported charges, estimates, and subscription amounts are separate bases and are never merged.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Select, {
      size: "sm",
      options: ["Last 7 days", "Last 24 hours", "Last 30 days"]
    }), /*#__PURE__*/React.createElement(Select, {
      size: "sm",
      value: basis,
      onChange: e => setBasis(e.target.value),
      options: ["Estimated API cost", "Provider-reported charges", "Subscription fee", "API-equivalent estimate"]
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "download"
    }, "Export range"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "repeat(5,1fr)",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "Requests",
    value: "18,402"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Provider tokens",
    value: "1.42M",
    source: "Provider reported",
    meta: "in 1.09M \xB7 out 331k"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Estimated tokens",
    value: "212k",
    estimated: true,
    source: "Tokenizer",
    meta: "Observe-mode traffic"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: basis,
    value: basis === "Subscription fee" ? "$200.00" : basis === "Provider-reported charges" ? "$27.14" : basis === "API-equivalent estimate" ? "$61.90" : "$28.03",
    estimated: basis !== "Provider-reported charges" && basis !== "Subscription fee",
    source: basis === "Subscription fee" ? "User entered" : basis === "Provider-reported charges" ? "Provider reported" : "API rate est.",
    meta: basis === "Subscription fee" ? "Sept billing period" : basis === "API-equivalent estimate" ? "Not money paid" : "Rate cards rev 3, 5"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Unknown cost",
    value: "1,530",
    meta: "passthrough requests"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Card, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
      name: "activity",
      size: 15
    }), basis, " \xB7 daily"),
    dense: true
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 140",
    width: "100%",
    height: "140",
    "aria-label": "Cost trend chart"
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: "0",
    x2: "600",
    y1: 20 + i * 36,
    y2: 20 + i * 36,
    stroke: "var(--border-hairline)"
  })), [3.1, 4.2, 2.8, 5.6, 4.9, 3.4, 4.0].map((v, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("rect", {
    x: 20 + i * 82,
    y: 128 - v * 18,
    width: "44",
    height: v * 18,
    rx: "3",
    fill: "var(--n-6)",
    style: {
      transformOrigin: "bottom",
      animation: `rflectr-rise var(--dur-enter) var(--ease-out) ${i * 50}ms both`
    }
  }), /*#__PURE__*/React.createElement("rect", {
    x: 20 + i * 82,
    y: 128 - v * 18 * 0.42,
    width: "44",
    height: v * 18 * 0.42,
    rx: "3",
    fill: "var(--route-9)"
  }), /*#__PURE__*/React.createElement("text", {
    x: 42 + i * 82,
    y: "138",
    fontSize: "10",
    fill: "var(--text-tertiary)",
    textAnchor: "middle",
    fontFamily: "Geist Mono"
  }, ["Th", "Fr", "Sa", "Su", "Mo", "Tu", "We"][i])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      font: "var(--type-code)",
      color: "var(--text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      display: "inline-block",
      width: 8,
      height: 8,
      background: "var(--route-9)",
      borderRadius: 2,
      marginRight: 5
    }
  }), "Routed"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      display: "inline-block",
      width: 8,
      height: 8,
      background: "var(--n-6)",
      borderRadius: 2,
      marginRight: 5
    }
  }), "Observed (~ estimated)"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, "Rate card rev 5 applied from Sa"))), /*#__PURE__*/React.createElement(Card, {
    title: "Breakdown by provider / model",
    flush: true
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: [{
      key: "p",
      label: "Provider / model",
      mono: true
    }, {
      key: "req",
      label: "Requests",
      align: "right"
    }, {
      key: "tok",
      label: "Tokens",
      align: "right"
    }, {
      key: "rep",
      label: "Reported",
      align: "right"
    }, {
      key: "est",
      label: "Estimated",
      align: "right"
    }, {
      key: "src",
      label: "Token source",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        size: "sm"
      }, r.src)
    }],
    rows: [{
      id: 1,
      p: "Anthropic · Work / claude-sonnet-4",
      req: "9,812",
      tok: "912k",
      rep: "$21.40",
      est: "~$21.12",
      src: "Provider reported"
    }, {
      id: 2,
      p: "OpenRouter · Personal / balanced",
      req: "2,140",
      tok: "301k",
      rep: "$5.74",
      est: "~$5.70",
      src: "Provider reported"
    }, {
      id: 3,
      p: "Native · OpenAI / gpt-5 (observed)",
      req: "4,920",
      tok: "~212k",
      rep: "—",
      est: "~$1.21",
      src: "Tokenizer estimated"
    }, {
      id: 4,
      p: "Ollama / qwen3-coder",
      req: "1,530",
      tok: "Unknown",
      rep: "—",
      est: "—",
      src: "Unknown"
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Usage windows",
    dense: true,
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      icon: "plus"
    }, "User-entered window")
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: 14
    }
  }, D.windows.map((w, i) => /*#__PURE__*/React.createElement(UsageWindow, {
    key: i,
    name: w.name,
    account: w.account,
    used: w.used,
    limit: w.limit,
    unit: w.unit,
    resetAt: w.reset,
    source: w.source,
    confidence: w.confidence,
    stale: w.stale
  })))), /*#__PURE__*/React.createElement(Card, {
    title: "Budget guards",
    dense: true,
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      icon: "plus"
    }, "Guard")
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: 10
    }
  }, [["Anthropic · Work · month", "$40.00", 70, "Warn at 80%", "Estimated (acknowledged)"], ["Cursor → OpenRouter · week", "$10.00", 91, "Block new routes at 100%", "Provider reported"]].map(([n, lim, pct, act, src]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      font: "var(--type-caption)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--text-secondary)"
    }
  }, pct, "% of ", lim)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "var(--n-4)",
      borderRadius: 3,
      margin: "6px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      borderRadius: 3,
      background: pct > 85 ? "var(--danger-9)" : "var(--n-10)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-code)",
      color: "var(--text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, act), /*#__PURE__*/React.createElement("span", null, src)))))))));
}
Object.assign(window, {
  Observability,
  Usage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rflectr-desktop/Observability.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rflectr-desktop/Overview.jsx
try { (() => {
const {
  Card,
  MetricCard,
  UsageWindow,
  RouteLine,
  Badge,
  Button,
  IconButton,
  StatusDot,
  Icon,
  DataTable,
  ModeSegment
} = window.rflectrDesignSystem_c36c9e;
function Overview({
  harnesses,
  setPage,
  openHarness
}) {
  const D = window.RFLECTR_DATA;
  const cols = [{
    key: "harness",
    label: "Harness",
    render: r => /*#__PURE__*/React.createElement("span", null, r.harness, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-tertiary)",
        fontFamily: "var(--font-mono)",
        fontSize: 11
      }
    }, r.version))
  }, {
    key: "model",
    label: "Provider / model",
    mono: true
  }, {
    key: "elapsed",
    label: "Elapsed",
    align: "right",
    render: r => r.total + " ms"
  }, {
    key: "attempts",
    label: "Attempt",
    align: "right"
  }, {
    key: "state",
    label: "",
    render: () => /*#__PURE__*/React.createElement(Badge, {
      size: "sm",
      dot: true,
      live: true
    }, "Streaming")
  }];
  const active = D.requests.slice(0, 2).map(r => ({
    ...r
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Routing overview",
    desc: "Configured intent and effective runtime state for every harness, plus what rflectr has used and what needs action.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "play",
      onClick: () => setPage("setup")
    }, "Setup")
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "repeat(6,1fr)",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "Requests \xB7 24h",
    value: "2,871",
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "1,204 routed"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "1,530 passthrough"))
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Routed",
    value: "1,204",
    tone: "route",
    meta: "42% of eligible"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Failures \xB7 cancels",
    value: "14",
    meta: "0.5% of requests"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Provider tokens",
    value: "128,904",
    source: "Provider reported",
    meta: "in 98,110 \xB7 out 30,794"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Avg TTFT",
    value: "412",
    unit: "ms",
    meta: "total 2,140 ms"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Est. API cost",
    value: "$4.18",
    estimated: true,
    source: "API rate est.",
    meta: /*#__PURE__*/React.createElement("span", {
      title: "Reported charge is a separate basis"
    }, "Reported $3.92")
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Card, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
      name: "boxes",
      size: 15
    }), "Harnesses"),
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconRight: "chevronRight",
      onClick: () => setPage("harnesses")
    }, "All harnesses"),
    flush: true
  }, /*#__PURE__*/React.createElement("div", null, harnesses.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: h.id,
    onClick: () => openHarness(h.id),
    style: {
      display: "grid",
      gridTemplateColumns: "150px 1fr auto",
      gap: 16,
      alignItems: "center",
      padding: "12px 16px",
      borderBottom: i < harnesses.length - 1 ? "1px solid var(--border-hairline)" : 0,
      cursor: "pointer",
      animation: `rflectr-rise var(--dur-enter) var(--ease-out) ${i * 40}ms both`
    },
    className: "hrow"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-strong)"
    }
  }, h.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-code)",
      color: "var(--text-tertiary)"
    }
  }, h.surface, " \xB7 ", h.version)), /*#__PURE__*/React.createElement(RouteLine, {
    from: h.mode,
    to: h.mode === "Route" ? h.provider : undefined,
    toMeta: h.mode === "Route" ? h.model : undefined,
    state: h.state === "Routing" ? "Route" : h.state === "Observing" ? "Observe" : h.state === "Draining" ? "Draining" : h.state === "Failed" ? "Failed" : "Off"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    state: h.state,
    live: h.active > 0
  }), h.warnings.length ? /*#__PURE__*/React.createElement(Badge, {
    size: "sm",
    tone: "warn",
    dot: true
  }, h.warnings.length, " blocker", h.warnings.length > 1 ? "s" : "") : /*#__PURE__*/React.createElement(Badge, {
    size: "sm"
  }, h.compat)))))), /*#__PURE__*/React.createElement(Card, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
      name: "zap",
      size: 15
    }), "Active requests"),
    actions: /*#__PURE__*/React.createElement(Badge, {
      size: "sm",
      dot: true,
      live: true
    }, active.length),
    flush: true
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: cols,
    rows: active,
    onRowClick: () => setPage("observability")
  }))), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Card, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 15
    }), "Usage windows"),
    actions: /*#__PURE__*/React.createElement(IconButton, {
      icon: "refresh",
      label: "Refresh windows",
      size: "sm"
    }),
    dense: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: 14
    }
  }, D.windows.map((w, i) => /*#__PURE__*/React.createElement(UsageWindow, {
    key: i,
    name: w.name,
    account: w.account,
    used: w.used,
    limit: w.limit,
    unit: w.unit,
    resetAt: w.reset,
    source: w.source,
    confidence: w.confidence,
    stale: w.stale
  })))), /*#__PURE__*/React.createElement(Card, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
      name: "alertTriangle",
      size: 15
    }), "Recent failures"),
    dense: true,
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconRight: "chevronRight",
      onClick: () => setPage("observability")
    }, "Ledger")
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: 8,
      font: "var(--type-caption)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
    size: "sm"
  }, "Failed"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6
    }
  }, "Claude Code \xB7 PROVIDER_5XX")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      fontFamily: "var(--font-mono)"
    }
  }, "15:25:19")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
    size: "sm",
    tone: "warn"
  }, "Fallback"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6
    }
  }, "Anthropic \u2192 OpenRouter \xB7 QUOTA_EXHAUSTED")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      fontFamily: "var(--font-mono)"
    }
  }, "15:52:48")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
    size: "sm"
  }, "Cancelled"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6
    }
  }, "Cursor \xB7 source-harness cancel")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      fontFamily: "var(--font-mono)"
    }
  }, "15:32:07")))))), /*#__PURE__*/React.createElement("style", null, `.hrow{transition:background var(--dur-fast)}.hrow:hover{background:var(--surface-hover)}`));
}
Object.assign(window, {
  Overview
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rflectr-desktop/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rflectr-desktop/Providers.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Card,
  Badge,
  Button,
  IconButton,
  Icon,
  DataTable,
  Input,
  Select,
  Dialog,
  Switch,
  Checkbox,
  EmptyState,
  ActionItem,
  StatusDot
} = window.rflectrDesignSystem_c36c9e;
function Providers() {
  const D = window.RFLECTR_DATA;
  const [adding, setAdding] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const cols = [{
    key: "name",
    label: "Provider",
    render: r => /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, r.name)
  }, {
    key: "cls",
    label: "Route class",
    render: r => /*#__PURE__*/React.createElement(Badge, {
      size: "sm",
      tone: r.cls.startsWith("Authorized") ? "observe" : "neutral"
    }, r.cls)
  }, {
    key: "accounts",
    label: "Accounts",
    align: "right"
  }, {
    key: "models",
    label: "Models",
    align: "right"
  }, {
    key: "windows",
    label: "Windows",
    align: "right"
  }, {
    key: "health",
    label: "Health",
    render: r => /*#__PURE__*/React.createElement(Badge, {
      size: "sm",
      tone: r.health === "Verified" ? "route" : "off",
      dot: true
    }, r.health)
  }, {
    key: "pricing",
    label: "Pricing source"
  }, {
    key: "auth",
    label: "Authorization",
    render: r => /*#__PURE__*/React.createElement("span", {
      style: {
        color: r.auth === "Authorization required" ? "var(--text-warn)" : "var(--text-secondary)"
      }
    }, r.auth)
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Providers & Accounts",
    desc: "Accounts are RFLECTR-managed provider references. Harness logins are never imported; secrets are one-way.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "cpu"
    }, "Discover local service"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "plus",
      onClick: () => {
        setAdding(true);
        setStep(0);
      }
    }, "Add provider"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Card, {
    flush: true
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: cols,
    rows: D.providers,
    rowKey: r => r.name,
    onRowClick: () => {}
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
      name: "key",
      size: 15
    }), "Anthropic \xB7 Work"),
    actions: /*#__PURE__*/React.createElement(Badge, {
      size: "sm",
      dot: true,
      tone: "route"
    }, "Verified"),
    dense: true
  }, /*#__PURE__*/React.createElement("dl", {
    className: "kv",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("dt", null, "Route class"), /*#__PURE__*/React.createElement("dd", null, "BYOK/API"), /*#__PURE__*/React.createElement("dt", null, "Secret"), /*#__PURE__*/React.createElement("dd", null, "Stored in OS secret service \xB7 \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022a9Q1"), /*#__PURE__*/React.createElement("dt", null, "Last verification"), /*#__PURE__*/React.createElement("dd", null, "2 min ago \xB7 auth \u2713 \xB7 models \u2713 \xB7 stream \u2713 \xB7 cancel \u2713"), /*#__PURE__*/React.createElement("dt", null, "Depends on"), /*#__PURE__*/React.createElement("dd", null, "Default \xB7 rev 14 (Claude Code) \xB7 2 guards \xB7 1 affinity")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "Test"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    icon: "key"
  }, "Replace secret"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "danger",
    style: {
      marginLeft: "auto"
    }
  }, "Remove\u2026"))), /*#__PURE__*/React.createElement(Card, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
      name: "shield",
      size: 15
    }), "Claude subscription bridge"),
    actions: /*#__PURE__*/React.createElement(Badge, {
      size: "sm",
      tone: "warn"
    }, "Authorization required"),
    dense: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-secondary)",
      marginBottom: 10
    }
  }, "Two independent gates must both pass before this bridge can be assigned to a policy."), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: 6,
      font: "var(--type-caption)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    size: "sm",
    tone: "neutral"
  }, "Partial"), "Technical compatibility \xB7 Claude Desktop 1.2.8 \xB7 Windows 11"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    size: "sm",
    tone: "neutral"
  }, "External"), "Provider authorization \xB7 not on record")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-code)",
      color: "var(--text-tertiary)",
      marginTop: 10
    }
  }, "Technical reachability alone is not an enablement state.")))), adding && /*#__PURE__*/React.createElement(Dialog, {
    title: "Add provider",
    description: ["Choose provider and route class", "Account and one-time credential", "Connectivity and capability test"][step],
    onClose: () => setAdding(false),
    wide: true,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        marginRight: "auto",
        font: "var(--type-code)",
        color: "var(--text-tertiary)"
      }
    }, "Step ", step + 1, " of 3"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => step ? setStep(step - 1) : setAdding(false)
    }, step ? "Back" : "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconRight: step < 2 ? "arrowRight" : undefined,
      onClick: () => step < 2 ? setStep(step + 1) : setAdding(false)
    }, step < 2 ? "Continue" : "Done"))
  }, step === 0 && /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Provider",
    options: ["Anthropic", "OpenAI", "OpenRouter", "Custom compatible endpoint", "Ollama (local)"]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Route class",
    options: ["BYOK/API", "Local/self-hosted", "Authorized subscription bridge"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1/-1",
      font: "var(--type-caption)",
      color: "var(--text-secondary)",
      padding: 10,
      background: "var(--fill-observe-soft)",
      borderRadius: "var(--r-sm)"
    }
  }, "A credential added here configures rflectr's provider connection. It does not configure or activate the harness's own third-party mode.")), step === 1 && /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Account label",
    placeholder: "Anthropic \xB7 Work"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Billing basis",
    placeholder: "Pay-as-you-go"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1/-1"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "API key",
    secret: true,
    placeholder: "Paste once",
    hint: "Sent once to native code and stored in the OS secret service. rflectr never shows, copies, or exports it."
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Enable usage connector for this account",
    defaultChecked: true
  })), step === 2 && /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: 8,
      font: "var(--type-caption)"
    }
  }, [["Connectivity", "Verified · 84 ms"], ["Authentication", "Verified"], ["Model catalog", "6 models"], ["Streaming · cancellation · tools", "Native"], ["Usage connector", "2 windows found"], ["Quota-signal classification", "Recognized"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "6px 0",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--text-route)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12
  }), " ", v))))));
}
function Diagnostics({
  actions,
  daemon
}) {
  const checks = [["Daemon startup & authenticated IPC", daemon === "Healthy" ? "Healthy" : "Offline", "41 ms"], ["Database integrity & write/read", "Healthy", "112 ms"], ["Loopback listener & proxy path", "Healthy", "8 ms"], ["Process launch & ancestry attribution", "Healthy", "230 ms"], ["Process-scoped CA & TLS trust", "Degraded", "—"], ["Adapter detection & classification", "Healthy", "64 ms"], ["Provider reachability & auth", "Healthy", "302 ms"], ["Redaction & seeded-canary absence", "Healthy", "19 ms"], ["Updater manifest, signature, checksum", "Healthy", "540 ms"]];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Diagnostics & Recovery",
    desc: "Authoritative live subsystem inventory, owned resources, and the recovery journal.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "play"
    }, "Run all self-tests"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "download"
    }, "Support bundle"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "minmax(0,1fr) 400px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Runtime health",
    dense: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 10
    }
  }, [["Daemon", daemon, "0.9.2 · up 3d 4h"], ["Database", "Healthy", "WAL · schema 12 · 48 MB"], ["Listeners", "Healthy", "2 loopback · 127.0.0.1"], ["Trust", "Degraded", "Codex restart pending"]].map(([k, s, m]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: 10,
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--r-md)",
      background: "var(--surface-panel)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rflectr-eyebrow"
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "6px 0 2px"
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    state: s
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-code)",
      color: "var(--text-tertiary)"
    }
  }, m))))), /*#__PURE__*/React.createElement(Card, {
    title: "Self-tests",
    flush: true,
    actions: /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-code)",
        color: "var(--text-tertiary)"
      }
    }, "Last run 4 min ago")
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: [{
      key: "n",
      label: "Check"
    }, {
      key: "s",
      label: "State",
      render: r => /*#__PURE__*/React.createElement(StatusDot, {
        state: r.s
      })
    }, {
      key: "d",
      label: "Duration",
      align: "right",
      mono: true
    }, {
      key: "a",
      label: "",
      render: () => /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "ghost"
      }, "Run")
    }],
    rows: checks.map(([n, s, d], i) => ({
      id: i,
      n,
      s,
      d
    }))
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Recovery operations",
    flush: true
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: [{
      key: "t",
      label: "Target",
      mono: true
    }, {
      key: "op",
      label: "Operation"
    }, {
      key: "st",
      label: "State",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        size: "sm",
        tone: r.st === "Conflicted" ? "danger" : r.st === "Applied" ? "warn" : "neutral"
      }, r.st)
    }, {
      key: "fp",
      label: "Expected vs live",
      mono: true
    }, {
      key: "a",
      label: "",
      render: r => /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: r.st === "Conflicted" ? "secondary" : "ghost"
      }, r.st === "Conflicted" ? "Resolve…" : "Verify")
    }],
    rows: [{
      id: 1,
      t: "%APPDATA%/Codex/… (owned block)",
      op: "Base-URL overlay",
      st: "Applied",
      fp: "a91f… = a91f…"
    }, {
      id: 2,
      t: "CurrentUser\\Root · rflectr CA",
      st: "Conflicted",
      op: "Trust-store entry",
      fp: "e0b2… ≠ 77c3… (user-modified)"
    }, {
      id: 3,
      t: "L-0402 listener 127.0.0.1:41733",
      op: "Listener teardown",
      st: "Completed",
      fp: "—"
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Action center",
    dense: true,
    actions: /*#__PURE__*/React.createElement(Badge, {
      size: "sm"
    }, actions.length, " open")
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: 8
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement(ActionItem, _extends({
    key: i
  }, a, {
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary"
    }, "Open")
  }))))), /*#__PURE__*/React.createElement(Card, {
    title: "Owned resources",
    dense: true
  }, /*#__PURE__*/React.createElement("dl", {
    className: "kv",
    style: {
      margin: 0,
      gridTemplateColumns: "120px 1fr"
    }
  }, /*#__PURE__*/React.createElement("dt", null, "CA fingerprint"), /*#__PURE__*/React.createElement("dd", null, "SHA-256 e0b2 4c19 \u2026 8f7a"), /*#__PURE__*/React.createElement("dt", null, "Trust method"), /*#__PURE__*/React.createElement("dd", null, "Process scoped (normal)"), /*#__PURE__*/React.createElement("dt", null, "Trust store"), /*#__PURE__*/React.createElement("dd", null, "Ownership conflict"), /*#__PURE__*/React.createElement("dt", null, "Overlays"), /*#__PURE__*/React.createElement("dd", null, "1 \xB7 Codex base-URL block"), /*#__PURE__*/React.createElement("dt", null, "System proxy"), /*#__PURE__*/React.createElement("dd", null, "Not owned \xB7 unchanged"), /*#__PURE__*/React.createElement("dt", null, "Hosts file"), /*#__PURE__*/React.createElement("dd", null, "Not owned \xB7 unchanged"))))));
}
function Placeholder({
  title,
  desc,
  icon
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    title: title,
    desc: desc
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(EmptyState, {
    icon: icon,
    title: `${title} is not built in this kit`,
    description: "This destination exists in the product brief; its screen is intentionally left blank in the UI kit."
  })));
}
Object.assign(window, {
  Providers,
  Diagnostics,
  Placeholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rflectr-desktop/Providers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rflectr-desktop/Shell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.rflectrDesignSystem_c36c9e;
const {
  Icon,
  Button,
  IconButton,
  Badge,
  Tooltip,
  NavItem,
  StatusDot,
  ActionItem
} = DS;
const NAV = [["overview", "Overview", "activity"], ["harnesses", "Harnesses", "boxes"], ["policies", "Routing Policies", "route"], ["providers", "Providers & Accounts", "layers"], ["usage", "Usage & Spend", "wallet"], ["observability", "Observability", "scroll"], ["compat", "Compatibility", "grid"], ["diagnostics", "Diagnostics & Recovery", "stethoscope"], ["settings", "Settings", "settings"]];
const shellCss = `
.shell{display:grid;grid-template-columns:var(--sidebar-w) 1fr;height:100vh;background:var(--surface-app);color:var(--text-primary);overflow:hidden}
.side{background:var(--surface-sidebar);border-right:1px solid var(--border-hairline);display:flex;flex-direction:column;padding:0 8px 12px 12px}
.side__brand{height:var(--topbar-h);display:flex;align-items:center;padding:0 4px;-webkit-app-region:drag}
.side__nav{display:flex;flex-direction:column;gap:2px;margin-top:8px}
.side__foot{margin-top:auto;display:flex;flex-direction:column;gap:10px;padding:12px 6px 0;border-top:1px solid var(--border-hairline);font:var(--type-caption);color:var(--text-tertiary)}
.main{display:flex;flex-direction:column;min-width:0;overflow:hidden}
.top{height:var(--topbar-h);display:flex;align-items:center;gap:10px;padding:0 20px;border-bottom:1px solid var(--border-hairline);-webkit-app-region:drag}
.top h1{font:var(--type-heading);margin:0;letter-spacing:var(--ls-tight)}
.top__sum{display:flex;gap:14px;margin-left:16px;padding-left:16px;border-left:1px solid var(--border-hairline)}
.top__right{margin-left:auto;display:flex;align-items:center;gap:6px;font:var(--type-caption);color:var(--text-tertiary)}
.content{flex:1;overflow:auto;padding:20px 24px 32px;animation:rflectr-rise var(--dur-enter) var(--ease-out)}
.page-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:16px}
.page-head h2{font:var(--type-title);letter-spacing:var(--ls-tight);margin:0}
.page-head p{font:var(--type-caption);color:var(--text-secondary);margin:4px 0 0}
.grid{display:grid;gap:12px}
.stack{display:flex;flex-direction:column;gap:12px}
.kv{display:grid;grid-template-columns:140px 1fr;gap:6px 12px;font:var(--type-caption)}
.kv dt{color:var(--text-tertiary)}.kv dd{margin:0;color:var(--text-primary);font-family:var(--font-mono);font-size:var(--fs-sm)}
.pop{position:absolute;top:44px;right:16px;width:420px;background:var(--surface-raised);border:1px solid var(--border-subtle);border-radius:var(--r-lg);box-shadow:var(--shadow-popover);padding:10px;display:flex;flex-direction:column;gap:8px;z-index:60;animation:rflectr-rise var(--dur-base) var(--ease-out)}
.pop h3{margin:0 0 2px 4px;font:var(--type-eyebrow);letter-spacing:var(--ls-caps);text-transform:uppercase;color:var(--text-tertiary)}
.drawer{position:absolute;top:0;right:0;bottom:0;width:520px;background:var(--surface-panel);border-left:1px solid var(--border-subtle);box-shadow:var(--shadow-dialog);display:flex;flex-direction:column;z-index:70;animation:drawerIn var(--dur-enter) var(--ease-out)}
@keyframes drawerIn{from{transform:translateX(24px);opacity:0}to{transform:none;opacity:1}}
.drawer__head{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid var(--border-hairline)}
.drawer__body{flex:1;overflow:auto;padding:16px;display:flex;flex-direction:column;gap:14px}
.sec{display:flex;flex-direction:column;gap:8px}
.sec h4{margin:0;font:var(--type-eyebrow);letter-spacing:var(--ls-caps);text-transform:uppercase;color:var(--text-tertiary)}
.deg{display:flex;gap:10px;align-items:center;padding:8px 20px;background:var(--fill-warn-soft);border-bottom:1px solid rgba(245,184,75,.3);font:var(--type-caption);color:var(--text-warn)}
`;
function Shell({
  page,
  setPage,
  children,
  daemon,
  setDaemon,
  actions,
  onAllOff,
  activeCount
}) {
  const [showActions, setShowActions] = React.useState(false);
  const routing = window.RFLECTR_DATA.harnesses.filter(h => h.state === "Routing").length;
  const observing = window.RFLECTR_DATA.harnesses.filter(h => h.state === "Observing").length;
  const off = window.RFLECTR_DATA.harnesses.filter(h => h.state === "Off").length;
  const title = NAV.find(n => n[0] === page)?.[1] || "";
  return /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("style", null, shellCss), /*#__PURE__*/React.createElement("aside", {
    className: "side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "side__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/lockup/rflectr-lockup-horizontal-on-dark.svg",
    alt: "rflectr",
    style: {
      height: 24
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "side__nav",
    "aria-label": "Primary"
  }, NAV.map(([id, label, icon]) => /*#__PURE__*/React.createElement(NavItem, {
    key: id,
    icon: icon,
    label: label,
    active: page === id,
    onClick: () => setPage(id),
    count: id === "diagnostics" && actions.length ? actions.length : id === "harnesses" ? 5 : undefined,
    alert: id === "diagnostics"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "side__foot"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDaemon(daemon === "Healthy" ? "Degraded" : "Healthy"),
    title: "Toggle daemon state (prototype)",
    style: {
      all: "unset",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    state: daemon,
    label: `Daemon ${daemon.toLowerCase()}`,
    live: daemon === "Healthy"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "v0.9.2 \xB7 daemon 0.9.2"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-route)"
    }
  }, "Up to date")))), /*#__PURE__*/React.createElement("div", {
    className: "main",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("header", {
    className: "top"
  }, /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("div", {
    className: "top__sum",
    "aria-label": "Global routing summary"
  }, /*#__PURE__*/React.createElement(StatusDot, {
    state: "Routing",
    label: `${routing} routing`,
    live: routing > 0
  }), /*#__PURE__*/React.createElement(StatusDot, {
    state: "Observing",
    label: `${observing} observing`
  }), /*#__PURE__*/React.createElement(StatusDot, {
    state: "Off",
    label: `${off} off`
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "route",
    dot: true,
    live: activeCount > 0,
    size: "sm"
  }, activeCount, " active requests")), /*#__PURE__*/React.createElement("div", {
    className: "top__right"
  }, /*#__PURE__*/React.createElement("span", null, "Refreshed 4 s ago"), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Refresh snapshot"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "refresh",
    label: "Refresh",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Action center"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: `Action center, ${actions.length} unresolved`,
    size: "sm",
    active: showActions,
    onClick: () => setShowActions(s => !s)
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "danger",
    icon: "power",
    onClick: onAllOff
  }, "All Off"))), daemon !== "Healthy" && /*#__PURE__*/React.createElement("div", {
    className: "deg",
    role: "alert"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alertTriangle",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Control-plane connection lost."), " Showing last safe snapshot (age 41 s). Actions that require the daemon are disabled."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    style: {
      marginLeft: "auto"
    },
    onClick: () => setPage("diagnostics")
  }, "Open diagnostics")), showActions && /*#__PURE__*/React.createElement("div", {
    className: "pop",
    role: "dialog",
    "aria-label": "Action center"
  }, /*#__PURE__*/React.createElement("h3", null, "Unresolved \xB7 ", actions.length), actions.map((a, i) => /*#__PURE__*/React.createElement(ActionItem, _extends({
    key: i
  }, a, {
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconRight: "chevronRight",
      onClick: () => {
        setShowActions(false);
        setPage(a.severity === "blocking" ? "harnesses" : "diagnostics");
      }
    }, "Open")
  })))), /*#__PURE__*/React.createElement("main", {
    className: "content",
    key: page
  }, children)));
}
function PageHead({
  title,
  desc,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, title), desc && /*#__PURE__*/React.createElement("p", null, desc)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, actions));
}
function Section({
  title,
  children,
  aside
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h4", null, title), aside), children);
}
Object.assign(window, {
  Shell,
  PageHead,
  Section,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rflectr-desktop/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rflectr-desktop/data.js
try { (() => {
window.RFLECTR_DATA = {
  harnesses: [{
    id: "claude-code",
    name: "Claude Code",
    surface: "CLI",
    version: "2.1.259",
    digest: "sha256:4f1c…a9e0",
    mode: "Route",
    state: "Routing",
    policy: "Default · rev 14",
    provider: "Anthropic · Work",
    model: "claude-sonnet-4",
    compat: "Supported",
    evidence: "Verified",
    evidenceAge: "3 d",
    processes: 2,
    active: 2,
    last: "12 s ago",
    lastOutcome: "Succeeded",
    adapter: "claude-code/1.4.0",
    trust: "Process scoped",
    launch: "rflectr launch · L-0419",
    warnings: []
  }, {
    id: "codex",
    name: "Codex CLI",
    surface: "CLI",
    version: "0.153.1",
    digest: "sha256:91be…77c2",
    mode: "Observe",
    state: "Observing",
    policy: "—",
    provider: "Native (OpenAI)",
    model: "gpt-5",
    compat: "Supported",
    evidence: "Partial",
    evidenceAge: "9 d",
    processes: 1,
    active: 0,
    last: "4 min ago",
    lastOutcome: "Native passthrough",
    adapter: "codex/1.2.1",
    trust: "Process scoped",
    launch: "rflectr launch · L-0417",
    warnings: ["Restart required to apply CA"]
  }, {
    id: "cursor",
    name: "Cursor",
    surface: "Desktop",
    version: "3.18.25",
    digest: "sha256:0e7a…d1f3",
    mode: "Observe",
    state: "Observing",
    policy: "Economy · rev 3",
    provider: "OpenRouter · Personal",
    model: "balanced",
    compat: "Inconclusive",
    evidence: "Blocked",
    evidenceAge: "21 d",
    processes: 6,
    active: 0,
    last: "1 h ago",
    lastOutcome: "Observed",
    adapter: "cursor/0.9.4",
    trust: "Action required",
    launch: "rflectr launch · L-0402",
    warnings: ["Client rejected CA installed after start", "Route unavailable: compatibility inconclusive"]
  }, {
    id: "zcode",
    name: "ZCode",
    surface: "Desktop",
    version: "1.7.0",
    digest: "sha256:ba32…6e04",
    mode: "Off",
    state: "Off",
    policy: "—",
    provider: "—",
    model: "—",
    compat: "Not tested",
    evidence: "Open",
    evidenceAge: "—",
    processes: 0,
    active: 0,
    last: "—",
    lastOutcome: "—",
    adapter: "zcode/0.3.0",
    trust: "Process scoped",
    launch: "Not launched",
    warnings: []
  }, {
    id: "claude-desktop",
    name: "Claude Desktop",
    surface: "Desktop",
    version: "1.2.8",
    digest: "sha256:5c90…3ab7",
    mode: "Off",
    state: "Off",
    policy: "—",
    provider: "—",
    model: "—",
    compat: "Unsupported",
    evidence: "External",
    evidenceAge: "14 d",
    processes: 3,
    active: 0,
    last: "—",
    lastOutcome: "—",
    adapter: "claude-desktop/0.2.0",
    trust: "Process scoped",
    launch: "Running outside rflectr",
    warnings: ["Running outside rflectr — quit and relaunch to observe"]
  }],
  windows: [{
    name: "5-hour window",
    account: "Anthropic · Work",
    used: 312,
    limit: 500,
    unit: "requests",
    reset: {
      label: "in 2h 14m",
      iso: "2026-09-03T19:00:00Z"
    },
    source: "Provider API",
    confidence: "High"
  }, {
    name: "Weekly allocation",
    account: "Anthropic · Work",
    used: 71,
    limit: 100,
    unit: "%",
    reset: {
      label: "Mon 04:00",
      iso: "2026-09-07T04:00:00Z"
    },
    source: "Provider API",
    confidence: "High"
  }, {
    name: "Monthly budget",
    account: "OpenRouter · Personal",
    used: 18.4,
    limit: 25,
    unit: "USD",
    reset: {
      label: "Oct 1",
      iso: "2026-10-01T00:00:00Z"
    },
    source: "Response metadata",
    confidence: "Medium",
    stale: true
  }, {
    name: "Usage",
    account: "Local · Ollama",
    source: "Locally observed"
  }],
  requests: [{
    id: "req_01J8ZKQ9F2",
    time: "15:53:02",
    harness: "Claude Code",
    version: "2.1.259",
    cls: "Inference eligible",
    mode: "Routed",
    provider: "Anthropic · Work",
    model: "claude-sonnet-4",
    policy: "rev 14 · R-02",
    attempts: 1,
    outcome: "Succeeded",
    ttft: 412,
    total: 4184,
    tokens: {
      in: 3820,
      out: 614,
      cached: 1200,
      src: "Provider reported"
    },
    cost: {
      reported: "$0.0142",
      est: "$0.0139"
    }
  }, {
    id: "req_01J8ZKP7X1",
    time: "15:52:48",
    harness: "Claude Code",
    version: "2.1.259",
    cls: "Inference eligible",
    mode: "Routed",
    provider: "Anthropic · Work",
    model: "claude-sonnet-4",
    policy: "rev 14 · R-02",
    attempts: 2,
    outcome: "Fallback completed",
    ttft: 1290,
    total: 6902,
    tokens: {
      in: 8702,
      out: 1442,
      cached: 0,
      src: "Provider reported"
    },
    cost: {
      reported: "$0.0571",
      est: "$0.0568"
    }
  }, {
    id: "req_01J8ZKN3M8",
    time: "15:46:11",
    harness: "Codex CLI",
    version: "0.153.1",
    cls: "Inference eligible",
    mode: "Observed",
    provider: "Native · OpenAI",
    model: "gpt-5",
    policy: "—",
    attempts: 1,
    outcome: "Succeeded",
    ttft: 689,
    total: 2431,
    tokens: {
      in: 10144,
      out: 0,
      cached: 0,
      src: "Tokenizer estimated"
    },
    cost: {
      reported: "—",
      est: "~$0.0203"
    }
  }, {
    id: "req_01J8ZKL1B4",
    time: "15:39:40",
    harness: "Cursor",
    version: "3.18.25",
    cls: "Telemetry",
    mode: "Native passthrough",
    provider: "Native · Cursor",
    model: "—",
    policy: "—",
    attempts: 1,
    outcome: "Succeeded",
    ttft: null,
    total: 188,
    tokens: null,
    cost: null
  }, {
    id: "req_01J8ZKJ0Q2",
    time: "15:32:07",
    harness: "Cursor",
    version: "3.18.25",
    cls: "Inference eligible",
    mode: "Observed",
    provider: "Native · Cursor",
    model: "auto",
    policy: "—",
    attempts: 1,
    outcome: "Cancelled",
    ttft: 867,
    total: 1992,
    tokens: {
      in: 1992,
      out: 328,
      cached: 0,
      src: "Tokenizer estimated"
    },
    cost: null
  }, {
    id: "req_01J8ZKH9Z7",
    time: "15:25:19",
    harness: "Claude Code",
    version: "2.1.259",
    cls: "Inference eligible",
    mode: "Routed",
    provider: "Anthropic · Work",
    model: "claude-sonnet-4",
    policy: "rev 14 · R-02",
    attempts: 1,
    outcome: "Failed",
    ttft: null,
    total: 4901,
    tokens: null,
    cost: null
  }, {
    id: "req_01J8ZKG5V0",
    time: "15:18:55",
    harness: "Claude Code",
    version: "2.1.259",
    cls: "Auth",
    mode: "Native passthrough",
    provider: "Native · Anthropic",
    model: "—",
    policy: "—",
    attempts: 1,
    outcome: "Succeeded",
    ttft: null,
    total: 212,
    tokens: null,
    cost: null
  }, {
    id: "req_01J8ZKF2T6",
    time: "15:11:30",
    harness: "Codex CLI",
    version: "0.153.1",
    cls: "Model catalog",
    mode: "Native passthrough",
    provider: "Native · OpenAI",
    model: "—",
    policy: "—",
    attempts: 1,
    outcome: "Succeeded",
    ttft: null,
    total: 301,
    tokens: null,
    cost: null
  }],
  actions: [{
    severity: "blocking",
    title: "Compatibility evidence inconclusive",
    source: "Cursor 3.18.25",
    reason: "COMPAT_INCONCLUSIVE",
    effect: "Route unavailable · Observe intent preserved",
    time: "21 d",
    count: 1
  }, {
    severity: "warning",
    title: "Restart required to apply process-scoped CA",
    source: "Codex CLI 0.153.1",
    reason: "TRUST_RESTART",
    effect: "Observe continues · Route blocked until relaunch",
    time: "12 min",
    count: 1
  }, {
    severity: "warning",
    title: "Usage window stale",
    source: "OpenRouter · Personal",
    reason: "WINDOW_STALE",
    effect: "Guard evaluates on last known value",
    time: "48 min",
    count: 4
  }],
  providers: [{
    name: "Anthropic",
    cls: "BYOK/API",
    accounts: 1,
    models: 6,
    health: "Verified",
    windows: 2,
    pricing: "Rate card rev 3",
    auth: "Authorized"
  }, {
    name: "OpenAI",
    cls: "BYOK/API",
    accounts: 1,
    models: 9,
    health: "Verified",
    windows: 1,
    pricing: "Rate card rev 5",
    auth: "Authorized"
  }, {
    name: "OpenRouter",
    cls: "BYOK/API",
    accounts: 1,
    models: 214,
    health: "Verified",
    windows: 1,
    pricing: "Response metadata",
    auth: "Authorized"
  }, {
    name: "Ollama (local)",
    cls: "Local/self-hosted",
    accounts: 1,
    models: 4,
    health: "Verified",
    windows: 0,
    pricing: "User entered",
    auth: "—"
  }, {
    name: "Claude subscription bridge",
    cls: "Authorized subscription bridge",
    accounts: 0,
    models: 0,
    health: "Not configured",
    windows: 0,
    pricing: "Subscription fee",
    auth: "Authorization required"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rflectr-desktop/data.js", error: String((e && e.message) || e) }); }

__ds_ns.STATE_TONE = __ds_scope.STATE_TONE;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ICON_PATHS = __ds_scope.ICON_PATHS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.RouteLine = __ds_scope.RouteLine;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.UsageWindow = __ds_scope.UsageWindow;

__ds_ns.ActionItem = __ds_scope.ActionItem;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ModeSegment = __ds_scope.ModeSegment;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.StatusDot = __ds_scope.StatusDot;

})();
