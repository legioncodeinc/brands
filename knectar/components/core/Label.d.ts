import * as React from 'react';
/** Form field label (13.2px/500) with optional required mark, hint or error line. */
export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  style?: React.CSSProperties;
}
export function Label(props: LabelProps): JSX.Element;
