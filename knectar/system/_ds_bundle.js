/* @ds-bundle: {"format":4,"namespace":"KnectarDesignSystem_8b539c","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Label","sourcePath":"components/core/Label.jsx"},{"name":"Progress","sourcePath":"components/core/Progress.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Separator","sourcePath":"components/core/Separator.jsx"},{"name":"Skeleton","sourcePath":"components/core/Skeleton.jsx"},{"name":"Slider","sourcePath":"components/core/Slider.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"},{"name":"Toggle","sourcePath":"components/core/Toggle.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"CommandBar","sourcePath":"components/navigation/CommandBar.jsx"},{"name":"EmptyState","sourcePath":"components/navigation/EmptyState.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"KNECTAR_NAV","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"StatCard","sourcePath":"components/navigation/StatCard.jsx"},{"name":"Table","sourcePath":"components/navigation/Table.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Alert","sourcePath":"components/overlay/Alert.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"DropdownMenu","sourcePath":"components/overlay/DropdownMenu.jsx"},{"name":"Popover","sourcePath":"components/overlay/Popover.jsx"},{"name":"Sheet","sourcePath":"components/overlay/Sheet.jsx"},{"name":"Toast","sourcePath":"components/overlay/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/overlay/Tooltip.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"709e006a88d4","components/core/Badge.jsx":"58b11564a71a","components/core/Button.jsx":"f9c310d65f6c","components/core/Card.jsx":"dec6532877a1","components/core/Checkbox.jsx":"51dc633b0e16","components/core/Icon.jsx":"0eb9fbdcc1b4","components/core/IconButton.jsx":"83f004132bab","components/core/Input.jsx":"6f34e77b0a77","components/core/Label.jsx":"4ef52971fefc","components/core/Progress.jsx":"cd5bf34f73b2","components/core/Select.jsx":"f51fb79cedba","components/core/Separator.jsx":"d5c29c3d81c4","components/core/Skeleton.jsx":"eb23adea20c9","components/core/Slider.jsx":"7d5603eac6f0","components/core/Switch.jsx":"276452a7b835","components/core/Textarea.jsx":"811a5e25abbd","components/core/Toggle.jsx":"cce8bef11b28","components/navigation/Accordion.jsx":"e3a14f2ba1c5","components/navigation/Breadcrumb.jsx":"140e866f2942","components/navigation/CommandBar.jsx":"52a14f44f8d2","components/navigation/EmptyState.jsx":"ded66f2e1e4e","components/navigation/Pagination.jsx":"c25bee1a2800","components/navigation/Sidebar.jsx":"0e61f794e989","components/navigation/StatCard.jsx":"8691b7f16135","components/navigation/Table.jsx":"fe4a860071ce","components/navigation/Tabs.jsx":"3462791860eb","components/overlay/Alert.jsx":"6861e0521053","components/overlay/Dialog.jsx":"2623ceeadcb1","components/overlay/DropdownMenu.jsx":"651c09d8c468","components/overlay/Popover.jsx":"9eb7fcf452bb","components/overlay/Sheet.jsx":"8912ac262a8b","components/overlay/Toast.jsx":"4b95fc64e9d7","components/overlay/Tooltip.jsx":"28b4caaff5ed","ui_kits/knectar-app/data.js":"5ddec187ade3","ui_kits/knectar-app/screens/dashboard.jsx":"210c870e7472","ui_kits/knectar-app/screens/logDetail.jsx":"53306b57be53","ui_kits/knectar-app/screens/login.jsx":"006a8a46d3b8","ui_kits/knectar-app/screens/logs.jsx":"586c1e45d11d","ui_kits/knectar-app/screens/providers.jsx":"9488b6fa4c67","ui_kits/knectar-app/screens/virtualKeys.jsx":"80f5057cfc23"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KnectarDesignSystem_8b539c = window.KnectarDesignSystem_8b539c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
/* rflectr legacy ui/avatar.tsx — size-8 rounded-full; fallback bg-muted with initials. The only fully-round element in the system. */
function Avatar({
  src,
  name = '',
  size = 32,
  style
}) {
  const initials = name.split(/\s+/).map(s => s[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'inline-grid',
      placeItems: 'center',
      background: 'var(--muted)',
      color: 'var(--foreground)',
      fontSize: size * .375,
      fontWeight: 500,
      flexShrink: 0,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Nectar & wing card — 12px radius, 1px border, soft shadow, optional 1px nectar top-rail via `accent`, optional hover lift via `interactive`. */
function Card({
  title,
  description,
  action,
  footer,
  children,
  padding = 24,
  accent,
  interactive,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      background: 'var(--card)',
      color: 'var(--card-foreground)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border)',
      padding: `${padding}px 0`,
      boxShadow: interactive && h ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: interactive && h ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
      overflow: 'hidden',
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: 'var(--grad-nectar)'
    }
  }), (title || description || action) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: action ? '1fr auto' : '1fr',
      gap: 6,
      padding: `0 ${padding}px`,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      lineHeight: 1.2,
      fontSize: 'var(--text-base)',
      letterSpacing: '-0.01em'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--muted-foreground)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-sm)'
    }
  }, description)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 2,
      gridRow: '1 / span 2',
      justifySelf: 'end'
    }
  }, action)), children != null && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${padding}px`
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: `0 ${padding}px`
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const {
  useEffect,
  useRef
} = React;
/* Lucide glyph. Requires <script src="https://unpkg.com/lucide@latest"> on the page (loaded lazily if missing). */
let loading;
function ensureLucide() {
  if (window.lucide) return Promise.resolve(window.lucide);
  if (!loading) loading = new Promise(res => {
    const s = document.createElement('script');
    s.src = 'https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js';
    s.onload = () => res(window.lucide);
    document.head.appendChild(s);
  });
  return loading;
}
function Icon({
  name,
  size = 16,
  strokeWidth = 2,
  color,
  className,
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    let alive = true;
    ensureLucide().then(l => {
      if (alive && ref.current && l) l.createIcons({
        nameAttr: 'data-lucide',
        attrs: {
          width: size,
          height: size,
          'stroke-width': strokeWidth
        },
        nodes: [ref.current]
      });
    });
    return () => {
      alive = false;
    };
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: className,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flexShrink: 0,
      color,
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* rflectr legacy ui/badge.tsx — rounded-sm, px-2 py-0.5, text-xs/500, 1px border. Extra `tone` prop maps log status / request-type tokens. */
const V = {
  default: {
    background: 'var(--brand-primary-subtle)',
    color: 'var(--primary)',
    borderColor: 'color-mix(in oklch,var(--primary) 50%,transparent)'
  },
  secondary: {
    background: 'var(--secondary)',
    color: 'var(--secondary-foreground)',
    borderColor: 'transparent'
  },
  destructive: {
    background: 'var(--status-error-bg)',
    color: 'var(--status-error)',
    borderColor: 'color-mix(in oklch,var(--status-error) 50%,transparent)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--foreground)',
    borderColor: 'var(--border)'
  },
  success: {
    background: 'var(--status-success-bg)',
    color: 'var(--status-success)',
    borderColor: 'color-mix(in oklch,var(--status-success) 50%,transparent)'
  },
  warning: {
    background: 'var(--status-warning-bg)',
    color: 'var(--status-warning)',
    borderColor: 'color-mix(in oklch,var(--status-warning) 50%,transparent)'
  },
  info: {
    background: 'var(--status-info-bg)',
    color: 'var(--status-info)',
    borderColor: 'color-mix(in oklch,var(--status-info) 50%,transparent)'
  }
};
function Badge({
  variant = 'default',
  tone,
  icon,
  mono,
  children,
  style,
  ...rest
}) {
  const v = tone ? {
    background: `color-mix(in oklch,var(${tone}) 14%,transparent)`,
    color: `var(${tone})`,
    borderColor: `color-mix(in oklch,var(${tone}) 35%,transparent)`
  } : V[variant] || V.default;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      width: 'fit-content',
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid',
      padding: '2px 8px',
      fontSize: 'var(--text-xs)',
      lineHeight: 'var(--lh-xs)',
      fontWeight: 600,
      letterSpacing: '-0.005em',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      flexShrink: 0,
      ...v,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/* Nectar & wing button — 32px, 8px radius. Primary = nectar gradient with glow on hover; press scales to .98. */
const V = {
  default: {
    background: 'var(--grad-nectar)',
    color: 'var(--ink-900)',
    border: '1px solid transparent',
    boxShadow: 'var(--glow-nectar-sm)',
    hover: {
      boxShadow: 'var(--glow-nectar)',
      filter: 'brightness(1.04)'
    }
  },
  destructive: {
    background: 'var(--destructive)',
    color: '#fff',
    border: '1px solid transparent',
    fontWeight: 500,
    hover: {
      opacity: .9
    }
  },
  outline: {
    background: 'var(--input-bg)',
    color: 'var(--foreground)',
    border: '1px solid var(--input)',
    hover: {
      background: 'var(--accent)',
      borderColor: 'var(--border-strong)'
    }
  },
  secondary: {
    background: 'var(--secondary)',
    color: 'var(--secondary-foreground)',
    border: '1px solid transparent',
    hover: {
      filter: 'brightness(.97)'
    }
  },
  ghost: {
    background: 'transparent',
    color: 'var(--foreground)',
    border: '1px solid transparent',
    hover: {
      background: 'var(--accent)'
    }
  },
  link: {
    background: 'transparent',
    color: 'var(--primary)',
    border: '1px solid transparent',
    hover: {
      textDecoration: 'underline'
    }
  },
  nectar: {
    background: 'var(--grad-nectar-soft)',
    color: 'var(--brand-primary)',
    border: '1px solid rgba(61,220,151,.35)',
    hover: {
      boxShadow: 'var(--glow-nectar-sm)'
    }
  }
};
const S = {
  default: {
    height: 32,
    padding: '4px 12px',
    gap: 8
  },
  sm: {
    height: 30,
    padding: '0 10px',
    gap: 6,
    fontSize: 'var(--text-xs)'
  },
  lg: {
    height: 40,
    padding: '0 20px',
    gap: 8,
    fontSize: 'var(--text-base)'
  },
  icon: {
    height: 36,
    width: 36,
    padding: 0
  }
};
function Button({
  variant = 'default',
  size = 'default',
  icon,
  iconRight,
  isLoading,
  disabled,
  children,
  style,
  onClick,
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const v = V[variant] || V.default,
    s = S[size] || S.default;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || isLoading,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-sm)',
      fontWeight: v.fontWeight || 600,
      letterSpacing: '-0.005em',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      pointerEvents: disabled ? 'none' : 'auto',
      transition: 'all var(--dur-base) var(--ease-out)',
      transform: active ? 'scale(.98)' : 'none',
      flexShrink: 0,
      background: v.background,
      color: v.color,
      border: v.border,
      boxShadow: v.boxShadow,
      ...s,
      ...(hover && !disabled ? v.hover : {}),
      ...style
    }
  }, rest), isLoading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-2",
    size: 16,
    style: {
      animation: 'kn-spin 1s linear infinite'
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 16
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
/* rflectr legacy ui/checkbox.tsx — size-4, rounded-[4px], border-input, checked bg-primary with 14px check. */
function Checkbox({
  checked,
  onChange,
  label,
  disabled,
  indeterminate,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontSize: 'var(--text-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    role: "checkbox",
    "aria-checked": indeterminate ? 'mixed' : !!checked,
    style: {
      width: 16,
      height: 16,
      borderRadius: 4,
      border: `1px solid ${checked || indeterminate ? 'var(--primary)' : 'var(--input)'}`,
      background: checked || indeterminate ? 'var(--primary)' : 'var(--input-bg)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--primary-foreground)',
      flexShrink: 0
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 12,
    strokeWidth: 3
  }) : checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 3
  }) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Button size="icon" convenience — 36px square (size-9) or 28px (h-7 w-7 used in table row actions). */
function IconButton({
  icon,
  label,
  small,
  variant = 'ghost',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Button, _extends({
    variant: variant,
    size: "icon",
    icon: icon,
    "aria-label": label,
    title: label,
    style: {
      ...(small ? {
        width: 28,
        height: 28
      } : {}),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/* rflectr legacy ui/input.tsx — h-9, rounded-sm, border-input, dark bg-input/30, focus border-primary; optional copy button; optional left icon (sidebar search). */
function Input({
  value,
  defaultValue,
  onChange,
  placeholder,
  type = 'text',
  disabled,
  invalid,
  icon,
  showCopyButton,
  mono,
  size = 'default',
  kbd,
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const h = size === 'sm' ? 32 : 36;
  const border = invalid ? 'var(--destructive)' : focus ? 'var(--primary)' : 'var(--input)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: h,
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${border}`,
      background: 'var(--input-bg)',
      opacity: disabled ? .5 : 1,
      transition: 'border-color var(--dur-base)',
      position: 'relative',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    color: "var(--muted-foreground)",
    style: {
      position: 'absolute',
      left: 10,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      padding: `4px ${kbd ? 56 : 12}px 4px ${icon ? 32 : 12}px`,
      background: 'transparent',
      border: 0,
      outline: 'none',
      color: 'var(--foreground)',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-sm)',
      cursor: disabled ? 'not-allowed' : 'text',
      ...inputStyle
    }
  }, rest)), kbd && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 8,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      gap: 2,
      pointerEvents: 'none'
    }
  }, kbd.map(k => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      padding: '0 4px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--muted)',
      border: '1px solid var(--border)',
      color: 'var(--muted-foreground)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, k))), showCopyButton && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => navigator.clipboard && navigator.clipboard.writeText(String(value ?? '')),
    style: {
      width: 34,
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      background: 'transparent',
      border: 0,
      color: 'var(--muted-foreground)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "copy",
    size: 16
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* rflectr legacy ui/label.tsx — text-sm/500 leading-none; FormField wraps label + control + description/error. */
function Label({
  children,
  htmlFor,
  required,
  hint,
  error,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      lineHeight: 1,
      color: 'var(--foreground)',
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, children, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--destructive)'
    }
  }, "*")), hint && !error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--muted-foreground)'
    }
  }, hint), error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--destructive)'
    }
  }, error));
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Label.jsx", error: String((e && e.message) || e) }); }

