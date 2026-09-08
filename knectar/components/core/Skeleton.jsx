import React from 'react';
/* Shimmer skeleton — sweeping nectar-tinted highlight across a muted block. */
export function Skeleton({ width = '100%', height = 16, radius = 'var(--radius-sm)', style }) {
  return <div style={{ width, height, borderRadius: radius, background: 'linear-gradient(90deg,var(--accent) 0%,var(--accent) 35%,rgba(61,220,151,.18) 50%,var(--accent) 65%,var(--accent) 100%)', backgroundSize: '200% 100%', animation: 'kn-shimmer 1.6s linear infinite', ...style }} />;
}
