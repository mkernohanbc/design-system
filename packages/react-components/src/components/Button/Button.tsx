import {
  Button as ReactAriaButton,
  ButtonProps as ReactAriaButtonProps,
} from "react-aria-components";

import "./Button.css";

export interface ButtonProps extends ReactAriaButtonProps {
  /**
   * Defaults to `medium`. `small` is shorter vertically.
   */
  size?: "small" | "medium";
  /**
   * Defaults to `primary`.
   */
  variant?: "primary" | "secondary" | "tertiary" | "link";
  /**
   * For destructive/deletion actions.
   */
  danger?: boolean;
  /**
   * If true, renders a square button intended for a single icon.
   */
  isIconButton?: boolean;
  /**
   * Toggle between default (light) colour scheme and dark mode
   */
  isDark?: boolean;
}

export default function Button({
  size = "medium",
  variant = "primary",
  danger = false,
  isIconButton = false,
  isDark = false,
  ...props
}: ButtonProps) {
  return (
    <ReactAriaButton
      className={`bcds-react-aria-Button ${
        isDark && "dark"
      } ${size} ${variant} ${danger ? "danger" : ""} ${
        isIconButton ? "icon" : ""
      }`}
      {...props}
    />
  );
}
