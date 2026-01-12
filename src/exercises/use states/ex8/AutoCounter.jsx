import React, { useRef, useState } from 'react'

export default function AutoCounter() {

    const [counter, setCounter] = useState(0);
    const countRefInterval = useRef(null) 
    const increase = () => {
        countRefInterval.current = setInterval(() => {
            setCounter(prev => prev + 1)
        }, 1000)
    }
    // increase()

  return (
    <div>
        <p>{counter}</p>
        <button onClick={increase}>increase</button>
    </div>
  )
}
