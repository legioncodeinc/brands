import * as React from "react"
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "success" | "info" | "warn" | "error"
  title: string
  description?: string
  action?: string
  onAction?: () => void
}
export function Toast(props: ToastProps): JSX.Element
