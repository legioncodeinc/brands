import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* rflectr legacy ui/breadcrumb.tsx — text-sm muted, gap-1.5, chevron-right separators, current page in foreground. */
export function Breadcrumb({ items = [], style }) {
  return <nav aria-label="breadcrumb" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6, fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', ...style }}>
    {items.map((it, i) => <React.Fragment key={i}>{i > 0 && <Icon name="chevron-right" size={14} style={{ opacity: .7 }} />}
      {i === items.length - 1 ? <span aria-current="page" style={{ color: 'var(--foreground)', fontWeight: 500 }}>{it.label}</span> : <a href={it.href || '#'} onClick={e => { if (it.onClick) { e.preventDefault(); it.onClick(); } }} style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--foreground)'} onMouseLeave={e => e.currentTarget.style.color = 'inherit'}>{it.label}</a>}
    </React.Fragment>)}
  </nav>;
}
