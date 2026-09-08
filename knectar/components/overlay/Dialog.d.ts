import * as React from 'react';
/**
 * Centred modal (max 512px, 8px radius, 24px padding) over a 60% black overlay; `inline` renders without the overlay for cards.
 * @startingPoint section="Overlays" subtitle="Centred modal (max 512px, 8px radius, 24px padding) over a 60% black overlay; `inline` renders without the overlay for cards" viewport="700x260"
 */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  width?: number;
  inline?: boolean;
  style?: React.CSSProperties;
}
export function Dialog(props: DialogProps): JSX.Element;
