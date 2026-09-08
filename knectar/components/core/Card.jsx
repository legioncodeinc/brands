import React from 'react';
/* Nectar & wing card — 12px radius, 1px border, soft shadow, optional 1px nectar top-rail via `accent`, optional hover lift via `interactive`. */
export function Card({ title, description, action, footer, children, padding = 24, accent, interactive, style, ...rest }) {
  const [h, setH] = React.useState(false);
  return <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ position: 'relative', background: 'var(--card)', color: 'var(--card-foreground)', display: 'flex', flexDirection: 'column', gap: 20, borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', padding: `${padding}px 0`, boxShadow: interactive && h ? 'var(--shadow-md)' : 'var(--shadow-sm)', transform: interactive && h ? 'translateY(-2px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)', overflow: 'hidden', ...style }} {...rest}>
    {accent && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--grad-nectar)' }} />}
    {(title || description || action) && <div style={{ display: 'grid', gridTemplateColumns: action ? '1fr auto' : '1fr', gap: 6, padding: `0 ${padding}px`, alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {title && <div style={{ fontWeight: 600, lineHeight: 1.2, fontSize: 'var(--text-base)', letterSpacing: '-0.01em' }}>{title}</div>}
        {description && <div style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-sm)' }}>{description}</div>}
      </div>
      {action && <div style={{ gridColumn: 2, gridRow: '1 / span 2', justifySelf: 'end' }}>{action}</div>}
    </div>}
    {children != null && <div style={{ padding: `0 ${padding}px` }}>{children}</div>}
    {footer && <div style={{ display: 'flex', alignItems: 'center', padding: `0 ${padding}px` }}>{footer}</div>}
  </div>;
}
