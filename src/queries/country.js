import gql from "graphql-tag";

export const country = gql`
  query Country($code: String!) {
    country(code: $code) {
      name
      capital
      currency
    }
  }
`