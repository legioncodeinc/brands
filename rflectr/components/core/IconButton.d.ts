import * as React from "react"
import type { IconName } from "./Icon"
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName /** required accessible name */
  label: string
  size?: "sm" | "md"
  variant?: "ghost" | "outline"
  active?: boolean
}
export function IconButton(props: IconButtonProps): JSX.Element
