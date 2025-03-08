import Container from "@/components/ui/container";
import IconButton from "@/components/ui/icon-button";
import FacebookIcon from "@/components/widgets/icons/facebook-icon";
import InstagramIcon from "@/components/widgets/icons/instagram-icon";
import YoutubeIcon from "@/components/widgets/icons/youtube-icon";
import { cn } from "@/lib/tw";
import { ComponentProps } from "react";

export interface FrontageFooterProps extends ComponentProps<"footer"> {}

const FrontageFooter = (props: FrontageFooterProps) => {
  return (
    <footer {...props}>
      <section
        className={cn(
          "bg-[url('/assets/images/laurice-manaligod.jpg')] bg-cover bg-center bg-no-repeat",
          "min-h-[666px] flex justify-center pt-17 px-4 sm:px-8 xl:px-0"
        )}
      >
        <div className="flex flex-col gap-6">
          <p className="text-white font-sans text-2xl sm:text-[2rem] lg:text-[2.5rem] xl:text-6xl font-semibold leading-normal xl:leading-60 capitalize max-w-[647px] text-center">
            <span className="text-brand block">Explorez avec BASIC</span>
            <span className="text-brand/50 block">dès aujourd’hui</span>
          </p>
          <p className="max-w-[647px] text-center font-sans text-sm sm:text-base lg:text-xl xl:text-2xl font-normal text-[#562C2C]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,{" "}
          </p>
        </div>
      </section>
      <section className="bg-brand py-14">
        <Container className="flex flex-col gap-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
            <div className="col-span-1 lg:col-span-4">
              <p className="text-white font-sans text-base xl:text-lg font-normal">
                BASIC <br /> (514) 904-6789 <br />
                Quebec, 3100 Boulevard de la Côte-Vertu
              </p>
            </div>

            <div className="col-span-1 lg:col-span-2 flex flex-col gap-1.5">
              <p className="text-white/60 font-sans text-base xl:text-lg font-normal">
                Activité 1
              </p>
              <p className="text-white/60 font-sans text-base xl:text-lg font-normal">
                Activité 1
              </p>
              <p className="text-white/60 font-sans text-base xl:text-lg font-normal">
                Activité 1
              </p>
            </div>
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-1.5">
              <p className="text-white/60 font-sans text-base xl:text-lg font-normal">
                Activité 1
              </p>
              <p className="text-white/60 font-sans text-base xl:text-lg font-normal">
                Activité 1
              </p>
              <p className="text-white/60 font-sans text-base xl:text-lg font-normal">
                Activité 1
              </p>
            </div>
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-1.5">
              <p className="text-white/60 font-sans text-base xl:text-lg font-normal">
                Activité 1
              </p>
              <p className="text-white/60 font-sans text-base xl:text-lg font-normal">
                Activité 1
              </p>
              <p className="text-white/60 font-sans text-base xl:text-lg font-normal">
                Activité 1
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[rgba(255,255,255,0.30)] flex items-center justify-between">
            <p className="text-white font-sans text-sm md:text-base xl:text-lg font-normal">
              © BASIC 2024
            </p>
            <div className="flex items-center gap-4">
              <IconButton>
                <FacebookIcon className="size-6 text-white" />
              </IconButton>
              <IconButton>
                <InstagramIcon className="size-6 text-white" />
              </IconButton>
              <IconButton>
                <YoutubeIcon className="size-6 text-white" />
              </IconButton>
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default FrontageFooter;
