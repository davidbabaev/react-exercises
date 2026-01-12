import React from 'react'

export default function CounterChild({counter,increment, decrement, reset}) {
    // has the buttons
  return (
    <div>
        <p>{counter}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
