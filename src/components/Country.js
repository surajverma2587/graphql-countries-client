import React from 'react'

import { useGraphqlQuery } from '../hooks/useGraphqlQuery'

const Country = ({ code }) => {
  const [data, LoaderOrError] = useGraphqlQuery('country', { code })

  if (LoaderOrError) {
    return LoaderOrError
  }

  if (data && data.country) {
    const { name, currency, capital } = data.country

    return (
      <div className="card p-2">
        <div className="row m-2">
          <div className="col-sm-3">Name</div>
          <div className="col-sm-9">{name}</div>
        </div>
        <div className="row m-2">
          <div className="col-sm-3">Capital</div>
          <div className="col-sm-9">{capital || '-'}</div>
        </div>
        <div className="row m-2">
          <div className="col-sm-3">Currency</div>
          <div className="col-sm-9">{currency || '-'}</div>
        </div>
      </div>
    )
  }
}

export default Country