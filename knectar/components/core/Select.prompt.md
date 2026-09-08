Single-value dropdown (36px trigger, popover list with check on selected).

```jsx
<Select value={v} onChange={setV} options={[{value:"openai",label:"OpenAI"}]} />
```

Props: value?: string|number; onChange?: (v: any) => void; options: { value: any; label: string; icon?: string }[]; placeholder?: string; size?: 'default'|'sm'; disabled?: boolean; fullWidth?: boolean; style?: React.CSSProperties;
