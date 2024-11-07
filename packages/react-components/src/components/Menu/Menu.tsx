import {
  MenuTrigger,
  Menu as ReactAriaMenu,
  MenuProps as ReactAriaMenuProps,
  Popover as ReactAriaPopover,
  SubmenuTrigger,
} from "react-aria-components";

import "./Menu.css";
import React from "react";

export interface MenuProps<T extends object> extends ReactAriaMenuProps<T> {
  triggerElement: React.ReactNode;
}

export default function Menu<T extends object>({
  children,
  triggerElement,
  ...props
}: MenuProps<T>) {
  return (
    <MenuTrigger>
      {triggerElement}
      <ReactAriaPopover className="bcds-react-aria-Popover">
        <ReactAriaMenu className="bcds-react-aria-Menu" {...props}>
          {children}
        </ReactAriaMenu>
      </ReactAriaPopover>
    </MenuTrigger>
  );
}

export { MenuTrigger, SubmenuTrigger };
