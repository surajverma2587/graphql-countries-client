import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import queries from '../queries'

import Loading from '../components/Loading'

export const useGraphqlQuery = (queryName, variables = {}) => {
  const { data, loading, error } = useQuery(queries[queryName], {
    variables
  })

  if (loading) {
    return [data, <Loading />]
  }

  if (error) {
    return [data, <div>Error!!</div>]
  }

  return [data]
}