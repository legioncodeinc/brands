Dense metadata table (request ledger, compatibility matrix, policy list). Numbers right-aligned in mono. Loading renders shimmer rows.
```jsx
<DataTable dense columns={[{key:"time",label:"Time",mono:true},{key:"harness",label:"Harness"},{key:"latency",label:"Latency",align:"right",render:r=>r.latencyMs+" ms"}]} rows={rows} onRowClick={open} />
```
Wrap in `<Card flush>`.