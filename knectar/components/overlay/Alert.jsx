import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* rflectr legacy ui/alert.tsx — rounded-sm, px-4 py-3, text-sm, 16px icon column; variants default/destructive/info/warning use 30% tinted bg + border. */
const T = { default: null, destructive: '--status-error', info: '--status-info', warning: '--status-warning', success: '--status-success' };
export function Alert({ variant = 'default', icon, title, children, action, style }) {
  const c = T[variant];
  return <div role="alert" style={{ display: 'grid', gridTemplateColumns: icon ? '16px 1fr auto' : '0 1fr auto', columnGap: icon ? 12 : 0, rowGap: 2, alignItems: 'start', width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-sm)', border: `1px solid ${c ? `color-mix(in oklch,var(${c}) 30%,transparent)` : 'var(--border)'}`, background: c ? `color-mix(in oklch,var(${c}) 8%,transparent)` : 'var(--card)', color: c ? `var(${c})` : 'var(--card-foreground)', ...style }}>
    {icon && <Icon name={icon} size={16} style={{ transform: 'translateY(2px)' }} />}
    <div style={{ gridColumn: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
      {title && <div style={{ fontWeight: 500, letterSpacing: '-0.01em', minHeight: 16 }}>{title}</div>}
      {children && <div style={{ color: c ? `color-mix(in oklch,var(${c}) 85%,var(--foreground))` : 'var(--muted-foreground)' }}>{children}</div>}
    </div>
    {action && <div style={{ gridColumn: 3 }}>{action}</div>}
  </div>;
}
