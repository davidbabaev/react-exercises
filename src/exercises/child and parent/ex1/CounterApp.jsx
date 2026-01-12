import React, { useState } from 'react'
import CounterButtons from './CounterButtons';

export default function CounterApp() {

  const [count, setCount] = useState(0);

  const handleCountChange = (value) => {
    if(value === 0){
      setCount(0);
    } else{
      setCount(count + value);
    }
  }

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20',
        fontFamily: 'arial'
      }}
    >
      <h2>Counter App</h2>

      <h1
        style={{
          fontSize:'48px',
          color: count > 0 ? 'green' : count < 0 ? 'red' : 'black'
        }}
      >Count: {count}</h1>

      <CounterButtons onCountChange = {handleCountChange} />
    </div>
  )
}
