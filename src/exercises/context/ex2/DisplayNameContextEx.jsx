import React, { useContext } from 'react'
import { NameContext } from './NameContextEx'

export default function DisplayNameContextEx() {

    const name = useContext(NameContext);
    // name = 'Alice'

  return (
    <div>
        <h1>Hello, {name}</h1>
    </div>
  )
}
