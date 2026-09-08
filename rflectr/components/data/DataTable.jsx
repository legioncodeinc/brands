import React from "react"
import { Icon } from "../core/Icon.jsx"

const DataTable_CSS = `
.sk-table{width:100%;border-collapse:separate;border-spacing:0;font:var(--type-caption);color:var(--text-primary)}
.sk-table th{position:sticky;top:0;background:var(--surface-panel);text-align:left;font:var(--type-eyebrow);letter-spacing:var(--ls-caps);text-transform:uppercase;color:var(--text-tertiary);padding:8px 12px;border-bottom:1px solid var(--border-subtle);white-space:nowrap;user-select:none}
.sk-table th[aria-sort]{cursor:pointer;color:var(--text-secondary)}.sk-table th svg{margin-left:4px;opacity:.6}
.sk-table td{padding:8px 12px;border-bottom:1px solid var(--border-hairline);vertical-align:middle;white-space:nowrap}
.sk-table tbody tr{transition:background var(--dur-fast)}.sk-table tbody tr:hover{background:var(--surface-hover)}
.sk-table tbody tr[data-selected="true"]{background:var(--surface-selected)}
.sk-table--clickable tbody tr{cursor:pointer}
.sk-table .num,.sk-table .mono{font-family:var(--font-mono);font-variant-numeric:tabular-nums}.sk-table .num{text-align:right}
.sk-table--dense td{padding:5px 10px}.sk-table--dense th{padding:6px 10px}
.sk-table__empty{padding:32px;text-align:center;color:var(--text-tertiary);font:var(--type-caption)}
.sk-table__skel td span{display:block;height:10px;border-radius:3px;background:linear-gradient(90deg,var(--n-3) 25%,var(--n-4) 50%,var(--n-3) 75%);background-size:200% 100%;animation:rflectr-shimmer 1.6s linear infinite}
`
let DataTable_done = false
function DataTable_inject() {
  if (DataTable_done || typeof document === "undefined") return
  DataTable_done = true
  const s = document.createElement("style")
  s.setAttribute("data-rflectr", "DataTable")
  s.textContent = DataTable_CSS
  document.head.appendChild(s)
}
export function DataTable({
  columns = [],
  rows = [],
  rowKey = (r, i) => r.id ?? i,
  onRowClick,
  selectedKey,
  sort,
  onSort,
  dense = false,
  loading = false,
  emptyText = "No records",
  className = "",
  ...rest
}) {
  DataTable_inject()
  return React.createElement(
    "table",
    {
      className: `sk-table ${dense ? "sk-table--dense" : ""} ${onRowClick ? "sk-table--clickable" : ""} ${className}`,
      ...rest,
    },
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        columns.map((c) =>
          React.createElement(
            "th",
            {
              key: c.key,
              scope: "col",
              className: c.align === "right" ? "num" : "",
              style: { width: c.width },
              "aria-sort": c.sortable
                ? sort && sort.key === c.key
                  ? sort.dir === "asc"
                    ? "ascending"
                    : "descending"
                  : "none"
                : undefined,
              onClick: c.sortable && onSort ? () => onSort(c.key) : undefined,
            },
            c.label,
            c.sortable && sort && sort.key === c.key
              ? React.createElement(Icon, {
                  name: "chevronDown",
                  size: 12,
                  style: { transform: sort.dir === "asc" ? "rotate(180deg)" : "none" },
                })
              : null,
          ),
        ),
      ),
    ),
    React.createElement(
      "tbody",
      null,
      loading
        ? [0, 1, 2, 3].map((i) =>
            React.createElement(
              "tr",
              { key: `s${i}`, className: "sk-table__skel" },
              columns.map((c) =>
                React.createElement(
                  "td",
                  { key: c.key },
                  React.createElement("span", { style: { width: `${40 + ((i * 37 + c.key.length * 13) % 50)}%` } }),
                ),
              ),
            ),
          )
        : rows.length === 0
          ? React.createElement(
              "tr",
              null,
              React.createElement("td", { colSpan: columns.length, className: "sk-table__empty" }, emptyText),
            )
          : rows.map((r, i) => {
              const k = rowKey(r, i)
              return React.createElement(
                "tr",
                {
                  key: k,
                  "data-selected": selectedKey === k ? "true" : undefined,
                  onClick: onRowClick ? () => onRowClick(r) : undefined,
                  tabIndex: onRowClick ? 0 : undefined,
                },
                columns.map((c) =>
                  React.createElement(
                    "td",
                    { key: c.key, className: [c.align === "right" ? "num" : "", c.mono ? "mono" : ""].join(" ") },
                    c.render ? c.render(r) : r[c.key],
                  ),
                ),
              )
            }),
    ),
  )
}
