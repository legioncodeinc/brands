import * as React from 'react';
/** Stacked collapsible sections with rotating chevron. */
export interface AccordionProps {
  items: { value: string;
  label: React.ReactNode;
  icon?: string;
  badge?: React.ReactNode;
  content: React.ReactNode }[];
  defaultOpen?: string[];
  multiple?: boolean;
  style?: React.CSSProperties;
}
export function Accordion(props: AccordionProps): JSX.Element;
