import * as React from 'react';
/**
 * ⌘K command bar — the primary navigation surface: searchable, grouped pages and actions with keyboard navigation.
 * @startingPoint section="Navigation" subtitle="⌘K command bar" viewport="700x400"
 */
export interface CommandBarProps {
  open: boolean;
  onClose?: () => void;
  onNavigate?: (url: string, item: any) => void;
  items?: any[];
  commands?: { title: string; icon?: string; run?: () => void }[];
  recent?: string[];
  placeholder?: string;
}
export function CommandBar(props: CommandBarProps): JSX.Element;
