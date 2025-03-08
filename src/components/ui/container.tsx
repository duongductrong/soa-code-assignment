import { cn } from "@/lib/tw";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const containerStyles = tv(
  {
    base: "mx-auto w-full",
    variants: {
      variant: {
        default: "max-w-base",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
  {
    twMerge: false,
    responsiveVariants: true,
  }
);

export interface ContainerProps
  extends VariantProps<typeof containerStyles>,
    ComponentProps<"div"> {}

const Container = (props: ContainerProps) => {
  return (
    <div
      {...props}
      className={cn(containerStyles({ className: props.className }))}
    />
  );
};

export default Container;