// components/core/Progress.jsx
try { (() => {
/* rflectr legacy ui/progress.tsx — h-2 rounded-full track bg-primary/20; budget usage bars recolour by threshold via `tone`. */
function Progress({
  value = 0,
  tone,
  height = 8,
  style
}) {
  const c = tone ? `var(${tone})` : 'var(--primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height,
      borderRadius: 999,
      background: `color-mix(in oklch,${c} 20%,transparent)`,
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.min(100, Math.max(0, value))}%`,
      height: '100%',
      background: c,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Progress.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
/* rflectr legacy ui/select.tsx — trigger h-9 (sm h-8), rounded-sm, w-fit; content bg-popover, 1px border, shadow-md, p-1; item h-8 rounded-sm with trailing check. */
function Select({
  value,
  onChange,
  options = [],
  placeholder = 'Select…',
  size = 'default',
  disabled,
  fullWidth,
  style
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  const sel = options.find(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      width: fullWidth ? '100%' : 'fit-content',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    style: {
      display: 'flex',
      width: fullWidth ? '100%' : 'fit-content',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      height: size === 'sm' ? 32 : 36,
      padding: '8px 12px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${open ? 'var(--ring)' : 'var(--input)'}`,
      background: 'var(--input-bg)',
      color: sel ? 'var(--foreground)' : 'var(--muted-foreground)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, sel?.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: sel.icon,
    size: 16,
    color: "var(--muted-foreground)"
  }), sel ? sel.label : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      opacity: .5
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      minWidth: '100%',
      zIndex: 50,
      background: 'var(--popover)',
      color: 'var(--popover-foreground)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      padding: 4,
      maxHeight: 280,
      overflowY: 'auto'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.value,
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--accent)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 32,
      padding: '0 32px 0 8px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-sm)',
      cursor: 'pointer',
      position: 'relative',
      whiteSpace: 'nowrap'
    }
  }, o.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: o.icon,
    size: 16,
    color: "var(--muted-foreground)"
  }), o.label, o.value === value && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    style: {
      position: 'absolute',
      right: 8
    }
  })))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Separator.jsx
try { (() => {
/* rflectr legacy ui/separator.tsx — 1px bg-border. */
function Separator({
  orientation = 'horizontal',
  style
}) {
  const v = orientation === 'vertical';
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      background: 'var(--border)',
      flexShrink: 0,
      width: v ? 1 : '100%',
      height: v ? '100%' : 1,
      alignSelf: v ? 'stretch' : undefined,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Separator.jsx", error: String((e && e.message) || e) }); }

// components/core/Skeleton.jsx
try { (() => {
/* Shimmer skeleton — sweeping nectar-tinted highlight across a muted block. */
function Skeleton({
  width = '100%',
  height = 16,
  radius = 'var(--radius-sm)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: radius,
      background: 'linear-gradient(90deg,var(--accent) 0%,var(--accent) 35%,rgba(61,220,151,.18) 50%,var(--accent) 65%,var(--accent) 100%)',
      backgroundSize: '200% 100%',
      animation: 'kn-shimmer 1.6s linear infinite',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/core/Slider.jsx
try { (() => {
/* rflectr legacy ui/slider.tsx — 1.5px track bg-muted, range bg-primary, 16px round thumb with primary border. */
function Slider({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  disabled,
  style
}) {
  const pct = (value - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: 16,
      display: 'flex',
      alignItems: 'center',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 6,
      borderRadius: 999,
      background: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      borderRadius: 999,
      background: 'var(--primary)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(Number(e.target.value)),
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      margin: 0,
      opacity: 0,
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `calc(${pct}% - 8px)`,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: 'var(--background)',
      border: '1px solid var(--primary)',
      boxShadow: 'var(--shadow-sm)',
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Slider.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/* rflectr legacy ui/switch.tsx — SQUARE (rounded-sm) track, 2px transparent border; md 36×20 thumb 16, default 44×24 thumb 20; checked bg-primary. */
function Switch({
  checked,
  onChange,
  size = 'md',
  disabled,
  label,
  style
}) {
  const md = size === 'md';
  const w = md ? 36 : 44,
    h = md ? 20 : 24,
    t = md ? 16 : 20;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontSize: 'var(--text-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": !!checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: w,
      height: h,
      borderRadius: 'var(--radius-sm)',
      border: '2px solid transparent',
      background: checked ? 'var(--primary)' : 'var(--input)',
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'background var(--dur-base)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: t,
      height: t,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--background)',
      boxShadow: 'var(--shadow-md)',
      transform: `translateX(${checked ? w - t - 4 : 0}px)`,
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/* rflectr legacy ui/textarea.tsx — min-h-16, rounded-sm, border-input, text-sm. */
function Textarea({
  value,
  defaultValue,
  onChange,
  placeholder,
  rows = 3,
  disabled,
  mono,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: 'block',
      width: '100%',
      minHeight: 64,
      padding: '8px 12px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${focus ? 'var(--primary)' : 'var(--input)'}`,
      background: 'var(--input-bg)',
      color: 'var(--foreground)',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-sm)',
      outline: 'none',
      resize: 'vertical',
      opacity: disabled ? .5 : 1,
      transition: 'border-color var(--dur-base)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/core/Toggle.jsx
try { (() => {
/* rflectr legacy ui/toggle.tsx — ghost by default, on = bg-accent; outline variant has 1px border. Used for the chart-type toggle and polling on/off. */
function Toggle({
  pressed,
  onChange,
  icon,
  children,
  variant = 'default',
  size = 'default',
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": !!pressed,
    disabled: disabled,
    onClick: () => onChange && onChange(!pressed),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: size === 'sm' ? 32 : 36,
      minWidth: size === 'sm' ? 32 : 36,
      padding: children ? '0 8px' : 0,
      borderRadius: 'var(--radius-sm)',
      border: variant === 'outline' ? '1px solid var(--input)' : '1px solid transparent',
      background: pressed ? 'var(--accent)' : 'transparent',
      color: pressed ? 'var(--accent-foreground)' : 'var(--muted-foreground)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      transition: 'background var(--dur-base)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children);
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
const {
  useState
} = React;
/* rflectr legacy ui/accordion.tsx + logs/views/collapsibleBox.tsx — trigger py-4 text-sm/500 with rotating chevron, content pb-4 text-sm, 1px bottom borders. */
function Accordion({
  items = [],
  defaultOpen = [],
  multiple = false,
  style
}) {
  const [open, setOpen] = useState(new Set(defaultOpen));
  const toggle = k => setOpen(prev => {
    const n = new Set(multiple ? prev : []);
    if (prev.has(k)) n.delete(k);else n.add(k);
    return n;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      ...style
    }
  }, items.map(it => {
    const o = open.has(it.value);
    return /*#__PURE__*/React.createElement("div", {
      key: it.value,
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": o,
      onClick: () => toggle(it.value),
      style: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '16px 0',
        background: 'transparent',
        border: 0,
        color: 'var(--foreground)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        textAlign: 'left',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16,
      color: "var(--muted-foreground)"
    }), it.label, it.badge), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 16,
      color: "var(--muted-foreground)",
      style: {
        transition: 'transform var(--dur-base)',
        transform: o ? 'rotate(180deg)' : 'none'
      }
    })), o && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 16,
        fontSize: 'var(--text-sm)',
        color: 'var(--muted-foreground)'
      }
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/* rflectr legacy ui/breadcrumb.tsx — text-sm muted, gap-1.5, chevron-right separators, current page in foreground. */
function Breadcrumb({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 6,
      fontSize: 'var(--text-sm)',
      color: 'var(--muted-foreground)',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 14,
    style: {
      opacity: .7
    }
  }), i === items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    "aria-current": "page",
    style: {
      color: 'var(--foreground)',
      fontWeight: 500
    }
  }, it.label) : /*#__PURE__*/React.createElement("a", {
    href: it.href || '#',
    onClick: e => {
      if (it.onClick) {
        e.preventDefault();
        it.onClick();
      }
    },
    style: {
      color: 'inherit',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--foreground)',
    onMouseLeave: e => e.currentTarget.style.color = 'inherit'
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/EmptyState.jsx
try { (() => {
/* Empty states in rflectr legacy UI (teamsEmptyState, customersEmptyState, pricingOverridesEmptyState) — centred, muted 40px icon in a bordered square, title text-lg/600, description text-sm muted, primary action. */
function EmptyState({
  icon = 'inbox',
  title,
  description,
  action,
  onAction,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 8,
      padding: '48px 24px',
      border: '1px dashed var(--border)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--muted-foreground)',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 600
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--muted-foreground)',
      maxWidth: 420,
      textWrap: 'pretty'
    }
  }, description), action && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    icon: "plus",
    onClick: onAction,
    style: {
      marginTop: 8
    }
  }, action), children);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
/* Table footer as in rflectr legacy UI logsTable.tsx — "Showing 1–25 of 1,204" left, rows-per-page select + Previous/Next outline buttons right. */
function Pagination({
  offset = 0,
  limit = 25,
  total = 0,
  onChange,
  pageSizes = [25, 50, 100],
  style
}) {
  const from = total === 0 ? 0 : offset + 1,
    to = Math.min(offset + limit, total);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '8px 0',
      fontSize: 'var(--text-sm)',
      color: 'var(--muted-foreground)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, "Showing ", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--foreground)'
    }
  }, from.toLocaleString(), "\u2013", to.toLocaleString()), " of ", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--foreground)'
    }
  }, total.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    size: "sm",
    value: limit,
    options: pageSizes.map(n => ({
      value: n,
      label: `${n} / page`
    })),
    onChange: v => onChange && onChange({
      offset: 0,
      limit: v
    })
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "sm",
    disabled: offset === 0,
    onClick: () => onChange && onChange({
      offset: Math.max(0, offset - limit),
      limit
    })
  }, "Previous"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "sm",
    disabled: to >= total,
    onClick: () => onChange && onChange({
      offset: offset + limit,
      limit
    })
  }, "Next")));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Table.jsx
try { (() => {
/* rflectr legacy ui/table.tsx — thead bg-muted/50, th h-10 px-4 font-medium, td px-4 py-2 whitespace-nowrap, row hover bg-muted/50, 1px row borders; sortable headers show arrow-up-down. Wrapped in a rounded-sm bordered container like LogsDataTable. */
function Table({
  columns = [],
  rows = [],
  onRowClick,
  selectedId,
  rowKey = 'id',
  emptyText = 'No results.',
  bordered = true,
  dense,
  freshKey,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "custom-scrollbar",
    style: {
      position: 'relative',
      width: '100%',
      overflowX: 'auto',
      border: bordered ? '1px solid var(--border)' : 0,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--card)',
      boxShadow: bordered ? 'var(--shadow-sm)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-sm)',
      captionSide: 'bottom'
    }
  }, /*#__PURE__*/React.createElement("thead", {
    style: {
      background: 'color-mix(in oklch,var(--muted) 50%,transparent)'
    }
  }, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderBottom: '1px solid var(--border)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      height: 40,
      padding: '0 16px',
      textAlign: c.align || 'left',
      fontWeight: 500,
      color: 'var(--foreground)',
      whiteSpace: 'nowrap',
      width: c.width
    }
  }, c.sortable ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: c.onSort,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'transparent',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      cursor: 'pointer',
      padding: 0
    }
  }, c.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-down",
    size: 14,
    color: "var(--muted-foreground)"
  })) : c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length,
    style: {
      padding: '32px 16px',
      textAlign: 'center',
      color: 'var(--muted-foreground)'
    }
  }, emptyText)), rows.map((r, i) => {
    const sel = selectedId != null && r[rowKey] === selectedId;
    return /*#__PURE__*/React.createElement("tr", {
      key: r[rowKey] ?? i,
      onClick: onRowClick ? () => onRowClick(r) : undefined,
      onMouseEnter: e => {
        if (!sel) e.currentTarget.style.background = 'color-mix(in oklch,var(--muted) 50%,transparent)';
      },
      onMouseLeave: e => {
        if (!sel) e.currentTarget.style.background = 'transparent';
      },
      style: {
        borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 0,
        background: sel ? 'var(--muted)' : 'transparent',
        cursor: onRowClick ? 'pointer' : 'default',
        transition: 'background var(--dur-fast)',
        animation: freshKey && r[freshKey] ? 'kn-row-in 1.6s var(--ease-out) both' : 'none'
      }
    }, columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        padding: dense ? '4px 16px' : '8px 16px',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',
        textAlign: c.align || 'left',
        fontFamily: c.mono ? 'var(--font-mono)' : 'inherit',
        color: c.muted ? 'var(--muted-foreground)' : 'inherit',
        maxWidth: c.maxWidth,
        overflow: c.maxWidth ? 'hidden' : undefined,
        textOverflow: c.maxWidth ? 'ellipsis' : undefined
      }
    }, c.render ? c.render(r) : r[c.key])));
  }))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Table.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/* rflectr legacy ui/tabs.tsx — list bg-muted h-9 rounded-lg p-[3px]; trigger rounded-sm px-2 text-sm/500; active = bg-input/30 + border-input (dark) / white + shadow-sm (light). `variant="line"` = underline style used in sheets. */
