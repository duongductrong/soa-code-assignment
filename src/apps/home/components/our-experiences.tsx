import Container from "@/components/ui/container";
import IconButton from "@/components/ui/icon-button";
import EarthIcon from "@/components/widgets/icons/earth-icon";
import HandShakeIcon from "@/components/widgets/icons/hand-shake-icon";
import ShieldIcon from "@/components/widgets/icons/shield-icon";
import SmileEmoijIcon from "@/components/widgets/icons/smile-emoij-icon";
import UserCircleIcon from "@/components/widgets/icons/user-circle";
import { ComponentProps } from "react";

export interface OurExperiencesProps extends ComponentProps<"section"> {}

const OurExperiences = (props: OurExperiencesProps) => {
  return (
    <section {...props}>
      <Container className="py-15 flex flex-col gap-15">
        <div className="flex gap-6 rounded-[0.625rem] overflow-hidden">
          <div>
            <h2 className="text-5xl font-semibold leading-60 uppercase mb-15">
              <p className="text-card">Des expériences inoubliables </p>{" "}
              <span className="text-card/60">Lorem Ipsum truc</span>
            </h2>
            <div className="flex gap-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="3"
                viewBox="0 0 83 3"
                fill="none"
                className="shrink-0 mt-5"
              >
                <path
                  d="M1 1.5H82"
                  stroke="#BBBBBB"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <article>
                <h2 className="mb-4 text-3xl font-semibold leading-normal capitalize">
                  À propos de BASIC
                </h2>
                <p className="text-brand/80 text-lg font-normal leading-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </article>
            </div>
          </div>
          <img
            src="/assets/images/experience-thumb.webp"
            className="w-full h-[574px] object-cover"
            alt="Experience"
          />
        </div>

        <div className="flex gap-10">
          {experiences.map((experience) => (
            <div key={experience.title} className="flex-1 text-center">
              <IconButton size="lg" className="mb-4" color="turquoise">
                {experience.icon}
              </IconButton>
              <h3 className="text-2xl font-medium capitalize text-brand mb-2">
                {experience.title}
              </h3>
              <p className="text-brand/80 text-lg font-normal text-brand/80">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const experiences = [
  {
    icon: <ShieldIcon className="size-8 text-white" />,
    title: "Authenticité",
    description: "Sous-titre",
  },
  {
    icon: <HandShakeIcon className="size-8 text-white" />,
    title: "Respect",
    description: "Sous-titre",
  },
  {
    icon: <EarthIcon className="size-8 text-white" />,
    title: "Diversité",
    description: "Sous-titre",
  },
  {
    icon: <UserCircleIcon className="size-8 text-white" />,
    title: "Personnalisation",
    description: "Sous-titre",
  },
  {
    icon: <SmileEmoijIcon className="size-8 text-white" />,
    title: "Confort",
    description: "Sous-titre",
  },
];

export default OurExperiences;
