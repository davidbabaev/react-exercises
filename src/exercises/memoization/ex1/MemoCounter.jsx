import React, { useState } from 'react'
import SimpleMemo from './SimpleMemo';

export default function MemoCounter() {

    const [count, setCount] = useState(0);
    const counter = () => {
        setCount((prev) => prev + 1);
    }

  return (
    <div>
        <button
            onClick={counter}
        >+1</button>
        <p>counter: {count}</p>
        <SimpleMemo text={count}/>
    </div>
  )
}
