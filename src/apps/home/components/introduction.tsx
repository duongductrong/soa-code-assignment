import CrosshairIcon from "@/components/widgets/icons/crosshair-icon";
import FishingIcon from "@/components/widgets/icons/fishing-icon";
import MountainIcon from "@/components/widgets/icons/mountain-icon";

type Props = {};

const activities = [
  {
    label: "Activité 1",
    icon: <MountainIcon className="size-8 text-white" />,
  },
  {
    label: "Activité 2",
    icon: <FishingIcon className="size-8 text-white" />,
  },
  {
    label: "Activité 3",
    icon: <CrosshairIcon className="size-8 text-white" />,
  },
];

const Introduction = (props: Props) => {
  return (
    <div className="h-screen relative w-full">
      <img
        src="/assets/images/hero-banner.webp"
        loading="lazy"
        alt="hero-banner"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-20 w-full h-fit">
        <div className="max-w-base mx-auto w-full gap-8 flex items-center border-t border-t-[rgba(255, 255, 255, 0.30)]">
          {activities.map((activity) => {
            return (
              <div
                key={activity.label}
                className="flex items-center flex-col gap-3.5 grow py-6 lg:py-5"
              >
                {activity.icon}
                <p className="text-white text-sm text-center font-sans text-lg font-semibold leading-6 tracking-wider uppercase leading-[0.9px]">
                  {activity.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
