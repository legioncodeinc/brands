import * as React from 'react';
/** Menu of actions (items, separators, labels, destructive) opened from a trigger. */
export interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: ({ type?: 'item';
  label: string;
  icon?: string;
  shortcut?: string;
  destructive?: boolean;
  disabled?: boolean;
  onSelect?: () => void } | { type: 'separator' } | { type: 'label';
  label: string })[];
  align?: 'start'|'end';
  side?: 'bottom'|'top';
  width?: number;
}
export function DropdownMenu(props: DropdownMenuProps): JSX.Element;
