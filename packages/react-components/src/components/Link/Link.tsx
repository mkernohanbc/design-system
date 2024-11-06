import {
  Link as ReactAriaLink,
  LinkProps as ReactAriaLinkProps,
} from "react-aria-components";

import "./Link.css";

export interface LinkProps extends ReactAriaLinkProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export default function Link({
  children,
  iconLeft,
  iconRight,
  ...props
}: LinkProps) {
  return (
    <ReactAriaLink className="bcds-react-aria-Link" {...props}>
      {iconLeft && (
        <span className="bcds-react-aria-Link--Icon">{iconLeft}</span>
      )}
      <>{children}</>
      {iconRight && (
        <span className="bcds-react-aria-Link--Icon">{iconRight}</span>
      )}
    </ReactAriaLink>
  );
}
