import React, { useState } from 'react'
import useCounterAdvanced from './useCounterAdvanced'

export default function CouterAdvancedEx() {

    const [count, increment, decrement, reset] = useCounterAdvanced(0, 0, 10);


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => increment()} >+1</button>
        <button onClick={() => decrement()}>-1</button>
        <button onClick={() => reset()} >reset</button>
    </div>

  )
}
