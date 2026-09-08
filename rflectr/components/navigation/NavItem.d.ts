import * as React from "react"
import type { IconName } from "../core/Icon"
export interface NavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconName
  label: string
  active?: boolean
  count?: number /** amber count for unresolved action items */
  alert?: boolean
}
export function NavItem(props: NavItemProps): JSX.Element
