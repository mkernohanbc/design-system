import {
  Link as ReactAriaLink,
  LinkProps as ReactAriaLinkProps,
} from "react-aria-components";

import "./Link.css";

export interface LinkProps extends ReactAriaLinkProps {
  /* Left icon slot */
  iconLeft?: React.ReactElement;
  /* Right icon slot */
  iconRight?: React.ReactElement;
  /* Text size */
  size?: "small" | "medium" | "large";
  /* ARIA label */
  ariaLabel?: string | undefined;
}

export default function Link({
  children,
  size = "medium",
  iconLeft,
  iconRight,
  ariaLabel,
  ...props
}: LinkProps) {
  return (
    <ReactAriaLink
      className={`bcds-react-aria-Link ${size}`}
      aria-label={ariaLabel}
      {...props}
    >
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
