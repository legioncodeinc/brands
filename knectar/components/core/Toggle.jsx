import React from 'react';
import { Icon } from './Icon.jsx';
/* rflectr legacy ui/toggle.tsx — ghost by default, on = bg-accent; outline variant has 1px border. Used for the chart-type toggle and polling on/off. */
export function Toggle({ pressed, onChange, icon, children, variant = 'default', size = 'default', disabled, style }) {
  return <button type="button" aria-pressed={!!pressed} disabled={disabled} onClick={() => onChange && onChange(!pressed)} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, height: size === 'sm' ? 32 : 36, minWidth: size === 'sm' ? 32 : 36, padding: children ? '0 8px' : 0, borderRadius: 'var(--radius-sm)', border: variant === 'outline' ? '1px solid var(--input)' : '1px solid transparent', background: pressed ? 'var(--accent)' : 'transparent', color: pressed ? 'var(--accent-foreground)' : 'var(--muted-foreground)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 500, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .5 : 1, transition: 'background var(--dur-base)', ...style }}>{icon && <Icon name={icon} size={16} />}{children}</button>;
}
