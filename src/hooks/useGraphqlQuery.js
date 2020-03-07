import { useQuery } from '@apollo/react-hooks'

import queries from '../queries'

export const useGraphqlQuery = (queryName, variables = {}) => {
  const { data, loading, error } = useQuery(queries[queryName], {
    variables
  })

  return [data, loading, error]
}