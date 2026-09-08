Text input (36px, 4px radius, green focus border) with optional leading icon, copy button, kbd hint and mono mode.

```jsx
<Input placeholder="sk-…" mono showCopyButton />
<Input size="sm" icon="search" placeholder="Search..." kbd={["⌘","K"]} />
```

Props: value?: string; defaultValue?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string; type?: string; disabled?: boolean; invalid?: boolean; icon?: string; showCopyButton?: boolean; mono?: boolean; size?: 'default'|'sm'; kbd?: string[]; style?: React.CSSProperties; inputStyle?: React.CSSProperties;
