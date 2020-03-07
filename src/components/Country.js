import React from 'react'

import { useGraphqlQuery } from '../hooks/useGraphqlQuery'
import Loading from './Loading'

const Country = ({ code }) => {
  const [data, loading] = useGraphqlQuery('country', { code })

  if (loading) {
    return (
      <Loading loading={loading} />
    )
  }

  if (data && data.country) {
    const { name, currency, capital } = data.country

    return (
      <div className="flex flex-wrap my-4 justify-center text-center w-3/4 border border-2 p-4">
        <table class="table-auto">
          <thead>
            <tr>
              <th class="px-4 py-2">Name</th>
              <th class="px-4 py-2">Capital</th>
              <th class="px-4 py-2">Currency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">{name}</td>
              <td class="border px-4 py-2">{capital || '-'}</td>
              <td class="border px-4 py-2">{currency || '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Country