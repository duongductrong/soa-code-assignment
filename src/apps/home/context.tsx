import { usePages } from "@/apis/page/get-pages";
import { Page } from "@/apis/page/types";
import { createContext, PropsWithChildren, useMemo } from "react";

export interface PageContextType {
  page: Page | null;
}

export const PageContext = createContext<PageContextType>(
  {} as PageContextType
);

const PageProvider = (props: PropsWithChildren) => {
  const { data: pages } = usePages({ variables: { filter: { lang: "en" } } });

  const values = useMemo<PageContextType>(() => {
    return { page: pages?.[0] ?? null };
  }, [pages]);

  return (
    <PageContext.Provider value={values}>{props.children}</PageContext.Provider>
  );
};

export default PageProvider;
