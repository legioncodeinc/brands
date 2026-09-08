import * as React from "react"
export interface UsageWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  account?: string
  unit?: string
  used?: number
  limit?: number
  resetLabel?: string /** label shown + absolute ISO exposed on the <time> element */
  resetAt?: { label: string; iso: string } /** Provider API | Response metadata | Locally observed | User entered */
  source?: string
  confidence?: string
  stale?: boolean
  warnAt?: number
  blockAt?: number
}
export function UsageWindow(props: UsageWindowProps): JSX.Element
