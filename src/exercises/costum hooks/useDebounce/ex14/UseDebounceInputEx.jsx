import React, { useState } from 'react'
import useDebounceFourth from './useDebouncefourth';

export default function UseDebounceInputEx() {

    const[input, setInput] = useState('');
    const handleInput = (e) => {
      setInput(e.target.value);
    }
    
    const debounceInput = useDebounceFourth(input, 3000)
    
    const isSaving = input !== debounceInput;

  return (
    <div>
        <input 
            value={input}
            onChange={handleInput}
            placeholder='Type'
        />
        <p>Regular: {input}</p>
        <p>Debounced: {debounceInput}</p>
        {input !== '' && (<p>✏️ Typing...</p>)}
        {isSaving ? (<p>💾 Saving...</p>) : debounceInput ? (<p>✅ Saved!</p>) : (<p></p>)}
    </div>
  )
}
