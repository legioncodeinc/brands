import React from "react"

const StatusDot_CSS = `
.sk-dot{display:inline-flex;align-items:center;gap:7px;font:var(--type-caption);color:var(--text-secondary);white-space:nowrap}
.sk-dot i{width:8px;height:8px;border-radius:50%;background:var(--state-off);flex:none;position:relative}
.sk-dot--Observing i,.sk-dot--Observe i{background:var(--state-observe)}.sk-dot--Routing i,.sk-dot--Route i{background:var(--state-route)}.sk-dot--Draining i{background:var(--state-draining)}.sk-dot--Failed i,.sk-dot--Offline i{background:var(--state-failed)}.sk-dot--Starting i,.sk-dot--Ready i{background:var(--state-starting)}
.sk-dot--Degraded i{background:var(--warn-9)}.sk-dot--Healthy i{background:var(--n-10)}
.sk-dot--live i::after{content:"";position:absolute;inset:-1px;border-radius:50%;box-shadow:0 0 0 0 currentColor;animation:rflectr-ring 1.6s var(--ease-out) infinite;color:inherit}
.sk-dot--Routing.sk-dot--live i::after{color:var(--state-route)}.sk-dot--Observing.sk-dot--live i::after{color:var(--state-observe)}.sk-dot--Draining i{animation:rflectr-pulse 1.2s var(--ease-in-out) infinite}
.sk-dot--Starting i{animation:rflectr-pulse 1s var(--ease-in-out) infinite}
`
let StatusDot_done = false
function StatusDot_inject() {
  if (StatusDot_done || typeof document === "undefined") return
  StatusDot_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "StatusDot")
  s.textContent = StatusDot_CSS
  document.head.appendChild(s)
}
export function StatusDot({ state = "Off", live = false, label, className = "", ...rest }) {
  StatusDot_inject()
  return React.createElement(
    "span",
    { className: `sk-dot sk-dot--${state} ${live ? "sk-dot--live" : ""} ${className}`, ...rest },
    React.createElement("i", { "aria-hidden": true }),
    label === undefined ? state : label,
  )
}
