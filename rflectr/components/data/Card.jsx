import React from "react"

const Card_CSS = `
.sk-card{background:var(--surface-card);border:1px solid var(--border-hairline);border-radius:var(--r-lg);display:flex;flex-direction:column;min-width:0}
.sk-card--interactive{cursor:pointer;transition:border-color var(--dur-fast) var(--ease-out),transform var(--dur-base) var(--ease-out),background var(--dur-fast)}
.sk-card--interactive:hover{border-color:var(--border-strong);background:var(--surface-raised)}
.sk-card--selected{border-color:var(--border-route);box-shadow:var(--shadow-route-glow)}
.sk-card--panel{background:var(--surface-panel)}
.sk-card__head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;border-bottom:1px solid var(--border-hairline)}
.sk-card__title{font:var(--type-heading);color:var(--text-primary);display:flex;align-items:center;gap:8px}
.sk-card__body{padding:16px}.sk-card--dense .sk-card__body{padding:12px}.sk-card--flush .sk-card__body{padding:0}
.sk-card__foot{padding:10px 16px;border-top:1px solid var(--border-hairline);display:flex;gap:8px;align-items:center;justify-content:flex-end}
`
let Card_done = false
function Card_inject() {
  if (Card_done || typeof document === "undefined") return
  Card_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "Card")
  s.textContent = Card_CSS
  document.head.appendChild(s)
}
export function Card({
  title,
  actions,
  footer,
  variant = "card",
  dense = false,
  flush = false,
  interactive = false,
  selected = false,
  children,
  className = "",
  ...rest
}) {
  Card_inject()
  return React.createElement(
    "section",
    {
      className: `sk-card sk-card--${variant} ${dense ? "sk-card--dense" : ""} ${flush ? "sk-card--flush" : ""} ${interactive ? "sk-card--interactive" : ""} ${selected ? "sk-card--selected" : ""} ${className}`,
      ...rest,
    },
    title || actions
      ? React.createElement(
          "header",
          { className: "sk-card__head" },
          React.createElement("div", { className: "sk-card__title" }, title),
          actions
            ? React.createElement("div", { style: { display: "flex", gap: 6, alignItems: "center" } }, actions)
            : null,
        )
      : null,
    React.createElement("div", { className: "sk-card__body" }, children),
    footer ? React.createElement("footer", { className: "sk-card__foot" }, footer) : null,
  )
}
