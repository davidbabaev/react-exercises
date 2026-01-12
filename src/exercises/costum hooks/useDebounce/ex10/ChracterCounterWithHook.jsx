import { useState } from 'react'
import useDebounceSecond from './useDebouceSecond'

export default function ChracterCounterWithHook() {

    // sepearte state, noe debounce
    const [input, setInput] = useState('')
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const [email, setEmail] = useState('')
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const debounceText = useDebounceSecond(input, 2000)
    const debounceEmail = useDebounceSecond(email, 2000)

  return (
    <div>
        <input 
            value={input}
            onChange={handleInput}
            placeholder='Type text:'
        />
        <input 
            value={email}
            onChange={handleEmail}
            placeholder='Type email:'
        />
        <p>{input}</p>
        <p>{debounceText}</p>
        <p>{debounceText}</p>
        <p>{debounceEmail}</p>
    </div>
  )
}
