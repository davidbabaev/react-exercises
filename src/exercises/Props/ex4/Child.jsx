import React from 'react'

// where props are ewcieved between {}
export default function Child({name, last}) {
  return (
    <div
      style={{border: '1px solid black', margin: '10px', padding: '10px', width: '250px' ,borderRadius: '10px'}}
    >
      <p style={{fontSize:'30px', fontFamily:'fantasy'}}>Hello, {name} {last}</p>
    </div>
  )
}
