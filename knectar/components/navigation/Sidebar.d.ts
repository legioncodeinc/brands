import * as React from 'react';
/**
 * The rflectr workspace sidebar: rail-first (56px icon rail, expands to 256px), ⌘K trigger, staggered nav reveal, fluttering mark while busy, env pill, user menu with Logout.
 * @startingPoint section="Navigation" subtitle="The knectar workspace sidebar: logo, env label, ⌘K search, grouped nav with sub-items, footer links, theme toggle, user menu with logout, version; collapses to a 48px icon rail" viewport="700x400"
 */
export interface SidebarProps {
  items?: any[];
  activeUrl?: string;
  onNavigate?: (url: string, item: any) => void;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onCommand?: () => void;
  busy?: boolean;
  onCollapsedChange?: (v: boolean) => void;
  envLabel?: string;
  version?: string;
  user?: { name: string;
  email?: string };
  onLogout?: () => void;
  theme?: 'dark'|'light';
  promo?: React.ReactNode;
  height?: string|number;
  style?: React.CSSProperties;
}
export function Sidebar(props: SidebarProps): JSX.Element;
