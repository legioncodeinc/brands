import React from 'react';
import { Icon } from '../core/Icon.jsx';
/* Sonner toast as styled in rflectr legacy UI (globals.css: close button top-right). bg-popover, 1px border, rounded-sm, shadow-lg, w-356, title text-sm/500 + description muted. */
const I = { loading: 'loader-2', success: 'circle-check', error: 'circle-x', warning: 'triangle-alert', info: 'info' };
const C = { success: '--status-success', error: '--status-error', warning: '--status-warning', info: '--status-info' };
export function Toast({ type = 'default', title, description, onClose, style }) {
  return <div role="status" style={{ position: 'relative', width: 356, display: 'flex', gap: 10, alignItems: 'flex-start', padding: '14px 16px', background: 'var(--popover)', color: 'var(--popover-foreground)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-lg)', fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-sm)', ...style }}>
    {I[type] && <Icon name={I[type]} size={16} color={C[type] ? `var(${C[type]})` : 'var(--foreground)'} style={{ marginTop: 2, animation: type === 'loading' ? 'kn-spin 1s linear infinite' : 'none' }} />}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}><div style={{ fontWeight: 500 }}>{title}</div>{description && <div style={{ color: 'var(--muted-foreground)' }}>{description}</div>}</div>
    {onClose && <button type="button" aria-label="Close" onClick={onClose} style={{ position: 'absolute', top: -6, right: -6, width: 20, height: 20, borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--popover)', color: 'var(--foreground)', display: 'grid', placeItems: 'center', cursor: 'pointer', padding: 0 }}><Icon name="x" size={12} /></button>}
    <style>{'@keyframes kn-spin{to{transform:rotate(360deg)}}'}</style>
  </div>;
}
