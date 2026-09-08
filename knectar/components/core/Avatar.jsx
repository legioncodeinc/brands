import React from 'react';
/* rflectr legacy ui/avatar.tsx — size-8 rounded-full; fallback bg-muted with initials. The only fully-round element in the system. */
export function Avatar({ src, name = '', size = 32, style }) {
  const initials = name.split(/\s+/).map(s => s[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return <span style={{ width: size, height: size, borderRadius: '50%', overflow: 'hidden', display: 'inline-grid', placeItems: 'center', background: 'var(--muted)', color: 'var(--foreground)', fontSize: size * .375, fontWeight: 500, flexShrink: 0, ...style }}>{src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}</span>;
}
