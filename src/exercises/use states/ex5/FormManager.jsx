import React, { useState } from 'react'

export default function FormManager() {
    let text;
    const [input, setInput] = useState('')
    const inputTake = (e) => {
        setInput(e.target.value)
    }

    const [inputAge, setInputAge] = useState('')
    const inputTakeAge = (e) => {
        setInputAge(e.target.value);
    }

    const [inputEmail, setInputEmail] = useState('')
    const inputTakeEmail = (e) => {
        setInputEmail(e.target.value);
    }

  return (
    <div>
        <input
            onChange={inputTake}
            placeholder='Name'
            type="text" 
        />
        <input 
            onChange={inputTakeAge}
            placeholder='Age' 
            type="number"
        />
        <input
            onChange={inputTakeEmail}
            placeholder='Email' 
            type="text" 
        />

        <p>Name: {input === '' ? 'Please enter Name' : input} | Characters: {input.length}</p>
        <p>{inputAge}</p>
        <p>{inputEmail}</p>
    </div>
  )
}
