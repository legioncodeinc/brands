import * as React from 'react';
/**
 * Inline banner (default/info/warning/destructive/success) with icon column, title, body and optional action.
 * @startingPoint section="Feedback" subtitle="Inline banner (default/info/warning/destructive/success) with icon column, title, body and optional action" viewport="700x260"
 */
export interface AlertProps {
  variant?: 'default'|'destructive'|'info'|'warning'|'success';
  icon?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Alert(props: AlertProps): JSX.Element;
