import React, { useState } from 'react'

export default function ValueAndButton() {

    // for taking the input event
    const [InputValue, setInputValue] = useState('')
    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    // for displaying the input evet after
    const [displayInput, setDisplayInput] = useState('')
    const handleDisplay = () => {
        setDisplayInput(InputValue)
    }

  return (
    <div>
        <input 
            type="text" 
            onChange={handleInput}
            placeholder='Type..'
            />
        <button
            onClick={handleDisplay}
        >Show</button>
        <p>{displayInput}</p>
    </div>
  )
}
