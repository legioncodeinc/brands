import React from "react"
import { Icon } from "../core/Icon.jsx"

const ActionItem_CSS = `
.sk-act{display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:start;padding:10px 12px;border:1px solid var(--border-hairline);border-radius:var(--r-md);background:var(--surface-card);font:var(--type-caption);color:var(--text-primary);transition:border-color var(--dur-fast)}
.sk-act:hover{border-color:var(--border-subtle)}
.sk-act__sev{width:24px;height:24px;border-radius:var(--r-sm);display:grid;place-items:center;flex:none}
.sk-act--blocking .sk-act__sev{background:var(--fill-danger-soft);color:var(--text-danger)}.sk-act--warning .sk-act__sev{background:var(--fill-warn-soft);color:var(--text-warn)}.sk-act--info .sk-act__sev{background:var(--fill-observe-soft);color:var(--text-observe)}
.sk-act__title{font-weight:var(--fw-medium)}.sk-act__meta{display:flex;flex-wrap:wrap;gap:4px 10px;color:var(--text-tertiary);font:var(--type-code);margin-top:3px}
.sk-act__effect{color:var(--text-secondary);margin-top:4px}
.sk-act__actions{display:flex;gap:6px;align-items:center}
.sk-act--Resolved{opacity:.55}
`
let ActionItem_done = false
function ActionItem_inject() {
  if (ActionItem_done || typeof document === "undefined") return
  ActionItem_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "ActionItem")
  s.textContent = ActionItem_CSS
  document.head.appendChild(s)
}
export function ActionItem({
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
  ActionItem_inject()
  return React.createElement(
    "div",
    { className: `sk-act sk-act--${severity} sk-act--${state} ${className}`, ...rest },
    React.createElement(
      "div",
      { className: "sk-act__sev" },
      React.createElement(Icon, {
        name: severity === "blocking" ? "alertCircle" : severity === "warning" ? "alertTriangle" : "info",
        size: 14,
      }),
    ),
    React.createElement(
      "div",
      null,
      React.createElement("div", { className: "sk-act__title" }, title),
      React.createElement(
        "div",
        { className: "sk-act__meta" },
        source ? React.createElement("span", null, source) : null,
        reason ? React.createElement("span", null, reason) : null,
        time ? React.createElement("span", null, time) : null,
        count > 1 ? React.createElement("span", null, "×", count) : null,
      ),
      effect ? React.createElement("div", { className: "sk-act__effect" }, effect) : null,
    ),
    actions ? React.createElement("div", { className: "sk-act__actions" }, actions) : null,
  )
}
