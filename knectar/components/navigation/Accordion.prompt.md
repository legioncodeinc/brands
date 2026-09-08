Stacked collapsible sections with rotating chevron.

```jsx
<Accordion items={[{value:"req",label:"Request",content:<pre>…</pre>}]} defaultOpen={["req"]} />
```

Props: items: { value: string; label: React.ReactNode; icon?: string; badge?: React.ReactNode; content: React.ReactNode }[]; defaultOpen?: string[]; multiple?: boolean; style?: React.CSSProperties;
