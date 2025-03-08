import { usePages } from "@/apis/page/get-pages";
import { Page } from "@/apis/page/types";
import { useLocale } from "@/hooks/use-locale";
import i18n from "@/lib/i18n";
import { createContext, PropsWithChildren, useMemo } from "react";
export interface PageContextType {
  page: Page | null;
}

export const PageContext = createContext<PageContextType>(
  {} as PageContextType
);

const PageProvider = (props: PropsWithChildren) => {
  const lang = i18n.language;
  const [locale] = useLocale();

  const { data: pages } = usePages({
    variables: { filter: { lang: locale as any } },
  });

  const values = useMemo<PageContextType>(() => {
    return { page: pages?.[0] ?? null };
  }, [pages]);

  return (
    <PageContext.Provider value={values}>{props.children}</PageContext.Provider>
  );
};

export default PageProvider;
