import React, { useState } from 'react';
import { Icon } from './Icon.jsx';
/* rflectr legacy ui/input.tsx — h-9, rounded-sm, border-input, dark bg-input/30, focus border-primary; optional copy button; optional left icon (sidebar search). */
export function Input({ value, defaultValue, onChange, placeholder, type = 'text', disabled, invalid, icon, showCopyButton, mono, size = 'default', kbd, style, inputStyle, ...rest }) {
  const [focus, setFocus] = useState(false);
  const h = size === 'sm' ? 32 : 36;
  const border = invalid ? 'var(--destructive)' : focus ? 'var(--primary)' : 'var(--input)';
  return <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: h, borderRadius: 'var(--radius-sm)', border: `1px solid ${border}`, background: 'var(--input-bg)', opacity: disabled ? .5 : 1, transition: 'border-color var(--dur-base)', position: 'relative', ...style }}>
    {icon && <Icon name={icon} size={14} color="var(--muted-foreground)" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />}
    <input type={type} value={value} defaultValue={defaultValue} onChange={onChange} placeholder={placeholder} disabled={disabled} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{ flex: 1, minWidth: 0, height: '100%', padding: `4px ${kbd ? 56 : 12}px 4px ${icon ? 32 : 12}px`, background: 'transparent', border: 0, outline: 'none', color: 'var(--foreground)', fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-sm)', cursor: disabled ? 'not-allowed' : 'text', ...inputStyle }} {...rest} />
    {kbd && <span style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: 2, pointerEvents: 'none' }}>{kbd.map(k => <span key={k} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '0 4px', borderRadius: 'var(--radius-sm)', background: 'var(--muted)', border: '1px solid var(--border)', color: 'var(--muted-foreground)', boxShadow: 'var(--shadow-sm)' }}>{k}</span>)}</span>}
    {showCopyButton && <button type="button" onClick={() => navigator.clipboard && navigator.clipboard.writeText(String(value ?? ''))} style={{ width: 34, height: '100%', display: 'grid', placeItems: 'center', background: 'transparent', border: 0, color: 'var(--muted-foreground)', cursor: 'pointer' }}><Icon name="copy" size={16} /></button>}
  </div>;
}
