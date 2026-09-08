import * as React from 'react';
/** Right-side slide-over panel (640px) for log details and entity forms. */
export interface SheetProps {
  open: boolean;
  onClose?: () => void;
  side?: 'right'|'left';
  width?: number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  headerExtra?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  inline?: boolean;
  style?: React.CSSProperties;
}
export function Sheet(props: SheetProps): JSX.Element;
