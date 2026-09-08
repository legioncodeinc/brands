import * as React from 'react';
/** Click-to-open floating panel anchored to a trigger. */
export interface PopoverProps {
  trigger: React.ReactNode;
  children?: React.ReactNode;
  align?: 'start'|'end';
  side?: 'bottom'|'top'|'right';
  width?: number;
  padding?: number;
  open?: boolean;
  onOpenChange?: (v: boolean) => void;
  style?: React.CSSProperties;
}
export function Popover(props: PopoverProps): JSX.Element;
