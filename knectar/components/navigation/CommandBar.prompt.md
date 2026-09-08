⌘K command bar — the primary navigation surface in rflectr. Flattens the sidebar nav into searchable, grouped commands with arrow-key navigation; pass extra `commands` for actions.

```jsx
<CommandBar open={cmd} onClose={() => setCmd(false)} onNavigate={go} commands={[{ title: 'Toggle theme', icon: 'moon', run: toggle }]} recent={['/workspace/logs']} />
```

Open it from the sidebar's ⌘K button (`onCommand`) and a global keydown for ⌘/Ctrl+K.
