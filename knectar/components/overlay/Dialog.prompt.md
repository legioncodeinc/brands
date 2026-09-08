Centred modal (max 512px, 8px radius, 24px padding) over a 60% black overlay; `inline` renders without the overlay for cards.

```jsx
<Dialog open={o} onClose={()=>setO(false)} title="Delete provider" description="This cannot be undone." footer={<><Button variant="outline">Cancel</Button><Button variant="destructive">Delete</Button></>} />
```

Props: open: boolean; onClose?: () => void; title?: React.ReactNode; description?: React.ReactNode; children?: React.ReactNode; footer?: React.ReactNode; width?: number; inline?: boolean; style?: React.CSSProperties;
