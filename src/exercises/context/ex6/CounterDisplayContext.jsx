import React, { useContext } from 'react'
import { CouterContext } from './CounterContextEx'

export default function CounterDisplayContext() {
    // const count = useContext(CouterContext);
    const {count, setCount} = useContext(CouterContext);

  return (
    <div>
        <p>{count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Count +1</button>
    </div>
  )
}
