import * as React from "react"
/** Pill label for states. If children is a known rflectr state word (Routing, Observing, Draining, Failed, Supported, Stale…) the tone is inferred. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "route" | "observe" | "warn" | "danger" | "neutral" | "off" /** leading state dot */
  dot?: boolean /** pulsing dot for live/active */
  live?: boolean
  mono?: boolean
  size?: "sm" | "md"
}
export function Badge(props: BadgeProps): JSX.Element
export const STATE_TONE: Record<string, string>
