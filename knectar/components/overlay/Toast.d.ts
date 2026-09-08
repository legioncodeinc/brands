import * as React from 'react';
/** Sonner-style notification card (356px) with loading/success/error/warning/info icon. */
export interface ToastProps {
  type?: 'default'|'loading'|'success'|'error'|'warning'|'info';
  title: React.ReactNode;
  description?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export function Toast(props: ToastProps): JSX.Element;
