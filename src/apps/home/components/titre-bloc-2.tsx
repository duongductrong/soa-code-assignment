import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import BlocMap from "@/components/widgets/bloc-map";
import BlocTitle from "@/components/widgets/bloc-title";
import CrosshairIcon from "@/components/widgets/icons/crosshair-icon";
import FishingIcon from "@/components/widgets/icons/fishing-icon";
import MountainIcon from "@/components/widgets/icons/mountain-icon";
import { cn } from "@/lib/tw";
import { ComponentProps } from "react";

export interface TitreBloc2Props extends ComponentProps<typeof Container> {}

const TitreBloc2 = (props: TitreBloc2Props) => {
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
        className={cn("py-15 min-h-[986px]", props.className)}
      >
        <BlocTitle
          title="Our Activities"
          subtitle={
            <div className="mt-2 flex items-center gap-5 py-2">
              <Button
                variant="outline"
                corner="full"
                className="bg-[#FAFAFA] border-card"
              >
                <MountainIcon className="size-7 mr-2" />
                Online Classes
              </Button>
              <Button
                variant="outline"
                corner="full"
                className="bg-[#FAFAFA] border-card"
              >
                <FishingIcon className="size-7 mr-2" />
                Ethical Hunting
              </Button>
              <Button
                variant="outline"
                corner="full"
                className="bg-[#FAFAFA] border-card"
              >
                <CrosshairIcon className="size-7 mr-2" />
                Gastronomic Experiences
              </Button>
            </div>
          }
          className="mb-6 relative z-[5]"
        />

        <BlocMap />
      </Container>
    </div>
  );
};

export default TitreBloc2;
