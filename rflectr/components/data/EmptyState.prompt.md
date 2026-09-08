Collection state for empty / no-match / refresh-failed. The description must say what the user should do next.
```jsx
<EmptyState icon="filter" title="No requests match" description="Change filters or widen the time range. 1,204 records total." actions={<Button size="sm">Clear filters</Button>} />
<EmptyState tone="error" icon="alertCircle" title="Refresh failed" description="Showing snapshot from 4 min ago." actions={<Button size="sm">Retry</Button>} />
```