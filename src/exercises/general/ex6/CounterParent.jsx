import React, { useState } from 'react'
import CounterChild from './CounterChild'

export default function CounterParent() {
    // has the state and function
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter((prev) => prev + 1)
    }
    const decrement = () => {
        setCounter((prev) => prev - 1)
    }
    const reset = () => {
        setCounter(0)
    }


  return (
    <div>
        counter parent
        <CounterChild counter = {counter} increment = {increment} decrement = {decrement} reset = {reset}/>
    </div>
  )
}