function Tabs({
  tabs = [],
  value,
  onChange,
  variant = 'default',
  fullWidth,
  style
}) {
  if (variant === 'line') return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      borderBottom: '1px solid var(--border)',
      ...style
    }
  }, tabs.map(t => {
    const a = t.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      type: "button",
      onClick: () => onChange && onChange(t.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 36,
        padding: '0 2px',
        background: 'transparent',
        border: 0,
        borderBottom: `2px solid ${a ? 'var(--primary)' : 'transparent'}`,
        marginBottom: -1,
        color: a ? 'var(--foreground)' : 'var(--muted-foreground)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        cursor: 'pointer'
      }
    }, t.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 16
    }), t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        color: 'var(--muted-foreground)'
      }
    }, t.count));
  }));
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      width: fullWidth ? '100%' : 'fit-content',
      height: 36,
      alignItems: 'center',
      background: 'var(--muted)',
      color: 'var(--muted-foreground)',
      borderRadius: 'var(--radius-lg)',
      padding: 3,
      ...style
    }
  }, tabs.map(t => {
    const a = t.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": a,
      type: "button",
      onClick: () => onChange && onChange(t.value),
      style: {
        flex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        height: '100%',
        padding: '4px 8px',
        whiteSpace: 'nowrap',
        borderRadius: 'var(--radius-sm)',
        border: `1px solid ${a ? 'var(--input)' : 'transparent'}`,
        background: a ? 'var(--background)' : 'transparent',
        boxShadow: a ? 'var(--shadow-sm)' : 'none',
        color: a ? 'var(--foreground)' : 'var(--muted-foreground)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'color var(--dur-base),box-shadow var(--dur-base)'
      }
    }, t.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 16
    }), t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Alert.jsx
try { (() => {
/* rflectr legacy ui/alert.tsx — rounded-sm, px-4 py-3, text-sm, 16px icon column; variants default/destructive/info/warning use 30% tinted bg + border. */
const T = {
  default: null,
  destructive: '--status-error',
  info: '--status-info',
  warning: '--status-warning',
  success: '--status-success'
};
function Alert({
  variant = 'default',
  icon,
  title,
  children,
  action,
  style
}) {
  const c = T[variant];
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: 'grid',
      gridTemplateColumns: icon ? '16px 1fr auto' : '0 1fr auto',
      columnGap: icon ? 12 : 0,
      rowGap: 2,
      alignItems: 'start',
      width: '100%',
      padding: '12px 16px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-sm)',
      border: `1px solid ${c ? `color-mix(in oklch,var(${c}) 30%,transparent)` : 'var(--border)'}`,
      background: c ? `color-mix(in oklch,var(${c}) 8%,transparent)` : 'var(--card)',
      color: c ? `var(${c})` : 'var(--card-foreground)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    style: {
      transform: 'translateY(2px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      letterSpacing: '-0.01em',
      minHeight: 16
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      color: c ? `color-mix(in oklch,var(${c}) 85%,var(--foreground))` : 'var(--muted-foreground)'
    }
  }, children)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 3
    }
  }, action));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Alert.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
/* rflectr legacy ui/dialog.tsx — overlay black/50, content max-w-lg, rounded-lg (8px), p-6, gap-4, shadow-lg, close X top-6 right-4 at 70% opacity. */
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  width = 512,
  inline,
  style
}) {
  if (!open) return null;
  const body = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      maxHeight: 'calc(100dvh - 40px)',
      overflowY: 'auto',
      display: 'grid',
      gap: 16,
      padding: 24,
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border)',
      background: 'var(--card)',
      color: 'var(--card-foreground)',
      boxShadow: 'var(--shadow-lg), var(--glow-nectar-sm)',
      animation: 'kn-zoom-in var(--dur-base) var(--ease-spring)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes kn-zoom-in{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:none}}@keyframes kn-fade{from{opacity:0}}'), (title || description) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingBottom: 16
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 1,
      fontWeight: 600
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--muted-foreground)'
    }
  }, description)), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      paddingTop: 8
    }
  }, footer), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 24,
      right: 16,
      background: 'transparent',
      border: 0,
      color: 'var(--foreground)',
      opacity: .7,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      width: 20,
      height: 20,
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
  if (inline) return body;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'var(--overlay)',
      display: 'grid',
      placeItems: 'center',
      padding: 16,
      animation: 'kn-fade var(--dur-base)'
    }
  }, body);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Popover.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
