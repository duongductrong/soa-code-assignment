import { cn } from "@/lib/tw";
import { forwardRef } from "react";

const Label = forwardRef<
  React.ElementRef<"label">,
  React.ComponentPropsWithoutRef<"label">
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-brand",
      "font-sans text-base sm:text-xl lg:text-2xl font-normal leading-normal capitalize",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

export default Label;
