import React, { useState } from 'react'
import { CouterContext } from './CounterContextEx'
import CounterDisplayContext from './CounterDisplayContext'

export default function CounterAppContect() {

    const [count, setCount] = useState(0)


  return (
    <CouterContext.Provider value={{count, setCount}}>
      <div>
        <h1>Counter Context</h1>
        <CounterDisplayContext/>
      </div>
    </CouterContext.Provider>
  )
}