/* rflectr legacy ui/popover.tsx — bg-popover, 1px border, rounded-sm, shadow-md, w-72 p-4 default, sideOffset 4. Trigger is any element. */
function Popover({
  trigger,
  children,
  align = 'start',
  side = 'bottom',
  width = 288,
  padding = 16,
  open: controlled,
  onOpenChange,
  style
}) {
  const [internal, setInternal] = useState(false);
  const ref = useRef(null);
  const open = controlled ?? internal;
  const set = v => {
    setInternal(v);
    onOpenChange && onOpenChange(v);
  };
  useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) set(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  const pos = side === 'top' ? {
    bottom: '100%',
    marginBottom: 4
  } : side === 'right' ? {
    left: '100%',
    top: 0,
    marginLeft: 8
  } : {
    top: '100%',
    marginTop: 4
  };
  const al = side === 'right' ? {} : align === 'end' ? {
    right: 0
  } : {
    left: 0
  };
  const safe = {
    maxWidth: 'calc(100vw - 16px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => set(!open),
    style: {
      display: 'inline-flex'
    }
  }, trigger), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 50,
      width,
      padding,
      background: 'var(--popover)',
      color: 'var(--popover-foreground)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      animation: 'kn-pop var(--dur-base) var(--ease-out)',
      ...pos,
      ...al,
      ...safe
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes kn-pop{from{opacity:0;transform:scale(.95)}}'), children));
}
Object.assign(__ds_scope, { Popover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Popover.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
const {
  useState
} = React;
/* rflectr legacy ui/components/sidebar.tsx — 256px (48px icon rail), logo 22px tall, ⌘K search h-8, items h-7.5 rounded-sm px-3 gap-2 text-sm (active: bg-sidebar-accent text-primary border-primary/20), sub-items h-7 under a 1px left border ml-4 pl-2, footer icon row (github, docs, theme, user) + mono version. */
const KNECTAR_NAV = [{
  title: 'Observability',
  icon: 'telescope',
  url: '/workspace/logs',
  subItems: [{
    title: 'Dashboard',
    icon: 'chart-column-big',
    url: '/workspace/dashboard'
  }, {
    title: 'LLM Logs',
    icon: 'logs',
    url: '/workspace/logs'
  }, {
    title: 'MCP Logs',
    icon: 'plug-zap',
    url: '/workspace/mcp-logs'
  }, {
    title: 'Connectors',
    icon: 'chevrons-left-right-ellipsis',
    url: '/workspace/observability'
  }, {
    title: 'Logs Settings',
    icon: 'settings',
    url: '/workspace/config/logging'
  }]
}, {
  title: 'Models',
  icon: 'box',
  url: '/workspace/providers',
  subItems: [{
    title: 'Model Catalog',
    icon: 'layout-grid',
    url: '/workspace/model-catalog'
  }, {
    title: 'Model Providers',
    icon: 'boxes',
    url: '/workspace/providers'
  }, {
    title: 'Budgets & Limits',
    icon: 'wallet',
    url: '/workspace/model-limits'
  }, {
    title: 'Routing Rules',
    icon: 'network',
    url: '/workspace/routing-rules'
  }, {
    title: 'Complexity Router',
    icon: 'git-compare-arrows',
    url: '/workspace/complexity-router'
  }, {
    title: 'Circuit Breaker',
    icon: 'circuit-board',
    url: '/workspace/circuit-breaker'
  }, {
    title: 'Pricing Overrides',
    icon: 'sliders-horizontal',
    url: '/workspace/custom-pricing/overrides'
  }, {
    title: 'Model Settings',
    icon: 'settings',
    url: '/workspace/custom-pricing'
  }]
}, {
  title: 'MCP Gateway',
  icon: 'plug-zap',
  url: '/workspace/mcp-gateway',
  subItems: [{
    title: 'MCP Catalog',
    icon: 'layout-grid',
    url: '/workspace/mcp-registry'
  }, {
    title: 'MCP Library',
    icon: 'boxes',
    url: '/workspace/mcp-registry/library'
  }, {
    title: 'Tool Groups',
    icon: 'briefcase',
    url: '/workspace/mcp-tool-groups'
  }, {
    title: 'Auth Sessions',
    icon: 'key-round',
    url: '/workspace/mcp-sessions'
  }, {
    title: 'OAuth Grants',
    icon: 'shield-check',
    url: '/workspace/oauth-grants'
  }, {
    title: 'MCP Settings',
    icon: 'settings',
    url: '/workspace/mcp-settings'
  }]
}, {
  title: 'Plugins',
  icon: 'puzzle',
  url: '/workspace/plugins'
}, {
  title: 'Alerting',
  icon: 'siren',
  url: '/workspace/alerting',
  subItems: [{
    title: 'Channels',
    icon: 'megaphone',
    url: '/workspace/alerting/channels'
  }, {
    title: 'Rules',
    icon: 'gavel',
    url: '/workspace/alerting/rules'
  }, {
    title: 'History',
    icon: 'history',
    url: '/workspace/alerting/history'
  }]
}, {
  title: 'Governance',
  icon: 'landmark',
  url: '/workspace/governance',
  subItems: [{
    title: 'Virtual Keys',
    icon: 'key-round',
    url: '/workspace/governance/virtual-keys'
  }, {
    title: 'Users',
    icon: 'users',
    url: '/workspace/governance/users'
  }, {
    title: 'Teams',
    icon: 'building',
    url: '/workspace/governance/teams'
  }, {
    title: 'Business Units',
    icon: 'building-2',
    url: '/workspace/governance/business-units'
  }, {
    title: 'Customers',
    icon: 'wallet-cards',
    url: '/workspace/governance/customers'
  }, {
    title: 'User Provisioning',
    icon: 'book-user',
    url: '/workspace/scim'
  }, {
    title: 'Roles & Permissions',
    icon: 'user-round-check',
    url: '/workspace/governance/rbac'
  }, {
    title: 'Access Profiles',
    icon: 'shield-check',
    url: '/workspace/governance/access-profiles'
  }, {
    title: 'Audit Logs',
    icon: 'scroll-text',
    url: '/workspace/audit-logs'
  }]
}, {
  title: 'Guardrails',
  icon: 'construction',
  url: '/workspace/guardrails',
  subItems: [{
    title: 'Rules',
    icon: 'search-check',
    url: '/workspace/guardrails/configuration'
  }, {
    title: 'Providers',
    icon: 'boxes',
    url: '/workspace/guardrails/providers'
  }]
}, {
  title: 'Webhooks',
  icon: 'webhook',
  url: '/workspace/webhooks'
}, {
  title: 'Cluster Config',
  icon: 'network',
  url: '/workspace/cluster'
}, {
  title: 'Adaptive Routing',
  icon: 'shuffle',
  url: '/workspace/adaptive-routing',
  subItems: [{
    title: 'Dashboard',
    icon: 'chart-column-big',
    url: '/workspace/adaptive-routing'
  }, {
    title: 'Settings',
    icon: 'settings',
    url: '/workspace/adaptive-routing/settings'
  }]
}, {
  title: 'Prompt Repository',
  icon: 'folder-git',
  url: '/workspace/prompt-repo'
}, {
  title: 'Skills Repository',
  icon: 'book-open-text',
  url: '/workspace/skills-repo'
}, {
  title: 'Settings',
  icon: 'settings-2',
  url: '/workspace/config',
  subItems: [{
    title: 'Client Settings',
    icon: 'settings',
    url: '/workspace/config/client-settings'
  }, {
    title: 'Compatibility',
    icon: 'plug',
    url: '/workspace/config/compatibility'
  }, {
    title: 'Caching',
    icon: 'database-zap',
    url: '/workspace/config/caching'
  }, {
    title: 'Security',
    icon: 'shield-check',
    url: '/workspace/config/security'
  }, {
    title: 'API Keys',
    icon: 'key-round',
    url: '/workspace/config/api-keys'
  }, {
    title: 'Performance Tuning',
    icon: 'trending-up',
    url: '/workspace/config/performance-tuning'
  }, {
    title: 'Feature Flags',
    icon: 'flag',
    url: '/workspace/config/feature-flags'
  }]
}];
const rowBase = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  width: '100%',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid transparent',
  background: 'transparent',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-sm)',
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'all var(--dur-base) var(--ease-out)',
  color: 'var(--sidebar-foreground)'
};
function NavRow({
  item,
  active,
  expanded,
  onClick,
  sub,
  collapsed,
  index = 0
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    title: collapsed ? item.title : undefined,
    style: {
      ...rowBase,
      height: sub ? 30 : collapsed ? 38 : 34,
      padding: sub ? '0 10px' : collapsed ? 0 : '0 10px',
      justifyContent: collapsed ? 'center' : 'flex-start',
      background: active ? 'var(--grad-nectar-soft)' : h ? 'var(--sidebar-accent)' : 'transparent',
      borderColor: active && !sub ? 'rgba(61,220,151,.35)' : 'transparent',
      boxShadow: active && collapsed ? 'var(--glow-nectar-sm)' : 'none',
      color: active ? 'var(--brand-primary)' : h ? 'var(--sidebar-accent-foreground)' : 'var(--sidebar-foreground)',
      fontWeight: active ? 600 : 450,
      animation: 'kn-stagger-in var(--dur-base) var(--ease-out) both',
      animationDelay: `${index * 22}ms`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: collapsed ? 28 : 22,
      height: collapsed ? 28 : 22,
      borderRadius: 8,
      display: 'grid',
      placeItems: 'center',
      background: active ? 'var(--grad-nectar)' : 'transparent',
      color: active ? 'var(--ink-900)' : 'var(--muted-foreground)',
      transition: 'all var(--dur-base)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: item.icon,
    size: sub ? 14 : 16
  })), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, item.title), !collapsed && item.tag && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "secondary",
    style: {
      color: 'var(--muted-foreground)'
    }
  }, item.tag), !collapsed && item.subItems && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16,
    style: {
      transition: 'transform var(--dur-base)',
      transform: expanded ? 'rotate(90deg)' : 'none',
      opacity: .6
    }
  }), !collapsed && item.live && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--status-success)',
      animation: 'kn-live-ring 1.6s ease-out infinite'
    }
  }));
}
/* rflectr sidebar — rail-first (56px icon rail by default, expands to 256px), ⌘K command trigger, staggered nav reveal, fluttering mark while `busy`, env pill, user menu with Logout, version. */
function Sidebar({
  items = KNECTAR_NAV,
  activeUrl = '/workspace/dashboard',
  onNavigate,
  collapsed: cProp,
  defaultCollapsed = true,
  onCollapsedChange,
  onCommand,
  envLabel,
  version = 'v0.0.1',
  user = {
    name: 'Mario Aldayuz',
    email: 'mario@legioncodeinc.com'
  },
  onLogout,
  theme = 'light',
  busy,
  promo,
  height = '100vh',
  style
}) {
  const [cState, setC] = useState(defaultCollapsed);
  const collapsed = cProp ?? cState;
  const setCollapsed = v => {
    setC(v);
    onCollapsedChange && onCollapsedChange(v);
  };
  const [expanded, setExpanded] = useState(() => new Set(items.filter(i => i.subItems?.some(s => activeUrl.startsWith(s.url))).map(i => i.title)));
  const isActive = url => activeUrl === url || url !== '/workspace/config' && activeUrl.startsWith(url + '/');
  const w = collapsed ? 56 : 256;
  const dark = theme === 'dark';
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: w,
      minWidth: w,
      height,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--sidebar)',
      color: 'var(--sidebar-foreground)',
      borderRight: '1px solid var(--sidebar-border)',
      transition: 'width var(--dur-base) var(--ease-out)',
      position: 'relative',
      zIndex: 20,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: collapsed ? 'center' : 'space-between',
      height: 52,
      overflow: 'hidden',
      padding: collapsed ? 0 : '0 8px 0 14px',
      flexShrink: 0
    }
  }, collapsed ? /*#__PURE__*/React.createElement("img", {
    src: dark ? '../../assets/mark.svg' : '../../assets/mark-on-light.svg',
    alt: "knectar",
    className: busy ? 'kn-flutter' : 'kn-bob',
    style: {
      height: 22,
      cursor: 'pointer'
    },
    onClick: () => setCollapsed(false),
    title: "Expand"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: dark ? '../../assets/logo.svg' : '../../assets/logo-on-light.svg',
    alt: "knectar",
    className: busy ? 'kn-flutter' : 'kn-bob',
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Collapse sidebar",
    onClick: () => setCollapsed(true),
    style: {
      width: 28,
      height: 28,
      display: 'grid',
      placeItems: 'center',
      background: 'transparent',
      border: 0,
      borderRadius: 8,
      color: 'var(--muted-foreground)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "panel-left-close",
    size: 16
  })))), envLabel && (collapsed ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      margin: '0 0 6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    title: envLabel,
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--status-warning)'
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 10px 8px',
      display: 'flex',
      justifyContent: 'center',
      padding: '3px 8px',
      borderRadius: 6,
      background: 'var(--status-warning-bg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.12em',
      color: 'var(--status-warning)'
    }
  }, envLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: collapsed ? '0 9px 6px' : '0 10px 6px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCommand,
    "aria-label": "Open command bar",
    title: "Command bar (\u2318K)",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width: '100%',
      height: collapsed ? 38 : 34,
      justifyContent: collapsed ? 'center' : 'flex-start',
      padding: collapsed ? 0 : '0 10px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border)',
      background: 'var(--input-bg)',
      color: 'var(--muted-foreground)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      transition: 'all var(--dur-base)'
    },
    onMouseEnter: e => e.currentTarget.style.boxShadow = 'var(--glow-nectar-sm)',
    onMouseLeave: e => e.currentTarget.style.boxShadow = 'none'
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "command",
    size: 15
  }), !collapsed && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'left'
    }
  }, "Jump to\u2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, ['⌘', 'K'].map(k => /*#__PURE__*/React.createElement("kbd", {
    key: k,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      padding: '0 5px',
      borderRadius: 4,
      background: 'var(--muted)',
      border: '1px solid var(--border)',
      lineHeight: '16px'
    }
  }, k)))))), /*#__PURE__*/React.createElement("nav", {
    key: collapsed ? 'rail' : 'full',
    className: "custom-scrollbar",
    style: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: collapsed ? '2px 9px' : '2px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map((item, idx) => {
    const anySub = item.subItems?.some(s => isActive(s.url));
    const exp = expanded.has(item.title);
    return /*#__PURE__*/React.createElement("div", {
      key: item.title
    }, /*#__PURE__*/React.createElement(NavRow, {
      index: idx,
      item: item,
      collapsed: collapsed,
      active: item.subItems ? anySub : isActive(item.url),
      expanded: exp,
      onClick: () => {
        if (item.subItems) {
          if (collapsed) {
            setCollapsed(false);
            setExpanded(p => new Set([...p, item.title]));
          } else setExpanded(p => {
            const n = new Set(p);
            n.has(item.title) ? n.delete(item.title) : n.add(item.title);
            return n;
          });
        } else onNavigate && onNavigate(item.url, item);
      }
    }), !collapsed && item.subItems && exp && /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '2px 0 4px 20px',
        paddingLeft: 8,
        borderLeft: '1px solid var(--sidebar-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }
    }, item.subItems.map((s, j) => /*#__PURE__*/React.createElement(NavRow, {
      key: s.url,
      index: j,
      sub: true,
      item: s,
      active: isActive(s.url),
      onClick: () => onNavigate && onNavigate(s.url, s)
    }))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: collapsed ? '8px 9px 12px' : '8px 12px 12px',
      borderTop: '1px solid var(--sidebar-border)'
    }
  }, !collapsed && promo, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: collapsed ? 'column' : 'row',
      gap: 8,
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Popover, {
    side: "top",
    align: "start",
    width: 232,
    padding: 0,
    trigger: /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "User menu",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: 'transparent',
        border: 0,
        color: 'inherit',
        cursor: 'pointer',
        padding: 2,
        borderRadius: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: 'var(--grad-nectar)',
        color: 'var(--ink-900)',
        display: 'grid',
        placeItems: 'center',
        fontWeight: 700,
        fontSize: 12
      }
    }, (user.name || 'U').split(/\s+/).map(s => s[0]).slice(0, 2).join('').toUpperCase()), !collapsed && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        lineHeight: 1.2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        color: 'var(--foreground)'
      }
    }, user.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--text-tertiary)',
        fontFamily: 'var(--font-mono)'
      }
    }, version)))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--foreground)'
    }
  }, user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--muted-foreground)',
      fontFamily: 'var(--font-mono)'
    }
  }, user.email)), /*#__PURE__*/React.createElement(__ds_scope.Separator, null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onLogout,
    style: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      gap: 8,
      padding: '10px 16px',
      background: 'transparent',
      border: 0,
      color: 'var(--foreground)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      textAlign: 'left',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--accent)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "log-out",
    size: 16
  }), "Logout")), collapsed && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Expand sidebar",
    onClick: () => setCollapsed(false),
    style: {
      background: 'transparent',
      border: 0,
      color: 'var(--muted-foreground)',
      cursor: 'pointer',
      display: 'flex',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "panel-left-open",
    size: 16
  })))));
}
Object.assign(__ds_scope, { KNECTAR_NAV, Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CommandBar.jsx
try { (() => {
const {
  useEffect,
  useMemo,
  useRef,
  useState
} = React;
/* ⌘K command bar — the primary navigation surface in rflectr. Flattens the nav tree into searchable, grouped commands; arrow keys + Enter; extra `commands` for actions. */
function CommandBar({
  open,
  onClose,
  onNavigate,
  items = __ds_scope.KNECTAR_NAV,
  commands = [],
  recent = [],
  placeholder = 'Jump to a page or run a command…'
}) {
  const [q, setQ] = useState('');
  const [i, setI] = useState(0);
  const ref = useRef(null);
  const all = useMemo(() => {
    const out = [];
    for (const g of items) {
      if (!g.subItems) out.push({
        group: 'Pages',
        title: g.title,
        icon: g.icon,
        url: g.url
      });else for (const s of g.subItems) out.push({
        group: g.title,
        title: s.title,
        icon: s.icon,
        url: s.url
      });
    }
    return [...commands.map(c => ({
      group: 'Actions',
      ...c
    })), ...out];
  }, [items, commands]);
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    const base = s ? all.filter(x => (x.title + ' ' + x.group).toLowerCase().includes(s)) : recent.length ? [...recent.map(u => all.find(x => x.url === u)).filter(Boolean).map(x => ({
      ...x,
      group: 'Recent'
    })), ...all] : all;
    return base.slice(0, 40);
  }, [q, all, recent]);
  useEffect(() => {
    if (open) {
      setQ('');
      setI(0);
      setTimeout(() => ref.current && ref.current.focus(), 10);
    }
  }, [open]);
  useEffect(() => {
    setI(0);
  }, [q]);
  if (!open) return null;
  const run = it => {
    if (!it) return;
    onClose && onClose();
    if (it.run) it.run();else onNavigate && onNavigate(it.url, it);
  };
  const key = e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setI(v => Math.min(v + 1, list.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setI(v => Math.max(v - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      run(list[i]);
    } else if (e.key === 'Escape') {
      onClose && onClose();
    }
  };
  let lastGroup = null;
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      background: 'var(--overlay)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: '14vh',
      animation: 'kn-fade var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes kn-fade{from{opacity:0}}@keyframes kn-cmd-in{from{opacity:0;transform:translateY(-8px) scale(.98)}}'), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": "Command bar",
    style: {
      width: '100%',
      maxWidth: 620,
      background: 'var(--popover)',
      color: 'var(--popover-foreground)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg), var(--glow-nectar-sm)',
      overflow: 'hidden',
      animation: 'kn-cmd-in var(--dur-base) var(--ease-spring)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 16px',
      height: 52,
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 18,
    color: "var(--muted-foreground)"
  }), /*#__PURE__*/React.createElement("input", {
    ref: ref,
    value: q,
    onChange: e => setQ(e.target.value),
    onKeyDown: key,
    placeholder: placeholder,
    style: {
      flex: 1,
      height: '100%',
      background: 'transparent',
      border: 0,
      outline: 'none',
      color: 'var(--foreground)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)'
    }
  }), /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      padding: '2px 6px',
      borderRadius: 6,
      border: '1px solid var(--border)',
      background: 'var(--muted)',
      color: 'var(--muted-foreground)'
    }
  }, "esc")), /*#__PURE__*/React.createElement("div", {
    className: "custom-scrollbar",
    style: {
      maxHeight: 380,
      overflowY: 'auto',
      padding: 8
    }
  }, list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 12px',
      textAlign: 'center',
      color: 'var(--muted-foreground)',
      fontSize: 'var(--text-sm)'
    }
  }, "No matches for \u201C", q, "\u201D."), list.map((it, idx) => {
    const head = it.group !== lastGroup;
    lastGroup = it.group;
    const act = idx === i;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: (it.url || it.title) + idx
    }, head && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 8px 4px',
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: '.08em',
        color: 'var(--text-tertiary)'
      }
    }, it.group), /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setI(idx),
      onClick: () => run(it),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        height: 38,
        padding: '0 10px',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        background: act ? 'var(--grad-nectar-soft)' : 'transparent',
        color: act ? 'var(--foreground)' : 'var(--text-secondary)',
        boxShadow: act ? 'inset 0 0 0 1px rgba(61,220,151,.35)' : 'none',
        fontSize: 'var(--text-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: 8,
        display: 'grid',
        placeItems: 'center',
        background: act ? 'var(--grad-nectar)' : 'var(--muted)',
        color: act ? 'var(--ink-900)' : 'var(--muted-foreground)',
        transition: 'all var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon || 'corner-down-left',
      size: 14
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontWeight: act ? 500 : 400
      }
    }, it.title), it.url && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-tertiary)'
      }
    }, it.url.replace('/workspace', '')), act && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "corner-down-left",
      size: 14,
      color: "var(--brand-primary)"
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      padding: '8px 16px',
      borderTop: '1px solid var(--border)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "\u2191\u2193"), " navigate"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "\u21B5"), " open"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-on-light.svg",
    alt: "",
    style: {
      height: 12
    },
    className: "kn-mark"
  }), "rflectr"))));
}
Object.assign(__ds_scope, { CommandBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CommandBar.jsx", error: String((e && e.message) || e) }); }

// components/overlay/DropdownMenu.jsx
try { (() => {
/* rflectr legacy ui/dropdownMenu.tsx — min-w-32 p-1, items h-8 px-2 rounded-sm text-sm gap-2; destructive items in red; separators; labels text-xs muted. */
function DropdownMenu({
  trigger,
  items = [],
  align = 'end',
  width = 192,
  side = 'bottom'
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Popover, {
    trigger: trigger,
    align: align,
    side: side,
    width: width,
    padding: 4
  }, items.map((it, i) => it.type === 'separator' ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 1,
      background: 'var(--border)',
      margin: '4px -4px'
    }
  }) : it.type === 'label' ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '6px 8px',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      color: 'var(--muted-foreground)'
    }
  }, it.label) : /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => !it.disabled && it.onSelect && it.onSelect(),
    onMouseEnter: e => !it.disabled && (e.currentTarget.style.background = it.destructive ? 'var(--status-error-bg)' : 'var(--accent)'),
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 32,
      padding: '0 8px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-sm)',
      cursor: it.disabled ? 'not-allowed' : 'pointer',
      opacity: it.disabled ? .5 : 1,
      color: it.destructive ? 'var(--destructive)' : 'var(--foreground)'
    }
  }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 16,
    color: it.destructive ? 'var(--destructive)' : 'var(--muted-foreground)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label), it.shortcut && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--muted-foreground)'
    }
  }, it.shortcut))));
}
Object.assign(__ds_scope, { DropdownMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/DropdownMenu.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Sheet.jsx
try { (() => {
/* rflectr legacy ui/sheet.tsx — right-side panel, bg-background, border-l, shadow-lg, slide-in 500ms; header p-4 gap-1.5, title text-base/600; used for log details, provider/team/customer forms. */
function Sheet({
  open,
  onClose,
  side = 'right',
  width = 640,
  title,
  description,
  headerExtra,
  children,
  footer,
  inline,
  style
}) {
  if (!open) return null;
  const right = side === 'right';
  const panel = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    style: {
      position: inline ? 'relative' : 'fixed',
      top: 0,
      bottom: 0,
      [right ? 'right' : 'left']: 0,
      zIndex: 50,
      width: '100%',
      maxWidth: width,
      height: inline ? '100%' : undefined,
      background: 'var(--background)',
      borderLeft: right ? '1px solid var(--border)' : 0,
      borderRight: right ? 0 : '1px solid var(--border)',
      borderRadius: inline ? 0 : right ? '16px 0 0 16px' : '0 16px 16px 0',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      animation: inline ? 'none' : `kn-slide-${side} var(--dur-slow) var(--ease-out)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes kn-slide-right{from{transform:translateX(100%)}}@keyframes kn-slide-left{from{transform:translateX(-100%)}}@keyframes kn-fade{from{opacity:0}}'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: 16,
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 600,
      color: 'var(--foreground)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--muted-foreground)'
    }
  }, description)), headerExtra, onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 0,
      color: 'var(--foreground)',
      opacity: .7,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      width: 24,
      height: 24,
      borderRadius: 2,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "custom-scrollbar",
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 16
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: 16,
      borderTop: '1px solid var(--border)'
    }
  }, footer));
  if (inline) return panel;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 49,
      background: 'var(--overlay)',
      animation: 'kn-fade var(--dur-base)'
    }
  }), panel);
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Toast.jsx
try { (() => {
/* Sonner toast as styled in rflectr legacy UI (globals.css: close button top-right). bg-popover, 1px border, rounded-sm, shadow-lg, w-356, title text-sm/500 + description muted. */
const I = {
  loading: 'loader-2',
  success: 'circle-check',
  error: 'circle-x',
  warning: 'triangle-alert',
  info: 'info'
};
const C = {
  success: '--status-success',
  error: '--status-error',
  warning: '--status-warning',
  info: '--status-info'
};
function Toast({
  type = 'default',
  title,
  description,
  onClose,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      position: 'relative',
      width: 356,
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      padding: '14px 16px',
      background: 'var(--popover)',
      color: 'var(--popover-foreground)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-lg)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-sm)',
      ...style
    }
  }, I[type] && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: I[type],
    size: 16,
    color: C[type] ? `var(${C[type]})` : 'var(--foreground)',
    style: {
      marginTop: 2,
      animation: type === 'loading' ? 'kn-spin 1s linear infinite' : 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--muted-foreground)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: -6,
      right: -6,
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: '1px solid var(--border)',
      background: 'var(--popover)',
      color: 'var(--foreground)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })), /*#__PURE__*/React.createElement("style", null, '@keyframes kn-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Toast.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
/* rflectr legacy ui/tooltip.tsx — bg-popover, 1px border, shadow-md, rounded-sm, px-3 py-1.5, text-xs, sideOffset 8. */
function Tooltip({
  content,
  side = 'top',
  children,
  forceOpen,
  style
}) {
  const [open, setOpen] = useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, children, (open || forceOpen) && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 50,
      width: 'max-content',
      maxWidth: 280,
      padding: '6px 12px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--popover)',
      color: 'var(--popover-foreground)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-md)',
      fontSize: 'var(--text-xs)',
      lineHeight: 'var(--lh-xs)',
      textWrap: 'balance',
      pointerEvents: 'none',
      animation: 'kn-tip var(--dur-base) var(--ease-out)',
      ...pos
    }
  }, content, /*#__PURE__*/React.createElement("style", null, '@keyframes kn-tip{from{opacity:0}}')));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StatCard.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
/* KPI tile — 12px radius card, muted title + icon, large mono value that counts up on mount/change, optional sub-value, info tooltip, optional `trend` (+8.2%). */
function useCountUp(target, dur = 900) {
  const [v, setV] = useState(0);
  const from = useRef(0);
  useEffect(() => {
    const start = performance.now(),
      a = from.current,
      b = target;
    let raf;
    const tick = t => {
      const p = Math.min(1, (t - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setV(a + (b - a) * e);
      if (p < 1) raf = requestAnimationFrame(tick);else from.current = b;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, dur]);
  return v;
}
function AnimatedValue({
  value
}) {
  const m = typeof value === 'string' ? value.match(/^([^\d]*)([\d,]*\.?\d*)(.*)$/) : null;
  const num = m ? parseFloat(m[2].replace(/,/g, '')) : NaN;
  const dec = m && m[2].includes('.') ? m[2].split('.')[1].length : 0;
  const v = useCountUp(isNaN(num) ? 0 : num);
  if (isNaN(num)) return /*#__PURE__*/React.createElement(React.Fragment, null, value);
  return /*#__PURE__*/React.createElement(React.Fragment, null, m[1], v.toLocaleString(undefined, {
    minimumFractionDigits: dec,
    maximumFractionDigits: dec
  }), m[3]);
}
function StatCard({
  title,
  value,
  subValue,
  icon,
  description,
  trend,
  animate = true,
  style
}) {
  const up = typeof trend === 'string' && trend.trim().startsWith('+');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: '16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      fontSize: 'var(--text-sm)',
      color: 'var(--muted-foreground)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, title, description && /*#__PURE__*/React.createElement(__ds_scope.Tooltip, {
    content: description
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "info",
    size: 14,
    color: "var(--text-tertiary)"
  }))), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      display: 'grid',
      placeItems: 'center',
      background: 'var(--grad-nectar-soft)',
      color: 'var(--brand-primary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-2xl)',
      lineHeight: 'var(--lh-2xl)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums',
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, animate ? /*#__PURE__*/React.createElement(AnimatedValue, {
    value: value
  }) : value, trend && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      color: up ? 'var(--status-success)' : 'var(--status-error)',
      letterSpacing: 0
    }
  }, trend)), subValue && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--muted-foreground)',
      fontFamily: 'var(--font-mono)'
    }
  }, subValue));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/knectar-app/data.js
try { (() => {
const NS = window.KnectarDesignSystem_8b539c;
const STATUS_TONE = {
  success: '--status-success',
  error: '--status-error',
  processing: '--status-processing',
  cancelled: '--status-cancelled'
};
const TYPE_TONE = {
  Chat: '--type-chat',
  'Chat Stream': '--type-chat-stream',
  Responses: '--type-responses',
  'Responses Stream': '--type-responses-stream',
  Embedding: '--type-embedding',
  Speech: '--type-speech',
  Transcription: '--type-transcription',
  Text: '--type-text'
};
const MODELS = ['openai/gpt-4o-mini', 'openai/gpt-4.1', 'anthropic/claude-sonnet-4', 'anthropic/claude-haiku-4', 'openai/text-embedding-3-small', 'bedrock/nova-pro', 'azure/gpt-4o', 'gemini/gemini-2.5-pro'];
const TYPES = ['Chat', 'Chat', 'Chat Stream', 'Chat', 'Embedding', 'Responses', 'Chat Stream', 'Responses Stream'];
const MSGS = ['Summarize the attached incident report in three bullets.', 'What changed in the routing rules for eu-west-1 since yesterday?', 'Rewrite this release note for a developer audience.', 'Classify this support ticket: "my virtual key stopped working after rotation"', 'Extract entities from the following contract clause…', 'Generate a JSON schema for the provider config object.', 'Translate the onboarding checklist into Spanish.', 'You are a helpful assistant. Explain circuit breakers.'];
const VKS = ['vk_live_8f2a', 'vk_live_c91d', 'vk_test_04b7', 'vk_live_e77e'];
const TEAMS = ['platform', 'growth', 'support-ai', 'research'];
function seeded(n) {
  let s = n * 9301 + 49297;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}
const LOGS = Array.from({
  length: 48
}, (_, i) => {
  const r = seeded(i + 1);
  const st = r() < .06 ? 'error' : r() < .03 ? 'processing' : 'success';
  const mi = Math.floor(r() * MODELS.length);
  const lat = st === 'processing' ? null : Math.round(80 + r() * 2400);
  const tokIn = Math.round(200 + r() * 3000),
    tokOut = Math.round(50 + r() * 900);
  const secs = Math.round(i * 37 + r() * 30);
  return {
    id: 'req_' + (i + 1).toString(36).toUpperCase().padStart(2, '0') + 'J8ZK3Q9V7X2M4N6P8R',
    status: st,
    secsAgo: secs,
    ts: `${String(14 - Math.floor(secs / 3600)).padStart(2, '0')}:${String(59 - Math.floor(secs % 3600 / 60)).padStart(2, '0')}:${String(59 - secs % 60).padStart(2, '0')}`,
    type: TYPES[mi],
    model: MODELS[mi],
    message: MSGS[Math.floor(r() * MSGS.length)],
    latency: lat,
    tokensIn: st === 'error' ? 0 : tokIn,
    tokensOut: st === 'success' ? tokOut : 0,
    cost: st === 'success' ? tokIn * 0.0000004 + tokOut * 0.0000016 : 0,
    vk: VKS[Math.floor(r() * VKS.length)],
    team: TEAMS[Math.floor(r() * TEAMS.length)],
    statusCode: st === 'error' ? [429, 529, 500][Math.floor(r() * 3)] : 200
  };
});
const ago = s => s < 60 ? `${s}s ago` : s < 3600 ? `${Math.floor(s / 60)}m ago` : `${Math.floor(s / 3600)}h ago`;
const fmtLat = ms => ms == null ? '—' : ms >= 1000 ? `${(ms / 1000).toFixed(2)}s` : `${ms}ms`;
const fmtTok = n => n >= 1000 ? `${(n / 1000).toFixed(1)}K` : String(n);
const fmtCost = c => c ? `$${c.toFixed(4)}` : '—';
const PROVIDERS = [{
  id: 'openai',
  name: 'OpenAI',
  keys: 3,
  models: 42,
  weight: 0.6,
  health: 'healthy',
  budget: [1240, 2000],
  p50: 812
}, {
  id: 'anthropic',
  name: 'Anthropic',
  keys: 2,
  models: 9,
  weight: 0.3,
  health: 'degraded',
  budget: [880, 1500],
  p50: 1490
}, {
  id: 'bedrock',
  name: 'AWS Bedrock',
  keys: 1,
  models: 31,
  weight: 0.1,
  health: 'healthy',
  budget: [120, 1000],
  p50: 1104
}, {
  id: 'azure',
  name: 'Azure OpenAI',
  keys: 2,
  models: 12,
  weight: 0,
  health: 'healthy',
  budget: [0, 500],
  p50: 934
}, {
  id: 'gemini',
  name: 'Google Gemini',
  keys: 1,
  models: 14,
  weight: 0,
  health: 'unconfigured',
  budget: [0, 0],
  p50: null
}];
const VIRTUAL_KEYS = [{
  id: 'vk_live_8f2a',
  name: 'prod-agent-router',
  team: 'platform',
  providers: ['openai', 'anthropic'],
  budget: [640, 1000],
  rpm: 600,
  status: 'active',
  created: '2026-06-02'
}, {
  id: 'vk_live_c91d',
  name: 'growth-content',
  team: 'growth',
  providers: ['openai'],
  budget: [212, 300],
  rpm: 120,
  status: 'active',
  created: '2026-07-14'
}, {
  id: 'vk_test_04b7',
  name: 'support-eval-sandbox',
  team: 'support-ai',
  providers: ['anthropic', 'bedrock'],
  budget: [48, 50],
  rpm: 60,
  status: 'active',
  created: '2026-08-20'
}, {
  id: 'vk_live_e77e',
  name: 'research-batch',
  team: 'research',
  providers: ['bedrock', 'azure'],
  budget: [0, 2000],
  rpm: 30,
  status: 'disabled',
  created: '2026-03-11'
}];
const SERIES = Array.from({
  length: 36
}, (_, i) => {
  const r = seeded(i + 100);
  return {
    req: Math.round(180 + Math.sin(i / 5) * 60 + r() * 50),
    err: Math.round(r() * 8),
    lat: Math.round(600 + Math.cos(i / 4) * 200 + r() * 120),
    cost: 3 + r() * 2
  };
});
Object.assign(window, {
  NS,
  STATUS_TONE,
  TYPE_TONE,
  LOGS,
  ago,
  fmtLat,
  fmtTok,
  fmtCost,
  PROVIDERS,
  VIRTUAL_KEYS,
  SERIES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/knectar-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/knectar-app/screens/dashboard.jsx
try { (() => {
/* /workspace/dashboard — rflectr legacy UI app/workspace/dashboard: tabbed views (Overview / Provider Usage / Model Rankings / MCP), chart cards with chart-type toggles, rankings tables. */
function LineChart({
  data,
  key_,
  tone = '--chart-2',
  h = 120
}) {
  const vals = data.map(d => d[key_]);
  const max = Math.max(...vals),
    min = Math.min(...vals);
  const pts = vals.map((v, i) => `${i / (vals.length - 1) * 100},${100 - (v - min) / (max - min || 1) * 90 - 5}`).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      width: '100%',
      height: h,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: `var(${tone})`,
    strokeWidth: "1.2",
    vectorEffect: "non-scaling-stroke"
  }));
}
function ChartCard({
  title,
  sub,
  children,
  value
}) {
  const {
    Card,
    Toggle
  } = NS;
  const [bar, setBar] = React.useState(true);
  return /*#__PURE__*/React.createElement(Card, {
    padding: 16,
    interactive: true,
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 10
      }
    }, title, value && /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 'var(--text-xl)',
        fontWeight: 600
      }
    }, value)),
    description: sub,
    action: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement(Toggle, {
      size: "sm",
      icon: "chart-column",
      pressed: bar,
      onChange: () => setBar(true)
    }), /*#__PURE__*/React.createElement(Toggle, {
      size: "sm",
      icon: "chart-line",
      pressed: !bar,
      onChange: () => setBar(false)
    }))
  }, typeof children === 'function' ? children(bar) : children);
}
function Ticker({
  logs
}) {
  const {
    Badge
  } = NS;
  const items = logs.slice(0, 14);
  const cell = (l, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 18px',
      height: 34,
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-secondary)',
      borderRight: '1px solid var(--border-subtle)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: `var(${STATUS_TONE[l.status]})`
    }
  }), l.model, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, fmtLat(l.latency)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, fmtCost(l.cost)), /*#__PURE__*/React.createElement(Badge, {
    tone: TYPE_TONE[l.type],
    style: {
      padding: '0 6px',
      fontSize: 10
    }
  }, l.type));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--card)',
      overflow: 'hidden',
      height: 36
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 14px',
      height: '100%',
      background: 'var(--grad-nectar-soft)',
      color: 'var(--brand-primary)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-mono)',
      flexShrink: 0,
      borderRight: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--status-success)',
      animation: 'kn-live-ring 1.6s ease-out infinite'
    }
  }), "live"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      maskImage: 'linear-gradient(90deg,transparent,black 4%,black 96%,transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      animation: 'kn-ticker 60s linear infinite',
      willChange: 'transform'
    }
  }, items.map((l, i) => cell(l, 'a' + i)), items.map((l, i) => cell(l, 'b' + i)))));
}
function DashboardScreen({
  liveLogs,
  onOpenLogs
}) {
  const {
    Tabs,
    Select,
    Button,
    Table,
    Badge,
    StatCard
  } = NS;
  const [tab, setTab] = React.useState('overview');
  const [period, setPeriod] = React.useState('24h');
  const src = liveLogs || LOGS;
  const byModel = src.reduce((m, l) => {
    const k = l.model;
    m[k] = m[k] || {
      model: k,
      req: 0,
      tok: 0,
      cost: 0,
      err: 0,
      lat: []
    };
    m[k].req++;
    m[k].tok += l.tokensIn + l.tokensOut;
    m[k].cost += l.cost;
    if (l.status === 'error') m[k].err++;
    if (l.latency) m[k].lat.push(l.latency);
    return m;
  }, {});
  const rank = Object.values(byModel).sort((a, b) => b.req - a.req).map((r, i) => ({
    ...r,
    id: r.model,
    rank: i + 1,
    p50: r.lat.length ? r.lat.sort((a, b) => a - b)[Math.floor(r.lat.length / 2)] : null
  }));
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Dashboard",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Good afternoon, Mario"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-3xl)',
      lineHeight: 'var(--lh-3xl)',
      marginTop: 4
    }
  }, "Everything is ", /*#__PURE__*/React.createElement("span", {
    className: "nectar-text"
  }, "flowing"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--muted-foreground)',
      fontSize: 'var(--text-sm)',
      marginTop: 4
    }
  }, src.length.toLocaleString(), " requests in the last hour across ", PROVIDERS.filter(p => p.weight).length, " providers \xB7 0 open incidents")), /*#__PURE__*/React.createElement(Button, {
    variant: "nectar",
    icon: "logs",
    onClick: onOpenLogs
  }, "Open LLM Logs")), /*#__PURE__*/React.createElement(Ticker, {
    logs: src
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: 'overview',
      label: 'Overview'
    }, {
      value: 'providers',
      label: 'Provider Usage'
    }, {
      value: 'models',
      label: 'Model Rankings'
    }, {
      value: 'dimensions',
      label: 'Dimensions'
    }, {
      value: 'mcp',
      label: 'MCP'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    value: period,
    onChange: setPeriod,
    options: [{
      value: '1h',
      label: 'Last hour'
    }, {
      value: '24h',
      label: 'Last 24 hours'
    }, {
      value: '7d',
      label: 'Last 7 days'
    }, {
      value: '30d',
      label: 'Last 30 days'
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    icon: "download"
  }, "Export"))), tab === 'models' ? /*#__PURE__*/React.createElement(Table, {
    rows: rank,
    columns: [{
      key: 'rank',
      label: '#',
      mono: true,
      width: 40,
      muted: true
    }, {
      key: 'model',
      label: 'Model',
      mono: true
    }, {
      key: 'req',
      label: 'Requests',
      mono: true,
      align: 'right',
      sortable: true
    }, {
      key: 'err',
      label: 'Error rate',
      mono: true,
      align: 'right',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        variant: r.err ? 'destructive' : 'success'
      }, (r.err / r.req * 100).toFixed(1), "%")
    }, {
      key: 'p50',
      label: 'p50 latency',
      mono: true,
      align: 'right',
      render: r => fmtLat(r.p50)
    }, {
      key: 'tok',
      label: 'Tokens',
      mono: true,
      align: 'right',
      render: r => fmtTok(r.tok)
    }, {
      key: 'cost',
      label: 'Cost',
      mono: true,
      align: 'right',
      render: r => `$${r.cost.toFixed(3)}`
    }]
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    title: "Requests",
    value: "12,418",
    trend: "+8.2%",
    subValue: "vs previous 24h",
    icon: "chart-bar"
  }), /*#__PURE__*/React.createElement(StatCard, {
    title: "Error rate",
    value: "0.61%",
    trend: "-0.12%",
    subValue: "74 failed \xB7 71 recovered by fallback",
    icon: "circle-alert"
  }), /*#__PURE__*/React.createElement(StatCard, {
    title: "p95 latency",
    value: "2.31s",
    subValue: "p50 812ms",
    icon: "clock"
  }), /*#__PURE__*/React.createElement(StatCard, {
    title: "Spend",
    value: "$148.20",
    trend: "+3.1%",
    subValue: "budget $2,000 \xB7 7.4% used",
    icon: "dollar-sign"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ChartCard, {
    title: "Request volume",
    sub: "Requests per 40-minute bucket, errors stacked",
    value: "12.4K"
  }, bar => bar ? /*#__PURE__*/React.createElement(MiniBars, {
    data: SERIES,
    h: 120
  }) : /*#__PURE__*/React.createElement(LineChart, {
    data: SERIES,
    key_: "req",
    tone: "--chart-1"
  })), /*#__PURE__*/React.createElement(ChartCard, {
    title: "Latency",
    sub: "p50 across all providers",
    value: "812ms"
  }, bar => bar ? /*#__PURE__*/React.createElement(MiniBars, {
    data: SERIES.map(d => ({
      req: d.lat,
      err: 0
    })),
    tone: "--chart-2",
    h: 120
  }) : /*#__PURE__*/React.createElement(LineChart, {
    data: SERIES,
    key_: "lat"
  })), /*#__PURE__*/React.createElement(ChartCard, {
    title: "Cost",
    sub: "USD per bucket",
    value: "$148.20"
  }, bar => bar ? /*#__PURE__*/React.createElement(MiniBars, {
    data: SERIES.map(d => ({
      req: d.cost * 100,
      err: 0
    })),
    tone: "--chart-3",
    h: 120
  }) : /*#__PURE__*/React.createElement(LineChart, {
    data: SERIES,
    key_: "cost",
    tone: "--chart-3"
  })), /*#__PURE__*/React.createElement(ChartCard, {
    title: "Provider share",
    sub: "Weighted requests by provider"
  }, () => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 4
    }
  }, PROVIDERS.filter(p => p.weight).map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr 56px',
      alignItems: 'center',
      gap: 12,
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", null, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--bg-subtle)',
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${p.weight * 100}%`,
      height: '100%',
      background: `var(--chart-${i + 1})`,
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      textAlign: 'right',
      color: 'var(--muted-foreground)'
    }
  }, Math.round(p.weight * 100), "%"))))))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/knectar-app/screens/dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/knectar-app/screens/logDetail.jsx
