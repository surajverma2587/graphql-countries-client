import React, { useState } from 'react'

import { useGraphqlQuery } from '../hooks/useGraphqlQuery'

import DropDown from './DropDown'
import Country from './Country'

const Countries = ({ continent }) => {
  const [country, setCountry] = useState('')
  const [data, LoaderOrError] = useGraphqlQuery('countries', { continent })

  const onChange = e => {
    setCountry(e.target.value)
  }

  if (LoaderOrError) {
    return LoaderOrError
  }

  if (data && data.countries) {
    return (
      <div>
        <DropDown
          label="Select a country"
          value={country}
          options={data.countries}
          onChange={onChange}
        />
        {
          country ? <Country code={country} /> : null
        }
      </div>
    )
  }
}

export default Countries