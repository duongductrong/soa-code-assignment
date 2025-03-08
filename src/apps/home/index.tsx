import ExploreCookMaster from "./components/explore-cookmaster";
import Introduction from "./components/introduction";
import OutActivities from "./components/our-activities";
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
      <TitreBloc2 />
      <OutActivities />
      <ExploreCookMaster />
      <OurExperiences />
      <OurSocialMedia />
    </>
  );
};

export default Home;
