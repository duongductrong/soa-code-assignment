import Container from "@/components/ui/container";
import BlocCard1 from "@/components/widgets/bloc-card-1";
import BlocTitle from "@/components/widgets/bloc-title";
import { cn } from "@/lib/tw";
import { ComponentProps } from "react";
import { usePageContext } from "../hooks";

export interface TitreBloc1Props extends ComponentProps<"div"> {}

const TitreBloc1 = (props: TitreBloc1Props) => {
  const { page } = usePageContext();

  return (
    <Container
      {...props}
      className={cn("pt-14 pb-[6.375rem]", props.className)}
    >
      <BlocTitle
        title={page?.bloc_1?.title}
        subtitle={page?.bloc_1?.subtitle}
        className="mb-10"
      />

      <div className="flex flex-col md:flex-row gap-8 xl:gap-6">
        {page?.bloc_1?.cases?.map((bloc, index) => {
          return (
            <BlocCard1
              key={index}
              image={blocs?.[index]?.image || "/assets/images/case-img-1.webp"}
              title={bloc.tagline}
              subtitle={bloc.category}
              description={bloc.description}
              buttonLabel={bloc.cta}
              className={cn("flex-1", blocs?.[index]?.className)}
            />
          );
        })}
      </div>
    </Container>
  );
};

const blocs = [
  {
    image: "/assets/images/case-img-1.webp",
    title: "Case sous-titre",
    subtitle: "Case Tilte",
    description:
      "Chaque sentier vous conduit à des panoramas époustouflants, chaque instant devient une aventure, chaque rencontre vous promet un so uvenir marquant. Avec MITIK, le tourisme d’aventure allie nature brute et confort raffiné à toutes les saisons. Randonnée, canoë, observation de la faune, rencontres culturelles, exploration en montagne, chaque escapade est une immersion inoubliable dans les grands espaces canadiens. ",
    button: "Forfait 1",
    className: "transform-gpu md:translate-y-11",
  },
  {
    image: "/assets/images/case-img-2.webp",
    title: "Case sous-titre",
    subtitle: "Case Tilte",
    description:
      "Chez BASIC, la pêche est une alliance entre passion et respect. Imaginez des lacs paisibles et des rivières exclusives, des guides experts et des pratiques durables, le tout au cœur de territoires immenses. Chaque prise devient un moment de fierté mais surtout inoubliable. MITIK vous propose une panoplie d’expériences de pêche tant sur lacs sauvages que les rivières mythiques dans le Nord du Québec tout comme les Hautes-Laurentides. Ce que nos sit es vous proposent ? Pêche à la truite mouchetée et grise, au doré jaune et au brochet, au grand corégone, au saumon de l’Atlantique et ouananiche, ainsi que l’omble chevalier.",
    button: "Forfait 2",
  },
  {
    image: "/assets/images/case-img-3.webp",
    title: "Case sous-titre",
    subtitle: "Case Tilte",
    description:
      "BASIC vous guide à travers des territoires authentiques, où la chasse est une quête de respect et de sens. Accompagné par des experts passionnés, découvrez plusieurs types d’expériences de chasse où l’essentiel réside dans la connexion avec la nature, une saine gestion des territoires et de leurs habitats. Ours noir, orignal, cerf de Virginie (chevreuil), petits gibiers sont au menu et ce, tant au sein de séjours de chasse traditionnel que lors d’expériences uniques en symbiose avec l’environnement et les traditions millénaires. ",
    button: "Forfait 3",
    className: "transform-gpu md:translate-y-11",
  },
];

export default TitreBloc1;
