import * as React from "react"
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  title: React.ReactNode
  description?: React.ReactNode
  footer?: React.ReactNode
  onClose?: () => void /** danger for destructive / trust-changing confirmations */
  tone?: "danger"
  wide?: boolean /** render without the fixed scrim (for cards/specimens) */
  inline?: boolean
}
export function Dialog(props: DialogProps): JSX.Element | null
