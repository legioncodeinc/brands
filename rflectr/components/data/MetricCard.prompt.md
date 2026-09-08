KPI tile. Every number carries its provenance; estimates get `estimated` (renders ~). Never merge cost bases into one tile.
```jsx
<MetricCard label="Estimated API cost" value="$4.18" estimated source="API rate estimated" meta="Rate card rev 3" />
<MetricCard label="Routed requests" value="1,204" tone="route" />
```