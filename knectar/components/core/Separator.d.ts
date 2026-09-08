import * as React from 'react';
/** 1px divider, horizontal or vertical. */
export interface SeparatorProps {
  orientation?: 'horizontal'|'vertical';
  style?: React.CSSProperties;
}
export function Separator(props: SeparatorProps): JSX.Element;
