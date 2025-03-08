import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import ArrowUpRightIcon from "@/components/widgets/icons/arrow-up-right-icon";
import BarIcon from "@/components/widgets/icons/bar-icon";
import CrosshairIcon from "@/components/widgets/icons/crosshair-icon";
import FishingIcon from "@/components/widgets/icons/fishing-icon";
import MountainIcon from "@/components/widgets/icons/mountain-icon";
import { cn } from "@/lib/tw";

type Props = {};

const FrontageHeader = (_props: Props) => {
  const menuItems = [
    { id: 1, title: "Titre 1", className: "w-[173px]" },
    { id: 2, title: "Titre 2", className: "w-[123px]" },
    { id: 3, title: "Titre 3", className: "w-[94px]" },
    { id: 4, title: "Titre 4", className: "w-[35px]" },
  ];

  return (
    <header
      className={cn(
        "z-50",
        "h-18 bg-brand/70",
        "text-white fixed top-0 w-full",
        "flex items-center backdrop-blur-sm"
      )}
    >
      <Container className="flex items-center">
        <p className="text-white font-sans text-[15px] font-bold leading-normal mr-[94px]">
          LOGO SAMPLE
        </p>

        <div className="flex items-center gap-6 grow hidden lg:flex">
          {menuItems.map((item) => (
            <p
              key={item.id}
              className={cn(
                "text-white/90 font-sans text-base font-medium leading-[150%] capitalize whitespace-nowrap",
                item.className
              )}
            >
              {item.title}
            </p>
          ))}
        </div>

        <div className="items-center gap-4 hidden lg:flex">
          <MountainIcon className="size-7 text-[#F0F0F0]" />
          <FishingIcon className="size-7 text-[#F0F0F0]" />
          <CrosshairIcon className="size-7" />
          <Button corner="full">
            Contactez-nous
            <ArrowUpRightIcon className="ml-" />
          </Button>
        </div>

        <BarIcon
          className="size-7 text-white block lg:hidden ml-auto cursor-pointer"
          onClick={() => alert("Mobile menu not implemented yet")}
        />
      </Container>
    </header>
  );
};

export default FrontageHeader;
