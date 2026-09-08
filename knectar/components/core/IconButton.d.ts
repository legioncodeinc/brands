import * as React from 'react';
/** Square icon-only button (36px, or 28px with `small`) for row actions, close, copy. */
export interface IconButtonProps {
  icon: string;
  label: string;
  small?: boolean;
  variant?: 'default'|'destructive'|'outline'|'secondary'|'ghost';
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;
