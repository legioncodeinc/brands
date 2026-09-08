import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';
/* rflectr legacy ui/accordion.tsx + logs/views/collapsibleBox.tsx — trigger py-4 text-sm/500 with rotating chevron, content pb-4 text-sm, 1px bottom borders. */
export function Accordion({ items = [], defaultOpen = [], multiple = false, style }) {
  const [open, setOpen] = useState(new Set(defaultOpen));
  const toggle = k => setOpen(prev => { const n = new Set(multiple ? prev : []); if (prev.has(k)) n.delete(k); else n.add(k); return n; });
  return <div style={{ width: '100%', ...style }}>
    {items.map(it => { const o = open.has(it.value); return <div key={it.value} style={{ borderBottom: '1px solid var(--border)' }}>
      <button type="button" aria-expanded={o} onClick={() => toggle(it.value)} style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '16px 0', background: 'transparent', border: 0, color: 'var(--foreground)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 500, textAlign: 'left', cursor: 'pointer' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{it.icon && <Icon name={it.icon} size={16} color="var(--muted-foreground)" />}{it.label}{it.badge}</span><Icon name="chevron-down" size={16} color="var(--muted-foreground)" style={{ transition: 'transform var(--dur-base)', transform: o ? 'rotate(180deg)' : 'none' }} />
      </button>
      {o && <div style={{ paddingBottom: 16, fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>{it.content}</div>}
    </div>; })}
  </div>;
}
