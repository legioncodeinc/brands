import React from 'react';
import { Button } from './Button.jsx';
/* Button size="icon" convenience — 36px square (size-9) or 28px (h-7 w-7 used in table row actions). */
export function IconButton({ icon, label, small, variant = 'ghost', style, ...rest }) {
  return <Button variant={variant} size="icon" icon={icon} aria-label={label} title={label} style={{ ...(small ? { width: 28, height: 28 } : {}), ...style }} {...rest} />;
}
