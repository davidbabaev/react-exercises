import React, { useEffect, useState } from 'react'

export default function TitleUpdater() {

    const [input, setInput] = useState('')
    const inputValue = (e) => {
        setInput(e.target.value)
    }

    const [count, setCount] = useState(0)
    const counter = ()=> {
        setCount(prev => prev + 1);
    }

    useEffect(() => {
        document.title = `Count: ${input.length}`
        console.log(input.length);
        
    }, [input])
    

  return (
    <div>
        <input type="text" 
            value={input}
            onChange={inputValue}
        />
        <p>{input}</p>
        <button
            onClick={counter}
            >
            +1
        </button>
        <p>{count}</p>
        <h1>{input.length}</h1>
    </div>
  )
}
