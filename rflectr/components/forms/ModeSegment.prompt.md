The rflectr three-way harness mode control (configured intent). Route segment disables with an exact reason when compatibility gates fail.
```jsx
<ModeSegment value={mode} onChange={setMode} />
<ModeSegment value="Observe" routeDisabled routeDisabledReason="Compatibility: Inconclusive for Cursor 3.18.25" />
```
Shows configured intent only; pair with a Badge for effective runtime state.