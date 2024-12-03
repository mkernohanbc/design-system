import React, { useState, useRef } from "react";

import {
  Button,
  SvgInfoIcon,
  Tooltip,
  TooltipTrigger,
} from "@bcgov/design-system-react-components";
import { Text } from "react-aria-components";

export interface InfoButtonProps extends React.PropsWithChildren {
  buttonVariant?: "primary" | "secondary" | "tertiary" | "link";
  popoverPlacement?: "top" | "bottom" | "left" | "right";
  isTooltipDisabled?: boolean;
}

// import path for components not yet released
import { Popover } from "../../../../packages/react-components/src/components";

export default function InfoButton({
  buttonVariant = "link",
  popoverPlacement = "bottom",
  isTooltipDisabled = false,
  children,
  ...props
}: InfoButtonProps) {
  const [isOpen, setOpen] = useState(false);
  const triggerRef = useRef(null);
  return (
    <React.Fragment {...props}>
      <TooltipTrigger delay={0}>
        <Button
          isIconButton
          size="small"
          onPress={() => setOpen(true)}
          aria-label="More information"
          variant={buttonVariant}
        >
          <span
            ref={triggerRef}
            style={{ display: "flex", alignItems: "center" }}
          >
            <SvgInfoIcon />
          </span>
        </Button>
        {!isTooltipDisabled && (
          <Tooltip placement="bottom">
            Press for information about this component
          </Tooltip>
        )}
        <Popover
          placement={popoverPlacement}
          triggerRef={triggerRef}
          isOpen={isOpen}
          onOpenChange={setOpen}
        >
          <Text className="popover">{children}</Text>
        </Popover>
      </TooltipTrigger>
    </React.Fragment>
  );
}
