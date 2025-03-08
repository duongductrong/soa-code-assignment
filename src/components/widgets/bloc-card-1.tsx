import { cn } from "@/lib/tw";
import { ComponentProps } from "react";
import Button from "../ui/button";
import ArrowUpRightIcon from "./icons/arrow-up-right-icon";

export interface BlocCard1Props extends ComponentProps<"div"> {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
}

const BlocCard1 = ({
  className,
  image,
  title,
  subtitle,
  description,
  buttonLabel,
  ...props
}: BlocCard1Props) => {
  return (
    <div {...props} className={cn("flex flex-col gap-y-6", className)}>
      <img
        src={image}
        loading="lazy"
        alt="case-img-1"
        className="h-[200px] md:h-[235px] lg:h-[355px] xl:h-[397px] object-cover rounded-lg"
      />
      <div className="flex flex-col items-start gap-y-1">
        <p className="text-card font-sans text-xs md:text-base lg:text-lg xl:text-xl font-medium leading-normal md:mb-1">
          {subtitle}
        </p>
        <p className="text-brand font-sans text-base md:text-xl lg:text-2xl xl:text-3xl font-medium md:leading-[32px] md:mb-4">
          {title}
        </p>
        <p className="text-brand/80 font-sans text-sm md:text-base lg:text-lg font-normal md:leading-[24px] tracking-[-0.18px] line-clamp-2">
          {description}
        </p>
      </div>

      <Button className="text-brand w-[240px]" corner="full" variant="outline">
        {buttonLabel}
        <ArrowUpRightIcon className="ml-1 text-turquoise" />
      </Button>
    </div>
  );
};

export default BlocCard1;
