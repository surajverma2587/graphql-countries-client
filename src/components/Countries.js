import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import countries from '../queries/countries'

const Country = ({ name, code, currency, capital }) => (
  <div className="card m-3" style={{ width: '50%' }}>
    <div className="card-body">
      <h5 className="card-title">{name} - {code}</h5>
      <div className="row">
        <div className="col"><h6>Capital</h6></div>
        <div className="col">{capital}</div>
      </div>
      <div className="row">
        <div className="col"><h6>Currency</h6></div>
        <div className="col">{currency}</div>
      </div>
    </div>
  </div>
)

const Countries = () => {
  const { data, loading, error } = useQuery(countries())

  if (loading) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error</span>
  }

  console.log(data)

  return (
    <div>
      {
        data.countries.map(country => (
          <Country {...country} key={country.code} />
        ))
      }
    </div>
  )
}

export default Countries