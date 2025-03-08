import { cn } from "@/lib/tw";
import { ComponentProps } from "react";

export interface ExploreCardProps extends ComponentProps<"div"> {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
}

const ExploreCard = ({
  className,
  image,
  title,
  subtitle,
  description,
  buttonLabel,
  ...props
}: ExploreCardProps) => {
  return (
    <div {...props} className={cn("flex flex-col gap-y-6", className)}>
      <img
        src={image}
        loading="lazy"
        alt="case-img-1"
        className="h-[397px] object-cover rounded-lg"
      />
      <div className="flex flex-col items-start gap-y-1">
        <small className="text-card text-center font-sans text-xl font-medium leading-normal mb-1">
          {subtitle}
        </small>
        <h2 className="text-brand text-center font-sans text-3xl font-medium leading-[32px] mb-4">
          {title}
        </h2>
        <p className="text-brand/80 font-sans text-lg font-normal leading-[24px] tracking-[-0.18px] line-clamp-2 pl-4 border-l border-grey">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExploreCard;
