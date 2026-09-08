import * as React from "react"
/** @startingPoint section="Data" subtitle="Animated harness → provider route line" viewport="700x160" */
export interface RouteLineProps extends React.HTMLAttributes<HTMLDivElement> {
  from: string
  fromMeta?: string
  to?: string
  toMeta?: string
  state?: "Off" | "Observe" | "Route" | "Draining" | "Failed"
}
export function RouteLine(props: RouteLineProps): JSX.Element
