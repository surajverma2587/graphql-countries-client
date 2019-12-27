import gql from 'graphql-tag'

export const countries = gql`
  query Countries($continent: String!) {
    countries(continent: $continent) {
      code
      name
      capital
      currency
      continent {
        code
        name
      }
    }
  }
`