import React from 'react';
import { Icon } from './Icon.jsx';
/* rflectr legacy ui/badge.tsx — rounded-sm, px-2 py-0.5, text-xs/500, 1px border. Extra `tone` prop maps log status / request-type tokens. */
const V = {
  default: { background: 'var(--brand-primary-subtle)', color: 'var(--primary)', borderColor: 'color-mix(in oklch,var(--primary) 50%,transparent)' },
  secondary: { background: 'var(--secondary)', color: 'var(--secondary-foreground)', borderColor: 'transparent' },
  destructive: { background: 'var(--status-error-bg)', color: 'var(--status-error)', borderColor: 'color-mix(in oklch,var(--status-error) 50%,transparent)' },
  outline: { background: 'transparent', color: 'var(--foreground)', borderColor: 'var(--border)' },
  success: { background: 'var(--status-success-bg)', color: 'var(--status-success)', borderColor: 'color-mix(in oklch,var(--status-success) 50%,transparent)' },
  warning: { background: 'var(--status-warning-bg)', color: 'var(--status-warning)', borderColor: 'color-mix(in oklch,var(--status-warning) 50%,transparent)' },
  info: { background: 'var(--status-info-bg)', color: 'var(--status-info)', borderColor: 'color-mix(in oklch,var(--status-info) 50%,transparent)' },
};
export function Badge({ variant = 'default', tone, icon, mono, children, style, ...rest }) {
  const v = tone ? { background: `color-mix(in oklch,var(${tone}) 14%,transparent)`, color: `var(${tone})`, borderColor: `color-mix(in oklch,var(${tone}) 35%,transparent)` } : (V[variant] || V.default);
  return <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 4, width: 'fit-content', whiteSpace: 'nowrap', borderRadius: 'var(--radius-sm)', border: '1px solid', padding: '2px 8px', fontSize: 'var(--text-xs)', lineHeight: 'var(--lh-xs)', fontWeight: 600, letterSpacing: '-0.005em', fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)', flexShrink: 0, ...v, ...style }} {...rest}>{icon && <Icon name={icon} size={12} />}{children}</span>;
}
