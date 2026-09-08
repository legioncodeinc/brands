Multi-line input, min 64px, same border/focus treatment as Input.

```jsx
<Textarea rows={4} placeholder="System prompt" />
```

Props: value?: string; defaultValue?: string; onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; placeholder?: string; rows?: number; disabled?: boolean; mono?: boolean; style?: React.CSSProperties;
