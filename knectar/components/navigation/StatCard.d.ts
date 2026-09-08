import * as React from 'react';
/** KPI tile: muted title + icon, large mono value, optional sub-value and info tooltip. */
export interface StatCardProps {
  title: React.ReactNode;
  value: React.ReactNode;
  subValue?: React.ReactNode;
  icon?: string;
  description?: string;
  trend?: string;
  animate?: boolean;
  style?: React.CSSProperties;
}
export function StatCard(props: StatCardProps): JSX.Element;
