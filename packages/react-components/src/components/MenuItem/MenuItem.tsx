import {
  MenuItem as ReactAriaMenuItem,
  MenuItemProps as ReactAriaMenuItemProps,
} from "react-aria-components";

import "./MenuItem.css";
import SvgChevronRightIcon from "../Icons/SvgChevronRightIcon";

export default function MenuItem({ ...props }: ReactAriaMenuItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);
  return (
    <ReactAriaMenuItem
      {...props}
      textValue={textValue}
      className="bcds-react-aria-Menu-Item"
    >
      {({ hasSubmenu }) => (
        <>
          {props.children}
          {hasSubmenu && <SvgChevronRightIcon />}
        </>
      )}
    </ReactAriaMenuItem>
  );
}
