import React from 'react'
import useInput from './useInput'
// breing in our costum hooks

export default function SimpleFormEx() {

  const [name, setName] = useInput(); // Using our custom hooks
  // call useInput
  // it gives us back [value, setValue];
  // we catch them us [name, setName];

  return (
    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>you typed {name}</p>
    </div>
  )
}
