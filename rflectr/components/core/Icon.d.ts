import * as React from "react"
export type IconName =
  | "activity"
  | "route"
  | "layers"
  | "boxes"
  | "wallet"
  | "scroll"
  | "grid"
  | "stethoscope"
  | "settings"
  | "search"
  | "refresh"
  | "play"
  | "square"
  | "power"
  | "eye"
  | "check"
  | "x"
  | "chevronDown"
  | "chevronRight"
  | "alertTriangle"
  | "alertCircle"
  | "info"
  | "bell"
  | "plus"
  | "more"
  | "externalLink"
  | "lock"
  | "shield"
  | "clock"
  | "terminal"
  | "monitor"
  | "download"
  | "copy"
  | "filter"
  | "arrowRight"
  | "minimize"
  | "maximize"
  | "sidebar"
  | "zap"
  | "loader"
  | "cpu"
  | "database"
  | "key"
/** Lucide-derived stroke icon (MIT). 16px default, 1.75 stroke. */
export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: IconName
  size?: number
  strokeWidth?: number
  color?: string
  title?: string
}
export function Icon(props: IconProps): JSX.Element
export const ICON_PATHS: Record<IconName, string>
