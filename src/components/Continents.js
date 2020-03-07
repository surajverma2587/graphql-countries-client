import React, { useState } from 'react'

import { useGraphqlQuery } from '../hooks/useGraphqlQuery'

import Countries from './Countries'
import DropDown from './DropDown'
import { get } from '../util'

const Continents = () => {
  const [continent, setContinent] = useState('')
  const [data, loading, error] = useGraphqlQuery('continents')

  const onChange = e => {
    setContinent(e.target.value)
  }

  if (error) {
    return <div>Error!!</div>
  }

  return (
    <div className="flex flex-wrap my-4 justify-center text-center">
      <DropDown
        label="Select a continent"
        value={continent}
        options={get(data, ['continents'], [])}
        onChange={onChange}
        loading={loading}
      />
      {
        continent ? <Countries continent={continent} /> : null
      }
    </div>
  )
}

export default Continents