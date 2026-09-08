import * as React from 'react';
/** Path trail with chevron separators; last item is current page. */
export interface BreadcrumbProps {
  items: { label: React.ReactNode;
  href?: string;
  onClick?: () => void }[];
  style?: React.CSSProperties;
}
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
