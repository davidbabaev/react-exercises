import React from 'react'
import { useState } from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

  return (
    <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={() => {setCounter(0)}}>reset</button>
        <h1
            style={{
                fontFamily: 'arial',
                color: counter > 0 ? 'green' : counter < 0 ? 'red' : 'gray'
            }}
        >{counter}</h1>
        {counter > 0 && <p>🔥 You're on fire!</p>}
        {counter < 0 && <p>⚠️ Going Too Low!</p>}
    </div>
  )
}
