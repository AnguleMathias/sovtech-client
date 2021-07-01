import { GET_PEOPLE } from "../apollo/queries/people";
import { handleError, handleResponse } from "./api";
import graphQLClient from "./client";

export const fetchPeople = (page) => {
  // console.log("page at API", page);
  const pages = page.toString();
  return graphQLClient
    .query({
      query: GET_PEOPLE,
      variables: {
        pageNumber: pages,
      },
    })
    .then(handleResponse)
    .catch(handleError);
};
