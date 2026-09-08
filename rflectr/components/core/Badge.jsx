import React from "react"

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
`
let Badge_done = false
function Badge_inject() {
  if (Badge_done || typeof document === "undefined") return
  Badge_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "Badge")
  s.textContent = Badge_CSS
  document.head.appendChild(s)
}
export const STATE_TONE = {
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
  Active: "route",
}
export function Badge({
  tone,
  dot = false,
  live = false,
  mono = false,
  size = "md",
  children,
  className = "",
  ...rest
}) {
  Badge_inject()
  const t = tone || STATE_TONE[typeof children === "string" ? children : ""] || "neutral"
  return React.createElement(
    "span",
    {
      className: `sk-badge sk-badge--${t} sk-badge--${size} ${mono ? "sk-badge--mono" : ""} ${live ? "sk-badge--live" : ""} ${className}`,
      ...rest,
    },
    dot || live ? React.createElement("i", { "aria-hidden": true }) : null,
    children,
  )
}
