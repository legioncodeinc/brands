Segmented tab list (36px, muted track, 8px radius) or `variant="line"` underline tabs.

```jsx
<Tabs value={t} onChange={setT} tabs={[{value:"curl",label:"cURL"},{value:"openai",label:"OpenAI SDK"}]} />
```

Props: tabs: { value: string; label: React.ReactNode; icon?: string; count?: number }[]; value: string; onChange?: (v: string) => void; variant?: 'default'|'line'; fullWidth?: boolean; style?: React.CSSProperties;
