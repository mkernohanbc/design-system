import {
  Separator as ReactAriaSeparator,
  SeparatorProps as ReactAriaSeparatorProps,
} from "react-aria-components";

import "./Separator.css";

export interface SeparatorProps extends ReactAriaSeparatorProps {
  size?: "small" | "medium" | "large";
}

export default function Separator({
  size = "small",
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <ReactAriaSeparator
      className={`bcds-react-aria-Separator ${size} ${orientation}`}
      {...props}
    />
  );
}
