import React from "react"

const Tabs_CSS = `
.sk-tabs{display:flex;gap:2px;border-bottom:1px solid var(--border-hairline);position:relative;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none}.sk-tabs::-webkit-scrollbar{display:none}
.sk-tabs button{appearance:none;background:none;border:0;padding:8px 12px;font:var(--type-body);color:var(--text-tertiary);cursor:pointer;position:relative;white-space:nowrap;flex:none;border-radius:var(--r-sm) var(--r-sm) 0 0;transition:color var(--dur-fast);display:inline-flex;gap:6px;align-items:center}
.sk-tabs button:hover{color:var(--text-secondary);background:var(--surface-hover)}
.sk-tabs button[aria-selected="true"]{color:var(--text-primary);font-weight:var(--fw-medium)}
.sk-tabs button[aria-selected="true"]::after{content:"";position:absolute;left:8px;right:8px;bottom:-1px;height:2px;background:var(--n-12);border-radius:1px;animation:rflectr-fade var(--dur-base) var(--ease-out)}
.sk-tabs button:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.sk-tabs__count{font:var(--type-code);color:var(--text-tertiary);padding:0 5px;border-radius:var(--r-pill);background:var(--fill-neutral-soft)}
`
let Tabs_done = false
function Tabs_inject() {
  if (Tabs_done || typeof document === "undefined") return
  Tabs_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "Tabs")
  s.textContent = Tabs_CSS
  document.head.appendChild(s)
}
export function Tabs({ items = [], value, onChange, className = "", ...rest }) {
  Tabs_inject()
  return React.createElement(
    "div",
    { role: "tablist", className: `sk-tabs ${className}`, ...rest },
    items.map((it) => {
      const o = typeof it === "string" ? { id: it, label: it } : it
      return React.createElement(
        "button",
        { key: o.id, role: "tab", type: "button", "aria-selected": value === o.id, onClick: () => onChange?.(o.id) },
        o.label,
        o.count != null ? React.createElement("span", { className: "sk-tabs__count" }, o.count) : null,
      )
    }),
  )
}
