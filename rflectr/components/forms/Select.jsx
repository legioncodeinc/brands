import React from "react"
import { Icon } from "../core/Icon.jsx"

const Select_CSS = `
.sk-select{position:relative;display:inline-flex;align-items:center;height:var(--control-h-md);background:var(--surface-input);border:1px solid var(--border-subtle);border-radius:var(--r-sm);color:var(--text-primary);transition:border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast)}
.sk-select:hover{border-color:var(--border-strong)}.sk-select:focus-within{border-color:var(--border-focus);box-shadow:var(--shadow-route-glow)}
.sk-select select{appearance:none;background:none;border:0;outline:0;color:inherit;font:var(--type-body);height:100%;padding:0 28px 0 10px;cursor:pointer;width:100%}
.sk-select svg{position:absolute;right:8px;pointer-events:none;color:var(--text-tertiary)}
.sk-select--sm{height:var(--control-h-sm)}.sk-select--sm select{font-size:var(--fs-sm);padding:0 24px 0 8px}
.sk-select option{background:var(--surface-raised);color:var(--text-primary)}
.sk-selwrap{display:flex;flex-direction:column;gap:6px}.sk-selwrap__label{font:var(--type-caption);font-weight:var(--fw-medium);color:var(--text-secondary)}
`
let Select_done = false
function Select_inject() {
  if (Select_done || typeof document === "undefined") return
  Select_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "Select")
  s.textContent = Select_CSS
  document.head.appendChild(s)
}
export function Select({ label, options = [], size = "md", style, className = "", ...rest }) {
  Select_inject()
  const el = React.createElement(
    "span",
    { className: `sk-select sk-select--${size} ${label ? "" : className}`, style: label ? undefined : style },
    React.createElement(
      "select",
      rest,
      options.map((o) =>
        typeof o === "string"
          ? React.createElement("option", { key: o, value: o }, o)
          : React.createElement("option", { key: o.value, value: o.value, disabled: o.disabled }, o.label),
      ),
    ),
    React.createElement(Icon, { name: "chevronDown", size: 14 }),
  )
  return label
    ? React.createElement(
        "label",
        { className: `sk-selwrap ${className}`, style },
        React.createElement("span", { className: "sk-selwrap__label" }, label),
        el,
      )
    : el
}
