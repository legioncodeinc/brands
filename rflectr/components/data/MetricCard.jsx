import React from "react"

const MetricCard_CSS = `
.sk-metric{background:var(--surface-card);border:1px solid var(--border-hairline);border-radius:var(--r-lg);padding:14px 16px;display:flex;flex-direction:column;gap:6px;min-width:0;animation:rflectr-rise var(--dur-enter) var(--ease-out) both}
.sk-metric__label{font:var(--type-eyebrow);letter-spacing:var(--ls-caps);text-transform:uppercase;color:var(--text-tertiary);display:flex;justify-content:space-between;gap:8px}
.sk-metric__value{font:var(--type-metric);color:var(--text-primary);letter-spacing:var(--ls-tight);display:flex;align-items:baseline;gap:4px;font-variant-numeric:tabular-nums}
.sk-metric__value small{font:var(--type-data);color:var(--text-tertiary)}
.sk-metric__est{color:var(--text-tertiary);font-weight:400}
.sk-metric__meta{font:var(--type-caption);color:var(--text-secondary);display:flex;gap:6px;align-items:center;flex-wrap:wrap}
.sk-metric__src{font:var(--type-code);color:var(--text-tertiary);padding:1px 5px;border:1px solid var(--border-hairline);border-radius:var(--r-xs)}
.sk-metric--route .sk-metric__value{color:var(--text-route)}
`
let MetricCard_done = false
function MetricCard_inject() {
  if (MetricCard_done || typeof document === "undefined") return
  MetricCard_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "MetricCard")
  s.textContent = MetricCard_CSS
  document.head.appendChild(s)
}
export function MetricCard({ label, value, unit, estimated = false, source, meta, tone, className = "", ...rest }) {
  MetricCard_inject()
  return React.createElement(
    "div",
    { className: `sk-metric ${tone ? `sk-metric--${tone}` : ""} ${className}`, ...rest },
    React.createElement(
      "div",
      { className: "sk-metric__label" },
      React.createElement("span", null, label),
      source ? React.createElement("span", { className: "sk-metric__src" }, source) : null,
    ),
    React.createElement(
      "div",
      { className: "sk-metric__value" },
      estimated ? React.createElement("span", { className: "sk-metric__est", "aria-label": "estimated" }, "~") : null,
      value,
      unit ? React.createElement("small", null, unit) : null,
    ),
    meta ? React.createElement("div", { className: "sk-metric__meta" }, meta) : null,
  )
}
