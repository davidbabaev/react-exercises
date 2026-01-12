import React, { useState } from 'react'

export default function CharacterWarning() {

    const [count, setCount] = useState(0);
    // const countIt = () => {
    //     console.log(count.lenght);
    // }
    
    const [runIt, setRunIt] = useState('');
    const writeIt = (e) => {
        setRunIt(e.target.value)
        setCount(count + 1)
        console.log(e);
    }

  return (
    <div>
        <input 
        type="text" 
        value={runIt}
        onChange={writeIt}
        />
        <p>{runIt} {count}</p>
    </div>
  )
}
