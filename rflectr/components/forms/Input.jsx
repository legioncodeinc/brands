import React from "react"
import { Icon } from "../core/Icon.jsx"

const Input_CSS = `
.sk-field{display:flex;flex-direction:column;gap:6px;font:var(--type-caption);color:var(--text-secondary)}
.sk-field__label{font:var(--type-caption);font-weight:var(--fw-medium);color:var(--text-secondary)}
.sk-input{display:flex;align-items:center;gap:8px;height:var(--control-h-md);padding:0 10px;background:var(--surface-input);border:1px solid var(--border-subtle);border-radius:var(--r-sm);color:var(--text-primary);transition:border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out)}
.sk-input:hover{border-color:var(--border-strong)}.sk-input:focus-within{border-color:var(--border-focus);box-shadow:var(--shadow-route-glow)}
.sk-input--invalid{border-color:var(--danger-7)}.sk-input--invalid:focus-within{box-shadow:0 0 0 3px var(--fill-danger-soft)}
.sk-input input{flex:1;min-width:0;background:none;border:0;outline:0;color:inherit;font:var(--type-body);height:100%}
.sk-input input::placeholder{color:var(--text-tertiary)}
.sk-input--mono input{font:var(--type-data);font-size:var(--fs-md)}
.sk-input svg{color:var(--text-tertiary)}
.sk-input[aria-disabled="true"]{opacity:.5}
.sk-field__hint{font:var(--type-code);color:var(--text-tertiary)}.sk-field__hint--err{color:var(--text-danger)}
`
let Input_done = false
function Input_inject() {
  if (Input_done || typeof document === "undefined") return
  Input_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "Input")
  s.textContent = Input_CSS
  document.head.appendChild(s)
}
export function Input({
  label,
  hint,
  error,
  icon,
  mono = false,
  secret = false,
  disabled,
  style,
  className = "",
  ...rest
}) {
  Input_inject()
  const box = React.createElement(
    "div",
    {
      className: `sk-input ${error ? "sk-input--invalid" : ""} ${mono ? "sk-input--mono" : ""}`,
      "aria-disabled": disabled || undefined,
    },
    icon ? React.createElement(Icon, { name: icon, size: 14 }) : null,
    React.createElement("input", {
      type: secret ? "password" : "text",
      disabled,
      autoComplete: secret ? "off" : undefined,
      ...rest,
    }),
    secret ? React.createElement(Icon, { name: "lock", size: 14, title: "One-way secret entry" }) : null,
  )
  if (!label && !hint && !error)
    return React.cloneElement(box, { style, className: `${box.props.className} ${className}` })
  return React.createElement(
    "label",
    { className: `sk-field ${className}`, style },
    label ? React.createElement("span", { className: "sk-field__label" }, label) : null,
    box,
    error || hint
      ? React.createElement(
          "span",
          { className: `sk-field__hint ${error ? "sk-field__hint--err" : ""}` },
          error || hint,
        )
      : null,
  )
}
