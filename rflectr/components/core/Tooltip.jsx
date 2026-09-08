import React from "react"

const Tooltip_CSS = `
.sk-tip{position:relative;display:inline-flex}
.sk-tip__bubble{position:absolute;left:50%;bottom:calc(100% + 6px);transform:translate(-50%,4px);background:var(--n-12);color:var(--n-1);font:var(--type-caption);padding:4px 8px;border-radius:var(--r-sm);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out);z-index:50;box-shadow:var(--shadow-popover)}
.sk-tip:hover .sk-tip__bubble,.sk-tip:focus-within .sk-tip__bubble{opacity:1;transform:translate(-50%,0)}
`
let Tooltip_done = false
function Tooltip_inject() {
  if (Tooltip_done || typeof document === "undefined") return
  Tooltip_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "Tooltip")
  s.textContent = Tooltip_CSS
  document.head.appendChild(s)
}
export function Tooltip({ label, children }) {
  Tooltip_inject()
  return React.createElement(
    "span",
    { className: "sk-tip" },
    children,
    React.createElement("span", { className: "sk-tip__bubble", role: "tooltip" }, label),
  )
}
