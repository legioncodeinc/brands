import * as React from "react"
import type { IconName } from "../core/Icon"
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: IconName
  title: string /** say whether to configure, change filters, wait, enable retention, or fix a subsystem */
  description?: string
  actions?: React.ReactNode
  tone?: "error" | "stale"
}
export function EmptyState(props: EmptyStateProps): JSX.Element
