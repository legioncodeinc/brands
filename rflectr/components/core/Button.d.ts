import * as React from "react"
import type { IconName } from "./Icon"
/** @startingPoint section="Controls" subtitle="Primary, route, secondary, ghost, danger" viewport="700x200" */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = neutral paper button; route = green, reserved for enabling/confirming a route */
  variant?: "primary" | "route" | "secondary" | "ghost" | "danger"
  size?: "sm" | "md" | "lg"
  icon?: IconName
  iconRight?: IconName
  loading?: boolean
}
export function Button(props: ButtonProps): JSX.Element
