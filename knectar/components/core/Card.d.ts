import * as React from 'react';
/**
 * Surface container with optional header (title/description/action) and footer; 4px radius, 1px border, 24px padding.
 * @startingPoint section="Cards" subtitle="Surface container with optional header (title/description/action) and footer; 4px radius, 1px border, 24px padding" viewport="700x220"
 */
export interface CardProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  footer?: React.ReactNode;
  padding?: number;
  accent?: boolean;
  interactive?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
