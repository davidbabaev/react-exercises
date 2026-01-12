import React from 'react'

export default function SearchBox2({value, onChange}) {

    // what are we writing here?

  return (
    <div>
        <input 
            type="text" 
            value={value}
            onChange={onChange}
        />
        {/* <p>{value}</p> */}
    </div>
  )
}
