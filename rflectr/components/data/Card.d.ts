import * as React from "react"
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode
  actions?: React.ReactNode
  footer?: React.ReactNode
  variant?: "card" | "panel"
  dense?: boolean /** no body padding (tables) */
  flush?: boolean
  interactive?: boolean
  selected?: boolean
}
export function Card(props: CardProps): JSX.Element
