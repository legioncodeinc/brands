import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* rflectr legacy ui/sheet.tsx — right-side panel, bg-background, border-l, shadow-lg, slide-in 500ms; header p-4 gap-1.5, title text-base/600; used for log details, provider/team/customer forms. */
export function Sheet({ open, onClose, side = 'right', width = 640, title, description, headerExtra, children, footer, inline, style }) {
  if (!open) return null;
  const right = side === 'right';
  const panel = <div role="dialog" style={{ position: inline ? 'relative' : 'fixed', top: 0, bottom: 0, [right ? 'right' : 'left']: 0, zIndex: 50, width: '100%', maxWidth: width, height: inline ? '100%' : undefined, background: 'var(--background)', borderLeft: right ? '1px solid var(--border)' : 0, borderRight: right ? 0 : '1px solid var(--border)', borderRadius: inline ? 0 : (right ? '16px 0 0 16px' : '0 16px 16px 0'), boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', animation: inline ? 'none' : `kn-slide-${side} var(--dur-slow) var(--ease-out)`, ...style }}>
    <style>{'@keyframes kn-slide-right{from{transform:translateX(100%)}}@keyframes kn-slide-left{from{transform:translateX(-100%)}}@keyframes kn-fade{from{opacity:0}}'}</style>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: 16, borderBottom: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--foreground)' }}>{title}</div>}
        {description && <div style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>{description}</div>}
      </div>
      {headerExtra}
      {onClose && <button type="button" aria-label="Close" onClick={onClose} style={{ background: 'transparent', border: 0, color: 'var(--foreground)', opacity: .7, cursor: 'pointer', display: 'grid', placeItems: 'center', width: 24, height: 24, borderRadius: 2, flexShrink: 0 }}><Icon name="x" size={16} /></button>}
    </div>
    <div className="custom-scrollbar" style={{ flex: 1, overflowY: 'auto', padding: 16 }}>{children}</div>
    {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: 16, borderTop: '1px solid var(--border)' }}>{footer}</div>}
  </div>;
  if (inline) return panel;
  return <><div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 49, background: 'var(--overlay)', animation: 'kn-fade var(--dur-base)' }} />{panel}</>;
}
