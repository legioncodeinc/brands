import * as React from 'react';
/** Horizontal progress/budget bar; `tone` recolours by threshold. */
export interface ProgressProps {
  value?: number;
  tone?: string;
  height?: number;
  style?: React.CSSProperties;
}
export function Progress(props: ProgressProps): JSX.Element;
