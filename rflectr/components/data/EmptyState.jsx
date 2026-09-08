import React from "react"
import { Icon } from "../core/Icon.jsx"

const EmptyState_CSS = `
.sk-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:8px;padding:40px 24px;color:var(--text-secondary);animation:rflectr-fade var(--dur-enter) var(--ease-out)}
.sk-empty__icon{width:36px;height:36px;border-radius:var(--r-md);display:grid;place-items:center;background:var(--fill-neutral-soft);color:var(--text-tertiary);border:1px solid var(--border-hairline)}
.sk-empty__title{font:var(--type-body-strong);color:var(--text-primary)}.sk-empty__desc{font:var(--type-caption);max-width:360px;text-wrap:pretty}
.sk-empty__actions{display:flex;gap:8px;margin-top:6px}
.sk-empty--error .sk-empty__icon{color:var(--text-danger);background:var(--fill-danger-soft)}
.sk-empty--stale .sk-empty__icon{color:var(--text-warn);background:var(--fill-warn-soft)}
`
let EmptyState_done = false
function EmptyState_inject() {
  if (EmptyState_done || typeof document === "undefined") return
  EmptyState_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "EmptyState")
  s.textContent = EmptyState_CSS
  document.head.appendChild(s)
}
export function EmptyState({ icon = "layers", title, description, actions, tone, className = "", ...rest }) {
  EmptyState_inject()
  return React.createElement(
    "div",
    {
      className: `sk-empty ${tone ? `sk-empty--${tone}` : ""} ${className}`,
      role: tone === "error" ? "alert" : undefined,
      ...rest,
    },
    React.createElement("div", { className: "sk-empty__icon" }, React.createElement(Icon, { name: icon, size: 18 })),
    React.createElement("div", { className: "sk-empty__title" }, title),
    description ? React.createElement("div", { className: "sk-empty__desc" }, description) : null,
    actions ? React.createElement("div", { className: "sk-empty__actions" }, actions) : null,
  )
}
