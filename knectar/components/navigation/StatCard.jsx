import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '../core/Icon.jsx';
import { Tooltip } from '../overlay/Tooltip.jsx';
/* KPI tile — 12px radius card, muted title + icon, large mono value that counts up on mount/change, optional sub-value, info tooltip, optional `trend` (+8.2%). */
function useCountUp(target, dur = 900) {
  const [v, setV] = useState(0); const from = useRef(0);
  useEffect(() => { const start = performance.now(), a = from.current, b = target; let raf; const tick = t => { const p = Math.min(1, (t - start) / dur); const e = 1 - Math.pow(1 - p, 3); setV(a + (b - a) * e); if (p < 1) raf = requestAnimationFrame(tick); else from.current = b; }; raf = requestAnimationFrame(tick); return () => cancelAnimationFrame(raf); }, [target, dur]);
  return v;
}
function AnimatedValue({ value }) {
  const m = typeof value === 'string' ? value.match(/^([^\d]*)([\d,]*\.?\d*)(.*)$/) : null;
  const num = m ? parseFloat(m[2].replace(/,/g, '')) : NaN;
  const dec = m && m[2].includes('.') ? m[2].split('.')[1].length : 0;
  const v = useCountUp(isNaN(num) ? 0 : num);
  if (isNaN(num)) return <>{value}</>;
  return <>{m[1]}{v.toLocaleString(undefined, { minimumFractionDigits: dec, maximumFractionDigits: dec })}{m[3]}</>;
}
export function StatCard({ title, value, subValue, icon, description, trend, animate = true, style }) {
  const up = typeof trend === 'string' && trend.trim().startsWith('+');
  return <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0, ...style }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', fontWeight: 500 }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>{title}{description && <Tooltip content={description}><Icon name="info" size={14} color="var(--text-tertiary)" /></Tooltip>}</span>{icon && <span style={{ width: 26, height: 26, borderRadius: 8, display: 'grid', placeItems: 'center', background: 'var(--grad-nectar-soft)', color: 'var(--brand-primary)' }}><Icon name={icon} size={14} /></span>}
    </div>
    <div style={{ fontSize: 'var(--text-2xl)', lineHeight: 'var(--lh-2xl)', fontWeight: 600, letterSpacing: '-0.02em', fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums', display: 'flex', alignItems: 'baseline', gap: 10 }}>{animate ? <AnimatedValue value={value} /> : value}{trend && <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: up ? 'var(--status-success)' : 'var(--status-error)', letterSpacing: 0 }}>{trend}</span>}</div>
    {subValue && <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }}>{subValue}</div>}
  </div>;
}
