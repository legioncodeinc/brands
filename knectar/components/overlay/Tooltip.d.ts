import * as React from 'react';
/** Hover tooltip (12px text, popover surface, 8px offset). */
export interface TooltipProps {
  content: React.ReactNode;
  side?: 'top'|'bottom'|'left'|'right';
  children: React.ReactNode;
  forceOpen?: boolean;
  style?: React.CSSProperties;
}
export function Tooltip(props: TooltipProps): JSX.Element;
