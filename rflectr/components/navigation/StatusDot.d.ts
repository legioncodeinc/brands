import * as React from "react"
export type RuntimeState =
  | "Off"
  | "Starting"
  | "Ready"
  | "Observing"
  | "Routing"
  | "Draining"
  | "Failed"
  | "Healthy"
  | "Degraded"
  | "Offline"
  | "Observe"
  | "Route"
export interface StatusDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  state?: RuntimeState /** expanding ring while requests are active */
  live?: boolean /** override text; pass null to hide */
  label?: React.ReactNode
}
export function StatusDot(props: StatusDotProps): JSX.Element
