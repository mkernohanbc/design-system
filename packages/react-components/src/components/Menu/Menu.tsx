import {
  MenuTrigger,
  Menu as ReactAriaMenu,
  MenuProps as ReactAriaMenuProps,
  Popover as ReactAriaPopover,
  SubmenuTrigger,
} from "react-aria-components";

import "./Menu.css";

export default function Menu<T extends object>({
  children,
  ...props
}: ReactAriaMenuProps<T>) {
  return (
    <ReactAriaPopover className="bcds-react-aria-Popover">
      <ReactAriaMenu className="bcds-react-aria-Menu" {...props}>
        {children}
      </ReactAriaMenu>
    </ReactAriaPopover>
  );
}

export { MenuTrigger, SubmenuTrigger };
