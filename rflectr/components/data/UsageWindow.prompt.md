Provider/account usage window with used/limit bar, reset time (countdown + absolute), source and confidence. Unknown stays unknown (hatched bar).
```jsx
<UsageWindow name="5-hour window" account="Anthropic · Work" used={312} limit={500} resetAt={{label:"in 2h 14m",iso:"2026-09-03T19:00:00Z"}} source="Provider API" confidence="High" />
<UsageWindow name="Weekly" account="Local · Ollama" source="Locally observed" />
```
Bar turns amber at warnAt (0.8) and red at blockAt; never green.