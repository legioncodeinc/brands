Menu of actions (items, separators, labels, destructive) opened from a trigger.

```jsx
<DropdownMenu trigger={<IconButton icon="more-horizontal" label="Actions" small />} items={[{label:"Delete",icon:"trash-2",destructive:true}]} />
```

Props: trigger: React.ReactNode; items: ({ type?: 'item'; label: string; icon?: string; shortcut?: string; destructive?: boolean; disabled?: boolean; onSelect?: () => void } | { type: 'separator' } | { type: 'label'; label: string })[]; align?: 'start'|'end'; side?: 'bottom'|'top'; width?: number;
