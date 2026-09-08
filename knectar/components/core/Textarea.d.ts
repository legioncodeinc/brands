import * as React from 'react';
/** Multi-line input, min 64px, same border/focus treatment as Input. */
export interface TextareaProps {
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  mono?: boolean;
  style?: React.CSSProperties;
}
export function Textarea(props: TextareaProps): JSX.Element;
