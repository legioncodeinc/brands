import * as React from "react"
import type { IconName } from "../core/Icon"
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  hint?: string
  error?: string
  icon?: IconName /** Geist Mono for IDs, endpoints, digests */
  mono?: boolean /** password field with lock glyph — one-way secret entry, never shows a reveal control */
  secret?: boolean
}
export function Input(props: InputProps): JSX.Element
