import * as React from 'react';
/**
 * Text input (36px, 4px radius, green focus border) with optional leading icon, copy button, kbd hint and mono mode.
 * @startingPoint section="Forms" subtitle="Text input (36px, 4px radius, green focus border) with optional leading icon, copy button, kbd hint and mono mode" viewport="700x200"
 */
export interface InputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  invalid?: boolean;
  icon?: string;
  showCopyButton?: boolean;
  mono?: boolean;
  size?: 'default'|'sm';
  kbd?: string[];
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
