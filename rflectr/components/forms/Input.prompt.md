Text field; `secret` renders one-way credential entry (no reveal, no copy), `mono` for endpoints/IDs.
```jsx
<Input label="Account label" placeholder="Work · Anthropic" />
<Input label="API key" secret hint="Stored in the OS secret service. Never shown again." />
<Input icon="search" placeholder="Search request ID, provider, model" />
```