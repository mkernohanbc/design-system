import {
  OverlayArrow,
  Popover as ReactAriaPopover,
  PopoverProps,
} from "react-aria-components";

import "./Popover.css";
import SvgTooltipArrowUp from "../Icons/SvgTooltipArrowUp";

export default function Popover(props: PopoverProps) {
  return (
    <ReactAriaPopover className="bcds-react-aria-Popover" {...props}>
      <OverlayArrow className="bcds-react-aria-OverlayArrow">
        <SvgTooltipArrowUp />
      </OverlayArrow>
      <>{props.children}</>
    </ReactAriaPopover>
  );
}
