Surface container with optional header (title/description/action) and footer; 4px radius, 1px border, 24px padding.

```jsx
<Card title="Provider keys" description="Rotate every 90 days" action={<Button size="sm" variant="outline">Add</Button>}>…</Card>
```

Props: title?: React.ReactNode; description?: React.ReactNode; action?: React.ReactNode; footer?: React.ReactNode; padding?: number; children?: React.ReactNode; style?: React.CSSProperties;
