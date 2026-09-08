import * as React from 'react';
/**
 * Segmented tab list (36px, muted track, 8px radius) or `variant="line"` underline tabs.
 * @startingPoint section="Navigation" subtitle="Segmented tab list (36px, muted track, 8px radius) or `variant="line"` underline tabs" viewport="700x120"
 */
export interface TabsProps {
  tabs: { value: string;
  label: React.ReactNode;
  icon?: string;
  count?: number }[];
  value: string;
  onChange?: (v: string) => void;
  variant?: 'default'|'line';
  fullWidth?: boolean;
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;
