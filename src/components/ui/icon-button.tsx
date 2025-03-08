import { cn } from "@/lib/tw";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const iconButtonStyles = tv(
  {
    base: "inline-flex size-8 rounded-full bg-card justify-center items-center",
    variants: {
      size: {
        default: "size-8",
        lg: "size-14",
      },
      color: {
        default: "bg-card",
        turquoise: "bg-turquoise",
      },
    },
    defaultVariants: {
      size: "default",
      color: "default",
    },
  },
  {
    twMerge: false,
    responsiveVariants: true,
  }
);

export interface IconButtonProps
  extends Omit<ComponentProps<"span">, "color">,
    VariantProps<typeof iconButtonStyles> {}

const IconButton = ({ size, color, ...props }: IconButtonProps) => {
  return (
    <span
      {...props}
      className={cn(
        iconButtonStyles({ color, size, className: props.className })
      )}
    />
  );
};

export default IconButton;
