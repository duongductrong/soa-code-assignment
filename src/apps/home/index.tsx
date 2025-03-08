import ExploreCookMaster from "./components/explore-cookmaster";
import Introduction from "./components/introduction";
import OurActivities from "./components/our-activities";
import OurExperiences from "./components/our-experiences";
import OurSocialMedia from "./components/our-social-media";
import TitreBloc1 from "./components/titre-bloc-1";
import TitreBloc2 from "./components/titre-bloc-2";

export interface HomeProps {}

const Home = () => {
  return (
    <>
      <Introduction />
      <TitreBloc1 />
      <TitreBloc2 className="mb-10 sm:mb-20" />
      <OurActivities className="mb-10 sm:mb-20" />
      <ExploreCookMaster />
      <OurExperiences className="mb-10 sm:mb-20" />
      <OurSocialMedia />
    </>
  );
};

export default Home;
