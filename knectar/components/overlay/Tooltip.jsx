import React, { useState } from 'react';
/* rflectr legacy ui/tooltip.tsx — bg-popover, 1px border, shadow-md, rounded-sm, px-3 py-1.5, text-xs, sideOffset 8. */
export function Tooltip({ content, side = 'top', children, forceOpen, style }) {
  const [open, setOpen] = useState(false);
  const pos = { top: { bottom: '100%', left: '50%', transform: 'translate(-50%,-8px)' }, bottom: { top: '100%', left: '50%', transform: 'translate(-50%,8px)' }, right: { left: '100%', top: '50%', transform: 'translate(8px,-50%)' }, left: { right: '100%', top: '50%', transform: 'translate(-8px,-50%)' } }[side];
  return <span style={{ position: 'relative', display: 'inline-flex', ...style }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
    {children}
    {(open || forceOpen) && <span role="tooltip" style={{ position: 'absolute', zIndex: 50, width: 'max-content', maxWidth: 280, padding: '6px 12px', borderRadius: 'var(--radius-sm)', background: 'var(--popover)', color: 'var(--popover-foreground)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)', fontSize: 'var(--text-xs)', lineHeight: 'var(--lh-xs)', textWrap: 'balance', pointerEvents: 'none', animation: 'kn-tip var(--dur-base) var(--ease-out)', ...pos }}>{content}<style>{'@keyframes kn-tip{from{opacity:0}}'}</style></span>}
  </span>;
}
