import React, { useRef } from 'react'

export default function FocusInput() {

    const inputRef = useRef(null); // will store input element

    const handleFocus = () => {
        inputRef.current.focus(); // focus the input
        console.log('Input Focused!');
    };

    const handleClear = () => {
        inputRef.current.value = ''; // clear the input
        console.log('Input cleared!');
    };

  return (
    <div>
        <h2>Input Reference</h2>
        <input 
            ref={inputRef}
            placeholder='Type..'
        />
        <button onClick={handleFocus}>Focus</button>
        <button onClick={handleClear}>Clear</button>
    </div>
  )
}
