import { ReactNode } from "react";
import { Placement } from "react-aria";
import {
  OverlayArrow,
  Tooltip as AriaTooltip,
  TooltipTrigger,
  TooltipTriggerComponentProps,
  Button,
} from "react-aria-components";
import { Beak } from "./beak";

type TooltipTriggerProps = TooltipTriggerComponentProps & {
  tooltip: ReactNode;
  placement?: Placement;
};

export const Tooltip = ({
  children,
  tooltip,
  placement,
  delay = 100,
  closeDelay = 200,
  ...props
}: TooltipTriggerProps) => {
  return (
    <TooltipTrigger {...props} delay={delay} closeDelay={closeDelay}>
      <Button className="focus-visible:outline-none">{children}</Button>
      <AriaTooltip placement={placement}>
        {tooltip}
        <OverlayArrow>
          <Beak />
        </OverlayArrow>
      </AriaTooltip>
    </TooltipTrigger>
  );
};
