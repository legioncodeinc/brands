import * as React from "react"
/** @startingPoint section="Data" subtitle="Metric with provenance label; ~ prefix for estimates" viewport="700x200" */
export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: React.ReactNode
  unit?: string /** prefixes value with ~ */
  estimated?: boolean /** provenance: Provider reported, Tokenizer estimated, User entered… */
  source?: string
  meta?: React.ReactNode
  tone?: "route"
}
export function MetricCard(props: MetricCardProps): JSX.Element
