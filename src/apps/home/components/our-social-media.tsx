import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import ArrowUpRightIcon from "@/components/widgets/icons/arrow-up-right-icon";
import InstagramIcon from "@/components/widgets/icons/instagram-icon";
import { cn } from "@/lib/tw";
import { ComponentProps } from "react";

export interface OurSocialMediaProps extends ComponentProps<"section"> {}

const OurSocialMedia = (props: OurSocialMediaProps) => {
  return (
    <section
      {...props}
      className={cn(
        "bg-gradient-to-b from-cloud to-transparent min-h-[1418px] py-15",
        props.className
      )}
    >
      <Container>
        <div className="flex gap-y-10 gap-x-20 mb-8">
          <p className="font-sans text-lg font-normal leading-6 text-brand/80">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially
          </p>
          <p className="text-[40px] font-normal font-semibold leading-[56px] uppercase shrink-0">
            Immortalisez des moments <br /> inoubliables avec{" "}
            <span className="text-card">#BASIC</span>
          </p>
        </div>

        <div className="flex flex-col gap-6 mb-12">
          <div className="min-h-[694px] bg-brand/10 w-full rounded-4xl relative overflow-hidden px-[6.5625rem] py-[3.25rem]">
            <img
              src="/assets/images/brooke-lark.webp"
              alt="Image"
              className="h-full w-full object-cover absolute top-0 left-0 z-0 pointer-events-none"
            />

            <article className="bg-white w-full h-full relative p-3 rounded-2xl">
              <img
                src="/assets/images/brooke-lark-preview.webp"
                alt="Image"
                className="w-full h-full object-cover"
              />

              <div className="flex justify-between px-3">
                <div className="py-3 max-w-[660px]">
                  <h2 className="font-sans text-2xl font-semibold leading-normal tracking-[0.24px]">
                    La famille
                  </h2>
                  <p className="font-sans text-lg font-normal leading-6 tracking-[-0.18px] text-gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="font-sans text-xl font-normal leading-normal tracking-[-0.18px]"
                  corner="full"
                >
                  24 Sep 2024
                </Button>
              </div>
            </article>
          </div>

          <div className="flex gap-6 flex-row">
            {Array.from(Array(4).keys()).map((index) => (
              <article
                key={index}
                className={cn(
                  "h-[292px] w-full bg-brand/10 rounded-4xl relative overflow-hidden"
                )}
              >
                <img
                  src={`/assets/images/social-${index + 1}.jpg`}
                  alt=""
                  className="h-full object-cover"
                />
                <div
                  className={cn(
                    "absolute bottom-0 left-0 w-full bg-brand/60 rounded-b-4xl min-h-15",
                    "flex items-center px-5 py-4"
                  )}
                >
                  <InstagramIcon className="size-7 text-white mr-1.5" />
                  <p className="text-white font-sans text-lg font-medium leading-normal tracking-[-0.18px]">
                    Anthony Durand
                  </p>

                  <ArrowUpRightIcon className="size-6 ml-auto text-white" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="font-sans text-gray text-2xl font-normal leading-normal tracking-[-0.24px]">
          Consultez @BASIC et <span className="text-card">#BASIC</span> pour
          découvrir les expériences inoubliables des pourvoiries et activités
          BASIC.
        </p>
      </Container>
    </section>
  );
};

export default OurSocialMedia;
