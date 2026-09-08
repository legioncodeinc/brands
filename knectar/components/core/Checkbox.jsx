import React from 'react';
import { Icon } from './Icon.jsx';
/* rflectr legacy ui/checkbox.tsx — size-4, rounded-[4px], border-input, checked bg-primary with 14px check. */
export function Checkbox({ checked, onChange, label, disabled, indeterminate, style }) {
  return <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .5 : 1, fontSize: 'var(--text-sm)', ...style }}>
    <span onClick={() => !disabled && onChange && onChange(!checked)} role="checkbox" aria-checked={indeterminate ? 'mixed' : !!checked} style={{ width: 16, height: 16, borderRadius: 4, border: `1px solid ${checked || indeterminate ? 'var(--primary)' : 'var(--input)'}`, background: checked || indeterminate ? 'var(--primary)' : 'var(--input-bg)', display: 'grid', placeItems: 'center', color: 'var(--primary-foreground)', flexShrink: 0 }}>
      {indeterminate ? <Icon name="minus" size={12} strokeWidth={3} /> : checked ? <Icon name="check" size={14} strokeWidth={3} /> : null}
    </span>{label}
  </label>;
}
