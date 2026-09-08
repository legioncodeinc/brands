import React, { useEffect, useRef, useState } from 'react';
/* rflectr legacy ui/popover.tsx — bg-popover, 1px border, rounded-sm, shadow-md, w-72 p-4 default, sideOffset 4. Trigger is any element. */
export function Popover({ trigger, children, align = 'start', side = 'bottom', width = 288, padding = 16, open: controlled, onOpenChange, style }) {
  const [internal, setInternal] = useState(false); const ref = useRef(null);
  const open = controlled ?? internal; const set = v => { setInternal(v); onOpenChange && onOpenChange(v); };
  useEffect(() => { const h = e => { if (ref.current && !ref.current.contains(e.target)) set(false); }; document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h); }, []);
  const pos = side === 'top' ? { bottom: '100%', marginBottom: 4 } : side === 'right' ? { left: '100%', top: 0, marginLeft: 8 } : { top: '100%', marginTop: 4 };
  const al = side === 'right' ? {} : align === 'end' ? { right: 0 } : { left: 0 };
  const safe = { maxWidth: 'calc(100vw - 16px)' };
  return <span ref={ref} style={{ position: 'relative', display: 'inline-flex', ...style }}>
    <span onClick={() => set(!open)} style={{ display: 'inline-flex' }}>{trigger}</span>
    {open && <div style={{ position: 'absolute', zIndex: 50, width, padding, background: 'var(--popover)', color: 'var(--popover-foreground)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-md)', animation: 'kn-pop var(--dur-base) var(--ease-out)', ...pos, ...al, ...safe }}><style>{'@keyframes kn-pop{from{opacity:0;transform:scale(.95)}}'}</style>{children}</div>}
  </span>;
}
