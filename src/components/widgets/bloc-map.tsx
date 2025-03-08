import { cn } from "@/lib/tw";
import { ComponentProps } from "react";

export interface BlocMapProps extends ComponentProps<"div"> {}

const BlocMap = (props: BlocMapProps) => {
  return (
    <div
      {...props}
      className={cn(
        "h-[698px] w-full rounded-3xl bg-black z-[10] relative",
        props.className
      )}
    />
  );
};

export default BlocMap;
