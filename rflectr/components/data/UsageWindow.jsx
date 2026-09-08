import React from "react"

const UsageWindow_CSS = `
.sk-uw{display:flex;flex-direction:column;gap:8px;min-width:0}
.sk-uw__top{display:flex;justify-content:space-between;gap:8px;align-items:baseline}
.sk-uw__name{font:var(--type-body-strong);color:var(--text-primary)}.sk-uw__acct{font:var(--type-caption);color:var(--text-tertiary)}
.sk-uw__nums{font:var(--type-data);color:var(--text-secondary);white-space:nowrap}.sk-uw__nums b{color:var(--text-primary);font-weight:var(--fw-medium)}
.sk-uw__bar{height:6px;border-radius:var(--r-pill);background:var(--n-4);overflow:hidden;position:relative}
.sk-uw__fill{height:100%;border-radius:inherit;background:var(--n-10);transform-origin:left;transition:width var(--dur-slow) var(--ease-out),background var(--dur-base)}
.sk-uw--warn .sk-uw__fill{background:var(--warn-9)}.sk-uw--block .sk-uw__fill{background:var(--danger-9)}
.sk-uw--unknown .sk-uw__bar{background:repeating-linear-gradient(90deg,var(--n-4) 0 4px,transparent 4px 8px)}
.sk-uw__foot{display:flex;justify-content:space-between;gap:8px;font:var(--type-code);color:var(--text-tertiary)}
.sk-uw__foot time{color:var(--text-secondary)}
.sk-uw--stale .sk-uw__fill{opacity:.5}.sk-uw__tag{padding:0 5px;border:1px solid var(--border-hairline);border-radius:var(--r-xs)}
.sk-uw__tag--stale{color:var(--text-warn);border-color:rgba(245,184,75,.35)}
`
let UsageWindow_done = false
function UsageWindow_inject() {
  if (UsageWindow_done || typeof document === "undefined") return
  UsageWindow_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "UsageWindow")
  s.textContent = UsageWindow_CSS
  document.head.appendChild(s)
}
export function UsageWindow({
  name,
  account,
  unit = "requests",
  used,
  limit,
  resetLabel,
  resetAt,
  source = "Provider API",
  confidence,
  stale = false,
  warnAt = 0.8,
  blockAt,
  className = "",
  ...rest
}) {
  UsageWindow_inject()
  const known = typeof used === "number" && typeof limit === "number" && limit > 0
  const pct = known ? Math.min(100, (used / limit) * 100) : 0
  const tone = !known ? "unknown" : blockAt && pct >= blockAt * 100 ? "block" : pct >= warnAt * 100 ? "warn" : "ok"
  return React.createElement(
    "div",
    { className: `sk-uw sk-uw--${tone} ${stale ? "sk-uw--stale" : ""} ${className}`, ...rest },
    React.createElement(
      "div",
      { className: "sk-uw__top" },
      React.createElement(
        "div",
        null,
        React.createElement("span", { className: "sk-uw__name" }, name),
        account ? React.createElement("span", { className: "sk-uw__acct" }, " · ", account) : null,
      ),
      React.createElement(
        "span",
        { className: "sk-uw__nums" },
        known
          ? [React.createElement("b", { key: "u" }, used.toLocaleString()), " / ", limit.toLocaleString(), " ", unit]
          : "Unknown",
      ),
    ),
    React.createElement(
      "div",
      {
        className: "sk-uw__bar",
        role: "progressbar",
        "aria-valuenow": known ? Math.round(pct) : undefined,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": name,
      },
      known ? React.createElement("div", { className: "sk-uw__fill", style: { width: `${pct}%` } }) : null,
    ),
    React.createElement(
      "div",
      { className: "sk-uw__foot" },
      React.createElement(
        "span",
        null,
        resetLabel || "Resets",
        " ",
        resetAt ? React.createElement("time", { dateTime: resetAt.iso, title: resetAt.iso }, resetAt.label) : "—",
      ),
      React.createElement(
        "span",
        { style: { display: "flex", gap: 4 } },
        React.createElement("span", { className: "sk-uw__tag" }, source),
        confidence ? React.createElement("span", { className: "sk-uw__tag" }, confidence) : null,
        stale ? React.createElement("span", { className: "sk-uw__tag sk-uw__tag--stale" }, "Stale") : null,
      ),
    ),
  )
}
