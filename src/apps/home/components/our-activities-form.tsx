import { ComponentProps } from "react";

export interface OurActivitiesFormProps extends ComponentProps<"section"> {}

const OurActivitiesForm = (props: OurActivitiesFormProps) => {
  return (
    <div {...props}>
      form
    </div>
  );
};


export default OurActivitiesForm;
