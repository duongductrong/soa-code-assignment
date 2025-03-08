import { ComponentProps } from "react";

export interface OutActivitiesProps extends ComponentProps<"div"> {}

const OutActivities = (props: OutActivitiesProps) => {
  return <div {...props} />;
};

export default OutActivities;
