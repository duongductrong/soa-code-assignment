import { useContext } from "react";
import { PageContext } from "./context";

export const usePageContext = () => {
  const ctx = useContext(PageContext);

  if (!ctx)
    throw new Error("usePageContext must be used within a PageProvider");

  return ctx;
};
