Primary action control (30px tall, 4px radius) with six variants and four sizes, mirrors rflectr legacy UI button.tsx.

```jsx
<Button icon="plus">Add provider</Button>
<Button variant="outline" size="sm">Cancel</Button>
```

Props: variant?: 'default'|'destructive'|'outline'|'secondary'|'ghost'|'link'; size?: 'default'|'sm'|'lg'|'icon'; icon?: string; iconRight?: string; isLoading?: boolean; disabled?: boolean; onClick?: () => void; type?: 'button'|'submit'; children?: React.ReactNode; style?: React.CSSProperties;
