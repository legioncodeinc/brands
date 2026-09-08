import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* rflectr legacy ui/table.tsx — thead bg-muted/50, th h-10 px-4 font-medium, td px-4 py-2 whitespace-nowrap, row hover bg-muted/50, 1px row borders; sortable headers show arrow-up-down. Wrapped in a rounded-sm bordered container like LogsDataTable. */
export function Table({ columns = [], rows = [], onRowClick, selectedId, rowKey = 'id', emptyText = 'No results.', bordered = true, dense, freshKey, style }) {
  return <div className="custom-scrollbar" style={{ position: 'relative', width: '100%', overflowX: 'auto', border: bordered ? '1px solid var(--border)' : 0, borderRadius: 'var(--radius-lg)', background: 'var(--card)', boxShadow: bordered ? 'var(--shadow-sm)' : 'none', ...style }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-sm)', captionSide: 'bottom' }}>
      <thead style={{ background: 'color-mix(in oklch,var(--muted) 50%,transparent)' }}><tr style={{ borderBottom: '1px solid var(--border)' }}>
        {columns.map(c => <th key={c.key} style={{ height: 40, padding: '0 16px', textAlign: c.align || 'left', fontWeight: 500, color: 'var(--foreground)', whiteSpace: 'nowrap', width: c.width }}>
          {c.sortable ? <button type="button" onClick={c.onSort} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'transparent', border: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}>{c.label}<Icon name="arrow-up-down" size={14} color="var(--muted-foreground)" /></button> : c.label}
        </th>)}
      </tr></thead>
      <tbody>
        {rows.length === 0 && <tr><td colSpan={columns.length} style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--muted-foreground)' }}>{emptyText}</td></tr>}
        {rows.map((r, i) => { const sel = selectedId != null && r[rowKey] === selectedId; return <tr key={r[rowKey] ?? i} onClick={onRowClick ? () => onRowClick(r) : undefined} onMouseEnter={e => { if (!sel) e.currentTarget.style.background = 'color-mix(in oklch,var(--muted) 50%,transparent)'; }} onMouseLeave={e => { if (!sel) e.currentTarget.style.background = 'transparent'; }} style={{ borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 0, background: sel ? 'var(--muted)' : 'transparent', cursor: onRowClick ? 'pointer' : 'default', transition: 'background var(--dur-fast)', animation: freshKey && r[freshKey] ? 'kn-row-in 1.6s var(--ease-out) both' : 'none' }}>
          {columns.map(c => <td key={c.key} style={{ padding: dense ? '4px 16px' : '8px 16px', verticalAlign: 'middle', whiteSpace: 'nowrap', textAlign: c.align || 'left', fontFamily: c.mono ? 'var(--font-mono)' : 'inherit', color: c.muted ? 'var(--muted-foreground)' : 'inherit', maxWidth: c.maxWidth, overflow: c.maxWidth ? 'hidden' : undefined, textOverflow: c.maxWidth ? 'ellipsis' : undefined }}>{c.render ? c.render(r) : r[c.key]}</td>)}
        </tr>; })}
      </tbody>
    </table>
  </div>;
}
