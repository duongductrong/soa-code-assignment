import { useQueryState } from "nuqs";

export const useLocale = () => {
  return useQueryState("locale", { defaultValue: "en" });
};
