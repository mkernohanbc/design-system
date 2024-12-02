import {
  Popover as ReactAriaPopover,
  PopoverProps,
} from "react-aria-components";
import "./Popover.css";
export default function Popover({ children, ...props }: PopoverProps) {
  return (
    <ReactAriaPopover className="bcds-react-aria-Popover" {...props}>
      {children}
    </ReactAriaPopover>
  );
}
