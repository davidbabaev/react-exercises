import React, { useEffect, useState } from 'react'

export default function MessageLogger() {

    const [message, setMessage] = useState('');

    // for showing with button the input value with need one for state
    // put it in you head
    const [displayValue, setDisplayValue] = useState('')
    const change = (e) => {
        setMessage(e.target.value)
    }

    // we don't need a parameter here
    // we need to call to the set of the displat not to the change whole function
    const show = () => {
        setDisplayValue(message)
        // we dont need to put in the () event target
        // we nee t put in the message (the input value)
    }

    useEffect(() => {
        console.log('Effect 1 Runs after every render');
    })

    useEffect(() => {
        console.log('Effect 2: Runs after ONCE count');
    }, [])

    useEffect(() => {
        console.log('Effect 3: Message is now: ' + message);
    }, [message])

  return (
    <div>
        <input 
            type="text"
            onChange={change}
            value={message}
        />
        <button onClick={show}>Show</button>
        {/* we need to put here the display value not the message */}
        <p>{displayValue}</p>
        <p>{message.length}</p>
    </div>
  )
}
