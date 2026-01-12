import React from 'react'

export default function CounterButtons({onCountChange}) {
  return (
    <div style={{marginTop:'20px'}}>
        <button onClick={() => onCountChange(1)} >+1</button>
    </div>
  )
}
