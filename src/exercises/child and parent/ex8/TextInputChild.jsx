import React, { useState } from 'react'

export default function TextInputChild({text}) {
    // {text} is function from parent

    const [inputText, setInputText] = useState('');
    // ↑ ONLY this state! No message state!
    const textType = (e) => {
        setInputText(e.target.value);
    }

    const messageType = () => {
        text(inputText); // send to parent, send what user typed.
    }

    // child:
    // has one state: inputText (what uset is typing)
    // sends that to parent when button clicked
    // child does not display the message

    // parent:d
    // has one state: message store (what was recieved)
    // recieved text from child
    // parent displays the message


  return (
    <div>
        <input 
            type="text"
            onChange={textType}
        />
        <button
            onClick={messageType}
        >send</button> 
    </div>
  )
}
