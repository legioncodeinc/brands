import * as React from "react"
export interface ActionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** blocking items cannot be dismissed while they affect route availability */ severity?:
    | "blocking"
    | "warning"
    | "info"
  title: string
  source?: string /** stable reason code, e.g. COMPAT_STALE */
  reason?: string /** effect on routing */
  effect?: string
  time?: string
  count?: number
  state?: "Open" | "Acknowledged" | "Dismissed" | "Resolved" | "Superseded"
  actions?: React.ReactNode
}
export function ActionItem(props: ActionItemProps): JSX.Element
