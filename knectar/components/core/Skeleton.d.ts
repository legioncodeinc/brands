import * as React from 'react';
/** Pulsing placeholder block for loading states. */
export interface SkeletonProps {
  width?: number|string;
  height?: number|string;
  radius?: string|number;
  style?: React.CSSProperties;
}
export function Skeleton(props: SkeletonProps): JSX.Element;
