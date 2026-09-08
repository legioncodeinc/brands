import React from "react"
import { Icon } from "../core/Icon.jsx"

const NavItem_CSS = `
.sk-nav{appearance:none;width:100%;display:flex;align-items:center;gap:10px;height:32px;padding:0 10px;border:0;border-radius:var(--r-sm);background:transparent;color:var(--text-secondary);font:var(--type-body);cursor:pointer;text-align:left;position:relative;transition:background var(--dur-fast) var(--ease-out),color var(--dur-fast)}
.sk-nav:hover{background:var(--surface-hover);color:var(--text-primary)}
.sk-nav[aria-current="page"]{background:var(--surface-active);color:var(--text-primary);font-weight:var(--fw-medium)}
.sk-nav[aria-current="page"]::before{content:"";position:absolute;left:-8px;top:8px;bottom:8px;width:2px;border-radius:1px;background:var(--n-12);animation:rflectr-fade var(--dur-base)}
.sk-nav svg{color:var(--text-tertiary);transition:color var(--dur-fast)}.sk-nav:hover svg,.sk-nav[aria-current="page"] svg{color:var(--text-primary)}
.sk-nav__label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sk-nav__count{font:var(--type-code);color:var(--text-tertiary);padding:0 6px;border-radius:var(--r-pill);background:var(--fill-neutral-soft);min-width:18px;text-align:center}
.sk-nav__count--alert{color:var(--text-warn);background:var(--fill-warn-soft)}
.sk-nav:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
`
let NavItem_done = false
function NavItem_inject() {
  if (NavItem_done || typeof document === "undefined") return
  NavItem_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "NavItem")
  s.textContent = NavItem_CSS
  document.head.appendChild(s)
}
export function NavItem({ icon, label, active = false, count, alert = false, className = "", ...rest }) {
  NavItem_inject()
  return React.createElement(
    "button",
    { type: "button", className: `sk-nav ${className}`, "aria-current": active ? "page" : undefined, ...rest },
    icon ? React.createElement(Icon, { name: icon, size: 16 }) : null,
    React.createElement("span", { className: "sk-nav__label" }, label),
    count != null
      ? React.createElement("span", { className: `sk-nav__count ${alert ? "sk-nav__count--alert" : ""}` }, count)
      : null,
  )
}
