import {
  Separator as ReactAriaSeparator,
  SeparatorProps as ReactAriaSeparatorProps,
} from "react-aria-components";

import "./Separator.css";

export interface SeparatorProps extends ReactAriaSeparatorProps {
  size?: "small" | "medium" | "large";
  color?: "light" | "dark";
}

export default function Separator({
  size = "small",
  color = "light",
  ...props
}: SeparatorProps) {
  return (
    <ReactAriaSeparator
      className={`bcds-react-aria-Separator ${size} ${color}`}
      {...props}
    />
  );
}
