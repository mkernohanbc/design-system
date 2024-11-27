import {
  Text as ReactAriaText,
  TextProps as ReactAriaTextProps,
} from "react-aria-components";

import "./Text.css";

export interface TextProps extends ReactAriaTextProps {
  variant?: "label" | "description" | undefined;
  slot?: string;
}

export default function Text({ variant, slot, children, ...props }: TextProps) {
  return (
    <ReactAriaText
      className={`bcds-react-aria-Text ${variant}`}
      slot={slot}
      {...props}
    >
      {children}
    </ReactAriaText>
  );
}
