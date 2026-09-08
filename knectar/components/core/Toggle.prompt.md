Pressable toggle button (ghost or outline) for view switches like chart type or polling.

```jsx
<Toggle icon="radio" pressed={live} onChange={setLive}>Live</Toggle>
```

Props: pressed?: boolean; onChange?: (v: boolean) => void; icon?: string; variant?: 'default'|'outline'; size?: 'default'|'sm'; disabled?: boolean; children?: React.ReactNode; style?: React.CSSProperties;
