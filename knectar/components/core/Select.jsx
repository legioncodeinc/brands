import React, { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon.jsx';
/* rflectr legacy ui/select.tsx — trigger h-9 (sm h-8), rounded-sm, w-fit; content bg-popover, 1px border, shadow-md, p-1; item h-8 rounded-sm with trailing check. */
export function Select({ value, onChange, options = [], placeholder = 'Select…', size = 'default', disabled, fullWidth, style }) {
  const [open, setOpen] = useState(false); const ref = useRef(null);
  useEffect(() => { const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }; document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h); }, []);
  const sel = options.find(o => o.value === value);
  return <div ref={ref} style={{ position: 'relative', width: fullWidth ? '100%' : 'fit-content', ...style }}>
    <button type="button" disabled={disabled} onClick={() => setOpen(o => !o)} style={{ display: 'flex', width: fullWidth ? '100%' : 'fit-content', alignItems: 'center', justifyContent: 'space-between', gap: 8, height: size === 'sm' ? 32 : 36, padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: `1px solid ${open ? 'var(--ring)' : 'var(--input)'}`, background: 'var(--input-bg)', color: sel ? 'var(--foreground)' : 'var(--muted-foreground)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', whiteSpace: 'nowrap', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .5 : 1 }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{sel?.icon && <Icon name={sel.icon} size={16} color="var(--muted-foreground)" />}{sel ? sel.label : placeholder}</span><Icon name="chevron-down" size={16} style={{ opacity: .5 }} />
    </button>
    {open && <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: 4, minWidth: '100%', zIndex: 50, background: 'var(--popover)', color: 'var(--popover-foreground)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-md)', padding: 4, maxHeight: 280, overflowY: 'auto' }}>
      {options.map(o => <div key={o.value} onClick={() => { onChange && onChange(o.value); setOpen(false); }} onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'} style={{ display: 'flex', alignItems: 'center', gap: 8, height: 32, padding: '0 32px 0 8px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)', cursor: 'pointer', position: 'relative', whiteSpace: 'nowrap' }}>
        {o.icon && <Icon name={o.icon} size={16} color="var(--muted-foreground)" />}{o.label}{o.value === value && <Icon name="check" size={16} style={{ position: 'absolute', right: 8 }} />}
      </div>)}
    </div>}
  </div>;
}
