The rflectr workspace sidebar: rail-first (56px icon rail by default, expands to 256px), ⌘K command trigger (`onCommand`), staggered nav reveal, fluttering hummingbird while `busy`, env pill, user menu with Logout, version.

```jsx
<Sidebar activeUrl="/workspace/dashboard" onNavigate={setUrl} onCommand={() => setCmd(true)} envLabel="PRODUCTION" onLogout={logout} />
```

Props: items?: any[]; activeUrl?: string; onNavigate?: (url: string, item: any) => void; collapsed?: boolean; onCollapsedChange?: (v: boolean) => void; envLabel?: string; version?: string; user?: { name: string; email?: string }; onLogout?: () => void; theme?: 'dark'|'light'; onThemeToggle?: () => void; promo?: React.ReactNode; height?: string|number; style?: React.CSSProperties;
