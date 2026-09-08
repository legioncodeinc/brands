import * as React from "react"
export interface DataColumn<T = unknown> {
  key: string
  label: React.ReactNode
  width?: number | string
  align?: "left" | "right"
  mono?: boolean
  sortable?: boolean
  render?: (row: T) => React.ReactNode
}
export interface DataTableProps<T = unknown> extends React.TableHTMLAttributes<HTMLTableElement> {
  columns: DataColumn<T>[]
  rows: T[]
  rowKey?: (row: T, i: number) => string | number
  onRowClick?: (row: T) => void
  selectedKey?: string | number
  sort?: { key: string; dir: "asc" | "desc" }
  onSort?: (key: string) => void
  dense?: boolean
  loading?: boolean
  emptyText?: string
}
export function DataTable<T = unknown>(props: DataTableProps<T>): JSX.Element
