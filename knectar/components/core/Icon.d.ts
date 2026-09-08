import * as React from 'react';
/** Lucide glyph wrapper; the single icon source for components and kits. */
export interface IconProps {
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