try { (() => {
/* Log detail sheet — rflectr legacy UI logs/sheets/logDetailsSheet.tsx + logDetailView.tsx: header with id/status, prev/next nav, line tabs (Overview / Request / Response / Metadata), collapsible blocks. */
function KV({
  k,
  v,
  mono
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr',
      gap: 8,
      padding: '6px 0',
      borderBottom: '1px solid var(--border-subtle)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted-foreground)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mono ? 'var(--font-mono)' : 'inherit',
      color: 'var(--text-primary)',
      overflowWrap: 'anywhere'
    }
  }, v));
}
function CodeBlock({
  title,
  code
}) {
  const {
    IconButton
  } = NS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4px 4px 4px 12px',
      background: 'var(--bg-elevated)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      color: 'var(--muted-foreground)',
      borderBottom: '1px solid var(--border)'
    }
  }, title, /*#__PURE__*/React.createElement(IconButton, {
    icon: "copy",
    label: "Copy",
    small: true
  })), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: 12,
      background: 'var(--bg-inset)',
      fontSize: 12,
      lineHeight: '18px',
      color: 'var(--text-secondary)',
      overflowX: 'auto',
      whiteSpace: 'pre-wrap'
    }
  }, code));
}
function LogDetailSheet({
  log,
  onClose,
  onNav
}) {
  const {
    Sheet,
    Badge,
    Tabs,
    IconButton,
    Accordion,
    Button
  } = NS;
  const [tab, setTab] = React.useState('overview');
  if (!log) return null;
  const req = JSON.stringify({
    model: log.model.split('/')[1],
    messages: [{
      role: 'system',
      content: 'You are a helpful assistant.'
    }, {
      role: 'user',
      content: log.message
    }],
    temperature: 0.2,
    stream: log.type.includes('Stream')
  }, null, 2);
  const res = log.status === 'error' ? JSON.stringify({
    error: {
      type: log.statusCode === 429 ? 'rate_limit_error' : 'overloaded_error',
      message: log.statusCode === 429 ? 'Rate limit exceeded for key vk_…' : 'Provider is overloaded. Retried 2× before fallback.'
    }
  }, null, 2) : JSON.stringify({
    id: 'chatcmpl-' + log.id.slice(4, 14),
    choices: [{
      message: {
        role: 'assistant',
        content: '• Root cause: expired provider key\n• Impact: 3.2% of eu-west-1 traffic for 14 minutes\n• Fix: rotation completed, circuit breaker closed'
      },
      finish_reason: 'stop'
    }],
    usage: {
      prompt_tokens: log.tokensIn,
      completion_tokens: log.tokensOut
    }
  }, null, 2);
  return /*#__PURE__*/React.createElement(Sheet, {
    open: true,
    onClose: onClose,
    width: 680,
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, "Request details", /*#__PURE__*/React.createElement(Badge, {
      variant: log.status === 'success' ? 'success' : log.status === 'error' ? 'destructive' : 'info'
    }, log.status)),
    description: /*#__PURE__*/React.createElement("span", {
      className: "mono"
    }, log.id),
    headerExtra: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-up",
      label: "Previous",
      small: true,
      variant: "outline",
      onClick: () => onNav(-1)
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-down",
      label: "Next",
      small: true,
      variant: "outline",
      onClick: () => onNav(1)
    })),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      icon: "filter"
    }, "Filter by session"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      icon: "copy"
    }, "Copy as cURL"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "line",
    value: tab,
    onChange: setTab,
    tabs: [{
      value: 'overview',
      label: 'Overview'
    }, {
      value: 'request',
      label: 'Request'
    }, {
      value: 'response',
      label: 'Response'
    }, {
      value: 'metadata',
      label: 'Metadata',
      count: 6
    }]
  }), tab === 'overview' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(KV, {
    k: "Timestamp",
    v: `Today ${log.ts} UTC`,
    mono: true
  }), /*#__PURE__*/React.createElement(KV, {
    k: "Type",
    v: /*#__PURE__*/React.createElement(Badge, {
      tone: TYPE_TONE[log.type]
    }, log.type)
  }), /*#__PURE__*/React.createElement(KV, {
    k: "Model",
    v: log.model,
    mono: true
  }), /*#__PURE__*/React.createElement(KV, {
    k: "Provider",
    v: log.model.split('/')[0],
    mono: true
  }), /*#__PURE__*/React.createElement(KV, {
    k: "Latency",
    v: fmtLat(log.latency),
    mono: true
  }), /*#__PURE__*/React.createElement(KV, {
    k: "Tokens",
    v: log.tokensIn ? `${log.tokensIn.toLocaleString()} in · ${log.tokensOut.toLocaleString()} out` : '—',
    mono: true
  }), /*#__PURE__*/React.createElement(KV, {
    k: "Cost",
    v: fmtCost(log.cost),
    mono: true
  }), /*#__PURE__*/React.createElement(KV, {
    k: "Status code",
    v: log.statusCode,
    mono: true
  }), /*#__PURE__*/React.createElement(KV, {
    k: "Virtual key",
    v: log.vk,
    mono: true
  }), /*#__PURE__*/React.createElement(KV, {
    k: "Team",
    v: log.team
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    multiple: true,
    defaultOpen: ['in', 'out'],
    items: [{
      value: 'in',
      label: 'Input',
      icon: 'arrow-up-right',
      content: /*#__PURE__*/React.createElement(CodeBlock, {
        title: "messages[1].content",
        code: log.message
      })
    }, {
      value: 'out',
      label: 'Output',
      icon: 'arrow-down-left',
      content: /*#__PURE__*/React.createElement(CodeBlock, {
        title: "choices[0].message.content",
        code: log.status === 'success' ? '• Root cause: expired provider key\n• Impact: 3.2% of eu-west-1 traffic for 14 minutes\n• Fix: rotation completed, circuit breaker closed' : `HTTP ${log.statusCode} — see Response tab`
      })
    }]
  }))), tab === 'request' && /*#__PURE__*/React.createElement(CodeBlock, {
    title: "POST /v1/chat/completions",
    code: req
  }), tab === 'response' && /*#__PURE__*/React.createElement(CodeBlock, {
    title: `HTTP ${log.statusCode}`,
    code: res
  }), tab === 'metadata' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(KV, {
    k: "x-kn-request-id",
    v: log.id,
    mono: true
  }), /*#__PURE__*/React.createElement(KV, {
    k: "x-kn-routing-rule",
    v: "default-eu",
    mono: true
  }), /*#__PURE__*/React.createElement(KV, {
    k: "x-kn-fallback",
    v: log.status === 'error' ? 'anthropic → openai' : 'none',
    mono: true
  }), /*#__PURE__*/React.createElement(KV, {
    k: "x-kn-cache",
    v: "miss",
    mono: true
  }), /*#__PURE__*/React.createElement(KV, {
    k: "user-agent",
    v: "openai-python/1.52.0",
    mono: true
  }), /*#__PURE__*/React.createElement(KV, {
    k: "client-ip",
    v: "10.4.12.77",
    mono: true
  }))));
}
window.LogDetailSheet = LogDetailSheet;
window.CodeBlock = CodeBlock;
window.KV = KV;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/knectar-app/screens/logDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/knectar-app/screens/login.jsx
try { (() => {
/* /login — WorkOS AuthKit hand-off with an ambient nectar field drifting behind a single card. */
function Ambient() {
  const blob = (c, s, x, y, d, dur) => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: s,
      height: s,
      left: x,
      top: y,
      borderRadius: '50%',
      background: `radial-gradient(circle at 40% 40%, ${c}, transparent 70%)`,
      filter: 'blur(40px)',
      opacity: .55,
      animation: `kn-drift ${dur}s var(--ease-in-out) ${d}s infinite`,
      mixBlendMode: 'multiply'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    }
  }, blob('rgba(61,220,151,.75)', 520, '-8%', '-12%', 0, 22), blob('rgba(45,212,191,.7)', 620, '55%', '40%', -6, 26), blob('rgba(143,240,198,.6)', 420, '20%', '65%', -12, 19), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(rgba(10,11,13,.08) 1px, transparent 1px)',
      backgroundSize: '22px 22px',
      maskImage: 'radial-gradient(circle at 50% 45%, black 20%, transparent 75%)'
    }
  }));
}
function LoginScreen({
  onLogin,
  theme
}) {
  const {
    Button,
    Card,
    Input,
    Label,
    Separator,
    Icon
  } = NS;
  const [loading, setLoading] = React.useState(false);
  const go = () => {
    setLoading(true);
    setTimeout(onLogin, 1100);
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Login",
    style: {
      position: 'relative',
      minHeight: '100%',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--background)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Ambient, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 400,
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      alignItems: 'center',
      animation: 'kn-route-in var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: theme === 'dark' ? '../../assets/logo-stacked.svg' : '../../assets/logo-stacked-on-light.svg',
    alt: "knectar",
    className: loading ? 'kn-flutter' : 'kn-bob',
    style: {
      height: 124
    }
  }), /*#__PURE__*/React.createElement(Card, {
    accent: true,
    style: {
      width: '100%',
      boxShadow: 'var(--shadow-lg)'
    },
    title: "Sign in to rflectr",
    description: "Continue with your organization's identity provider."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "email"
  }, "Work email"), /*#__PURE__*/React.createElement(Input, {
    id: "email",
    type: "email",
    placeholder: "you@company.com",
    defaultValue: "mario@legioncodeinc.com"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    isLoading: loading,
    onClick: go,
    iconRight: "arrow-right",
    style: {
      width: '100%'
    }
  }, "Continue"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-tertiary)',
      fontSize: 'var(--text-xs)'
    }
  }, /*#__PURE__*/React.createElement(Separator, {
    style: {
      flex: 1,
      width: 'auto'
    }
  }), "or", /*#__PURE__*/React.createElement(Separator, {
    style: {
      flex: 1,
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "github",
    onClick: go
  }, "GitHub"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "key-round",
    onClick: go
  }, "SSO")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-tertiary)',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 12
  }), "Secured by WorkOS AuthKit \xB7 auth.knectar.dev"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-tertiary)',
      fontFamily: 'var(--font-mono)'
    }
  }, "rflectr v0.0.1 \xB7 self-hosted")));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/knectar-app/screens/login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/knectar-app/screens/logs.jsx
