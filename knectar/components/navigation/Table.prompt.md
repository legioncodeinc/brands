Data table (40px header, 36px rows, muted header band, hover rows, sortable columns) in a bordered card.

```jsx
<Table columns={[{key:"model",label:"Model",mono:true},{key:"latency",label:"Latency",align:"right",sortable:true}]} rows={rows} onRowClick={open} />
```

Props: columns: { key: string; label?: React.ReactNode; width?: number|string; align?: 'left'|'right'|'center'; mono?: boolean; muted?: boolean; sortable?: boolean; onSort?: () => void; maxWidth?: number; render?: (row: any) => React.ReactNode }[]; rows: any[]; onRowClick?: (row: any) => void; selectedId?: string|number; rowKey?: string; emptyText?: string; bordered?: boolean; dense?: boolean; style?: React.CSSProperties;
