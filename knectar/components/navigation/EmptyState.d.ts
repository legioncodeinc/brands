import * as React from 'react';
/** Centred dashed-border empty state with icon, title, description and primary action. */
export interface EmptyStateProps {
  icon?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: string;
  onAction?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function EmptyState(props: EmptyStateProps): JSX.Element;
