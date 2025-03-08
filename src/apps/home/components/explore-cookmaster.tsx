import { ComponentProps } from "react";

export interface ExploreCookMasterProps extends ComponentProps<"div"> {}

const ExploreCookMaster = (props: ExploreCookMasterProps) => {
  return <div {...props} />;
};

export default ExploreCookMaster;
