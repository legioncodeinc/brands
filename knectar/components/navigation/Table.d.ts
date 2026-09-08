import * as React from 'react';
/**
 * Data table (40px header, 36px rows, muted header band, hover rows, sortable columns) in a bordered card.
 * @startingPoint section="Data" subtitle="Data table (40px header, 36px rows, muted header band, hover rows, sortable columns) in a bordered card" viewport="700x260"
 */
export interface TableProps {
  columns: { key: string;
  label?: React.ReactNode;
  width?: number|string;
  align?: 'left'|'right'|'center';
  mono?: boolean;
  muted?: boolean;
  sortable?: boolean;
  onSort?: () => void;
  maxWidth?: number;
  render?: (row: any) => React.ReactNode }[];
  rows: any[];
  onRowClick?: (row: any) => void;
  selectedId?: string|number;
  rowKey?: string;
  emptyText?: string;
  bordered?: boolean;
  dense?: boolean;
  freshKey?: string;
  style?: React.CSSProperties;
}
export function Table(props: TableProps): JSX.Element;
