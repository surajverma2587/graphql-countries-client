import React from 'react'

const DropDown = ({ label, options, value, onChange }) => {
  return (
    <div className="row">
      <div className="col-sm-3">
        <label>{label}</label>
      </div>
      <div className="col-sm-9">
        <select value={value} onChange={onChange}>
          <option value=""></option>
          {
            options.map(({ code, name }) => (
              <option value={code} key={code}>{name}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default DropDown