import gql from 'graphql-tag'

const countries = () => {
  return gql`
    query Countries {
      countries {
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
}

export default countries