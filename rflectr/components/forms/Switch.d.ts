import * as React from "react"
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  description?: string /** route = green when on (route-related toggles); neutral = paper when on (preferences) */
  tone?: "route" | "neutral"
}
export function Switch(props: SwitchProps): JSX.Element
