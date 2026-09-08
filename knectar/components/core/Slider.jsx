import React from 'react';
/* rflectr legacy ui/slider.tsx — 1.5px track bg-muted, range bg-primary, 16px round thumb with primary border. */
export function Slider({ value = 0, min = 0, max = 100, step = 1, onChange, disabled, style }) {
  const pct = ((value - min) / (max - min)) * 100;
  return <div style={{ position: 'relative', width: '100%', height: 16, display: 'flex', alignItems: 'center', opacity: disabled ? .5 : 1, ...style }}>
    <div style={{ position: 'absolute', left: 0, right: 0, height: 6, borderRadius: 999, background: 'var(--muted)' }}><div style={{ width: `${pct}%`, height: '100%', borderRadius: 999, background: 'var(--primary)' }} /></div>
    <input type="range" min={min} max={max} step={step} value={value} disabled={disabled} onChange={e => onChange && onChange(Number(e.target.value))} style={{ position: 'absolute', inset: 0, width: '100%', margin: 0, opacity: 0, cursor: 'pointer' }} />
    <div style={{ position: 'absolute', left: `calc(${pct}% - 8px)`, width: 16, height: 16, borderRadius: '50%', background: 'var(--background)', border: '1px solid var(--primary)', boxShadow: 'var(--shadow-sm)', pointerEvents: 'none' }} />
  </div>;
}
