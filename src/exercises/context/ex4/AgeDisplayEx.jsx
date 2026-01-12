import React, { useContext } from 'react'
import { AgeContext } from './AgeContextEx'

export default function AgeDisplayEx() {

    const age = useContext(AgeContext);             

  return (
    <div>
        <h1>Your Age</h1>
        <p>{age}</p>
    </div>
  )
}
