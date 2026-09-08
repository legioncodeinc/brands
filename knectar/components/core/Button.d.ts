import * as React from 'react';
/**
 * Primary action control (32px, 8px radius); default is the nectar gradient with a glow on hover. Seven variants, four sizes.
 * @startingPoint section="Buttons" subtitle="Nectar-gradient primary, outline, ghost, destructive, link" viewport="700x170"
 */
export interface ButtonProps {
  variant?: 'default'|'destructive'|'outline'|'secondary'|'ghost'|'link'|'nectar';
  size?: 'default'|'sm'|'lg'|'icon';
  icon?: string;
  iconRight?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button'|'submit';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
