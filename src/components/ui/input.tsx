import { cn } from "@/lib/tw";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const inputStyles = tv(
  {
    base: [
      "h-[3.125rem] px-4 py-3 border border-brand/30 bg-white w-full",
      "placeholder:font-sans placeholder:text-lg placeholder:font-normal",
      "placeholder:leading-normal placeholder:tracking-[-0.126px]",
    ],
    variants: {
      variant: {
        default: "",
      },
      corner: {
        default: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      corner: "default",
    },
  },
  { twMerge: false, responsiveVariants: true }
);

export interface InputProps
  extends ComponentProps<"input">,
    VariantProps<typeof inputStyles> {}

const Input = ({ corner, variant, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={cn(
        inputStyles({ corner, variant, className: props.className })
      )}
    />
  );
};

export default Input;
