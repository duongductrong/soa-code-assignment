import Container from "@/components/ui/container";
import ExploreCard from "@/components/widgets/explore-card";
import ArrowRightIcon from "@/components/widgets/icons/arrow-right-icon";
import { cn } from "@/lib/tw";
import { ComponentProps } from "react";
import { useTranslation } from "react-i18next";

export interface ExploreCookMasterProps extends ComponentProps<"div"> {}

const ExploreCookMaster = (props: ExploreCookMasterProps) => {
  const { t } = useTranslation();

  return (
    <div {...props} className={cn(props.className)}>
      <Container>
        <div className="flex items-center justify-between mb-[2.8175rem]">
          <h2 className="text-card text-center text-5xl font-semibold leading-60 uppercase">
            Titre
          </h2>
          <span className="inline-flex items-center text-gray text-xl font-medium capitalize">
            {t("Learn more")}
            <ArrowRightIcon className="size-6 ml-1" />
          </span>
        </div>
      </Container>

      <div className="flex items-center flex-nowrap overflow-x-hidden gap-14 ml-[23.17vw]">
        {data.map((data, index) => {
          return (
            <ExploreCard
              key={index}
              image={data.image}
              title={data.title}
              subtitle={data.subtitle}
              description={data.description}
              className={cn("shrink-0 max-w-[340px]")}
            />
          );
        })}
      </div>
    </div>
  );
};

const data = [
  {
    image: "/assets/images/explore-1.jpg",
    title: "Case sous-titre",
    subtitle: "Case Tilte",
    description:
      "Chaque sentier vous conduit à des panoramas époustouflants, chaque instant devient une aventure, chaque rencontre vous promet un so uvenir marquant. Avec MITIK, le tourisme d’aventure allie nature brute et confort raffiné à toutes les saisons. Randonnée, canoë, observation de la faune, rencontres culturelles, exploration en montagne, chaque escapade est une immersion inoubliable dans les grands espaces canadiens. ",
  },
  {
    image: "/assets/images/explore-2.jpg",
    title: "Case sous-titre",
    subtitle: "Case Tilte",
    description:
      "Chez BASIC, la pêche est une alliance entre passion et respect. Imaginez des lacs paisibles et des rivières exclusives, des guides experts et des pratiques durables, le tout au cœur de territoires immenses. Chaque prise devient un moment de fierté mais surtout inoubliable. MITIK vous propose une panoplie d’expériences de pêche tant sur lacs sauvages que les rivières mythiques dans le Nord du Québec tout comme les Hautes-Laurentides. Ce que nos sit es vous proposent ? Pêche à la truite mouchetée et grise, au doré jaune et au brochet, au grand corégone, au saumon de l’Atlantique et ouananiche, ainsi que l’omble chevalier.",
  },
  {
    image: "/assets/images/explore-3.jpg",
    title: "Case sous-titre",
    subtitle: "Case Tilte",
    description:
      "BASIC vous guide à travers des territoires authentiques, où la chasse est une quête de respect et de sens. Accompagné par des experts passionnés, découvrez plusieurs types d’expériences de chasse où l’essentiel réside dans la connexion avec la nature, une saine gestion des territoires et de leurs habitats. Ours noir, orignal, cerf de Virginie (chevreuil), petits gibiers sont au menu et ce, tant au sein de séjours de chasse traditionnel que lors d’expériences uniques en symbiose avec l’environnement et les traditions millénaires. ",
  },
  {
    image: "/assets/images/explore-4.jpg",
    title: "Case sous-titre",
    subtitle: "Case Tilte",
    description:
      "BASIC vous guide à travers des territoires authentiques, où la chasse est une quête de respect et de sens. Accompagné par des experts passionnés, découvrez plusieurs types d’expériences de chasse où l’essentiel réside dans la connexion avec la nature, une saine gestion des territoires et de leurs habitats. Ours noir, orignal, cerf de Virginie (chevreuil), petits gibiers sont au menu et ce, tant au sein de séjours de chasse traditionnel que lors d’expériences uniques en symbiose avec l’environnement et les traditions millénaires. ",
  },
];

export default ExploreCookMaster;
