import * as React from 'react';
/** Square-cornered toggle switch (36×20 md, 44×24 default) — not a pill, per rflectr legacy UI. */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (v: boolean) => void;
  size?: 'md'|'default';
  disabled?: boolean;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Switch(props: SwitchProps): JSX.Element;
