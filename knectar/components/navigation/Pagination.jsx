import React from 'react';
import { Button } from '../core/Button.jsx';
import { Select } from '../core/Select.jsx';
/* Table footer as in rflectr legacy UI logsTable.tsx — "Showing 1–25 of 1,204" left, rows-per-page select + Previous/Next outline buttons right. */
export function Pagination({ offset = 0, limit = 25, total = 0, onChange, pageSizes = [25, 50, 100], style }) {
  const from = total === 0 ? 0 : offset + 1, to = Math.min(offset + limit, total);
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '8px 0', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', ...style }}>
    <span>Showing <span className="mono" style={{ color: 'var(--foreground)' }}>{from.toLocaleString()}–{to.toLocaleString()}</span> of <span className="mono" style={{ color: 'var(--foreground)' }}>{total.toLocaleString()}</span></span>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Select size="sm" value={limit} options={pageSizes.map(n => ({ value: n, label: `${n} / page` }))} onChange={v => onChange && onChange({ offset: 0, limit: v })} />
      <Button variant="outline" size="sm" disabled={offset === 0} onClick={() => onChange && onChange({ offset: Math.max(0, offset - limit), limit })}>Previous</Button>
      <Button variant="outline" size="sm" disabled={to >= total} onClick={() => onChange && onChange({ offset: offset + limit, limit })}>Next</Button>
    </div>
  </div>;
}
