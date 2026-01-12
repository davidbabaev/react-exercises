import React, { useState } from 'react'
import ChildButtons from './ChildButtons'

export default function ParentShowCount() {

    const [count, setCount] = useState(0);
    const counter = () => {
        setCount((prev) => prev + 1);
    }
    const counterMin = () => {
        setCount((prev) => prev - 1);
    }

  return (
    <div>
        <p>Count Number: {count}</p>
        <ChildButtons plus = {counter} minus = {counterMin}/>
    </div>
  )
}
