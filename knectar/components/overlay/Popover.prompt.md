Click-to-open floating panel anchored to a trigger.

```jsx
<Popover trigger={<Button variant="outline">Columns</Button>}>…</Popover>
```

Props: trigger: React.ReactNode; children?: React.ReactNode; align?: 'start'|'end'; side?: 'bottom'|'top'|'right'; width?: number; padding?: number; open?: boolean; onOpenChange?: (v: boolean) => void; style?: React.CSSProperties;
