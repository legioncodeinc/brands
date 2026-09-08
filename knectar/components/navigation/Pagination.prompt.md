Table footer: range summary, rows-per-page select, Previous/Next.

```jsx
<Pagination offset={0} limit={25} total={1204} onChange={setPage} />
```

Props: offset?: number; limit?: number; total?: number; onChange?: (p: { offset: number; limit: number }) => void; pageSizes?: number[]; style?: React.CSSProperties;
