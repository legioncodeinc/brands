import React from "react"
import { Icon } from "./Icon.jsx"

const IconButton_CSS = `
.sk-ibtn{appearance:none;border:1px solid transparent;background:transparent;color:var(--text-secondary);border-radius:var(--r-sm);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:background var(--dur-fast) var(--ease-out),color var(--dur-fast),transform var(--dur-fast) var(--ease-out)}
.sk-ibtn--md{width:var(--control-h-md);height:var(--control-h-md)}.sk-ibtn--sm{width:var(--control-h-sm);height:var(--control-h-sm)}
.sk-ibtn:hover:not(:disabled){background:var(--surface-hover);color:var(--text-primary)}.sk-ibtn:active:not(:disabled){transform:scale(.94);background:var(--surface-active)}
.sk-ibtn--outline{border-color:var(--border-subtle);background:var(--surface-raised)}
.sk-ibtn:focus-visible{outline:none;box-shadow:var(--shadow-focus)}.sk-ibtn:disabled{opacity:.45;cursor:not-allowed}
.sk-ibtn[data-active="true"]{color:var(--text-route);background:var(--fill-route-soft)}
`
let IconButton_done = false
function IconButton_inject() {
  if (IconButton_done || typeof document === "undefined") return
  IconButton_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "IconButton")
  s.textContent = IconButton_CSS
  document.head.appendChild(s)
}
export function IconButton({ icon, label, size = "md", variant = "ghost", active, className = "", ...rest }) {
  IconButton_inject()
  return React.createElement(
    "button",
    {
      type: "button",
      className: `sk-ibtn sk-ibtn--${size} sk-ibtn--${variant} ${className}`,
      "aria-label": label,
      title: label,
      "data-active": active ? "true" : undefined,
      ...rest,
    },
    React.createElement(Icon, { name: icon, size: size === "sm" ? 14 : 16 }),
  )
}
