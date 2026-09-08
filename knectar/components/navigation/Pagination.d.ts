import * as React from 'react';
/** Table footer: range summary, rows-per-page select, Previous/Next. */
export interface PaginationProps {
  offset?: number;
  limit?: number;
  total?: number;
  onChange?: (p: { offset: number;
  limit: number }) => void;
  pageSizes?: number[];
  style?: React.CSSProperties;
}
export function Pagination(props: PaginationProps): JSX.Element;
