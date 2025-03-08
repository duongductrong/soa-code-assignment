import { cn } from "@/lib/tw";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const buttonStyles = tv(
  {
    base: [
      "inline-flex items-center justify-center",
      "text-white",
      "font-sans",
      "text-lg",
      "font-medium",
      "leading-5",
      "whitespace-nowrap",
    ],
    variants: {
      variant: {
        default: "bg-card",
        outline:
          "bg-transparent border border-[rgba(86,44,44,0.30)] text-brand",
      },
      size: {
        default: "h-10 px-4 py-2.5",
        lg: "h-12 px-6 py-3",
      },
      corner: {
        default: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      corner: "default",
    },
  },
  { twMerge: false, responsiveVariants: true }
);

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonStyles> {}

const Button = ({ corner, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        buttonStyles({ corner, variant, size, className: props.className })
      )}
    />
  );
};

export default Button;
