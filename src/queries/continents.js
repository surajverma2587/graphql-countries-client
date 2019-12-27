import gql from "graphql-tag";

export const continents = gql`
  query Continents {
    continents {
      code
      name
    }
  }
`