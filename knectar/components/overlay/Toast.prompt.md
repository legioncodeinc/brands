Sonner-style notification card (356px) with loading/success/error/warning/info icon.

```jsx
<Toast type="success" title="Cost recalculation complete" description="1,204 updated, 3 skipped" />
```

Props: type?: 'default'|'loading'|'success'|'error'|'warning'|'info'; title: React.ReactNode; description?: React.ReactNode; onClose?: () => void; style?: React.CSSProperties;
