import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import FrontageFooter from "./frontage-footer";
import FrontageHeader from "./frontage-header";
import PageProvider from "@/apps/home/context";
import FrontageSwitchLanguage from "./frontage-switch-langage";

export interface FrontStageLayoutProps extends PropsWithChildren {}

export const FrontStageLayout = () => {
  return (
    <PageProvider>
      <FrontageHeader />
      <Outlet />
      <FrontageFooter />

      <FrontageSwitchLanguage />
    </PageProvider>
  );
};
