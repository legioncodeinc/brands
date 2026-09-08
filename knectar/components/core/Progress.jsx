import React from 'react';
/* rflectr legacy ui/progress.tsx — h-2 rounded-full track bg-primary/20; budget usage bars recolour by threshold via `tone`. */
export function Progress({ value = 0, tone, height = 8, style }) {
  const c = tone ? `var(${tone})` : 'var(--primary)';
  return <div style={{ width: '100%', height, borderRadius: 999, background: `color-mix(in oklch,${c} 20%,transparent)`, overflow: 'hidden', ...style }}><div style={{ width: `${Math.min(100, Math.max(0, value))}%`, height: '100%', background: c, transition: 'width var(--dur-slow) var(--ease-out)' }} /></div>;
}
