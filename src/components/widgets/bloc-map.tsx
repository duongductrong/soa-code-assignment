import { useDisableScroll } from "@/hooks/use-disable-scroll";
import { useElementEvent } from "@/hooks/use-element-event";
import { cn } from "@/lib/tw";
import { ComponentProps, CSSProperties, useState } from "react";
import { useEvent } from "react-use";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

export interface BlocMapProps extends ComponentProps<"div"> {}

const pin = "/assets/images/pin.svg";

export interface Pointer {
  x: number;
  y: number;
  pin: string;
  metadata?: Record<string, any>;
}

const BlocMap = (props: BlocMapProps) => {
  const [pointers, setPointers] = useState<Pointer[]>([]);

  const [enablePreventScroll, setEnablePreventScroll] = useState(false);

  const handleWheel = (evt: WheelEvent) => {
    if (!enablePreventScroll) return;

    const scale = Number(mapRef.current!.dataset.scale);

    const predictScale = evt.deltaY > 0 ? scale + 0.15 : scale - 0.15;
    const newScale = predictScale < 1 ? 1 : predictScale;

    mapRef.current!.dataset.scale = newScale.toString();
    mapRef.current!.style.setProperty("--scale", newScale.toString());
  };

  const handleMapClick = (evt: MouseEvent) => {
    const mapNode = mapRef.current;
    const rect = mapNode?.getBoundingClientRect();

    const x = evt.clientX - rect!.x - 52 / 2;
    const y = evt.clientY - rect!.y - 62 + 10;

    setPointers((prev) => [
      ...prev,
      {
        x,
        y,
        pin,
        metadata: {
          name: "Baronnie Kamouraska",
          website: "www.clublacvictor.com",
          address:
            "Lac des Cinq Milles, Kamouraska Regional County Municipality, Quebec G0L 1W0, Canada",
          coordinates: {
            latitude: "47.23965",
            longitude: "-69.68160",
          },
          activities: ["Online Classes", "Ethical Hunting"],
          marker_information: [
            "Bear Hunting",
            "Moose Hunting",
            "Migratory Bird Hunting",
            "Discovery and Hiking",
          ],
        },
      },
    ]);
  };

  const [mapRef] = useElementEvent<HTMLDivElement, MouseEvent>(
    "click",
    handleMapClick
  );

  useEvent("wheel", handleWheel);
  useDisableScroll(enablePreventScroll);

  return (
    <div
      {...props}
      className={cn(
        "relative",
        "h-[698px] w-full rounded-3xl z-[10] relative rounded-xl overflow-hidden",
        props.className
      )}
      onMouseEnter={() => setEnablePreventScroll(true)}
      onMouseLeave={() => setEnablePreventScroll(false)}
      onTouchStart={() => setEnablePreventScroll(true)}
      onTouchEnd={() => setEnablePreventScroll(false)}
    >
      <div className="absolute top-4 left-4 py-1 px-2.5 rounded-lg bg-white/60 flex items-center gap-1 transform z-10 pointer-events-none">
        <img className="size-10" src="/assets/images/sample.svg" alt="Sample" />
        <p className="font-medium text-xl text-brand">Emplacement </p>
      </div>

      <div
        ref={mapRef}
        data-scale={1}
        style={
          {
            "--scale": 1,
          } as CSSProperties
        }
        className="transform-gpu scale-[var(--scale)] relative"
      >
        {pointers.map((pointer) => (
          <div
            style={{
              left: pointer.x,
              top: pointer.y,
            }}
            className="absolute cursor-pointer"
          >
            <HoverCard>
              <HoverCardTrigger>
                <img src={pointer.pin} alt="" />
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2 [&_*]:text-black">
                  <h3 className="font-semibold text-sm">
                    {pointer.metadata?.name}
                  </h3>
                  <a
                    href={`https://${pointer.metadata?.website}`}
                    className="text-xs text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pointer.metadata?.website}
                  </a>
                  <p className="text-xs text-gray-600">
                    {pointer.metadata?.address}
                  </p>
                  {/* <div className="text-xs text-gray-500">
                    {pointer.metadata?.coordinates.latitude}
                    {pointer.metadata?.coordinates.longitude}
                  </div> */}
                  <div className="flex flex-wrap gap-1 mt-1">
                    {pointer.metadata?.activities.map((activity: string) => (
                      <span
                        key={activity}
                        className="px-2 py-0.5 bg-gray-100 rounded-full text-xs"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-xs">
                    {pointer.metadata?.marker_information.map(
                      (info: string) => (
                        <li key={info}>{info}</li>
                      )
                    )}
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        ))}

        <img
          src="/assets/images/bloc-map.jpg"
          alt="bloc-map"
          className="w-full h-full pointer-events-none"
        />
      </div>
    </div>
  );
};

export default BlocMap;
