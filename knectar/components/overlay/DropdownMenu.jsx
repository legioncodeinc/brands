import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Popover } from './Popover.jsx';
/* rflectr legacy ui/dropdownMenu.tsx — min-w-32 p-1, items h-8 px-2 rounded-sm text-sm gap-2; destructive items in red; separators; labels text-xs muted. */
export function DropdownMenu({ trigger, items = [], align = 'end', width = 192, side = 'bottom' }) {
  return <Popover trigger={trigger} align={align} side={side} width={width} padding={4}>
    {items.map((it, i) => it.type === 'separator' ? <div key={i} style={{ height: 1, background: 'var(--border)', margin: '4px -4px' }} /> : it.type === 'label' ? <div key={i} style={{ padding: '6px 8px', fontSize: 'var(--text-xs)', fontWeight: 500, color: 'var(--muted-foreground)' }}>{it.label}</div> :
      <div key={i} onClick={() => !it.disabled && it.onSelect && it.onSelect()} onMouseEnter={e => !it.disabled && (e.currentTarget.style.background = it.destructive ? 'var(--status-error-bg)' : 'var(--accent)')} onMouseLeave={e => e.currentTarget.style.background = 'transparent'} style={{ display: 'flex', alignItems: 'center', gap: 8, height: 32, padding: '0 8px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)', cursor: it.disabled ? 'not-allowed' : 'pointer', opacity: it.disabled ? .5 : 1, color: it.destructive ? 'var(--destructive)' : 'var(--foreground)' }}>
        {it.icon && <Icon name={it.icon} size={16} color={it.destructive ? 'var(--destructive)' : 'var(--muted-foreground)'} />}<span style={{ flex: 1 }}>{it.label}</span>{it.shortcut && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}>{it.shortcut}</span>}
      </div>)}
  </Popover>;
}
