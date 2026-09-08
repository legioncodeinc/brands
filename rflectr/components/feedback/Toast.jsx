import React from "react"
import { Icon } from "../core/Icon.jsx"

const Toast_CSS = `
.sk-toast{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;min-width:280px;max-width:420px;background:var(--surface-raised);border:1px solid var(--border-subtle);border-radius:var(--r-md);box-shadow:var(--shadow-popover);font:var(--type-caption);color:var(--text-primary);animation:rflectr-rise var(--dur-enter) var(--ease-out)}
.sk-toast svg{margin-top:1px;flex:none}
.sk-toast--success svg{color:var(--text-primary)}.sk-toast--info svg{color:var(--text-observe)}.sk-toast--warn svg{color:var(--text-warn)}.sk-toast--error svg{color:var(--text-danger)}
.sk-toast__body{flex:1;min-width:0}.sk-toast__title{font-weight:var(--fw-medium)}.sk-toast__desc{color:var(--text-secondary);margin-top:2px}
.sk-toast__action{appearance:none;background:none;border:0;color:var(--text-primary);font:inherit;font-weight:var(--fw-medium);cursor:pointer;text-decoration:underline;text-underline-offset:2px;padding:0}
`
let Toast_done = false
function Toast_inject() {
  if (Toast_done || typeof document === "undefined") return
  Toast_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "Toast")
  s.textContent = Toast_CSS
  document.head.appendChild(s)
}
const ICONS = { success: "check", info: "info", warn: "alertTriangle", error: "alertCircle" }
export function Toast({ tone = "success", title, description, action, onAction, className = "", ...rest }) {
  Toast_inject()
  return React.createElement(
    "div",
    { role: "status", className: `sk-toast sk-toast--${tone} ${className}`, ...rest },
    React.createElement(Icon, { name: ICONS[tone], size: 16 }),
    React.createElement(
      "div",
      { className: "sk-toast__body" },
      React.createElement("div", { className: "sk-toast__title" }, title),
      description ? React.createElement("div", { className: "sk-toast__desc" }, description) : null,
    ),
    action
      ? React.createElement("button", { className: "sk-toast__action", type: "button", onClick: onAction }, action)
      : null,
  )
}
