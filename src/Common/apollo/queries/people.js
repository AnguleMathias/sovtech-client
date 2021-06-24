import gql from "graphql-tag";

export const GET_PEOPLE = gql`
  query People($pageNumber: String) {
    People(page: $pageNumber) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;
