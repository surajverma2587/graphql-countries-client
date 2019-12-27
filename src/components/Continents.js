import React, { useState } from 'react'

import { useGraphqlQuery } from '../hooks/useGraphqlQuery'

import Countries from './Countries'
import DropDown from './DropDown'

const Continents = () => {
  const [continent, setContinent] = useState('')
  const [data, LoaderOrError] = useGraphqlQuery('continents')

  const onChange = e => {
    setContinent(e.target.value)
  }

  if (LoaderOrError) {
    return LoaderOrError
  }

  if (data && data.continents) {
    return (
      <div>
        <DropDown
          label="Select a continent"
          value={continent}
          options={data.continents}
          onChange={onChange}
        />
        {
          continent ? <Countries continent={continent} /> : null
        }
      </div>
    )
  }
}

export default Continents