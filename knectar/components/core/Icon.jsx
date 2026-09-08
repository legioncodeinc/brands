import React, { useEffect, useRef } from 'react';
/* Lucide glyph. Requires <script src="https://unpkg.com/lucide@latest"> on the page (loaded lazily if missing). */
let loading;
function ensureLucide() {
  if (window.lucide) return Promise.resolve(window.lucide);
  if (!loading) loading = new Promise(res => { const s = document.createElement('script'); s.src = 'https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js'; s.onload = () => res(window.lucide); document.head.appendChild(s); });
  return loading;
}
export function Icon({ name, size = 16, strokeWidth = 2, color, className, style }) {
  const ref = useRef(null);
  useEffect(() => {
    let alive = true;
    ensureLucide().then(l => { if (alive && ref.current && l) l.createIcons({ nameAttr: 'data-lucide', attrs: { width: size, height: size, 'stroke-width': strokeWidth }, nodes: [ref.current] }); });
    return () => { alive = false; };
  }, [name, size, strokeWidth]);
  return <span ref={ref} className={className} style={{ display: 'inline-flex', width: size, height: size, flexShrink: 0, color, alignItems: 'center', justifyContent: 'center', ...style }}><i data-lucide={name} style={{ width: size, height: size }}></i></span>;
}
