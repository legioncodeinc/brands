import React from 'react';
/* rflectr legacy ui/label.tsx — text-sm/500 leading-none; FormField wraps label + control + description/error. */
export function Label({ children, htmlFor, required, hint, error, style, ...rest }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }} {...rest}>
    <label htmlFor={htmlFor} style={{ fontSize: 'var(--text-sm)', fontWeight: 500, lineHeight: 1, color: 'var(--foreground)', display: 'flex', alignItems: 'center', gap: 4 }}>{children}{required && <span style={{ color: 'var(--destructive)' }}>*</span>}</label>
    {hint && !error && <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}>{hint}</div>}
    {error && <div style={{ fontSize: 'var(--text-xs)', color: 'var(--destructive)' }}>{error}</div>}
  </div>;
}
