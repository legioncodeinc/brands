import * as React from "react"
export type HarnessMode = "Off" | "Observe" | "Route"
/** @startingPoint section="Controls" subtitle="Off / Observe / Route three-way mode control" viewport="700x160" */
export interface ModeSegmentProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: HarnessMode
  onChange?: (
    mode: HarnessMode,
  ) => void /** Route is unavailable when compatibility is unsupported/inconclusive/not tested/stale */
  routeDisabled?: boolean
  routeDisabledReason?: string
  size?: "sm" | "md"
}
export function ModeSegment(props: ModeSegmentProps): JSX.Element
