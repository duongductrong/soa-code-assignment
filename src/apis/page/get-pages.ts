import { createQuery } from "react-query-kit";
import { consumerApi } from "..";
import { Page } from "./types";

export interface Variables {
  filter?: {
    lang?: "en" | "fr";
  };
}

export interface Response extends Array<Page> {}

export const getPages = async (variables: Variables) => {
  const response = await consumerApi.get<Response>(`/pages`, {
    params: variables.filter,
  });
  return response.data;
};

export const getPagesKey = "getPages";

export const usePages = createQuery<Response, Variables>({
  queryKey: [getPagesKey],
  fetcher: getPages,
});
