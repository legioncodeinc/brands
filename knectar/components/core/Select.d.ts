import * as React from 'react';
/** Single-value dropdown (36px trigger, popover list with check on selected). */
export interface SelectProps {
  value?: string|number;
  onChange?: (v: any) => void;
  options: { value: any;
  label: string;
  icon?: string }[];
  placeholder?: string;
  size?: 'default'|'sm';
  disabled?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;
