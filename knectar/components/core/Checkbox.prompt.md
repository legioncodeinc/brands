16px square checkbox (4px radius), green when checked, supports indeterminate.

```jsx
<Checkbox checked={c} onChange={setC} label="Enable polling" />
```

Props: checked?: boolean; onChange?: (v: boolean) => void; label?: React.ReactNode; disabled?: boolean; indeterminate?: boolean; style?: React.CSSProperties;
