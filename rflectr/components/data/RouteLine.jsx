import React from "react"

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
`
let RouteLine_done = false
function RouteLine_inject() {
  if (RouteLine_done || typeof document === "undefined") return
  RouteLine_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "RouteLine")
  s.textContent = RouteLine_CSS
  document.head.appendChild(s)
}
export function RouteLine({ from, fromMeta, to, toMeta, state = "Off", className = "", ...rest }) {
  RouteLine_inject()
  const path = React.createElement(
    "svg",
    { className: "sk-rl__path", preserveAspectRatio: "none", viewBox: "0 0 100 12", "aria-hidden": true },
    React.createElement("line", { x1: 0, y1: 6, x2: 100, y2: 6, vectorEffect: "non-scaling-stroke" }),
  )
  return React.createElement(
    "div",
    {
      className: `sk-rl sk-rl--${state} ${className}`,
      "aria-label": `${from} → ${to || "native"} (${state})`,
      ...rest,
    },
    React.createElement(
      "span",
      { className: "sk-rl__node" },
      from,
      fromMeta ? React.createElement("small", null, fromMeta) : null,
    ),
    path,
    React.createElement(
      "span",
      { className: "sk-rl__node sk-rl__node--to" },
      to || "Native destination",
      toMeta ? React.createElement("small", null, toMeta) : null,
    ),
  )
}
