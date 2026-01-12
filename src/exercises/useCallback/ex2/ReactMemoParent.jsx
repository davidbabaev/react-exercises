import React, { useState } from 'react'
import ReactMemoChild from './ReactMemoChild'

export default function ReactMemo() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('David')
  const [age, setAge] = useState(25)

  // only when the props change the component rerender
  // id we click count it's now value on the props,
  console.log('Parent rerendered');
  

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setName(name === 'David' ? 'Alice' : 'David')}>
        Change Name
      </button>
      <button onClick={() => setAge((prev) => prev + 1)}>age +1</button>

      <ReactMemoChild name={name} age={age}/>
    </div>
  )
}
