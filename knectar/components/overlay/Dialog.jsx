import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* rflectr legacy ui/dialog.tsx — overlay black/50, content max-w-lg, rounded-lg (8px), p-6, gap-4, shadow-lg, close X top-6 right-4 at 70% opacity. */
export function Dialog({ open, onClose, title, description, children, footer, width = 512, inline, style }) {
  if (!open) return null;
  const body = <div role="dialog" style={{ position: 'relative', width: '100%', maxWidth: width, maxHeight: 'calc(100dvh - 40px)', overflowY: 'auto', display: 'grid', gap: 16, padding: 24, borderRadius: 'var(--radius-xl)', border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--card-foreground)', boxShadow: 'var(--shadow-lg), var(--glow-nectar-sm)', animation: 'kn-zoom-in var(--dur-base) var(--ease-spring)', ...style }}>
    <style>{'@keyframes kn-zoom-in{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:none}}@keyframes kn-fade{from{opacity:0}}'}</style>
    {(title || description) && <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingBottom: 16 }}>
      {title && <div style={{ fontSize: 'var(--text-lg)', lineHeight: 1, fontWeight: 600 }}>{title}</div>}
      {description && <div style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>{description}</div>}
    </div>}
    {children}
    {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, paddingTop: 8 }}>{footer}</div>}
    {onClose && <button type="button" aria-label="Close" onClick={onClose} style={{ position: 'absolute', top: 24, right: 16, background: 'transparent', border: 0, color: 'var(--foreground)', opacity: .7, cursor: 'pointer', display: 'grid', placeItems: 'center', width: 20, height: 20, borderRadius: 2 }}><Icon name="x" size={16} /></button>}
  </div>;
  if (inline) return body;
  return <div style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'var(--overlay)', display: 'grid', placeItems: 'center', padding: 16, animation: 'kn-fade var(--dur-base)' }}>{body}</div>;
}
