import { ComponentProps } from "react";

export interface OurExperiencesProps extends ComponentProps<"div"> {}

const OurExperiences = (props: OurExperiencesProps) => {
  return <div {...props} />;
};

export default OurExperiences;
