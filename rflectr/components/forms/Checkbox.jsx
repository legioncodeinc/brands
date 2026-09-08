import React from "react"
import { Icon } from "../core/Icon.jsx"

const Checkbox_CSS = `
.sk-check{display:inline-flex;align-items:flex-start;gap:8px;cursor:pointer;font:var(--type-body);color:var(--text-primary)}
.sk-check input{position:absolute;opacity:0;width:0;height:0}
.sk-check__box{width:16px;height:16px;margin-top:2px;border-radius:var(--r-xs);border:1px solid var(--border-strong);background:var(--surface-input);display:inline-flex;align-items:center;justify-content:center;color:var(--n-1);flex:none;transition:background var(--dur-fast) var(--ease-out),border-color var(--dur-fast)}
.sk-check__box svg{opacity:0;transform:scale(.6);transition:transform var(--dur-fast) var(--ease-spring),opacity var(--dur-fast)}
.sk-check input:checked+.sk-check__box{background:var(--n-12);border-color:var(--n-12)}.sk-check input:checked+.sk-check__box svg{opacity:1;transform:none}
.sk-check input:focus-visible+.sk-check__box{box-shadow:var(--shadow-focus)}
.sk-check--disabled{opacity:.45;cursor:not-allowed}
`
let Checkbox_done = false
function Checkbox_inject() {
  if (Checkbox_done || typeof document === "undefined") return
  Checkbox_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "Checkbox")
  s.textContent = Checkbox_CSS
  document.head.appendChild(s)
}
export function Checkbox({ label, disabled, className = "", ...rest }) {
  Checkbox_inject()
  return React.createElement(
    "label",
    { className: `sk-check ${disabled ? "sk-check--disabled" : ""} ${className}` },
    React.createElement("input", { type: "checkbox", disabled, ...rest }),
    React.createElement(
      "span",
      { className: "sk-check__box", "aria-hidden": true },
      React.createElement(Icon, { name: "check", size: 12, strokeWidth: 2.5 }),
    ),
    label ? React.createElement("span", null, label) : null,
  )
}
