import { gql } from "@apollo/client";

export const GET_ALL_GENRES = gql`
  query getAllGenres {
    getAllGenres {
      name
    }
  }
`;
