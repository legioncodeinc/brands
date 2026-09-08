import React from 'react';
/* rflectr legacy ui/switch.tsx — SQUARE (rounded-sm) track, 2px transparent border; md 36×20 thumb 16, default 44×24 thumb 20; checked bg-primary. */
export function Switch({ checked, onChange, size = 'md', disabled, label, style }) {
  const md = size === 'md'; const w = md ? 36 : 44, h = md ? 20 : 24, t = md ? 16 : 20;
  return <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .5 : 1, fontSize: 'var(--text-sm)', ...style }}>
    <span role="switch" aria-checked={!!checked} onClick={() => !disabled && onChange && onChange(!checked)} style={{ width: w, height: h, borderRadius: 'var(--radius-sm)', border: '2px solid transparent', background: checked ? 'var(--primary)' : 'var(--input)', display: 'inline-flex', alignItems: 'center', transition: 'background var(--dur-base)', flexShrink: 0 }}>
      <span style={{ width: t, height: t, borderRadius: 'var(--radius-sm)', background: 'var(--background)', boxShadow: 'var(--shadow-md)', transform: `translateX(${checked ? w - t - 4 : 0}px)`, transition: 'transform var(--dur-base) var(--ease-out)' }} />
    </span>{label}
  </label>;
}
