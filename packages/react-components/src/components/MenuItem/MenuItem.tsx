import {
  MenuItem as ReactAriaMenuItem,
  MenuItemProps as ReactAriaMenuItemProps,
} from "react-aria-components";

import "./MenuItem.css";

export default function MenuItem(props: ReactAriaMenuItemProps) {
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
          {hasSubmenu && (
            <svg className="chevron" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
        </>
      )}
    </ReactAriaMenuItem>
  );
}
