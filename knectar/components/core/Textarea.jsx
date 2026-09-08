import React, { useState } from 'react';
/* rflectr legacy ui/textarea.tsx — min-h-16, rounded-sm, border-input, text-sm. */
export function Textarea({ value, defaultValue, onChange, placeholder, rows = 3, disabled, mono, style, ...rest }) {
  const [focus, setFocus] = useState(false);
  return <textarea value={value} defaultValue={defaultValue} onChange={onChange} placeholder={placeholder} rows={rows} disabled={disabled} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
    style={{ display: 'block', width: '100%', minHeight: 64, padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: `1px solid ${focus ? 'var(--primary)' : 'var(--input)'}`, background: 'var(--input-bg)', color: 'var(--foreground)', fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-sm)', outline: 'none', resize: 'vertical', opacity: disabled ? .5 : 1, transition: 'border-color var(--dur-base)', ...style }} {...rest} />;
}
