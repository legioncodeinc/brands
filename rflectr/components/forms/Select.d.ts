import * as React from "react"
export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: Array<string | SelectOption>
  size?: "sm" | "md"
}
export function Select(props: SelectProps): JSX.Element
