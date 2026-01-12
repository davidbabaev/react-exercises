import React, { useState } from 'react'
import TextInputChild from './TextInputChild'

export default function TextInputParent() {

    const [message, setMessage] = useState('');
    const update = (recieveText) => {
        setMessage(recieveText);
    }

  return (
    <div>
        <p>Message: {message}</p>
        <TextInputChild text = {update}/>
    </div>
  )
/*       <div style={{padding: '20'}}>
        <input 
            type="text"
            value={inputText}
            onChange={(e) =>  setInputText(e.target.value)}
        />

        <button
            onClick={() => setMessage(inputText)}
        >Show</button>

        <p>Message: {message}</p>
    </div> */
}
