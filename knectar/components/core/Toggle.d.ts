import * as React from 'react';
/** Pressable toggle button (ghost or outline) for view switches like chart type or polling. */
export interface ToggleProps {
  pressed?: boolean;
  onChange?: (v: boolean) => void;
  icon?: string;
  variant?: 'default'|'outline';
  size?: 'default'|'sm';
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Toggle(props: ToggleProps): JSX.Element;
