import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Icon } from '../core/Icon.jsx';
import { KNECTAR_NAV } from './Sidebar.jsx';
/* ⌘K command bar — the primary navigation surface in rflectr. Flattens the nav tree into searchable, grouped commands; arrow keys + Enter; extra `commands` for actions. */
export function CommandBar({ open, onClose, onNavigate, items = KNECTAR_NAV, commands = [], recent = [], placeholder = 'Jump to a page or run a command…' }) {
  const [q, setQ] = useState(''); const [i, setI] = useState(0); const ref = useRef(null);
  const all = useMemo(() => { const out = []; for (const g of items) { if (!g.subItems) out.push({ group: 'Pages', title: g.title, icon: g.icon, url: g.url }); else for (const s of g.subItems) out.push({ group: g.title, title: s.title, icon: s.icon, url: s.url }); } return [...commands.map(c => ({ group: 'Actions', ...c })), ...out]; }, [items, commands]);
  const list = useMemo(() => { const s = q.trim().toLowerCase(); const base = s ? all.filter(x => (x.title + ' ' + x.group).toLowerCase().includes(s)) : (recent.length ? [...recent.map(u => all.find(x => x.url === u)).filter(Boolean).map(x => ({ ...x, group: 'Recent' })), ...all] : all); return base.slice(0, 40); }, [q, all, recent]);
  useEffect(() => { if (open) { setQ(''); setI(0); setTimeout(() => ref.current && ref.current.focus(), 10); } }, [open]);
  useEffect(() => { setI(0); }, [q]);
  if (!open) return null;
  const run = it => { if (!it) return; onClose && onClose(); if (it.run) it.run(); else onNavigate && onNavigate(it.url, it); };
  const key = e => { if (e.key === 'ArrowDown') { e.preventDefault(); setI(v => Math.min(v + 1, list.length - 1)); } else if (e.key === 'ArrowUp') { e.preventDefault(); setI(v => Math.max(v - 1, 0)); } else if (e.key === 'Enter') { e.preventDefault(); run(list[i]); } else if (e.key === 'Escape') { onClose && onClose(); } };
  let lastGroup = null;
  return <div onMouseDown={e => { if (e.target === e.currentTarget) onClose && onClose(); }} style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'var(--overlay)', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '14vh', animation: 'kn-fade var(--dur-base)' }}>
    <style>{'@keyframes kn-fade{from{opacity:0}}@keyframes kn-cmd-in{from{opacity:0;transform:translateY(-8px) scale(.98)}}'}</style>
    <div role="dialog" aria-label="Command bar" style={{ width: '100%', maxWidth: 620, background: 'var(--popover)', color: 'var(--popover-foreground)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg), var(--glow-nectar-sm)', overflow: 'hidden', animation: 'kn-cmd-in var(--dur-base) var(--ease-spring)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 16px', height: 52, borderBottom: '1px solid var(--border)' }}>
        <Icon name="search" size={18} color="var(--muted-foreground)" />
        <input ref={ref} value={q} onChange={e => setQ(e.target.value)} onKeyDown={key} placeholder={placeholder} style={{ flex: 1, height: '100%', background: 'transparent', border: 0, outline: 'none', color: 'var(--foreground)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)' }} />
        <kbd style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '2px 6px', borderRadius: 6, border: '1px solid var(--border)', background: 'var(--muted)', color: 'var(--muted-foreground)' }}>esc</kbd>
      </div>
      <div className="custom-scrollbar" style={{ maxHeight: 380, overflowY: 'auto', padding: 8 }}>
        {list.length === 0 && <div style={{ padding: '24px 12px', textAlign: 'center', color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)' }}>No matches for “{q}”.</div>}
        {list.map((it, idx) => { const head = it.group !== lastGroup; lastGroup = it.group; const act = idx === i; return <React.Fragment key={(it.url || it.title) + idx}>
          {head && <div style={{ padding: '10px 8px 4px', fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--text-tertiary)' }}>{it.group}</div>}
          <div onMouseEnter={() => setI(idx)} onClick={() => run(it)} style={{ display: 'flex', alignItems: 'center', gap: 10, height: 38, padding: '0 10px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', background: act ? 'var(--grad-nectar-soft)' : 'transparent', color: act ? 'var(--foreground)' : 'var(--text-secondary)', boxShadow: act ? 'inset 0 0 0 1px rgba(61,220,151,.35)' : 'none', fontSize: 'var(--text-sm)' }}>
            <span style={{ width: 26, height: 26, borderRadius: 8, display: 'grid', placeItems: 'center', background: act ? 'var(--grad-nectar)' : 'var(--muted)', color: act ? 'var(--ink-900)' : 'var(--muted-foreground)', transition: 'all var(--dur-fast)' }}><Icon name={it.icon || 'corner-down-left'} size={14} /></span>
            <span style={{ flex: 1, fontWeight: act ? 500 : 400 }}>{it.title}</span>
            {it.url && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{it.url.replace('/workspace', '')}</span>}
            {act && <Icon name="corner-down-left" size={14} color="var(--brand-primary)" />}
          </div>
        </React.Fragment>; })}
      </div>
      <div style={{ display: 'flex', gap: 14, padding: '8px 16px', borderTop: '1px solid var(--border)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}><span><b style={{ fontFamily: 'var(--font-mono)' }}>↑↓</b> navigate</span><span><b style={{ fontFamily: 'var(--font-mono)' }}>↵</b> open</span><span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6 }}><img src="../../assets/mark-on-light.svg" alt="" style={{ height: 12 }} className="kn-mark" />rflectr</span></div>
    </div>
  </div>;
}
