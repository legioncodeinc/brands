import React from "react"

const Switch_CSS = `
.sk-switch{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font:var(--type-body);color:var(--text-primary);user-select:none}
.sk-switch input{position:absolute;opacity:0;width:0;height:0}
.sk-switch__track{width:32px;height:18px;border-radius:var(--r-pill);background:var(--n-6);position:relative;transition:background var(--dur-base) var(--ease-out);flex:none}
.sk-switch__track::after{content:"";position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:var(--n-12);transition:transform var(--dur-base) var(--ease-spring)}
.sk-switch input:checked+.sk-switch__track{background:var(--route-9)}.sk-switch input:checked+.sk-switch__track::after{transform:translateX(14px);background:var(--n-1)}
.sk-switch--neutral input:checked+.sk-switch__track{background:var(--n-12)}
.sk-switch input:focus-visible+.sk-switch__track{box-shadow:var(--shadow-focus)}
.sk-switch--disabled{opacity:.45;cursor:not-allowed}
.sk-switch__desc{display:block;font:var(--type-caption);color:var(--text-tertiary)}
`
let Switch_done = false
function Switch_inject() {
  if (Switch_done || typeof document === "undefined") return
  Switch_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "Switch")
  s.textContent = Switch_CSS
  document.head.appendChild(s)
}
export function Switch({ label, description, tone = "route", disabled, className = "", ...rest }) {
  Switch_inject()
  return React.createElement(
    "label",
    { className: `sk-switch sk-switch--${tone} ${disabled ? "sk-switch--disabled" : ""} ${className}` },
    React.createElement("input", { type: "checkbox", role: "switch", disabled, ...rest }),
    React.createElement("span", { className: "sk-switch__track", "aria-hidden": true }),
    label
      ? React.createElement(
          "span",
          null,
          label,
          description ? React.createElement("span", { className: "sk-switch__desc" }, description) : null,
        )
      : null,
  )
}
