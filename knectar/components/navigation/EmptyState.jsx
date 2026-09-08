import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';
/* Empty states in rflectr legacy UI (teamsEmptyState, customersEmptyState, pricingOverridesEmptyState) — centred, muted 40px icon in a bordered square, title text-lg/600, description text-sm muted, primary action. */
export function EmptyState({ icon = 'inbox', title, description, action, onAction, children, style }) {
  return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 8, padding: '48px 24px', border: '1px dashed var(--border)', borderRadius: 'var(--radius-sm)', background: 'var(--card)', ...style }}>
    <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', display: 'grid', placeItems: 'center', color: 'var(--muted-foreground)', marginBottom: 8 }}><Icon name={icon} size={20} /></div>
    <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>{title}</div>
    {description && <div style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', maxWidth: 420, textWrap: 'pretty' }}>{description}</div>}
    {action && <Button icon="plus" onClick={onAction} style={{ marginTop: 8 }}>{action}</Button>}
    {children}
  </div>;
}
