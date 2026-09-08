Button for every action in the shell; `route` variant is green and reserved for committing a route (Enable route, Launch in Route). Use `primary` for ordinary confirmations.
```jsx
<Button variant="route" icon="play">Launch in Route</Button>
<Button variant="secondary" icon="refresh">Rescan</Button>
<Button variant="danger" size="sm">Turn Off &amp; drain</Button>
```
Props: variant (primary|route|secondary|ghost|danger), size (sm 26px|md 32px|lg 38px), icon/iconRight, loading (spinner, disables).