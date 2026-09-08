import * as React from 'react';
/** Single-thumb range slider with green filled track. */
export interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (v: number) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Slider(props: SliderProps): JSX.Element;
