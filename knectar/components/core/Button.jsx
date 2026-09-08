import React, { useState } from 'react';
import { Icon } from './Icon.jsx';
/* Nectar & wing button — 32px, 8px radius. Primary = nectar gradient with glow on hover; press scales to .98. */
const V = {
  default: { background: 'var(--grad-nectar)', color: 'var(--ink-900)', border: '1px solid transparent', boxShadow: 'var(--glow-nectar-sm)', hover: { boxShadow: 'var(--glow-nectar)', filter: 'brightness(1.04)' } },
  destructive: { background: 'var(--destructive)', color: '#fff', border: '1px solid transparent', fontWeight: 500, hover: { opacity: .9 } },
  outline: { background: 'var(--input-bg)', color: 'var(--foreground)', border: '1px solid var(--input)', hover: { background: 'var(--accent)', borderColor: 'var(--border-strong)' } },
  secondary: { background: 'var(--secondary)', color: 'var(--secondary-foreground)', border: '1px solid transparent', hover: { filter: 'brightness(.97)' } },
  ghost: { background: 'transparent', color: 'var(--foreground)', border: '1px solid transparent', hover: { background: 'var(--accent)' } },
  link: { background: 'transparent', color: 'var(--primary)', border: '1px solid transparent', hover: { textDecoration: 'underline' } },
  nectar: { background: 'var(--grad-nectar-soft)', color: 'var(--brand-primary)', border: '1px solid rgba(61,220,151,.35)', hover: { boxShadow: 'var(--glow-nectar-sm)' } },
};
const S = { default: { height: 32, padding: '4px 12px', gap: 8 }, sm: { height: 30, padding: '0 10px', gap: 6, fontSize: 'var(--text-xs)' }, lg: { height: 40, padding: '0 20px', gap: 8, fontSize: 'var(--text-base)' }, icon: { height: 36, width: 36, padding: 0 } };
export function Button({ variant = 'default', size = 'default', icon, iconRight, isLoading, disabled, children, style, onClick, type = 'button', ...rest }) {
  const [hover, setHover] = useState(false); const [active, setActive] = useState(false);
  const v = V[variant] || V.default, s = S[size] || S.default;
  return <button type={type} disabled={disabled || isLoading} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setActive(false); }} onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)}
    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-sm)', fontWeight: v.fontWeight || 600, letterSpacing: '-0.005em', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .5 : 1, pointerEvents: disabled ? 'none' : 'auto', transition: 'all var(--dur-base) var(--ease-out)', transform: active ? 'scale(.98)' : 'none', flexShrink: 0, background: v.background, color: v.color, border: v.border, boxShadow: v.boxShadow, ...s, ...(hover && !disabled ? v.hover : {}), ...style }} {...rest}>
    {isLoading ? <Icon name="loader-2" size={16} style={{ animation: 'kn-spin 1s linear infinite' }} /> : <>{icon && <Icon name={icon} size={16} />}{children}{iconRight && <Icon name={iconRight} size={16} />}</>}
  </button>;
}
