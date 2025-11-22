import type { ComponentProps, ReactNode } from "react";

import {
  TooltipContent,
  TooltipTrigger,
  Tooltip,
} from "@/components/ui/tooltip";

interface ComingSoonProperties extends ComponentProps<typeof Tooltip> {
  side: "bottom" | "right" | "left" | "top";
  children: ReactNode;
}

function ComingSoon({ children, side, ...properties }: ComingSoonProperties) {
  return (
    <Tooltip {...properties}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side}>
        <p>Coming soon</p>
      </TooltipContent>
    </Tooltip>
  );
}

export { ComingSoon };
