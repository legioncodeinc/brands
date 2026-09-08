import React from "react"
import { IconButton } from "../core/IconButton.jsx"

const Dialog_CSS = `
.sk-dlg__scrim{position:fixed;inset:0;background:var(--surface-overlay);backdrop-filter:blur(4px);display:grid;place-items:center;z-index:100;animation:rflectr-fade var(--dur-base) var(--ease-out)}
.sk-dlg{width:min(520px,calc(100vw - 48px));background:var(--surface-panel);border:1px solid var(--border-subtle);border-radius:var(--r-xl);box-shadow:var(--shadow-dialog);display:flex;flex-direction:column;animation:rflectr-rise var(--dur-enter) var(--ease-out);max-height:calc(100vh - 48px)}
.sk-dlg--wide{width:min(760px,calc(100vw - 48px))}
.sk-dlg__head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:18px 20px 0}
.sk-dlg__title{font:var(--type-title);letter-spacing:var(--ls-tight);color:var(--text-primary)}
.sk-dlg__desc{font:var(--type-caption);color:var(--text-secondary);margin-top:4px;text-wrap:pretty}
.sk-dlg__body{padding:16px 20px;overflow:auto;font:var(--type-body);color:var(--text-primary)}
.sk-dlg__foot{padding:12px 20px 16px;display:flex;gap:8px;justify-content:flex-end;border-top:1px solid var(--border-hairline)}
.sk-dlg--danger .sk-dlg__title{color:var(--text-danger)}
`
let Dialog_done = false
function Dialog_inject() {
  if (Dialog_done || typeof document === "undefined") return
  Dialog_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "Dialog")
  s.textContent = Dialog_CSS
  document.head.appendChild(s)
}
export function Dialog({
  open = true,
  title,
  description,
  footer,
  onClose,
  tone,
  wide = false,
  children,
  inline = false,
  className = "",
  ...rest
}) {
  Dialog_inject()
  if (!open) return null
  const box = React.createElement(
    "div",
    {
      role: "dialog",
      "aria-modal": !inline,
      "aria-label": typeof title === "string" ? title : undefined,
      className: `sk-dlg ${wide ? "sk-dlg--wide" : ""} ${tone ? `sk-dlg--${tone}` : ""} ${className}`,
      ...rest,
    },
    React.createElement(
      "div",
      { className: "sk-dlg__head" },
      React.createElement(
        "div",
        null,
        React.createElement("div", { className: "sk-dlg__title" }, title),
        description ? React.createElement("div", { className: "sk-dlg__desc" }, description) : null,
      ),
      onClose ? React.createElement(IconButton, { icon: "x", label: "Close", size: "sm", onClick: onClose }) : null,
    ),
    React.createElement("div", { className: "sk-dlg__body" }, children),
    footer ? React.createElement("div", { className: "sk-dlg__foot" }, footer) : null,
  )
  return inline
    ? box
    : React.createElement(
        "div",
        {
          className: "sk-dlg__scrim",
          onClick: (e) => {
            if (e.target === e.currentTarget && onClose) onClose()
          },
        },
        box,
      )
}
