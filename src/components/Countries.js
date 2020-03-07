import React, { useState } from 'react'

import { useGraphqlQuery } from '../hooks/useGraphqlQuery'

import DropDown from './DropDown'
import Country from './Country'
import { get } from '../util'

const Countries = ({ continent }) => {
  const [country, setCountry] = useState('')
  const [data, loading, error] = useGraphqlQuery('countries', { continent })

  const onChange = e => {
    setCountry(e.target.value)
  }

  if (error) {
    return <div>Error!!</div>
  }

  return (
    <div className="flex flex-wrap my-4 justify-center text-center w-full">
      <DropDown
        label="Select a country"
        value={country}
        options={get(data, ['countries'], [])}
        onChange={onChange}
        loading={loading}
      />
      {
        country ? <Country code={country} /> : null
      }
    </div>
  )
}

export default Countries