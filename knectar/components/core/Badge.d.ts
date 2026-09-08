import * as React from 'react';
/**
 * Small status/category chip (22px, 4px radius, tinted bg + 50% border); `tone` maps any color token for request-type chips.
 * @startingPoint section="Badges" subtitle="Small status/category chip (22px, 4px radius, tinted bg + 50% border); `tone` maps any color token for request-type chips" viewport="700x120"
 */
export interface BadgeProps {
  variant?: 'default'|'secondary'|'destructive'|'outline'|'success'|'warning'|'info';
  tone?: string;
  icon?: string;
  mono?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
