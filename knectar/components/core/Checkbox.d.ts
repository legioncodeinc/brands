import * as React from 'react';
/** 16px square checkbox (4px radius), green when checked, supports indeterminate. */
export interface CheckboxProps {
  checked?: boolean;
  onChange?: (v: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  indeterminate?: boolean;
  style?: React.CSSProperties;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
