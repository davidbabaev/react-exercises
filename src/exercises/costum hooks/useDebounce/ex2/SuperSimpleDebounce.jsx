import React, { useEffect, useState } from 'react'

export default function SuperSimpleDebounce() {

    // What user types
    const [text, setText] = useState('')

    // what shows after delay
    const [delay, setDelay] = useState('')

    useEffect(() => {
        // wait 1 second
        const timer = setTimeout(() => {
            setDelay(text)
        }, 1000) 

        return () => clearTimeout(timer);
    }, [text])

  return (
    <div>
        <input 
            value={text}    
            onChange={(e) => setText(e.target.value)}
        />

        <p>Instant: {text}</p>
        <p>Delayed: {delay}</p>
    </div>
  )
}
