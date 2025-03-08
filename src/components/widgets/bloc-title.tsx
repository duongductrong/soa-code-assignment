import { cn } from "@/lib/tw";
import { ComponentProps, ReactNode } from "react";

export interface BlocTitleProps extends Omit<ComponentProps<"div">, "title"> {
  title: ReactNode;
  subtitle: string | ReactNode;
}

const BlocTitle = ({ title, subtitle, ...props }: BlocTitleProps) => {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center gap-10 [&>span]:grow [&>span]:h-[1px] [&>span]:bg-grey mb-10",
        props.className
      )}
    >
      <span />
      <div className="flex flex-col items-center gap-y-4 flex-1">
        <h2 className="text-card text-center font-sans text-6xl font-semibold leading-60 uppercase">
          {title}
        </h2>
        {typeof subtitle === "string" ? (
          <p className="text-brand text-center font-sans text-2xl font-normal leading-[30px] tracking-[0.25px]">
            {subtitle}
          </p>
        ) : (
          subtitle
        )}
      </div>
      <span />
    </div>
  );
};

export default BlocTitle;