try { (() => {
/* /workspace/logs — recreated from rflectr legacy UI app/workspace/logs/page.tsx: stat cards, LogsHeaderView (search, period, polling, columns, more), volume chart, LogsDataTable with status bar column, LogDetailSheet. */
function MiniBars({
  data,
  tone = '--chart-1',
  h = 72
}) {
  const max = Math.max(...data.map(d => d.req));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 3,
      height: h
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    title: `${d.req} requests`,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: '100%',
      transformOrigin: 'bottom',
      animation: 'kn-grow-y var(--dur-slow) var(--ease-out) both',
      animationDelay: `${i * 14}ms`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${d.err / max * 100 * 4}%`,
      background: 'var(--status-error)',
      borderRadius: '1px 1px 0 0',
      minHeight: d.err ? 2 : 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${d.req / max * 100}%`,
      background: `linear-gradient(180deg,var(${tone}),color-mix(in oklch,var(${tone}) 45%,transparent))`,
      borderRadius: d.err ? 0 : '3px 3px 0 0'
    }
  }))));
}
function LogsScreen({
  onOpenLog,
  selectedId,
  liveLogs
}) {
  const {
    StatCard,
    Input,
    Button,
    Toggle,
    Select,
    Table,
    Badge,
    IconButton,
    Pagination,
    DropdownMenu,
    Popover,
    Checkbox,
    Card,
    Tooltip,
    Icon
  } = NS;
  const [q, setQ] = React.useState('');
  const [period, setPeriod] = React.useState('1h');
  const [live, setLive] = React.useState(true);
  const [chart, setChart] = React.useState(true);
  const [pg, setPg] = React.useState({
    offset: 0,
    limit: 25
  });
  const src = liveLogs || LOGS;
  const rows = src.filter(l => !q || l.message.toLowerCase().includes(q.toLowerCase()) || l.model.includes(q));
  const page = rows.slice(pg.offset, pg.offset + pg.limit);
  const ok = src.filter(l => l.status === 'success').length,
    tot = src.length;
  const tin = src.reduce((a, l) => a + l.tokensIn, 0),
    tout = src.reduce((a, l) => a + l.tokensOut, 0);
  const avg = Math.round(src.filter(l => l.latency).reduce((a, l) => a + l.latency, 0) / src.filter(l => l.latency).length);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "LLM Logs",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,minmax(0,1fr))',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    title: "Total Requests",
    value: tot.toLocaleString(),
    icon: "chart-bar"
  }), /*#__PURE__*/React.createElement(StatCard, {
    title: "Success Rate",
    value: `${(ok / tot * 100).toFixed(2)}%`,
    icon: "circle-check",
    description: "Success rate as perceived by the system. Each fallback counts as a separate attempt."
  }), /*#__PURE__*/React.createElement(StatCard, {
    title: "User Success Rate",
    value: `${(ok / tot * 100 + 1.1).toFixed(2)}%`,
    icon: "circle-check",
    description: "Success rate as perceived by the end user. It includes fallback chains as one request."
  }), /*#__PURE__*/React.createElement(StatCard, {
    title: "Avg Latency",
    value: `${avg.toLocaleString()}ms`,
    icon: "clock"
  }), /*#__PURE__*/React.createElement(StatCard, {
    title: "Total Tokens",
    value: fmtTok(tin + tout),
    subValue: `${fmtTok(tin)} in / ${fmtTok(tout)} out`,
    icon: "hash"
  }), /*#__PURE__*/React.createElement(StatCard, {
    title: "Total Cost",
    value: `$${src.reduce((a, l) => a + l.cost, 0).toFixed(2)}`,
    icon: "dollar-sign"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: "search",
    placeholder: "Search message content\u2026",
    value: q,
    onChange: e => {
      setQ(e.target.value);
      setPg(p => ({
        ...p,
        offset: 0
      }));
    }
  })), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    value: period,
    onChange: setPeriod,
    options: [{
      value: '15m',
      label: 'Last 15 minutes'
    }, {
      value: '1h',
      label: 'Last hour'
    }, {
      value: '24h',
      label: 'Last 24 hours'
    }, {
      value: '7d',
      label: 'Last 7 days'
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    icon: "calendar"
  }, "Custom range"), /*#__PURE__*/React.createElement(Toggle, {
    size: "sm",
    variant: "outline",
    icon: "radio",
    pressed: live,
    onChange: setLive,
    style: live ? {
      color: 'var(--brand-primary)',
      borderColor: 'rgba(61,220,151,.4)'
    } : {}
  }, live && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--status-success)',
      animation: 'kn-live-ring 1.6s ease-out infinite'
    }
  }), live ? 'Live' : 'Paused'), /*#__PURE__*/React.createElement(Toggle, {
    size: "sm",
    variant: "outline",
    icon: "chart-column",
    pressed: chart,
    onChange: setChart
  }), /*#__PURE__*/React.createElement(Popover, {
    align: "end",
    width: 220,
    trigger: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      icon: "columns-3"
    }, "Columns")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, ['Timestamp', 'Type', 'Message', 'Model', 'Latency', 'Tokens', 'Cost', 'Virtual Key', 'Team', 'Routing Rule'].map((c, i) => /*#__PURE__*/React.createElement(Checkbox, {
    key: c,
    checked: i < 8,
    label: c
  })))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    icon: "refresh-cw"
  }), /*#__PURE__*/React.createElement(DropdownMenu, {
    trigger: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      icon: "more-vertical"
    }),
    items: [{
      label: 'Recalculate costs',
      icon: 'calculator'
    }, {
      label: 'Export CSV',
      icon: 'download'
    }, {
      type: 'separator'
    }, {
      label: 'Delete filtered logs',
      icon: 'trash-2',
      destructive: true
    }]
  })), chart && /*#__PURE__*/React.createElement(Card, {
    padding: 16,
    accent: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
      fontSize: 'var(--text-sm)',
      color: 'var(--muted-foreground)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Request volume \xB7 last hour"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 'var(--text-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 8,
      background: 'var(--chart-1)',
      borderRadius: 1
    }
  }), "requests"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 8,
      background: 'var(--status-error)',
      borderRadius: 1
    }
  }), "errors"))), /*#__PURE__*/React.createElement(MiniBars, {
    data: SERIES
  })), /*#__PURE__*/React.createElement(Table, {
    rows: page,
    freshKey: "fresh",
    selectedId: selectedId,
    onRowClick: onOpenLog,
    columns: [{
      key: 'status',
      label: '',
      width: 20,
      render: r => /*#__PURE__*/React.createElement(Tooltip, {
        content: r.status,
        side: "right"
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          width: 6,
          height: 18,
          borderRadius: 2,
          background: `var(${STATUS_TONE[r.status]})`
        }
      }))
    }, {
      key: 'ts',
      label: 'Timestamp',
      sortable: true,
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--muted-foreground)'
        },
        title: r.ts
      }, ago(r.secsAgo))
    }, {
      key: 'type',
      label: 'Type',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: TYPE_TONE[r.type]
      }, r.type)
    }, {
      key: 'message',
      label: 'Message',
      maxWidth: 320,
      muted: true
    }, {
      key: 'model',
      label: 'Model',
      mono: true
    }, {
      key: 'latency',
      label: 'Latency',
      mono: true,
      align: 'right',
      sortable: true,
      render: r => fmtLat(r.latency)
    }, {
      key: 'tokens',
      label: 'Tokens',
      mono: true,
      align: 'right',
      sortable: true,
      render: r => r.tokensIn ? /*#__PURE__*/React.createElement("span", null, fmtTok(r.tokensIn + r.tokensOut), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-tertiary)'
        }
      }, " (", fmtTok(r.tokensIn), "/", fmtTok(r.tokensOut), ")")) : '—'
    }, {
      key: 'cost',
      label: 'Cost',
      mono: true,
      align: 'right',
      sortable: true,
      render: r => fmtCost(r.cost)
    }, {
      key: 'vk',
      label: 'Virtual Key',
      mono: true,
      muted: true
    }, {
      key: 'actions',
      label: '',
      width: 40,
      render: r => /*#__PURE__*/React.createElement("span", {
        onClick: e => e.stopPropagation()
      }, /*#__PURE__*/React.createElement(DropdownMenu, {
        trigger: /*#__PURE__*/React.createElement(IconButton, {
          icon: "more-horizontal",
          label: "Log actions",
          small: true
        }),
        items: [{
          label: 'Copy request id',
          icon: 'copy'
        }, {
          label: 'Filter by session',
          icon: 'filter'
        }, {
          type: 'separator'
        }, {
          label: 'Delete',
          icon: 'trash-2',
          destructive: true
        }]
      }))
    }]
  }), /*#__PURE__*/React.createElement(Pagination, {
    offset: pg.offset,
    limit: pg.limit,
    total: rows.length,
    onChange: setPg
  }));
}
window.LogsScreen = LogsScreen;
window.MiniBars = MiniBars;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/knectar-app/screens/logs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/knectar-app/screens/providers.jsx
try { (() => {
/* /workspace/providers — provider list (rflectr providers page + providerConfigCard.tsx patterns): cards per provider with keys, models, weight, budget bar, health; "Add provider" dialog. */
function ProvidersScreen() {
  const {
    Card,
    Badge,
    Button,
    Progress,
    Table,
    IconButton,
    Dialog,
    Label,
    Input,
    Select,
    Switch,
    DropdownMenu,
    EmptyState,
    Alert
  } = NS;
  const [open, setOpen] = React.useState(false);
  const [prov, setProv] = React.useState('gemini');
  const health = {
    healthy: 'success',
    degraded: 'warning',
    unconfigured: 'secondary'
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Model Providers",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    variant: "warning",
    icon: "triangle-alert",
    title: "Anthropic is degraded",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline"
    }, "View circuit breaker")
  }, "3 consecutive 529 responses in the last 5 minutes. Traffic is falling back to openai/gpt-4.1."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--muted-foreground)'
    }
  }, PROVIDERS.filter(p => p.health !== 'unconfigured').length, " configured \xB7 ", PROVIDERS.reduce((a, p) => a + p.models, 0), " models available"), /*#__PURE__*/React.createElement(Button, {
    icon: "plus",
    onClick: () => setOpen(true)
  }, "Add provider")), /*#__PURE__*/React.createElement(Table, {
    rows: PROVIDERS,
    columns: [{
      key: 'name',
      label: 'Provider',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 24,
          height: 24,
          borderRadius: 4,
          background: 'var(--bg-subtle)',
          border: '1px solid var(--border)',
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          fontWeight: 600,
          color: 'var(--text-secondary)'
        }
      }, r.name.slice(0, 2).toUpperCase()), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, r.name), /*#__PURE__*/React.createElement("span", {
        className: "mono",
        style: {
          color: 'var(--text-tertiary)',
          fontSize: 'var(--text-xs)'
        }
      }, r.id))
    }, {
      key: 'health',
      label: 'Health',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        variant: health[r.health]
      }, r.health)
    }, {
      key: 'keys',
      label: 'Keys',
      mono: true,
      align: 'right'
    }, {
      key: 'models',
      label: 'Models',
      mono: true,
      align: 'right'
    }, {
      key: 'weight',
      label: 'Weight',
      mono: true,
      align: 'right',
      render: r => r.weight ? r.weight.toFixed(2) : '—'
    }, {
      key: 'p50',
      label: 'p50 latency',
      mono: true,
      align: 'right',
      render: r => fmtLat(r.p50)
    }, {
      key: 'budget',
      label: 'Budget (month)',
      width: 220,
      render: r => r.budget[1] ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--muted-foreground)'
        }
      }, /*#__PURE__*/React.createElement("span", null, "$", r.budget[0].toLocaleString()), /*#__PURE__*/React.createElement("span", null, "$", r.budget[1].toLocaleString())), /*#__PURE__*/React.createElement(Progress, {
        value: r.budget[0] / r.budget[1] * 100,
        tone: r.budget[0] / r.budget[1] > .8 ? '--status-warning' : undefined,
        height: 6
      })) : /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-tertiary)'
        }
      }, "\u2014")
    }, {
      key: 'a',
      label: '',
      width: 40,
      render: () => /*#__PURE__*/React.createElement(DropdownMenu, {
        trigger: /*#__PURE__*/React.createElement(IconButton, {
          icon: "more-horizontal",
          label: "Provider actions",
          small: true
        }),
        items: [{
          label: 'Edit',
          icon: 'pencil'
        }, {
          label: 'Manage keys',
          icon: 'key-round'
        }, {
          label: 'Test connection',
          icon: 'activity'
        }, {
          type: 'separator'
        }, {
          label: 'Remove provider',
          icon: 'trash-2',
          destructive: true
        }]
      })
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 12
    }
  }, PROVIDERS.slice(0, 3).map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    title: p.name,
    description: `${p.keys} keys · ${p.models} models`,
    action: /*#__PURE__*/React.createElement(Badge, {
      variant: health[p.health]
    }, p.health),
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      color: 'var(--muted-foreground)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Load-balancer weight"), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--text-primary)'
    }
  }, p.weight.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      color: 'var(--muted-foreground)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Budget used"), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--text-primary)'
    }
  }, "$", p.budget[0], " / $", p.budget[1])), /*#__PURE__*/React.createElement(Progress, {
    value: p.budget[0] / p.budget[1] * 100,
    tone: p.budget[0] / p.budget[1] > .8 ? '--status-warning' : undefined,
    height: 6
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    icon: "key-round"
  }, "Keys"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "settings-2"
  }, "Configure")))))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: () => setOpen(false),
    title: "Add provider",
    description: "Keys are stored encrypted and never shown again.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      icon: "plus",
      onClick: () => setOpen(false)
    }, "Add provider"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Label, {
    required: true
  }, "Provider"), /*#__PURE__*/React.createElement(Select, {
    fullWidth: true,
    value: prov,
    onChange: setProv,
    options: [{
      value: 'gemini',
      label: 'Google Gemini'
    }, {
      value: 'mistral',
      label: 'Mistral'
    }, {
      value: 'groq',
      label: 'Groq'
    }, {
      value: 'cohere',
      label: 'Cohere'
    }, {
      value: 'vertex',
      label: 'Vertex AI'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Label, {
    required: true,
    hint: "Or reference an env var: env.GEMINI_API_KEY"
  }, "API key"), /*#__PURE__*/React.createElement(Input, {
    mono: true,
    placeholder: "AIza\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Label, {
    hint: "0\u20131, share of load-balanced traffic"
  }, "Weight"), /*#__PURE__*/React.createElement(Input, {
    mono: true,
    defaultValue: "0.1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Monthly budget (USD)"), /*#__PURE__*/React.createElement(Input, {
    mono: true,
    placeholder: "500"
  }))), /*#__PURE__*/React.createElement(Switch, {
    checked: true,
    label: "Enable for all virtual keys"
  }))));
}
window.ProvidersScreen = ProvidersScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/knectar-app/screens/providers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/knectar-app/screens/virtualKeys.jsx
try { (() => {
/* /workspace/governance/virtual-keys — governance table + create sheet (rflectr legacy UI governance views: teamsTable/teamSheet patterns, providerConfigCard budgets). */
function VirtualKeysScreen() {
  const {
    Table,
    Badge,
    Button,
    Progress,
    IconButton,
    DropdownMenu,
    Sheet,
    Label,
    Input,
    Select,
    Switch,
    Checkbox,
    Textarea,
    Breadcrumb
  } = NS;
  const [open, setOpen] = React.useState(false);
  const [team, setTeam] = React.useState('platform');
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Virtual Keys",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Governance'
    }, {
      label: 'Virtual Keys'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: "search",
    placeholder: "Search keys\u2026",
    style: {
      width: 220
    }
  }), /*#__PURE__*/React.createElement(Button, {
    icon: "plus",
    onClick: () => setOpen(true)
  }, "Create virtual key"))), /*#__PURE__*/React.createElement(Table, {
    rows: VIRTUAL_KEYS,
    columns: [{
      key: 'name',
      label: 'Name',
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, r.name), /*#__PURE__*/React.createElement("span", {
        className: "mono",
        style: {
          fontSize: 'var(--text-xs)',
          color: 'var(--text-tertiary)'
        }
      }, r.id, "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"))
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        variant: r.status === 'active' ? 'success' : 'secondary'
      }, r.status)
    }, {
      key: 'team',
      label: 'Team',
      mono: true,
      muted: true
    }, {
      key: 'providers',
      label: 'Providers',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          gap: 4
        }
      }, r.providers.map(p => /*#__PURE__*/React.createElement(Badge, {
        key: p,
        variant: "outline",
        mono: true
      }, p)))
    }, {
      key: 'rpm',
      label: 'Rate limit',
      mono: true,
      align: 'right',
      render: r => `${r.rpm} rpm`
    }, {
      key: 'budget',
      label: 'Budget (month)',
      width: 200,
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--muted-foreground)'
        }
      }, /*#__PURE__*/React.createElement("span", null, "$", r.budget[0]), /*#__PURE__*/React.createElement("span", null, "$", r.budget[1])), /*#__PURE__*/React.createElement(Progress, {
        value: r.budget[0] / r.budget[1] * 100,
        tone: r.budget[0] / r.budget[1] > .9 ? '--status-error' : r.budget[0] / r.budget[1] > .6 ? '--status-warning' : undefined,
        height: 6
      }))
    }, {
      key: 'created',
      label: 'Created',
      mono: true,
      muted: true
    }, {
      key: 'a',
      label: '',
      width: 40,
      render: () => /*#__PURE__*/React.createElement(DropdownMenu, {
        trigger: /*#__PURE__*/React.createElement(IconButton, {
          icon: "more-horizontal",
          label: "Key actions",
          small: true
        }),
        items: [{
          label: 'Edit',
          icon: 'pencil'
        }, {
          label: 'Rotate key',
          icon: 'refresh-cw'
        }, {
          label: 'Override budget',
          icon: 'wallet'
        }, {
          type: 'separator'
        }, {
          label: 'Disable',
          icon: 'ban'
        }, {
          label: 'Delete',
          icon: 'trash-2',
          destructive: true
        }]
      })
    }]
  }), /*#__PURE__*/React.createElement(Sheet, {
    open: open,
    onClose: () => setOpen(false),
    width: 560,
    title: "Create virtual key",
    description: "A virtual key maps a team to allowed providers, models, budgets and rate limits.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      icon: "key-round",
      onClick: () => setOpen(false)
    }, "Create key"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Label, {
    required: true
  }, "Name"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "prod-agent-router"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Description"), /*#__PURE__*/React.createElement(Textarea, {
    rows: 2,
    placeholder: "What will this key be used for?"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Label, {
    required: true
  }, "Team"), /*#__PURE__*/React.createElement(Select, {
    fullWidth: true,
    value: team,
    onChange: setTeam,
    options: ['platform', 'growth', 'support-ai', 'research'].map(t => ({
      value: t,
      label: t
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Label, {
    hint: "Requests per minute"
  }, "Rate limit"), /*#__PURE__*/React.createElement(Input, {
    mono: true,
    defaultValue: "600"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Label, {
    hint: "* means all configured providers"
  }, "Allowed providers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: 12,
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)'
    }
  }, PROVIDERS.slice(0, 4).map((p, i) => /*#__PURE__*/React.createElement(Checkbox, {
    key: p.id,
    checked: i < 2,
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center'
      }
    }, p.name, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 'var(--text-xs)',
        color: 'var(--text-tertiary)'
      }
    }, p.models, " models"))
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Monthly budget (USD)"), /*#__PURE__*/React.createElement(Input, {
    mono: true,
    placeholder: "1000"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Resets"), /*#__PURE__*/React.createElement(Select, {
    fullWidth: true,
    value: "1M",
    options: [{
      value: '1d',
      label: 'Daily'
    }, {
      value: '1w',
      label: 'Weekly'
    }, {
      value: '1M',
      label: 'Monthly'
    }, {
      value: '1Q',
      label: 'Quarterly'
    }]
  }))), /*#__PURE__*/React.createElement(Switch, {
    checked: true,
    label: "Active immediately"
  }))));
}
window.VirtualKeysScreen = VirtualKeysScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/knectar-app/screens/virtualKeys.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.CommandBar = __ds_scope.CommandBar;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.KNECTAR_NAV = __ds_scope.KNECTAR_NAV;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.DropdownMenu = __ds_scope.DropdownMenu;

__ds_ns.Popover = __ds_scope.Popover;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
