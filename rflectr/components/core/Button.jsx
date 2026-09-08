import React from "react"
import { Icon } from "./Icon.jsx"

const Button_CSS = `
.sk-btn{appearance:none;border:1px solid transparent;border-radius:var(--r-sm);font:var(--type-body-strong);letter-spacing:var(--ls-tight);display:inline-flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;white-space:nowrap;position:relative;transition:background var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out)}
.sk-btn:active:not(:disabled){transform:scale(.98)}
.sk-btn:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.sk-btn:disabled{opacity:.45;cursor:not-allowed}
.sk-btn--md{height:var(--control-h-md);padding:0 12px}.sk-btn--sm{height:var(--control-h-sm);padding:0 9px;font-size:var(--fs-sm)}.sk-btn--lg{height:var(--control-h-lg);padding:0 16px;font-size:var(--fs-lg)}
.sk-btn--primary{background:var(--btn-primary-bg);color:var(--btn-primary-fg)}.sk-btn--primary:hover:not(:disabled){background:var(--btn-primary-hover)}
.sk-btn--route{background:var(--btn-route-bg);color:var(--btn-route-fg)}.sk-btn--route:hover:not(:disabled){background:var(--btn-route-hover);box-shadow:var(--shadow-route-glow)}
.sk-btn--secondary{background:var(--surface-raised);color:var(--text-primary);border-color:var(--border-subtle)}.sk-btn--secondary:hover:not(:disabled){background:var(--surface-active);border-color:var(--border-strong)}
.sk-btn--ghost{background:transparent;color:var(--text-secondary)}.sk-btn--ghost:hover:not(:disabled){background:var(--surface-hover);color:var(--text-primary)}
.sk-btn--danger{background:transparent;color:var(--text-danger);border-color:rgba(249,124,114,.35)}.sk-btn--danger:hover:not(:disabled){background:var(--fill-danger-soft);border-color:var(--danger-7)}
.sk-btn__spin{animation:rflectr-spin .9s linear infinite}
`
let Button_done = false
function Button_inject() {
  if (Button_done || typeof document === "undefined") return
  Button_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "Button")
  s.textContent = Button_CSS
  document.head.appendChild(s)
}
export function Button({
  variant = "secondary",
  size = "md",
  icon,
  iconRight,
  loading = false,
  disabled,
  children,
  className = "",
  ...rest
}) {
  Button_inject()
  const iconSize = size === "sm" ? 14 : 16
  return React.createElement(
    "button",
    {
      type: "button",
      className: `sk-btn sk-btn--${variant} sk-btn--${size} ${className}`,
      disabled: disabled || loading,
      "aria-busy": loading || undefined,
      ...rest,
    },
    loading
      ? React.createElement(Icon, { name: "loader", size: iconSize, className: "sk-btn__spin" })
      : icon
        ? React.createElement(Icon, { name: icon, size: iconSize })
        : null,
    children,
    iconRight ? React.createElement(Icon, { name: iconRight, size: iconSize }) : null,
  )
}
