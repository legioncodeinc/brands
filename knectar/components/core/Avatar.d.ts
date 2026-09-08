import * as React from 'react';
/** Round user avatar with initials fallback — the only fully-round element. */
export interface AvatarProps {
  src?: string;
  name?: string;
  size?: number;
  style?: React.CSSProperties;
}
export function Avatar(props: AvatarProps): JSX.Element;
