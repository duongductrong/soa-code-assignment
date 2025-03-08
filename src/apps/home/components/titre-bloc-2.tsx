import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import BlocMap from "@/components/widgets/bloc-map";
import BlocTitle from "@/components/widgets/bloc-title";
import CrosshairIcon from "@/components/widgets/icons/crosshair-icon";
import FishingIcon from "@/components/widgets/icons/fishing-icon";
import MountainIcon from "@/components/widgets/icons/mountain-icon";
import { cn } from "@/lib/tw";
import { ComponentProps } from "react";
import { usePageContext } from "../hooks";

export interface TitreBloc2Props extends ComponentProps<typeof Container> {}

const TitreBloc2 = (props: TitreBloc2Props) => {
  const { page } = usePageContext();

  return (
    <div
      className={cn(
        "relative",
        "bg-cover bg-center bg-[url('/assets/images/bloc-titre-2-background.jpg')]",
        "after:absolute after:top-0 after:left-0",
        "after:w-full after:h-full after:bg-[#FFF6F4]/30 after:pointer-events-none",
        "after:z-0"
      )}
    >
      <Container
        {...props}
        className={cn("py-8 sm:py-15 xl:min-h-[986px]", props.className)}
      >
        <BlocTitle title={page?.bloc_2.title} className="mb-6 relative z-[5]" />

        <div className="mt-2 flex flex-wrap justify-center items-center gap-5 mb-6 lg:py-2">
          <Button
            variant="outline"
            corner="full"
            className="bg-[#FAFAFA] border-card w-fit"
          >
            <MountainIcon className="size-7 mr-2" />
            {page?.bloc_2.cases?.[0] || "Online Classes"}
          </Button>
          <Button
            variant="outline"
            corner="full"
            className="bg-[#FAFAFA] border-card w-fit"
          >
            <FishingIcon className="size-7 mr-2" />
            {page?.bloc_2.cases?.[1] || "Ethical Hunting"}
          </Button>
          <Button
            variant="outline"
            corner="full"
            className="bg-[#FAFAFA] border-card w-fit"
          >
            <CrosshairIcon className="size-7 mr-2" />
            {page?.bloc_2.cases?.[2] || "Gastronomic Experiences"}
          </Button>
        </div>

        <BlocMap />
      </Container>
    </div>
  );
};

export default TitreBloc2;
