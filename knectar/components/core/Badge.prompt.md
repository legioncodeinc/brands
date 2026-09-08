Small status/category chip (22px, 4px radius, tinted bg + 50% border); `tone` maps any color token for request-type chips.

```jsx
<Badge variant="success">success</Badge>
<Badge tone="--type-chat">Chat</Badge>
```

Props: variant?: 'default'|'secondary'|'destructive'|'outline'|'success'|'warning'|'info'; tone?: string; icon?: string; mono?: boolean; children?: React.ReactNode; style?: React.CSSProperties;
