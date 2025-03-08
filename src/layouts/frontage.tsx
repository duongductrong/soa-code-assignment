import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import FrontageFooter from "./frontage-footer";
import FrontageHeader from "./frontage-header";

export interface FrontStageLayoutProps extends PropsWithChildren {}

export const FrontStageLayout = () => {
  return (
    <section>
      <FrontageHeader />
      <Outlet />
      <FrontageFooter />
    </section>
  );
};
