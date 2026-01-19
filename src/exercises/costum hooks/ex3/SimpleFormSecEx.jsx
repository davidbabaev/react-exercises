import React from 'react'
import useInputSec from './useInput'

export default function SimpleFormSecEx() {

    const [name, setName] = useInputSec('');
    

  return (
    <div>
        <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <p>{name}</p>
    </div>
  )
}
