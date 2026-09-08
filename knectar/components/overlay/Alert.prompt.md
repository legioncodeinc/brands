Inline banner (default/info/warning/destructive/success) with icon column, title, body and optional action.

```jsx
<Alert variant="warning" icon="triangle-alert" title="Restart required">Configuration changes require a server restart.</Alert>
```

Props: variant?: 'default'|'destructive'|'info'|'warning'|'success'; icon?: string; title?: React.ReactNode; children?: React.ReactNode; action?: React.ReactNode; style?: React.CSSProperties;
