import React from "react"
import { Icon } from "../core/Icon.jsx"

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
`
let ModeSegment_done = false
function ModeSegment_inject() {
  if (ModeSegment_done || typeof document === "undefined") return
  ModeSegment_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "ModeSegment")
  s.textContent = ModeSegment_CSS
  document.head.appendChild(s)
}
const MODES = [
  ["Off", "power"],
  ["Observe", "eye"],
  ["Route", "route"],
]
export function ModeSegment({
  value = "Off",
  onChange,
  routeDisabled = false,
  routeDisabledReason,
  size = "md",
  className = "",
  ...rest
}) {
  ModeSegment_inject()
  return React.createElement(
    "div",
    {
      role: "radiogroup",
      "aria-label": "Harness mode",
      className: `sk-mode sk-mode--${size} ${className}`,
      "data-value": value,
      ...rest,
    },
    React.createElement("span", { className: "sk-mode__thumb", "aria-hidden": true }),
    MODES.map(([m, ic]) =>
      React.createElement(
        "button",
        {
          key: m,
          type: "button",
          role: "radio",
          "aria-checked": value === m,
          disabled: m === "Route" && routeDisabled,
          title: m === "Route" && routeDisabled ? routeDisabledReason : undefined,
          onClick: () => onChange?.(m),
        },
        React.createElement(Icon, { name: ic, size: 13 }),
        m,
      ),
    ),
  )
}
