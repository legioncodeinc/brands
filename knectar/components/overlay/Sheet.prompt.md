Right-side slide-over panel (640px) for log details and entity forms.

```jsx
<Sheet open={!!log} onClose={close} title="Request details" footer={<Button>Done</Button>}>…</Sheet>
```

Props: open: boolean; onClose?: () => void; side?: 'right'|'left'; width?: number; title?: React.ReactNode; description?: React.ReactNode; headerExtra?: React.ReactNode; children?: React.ReactNode; footer?: React.ReactNode; inline?: boolean; style?: React.CSSProperties;
