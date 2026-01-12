import React, { useState } from 'react'

export default function TextDisplay() {

    const [inputValue, setInputValue] = useState('')
    const handleChange = (e) => {
        setInputValue(e.target.value);
        console.log(e);
    }

    const letters = inputValue.length;
    const wordsCount = inputValue.split(' ').filter((word) => word !== '').length

    let textColor;
    if(inputValue.length < 10){
        textColor = 'gray';
    } 
    else if(inputValue.length >= 10 && inputValue.length <= 50){
        textColor = 'blue'
    } else {
        textColor = 'green'
    }

  return (
    <div>
        <input 
            type="text"
            value={inputValue}
            onChange={handleChange}
        />
        {/* <p style={{color: textColor}}>{inputValue}</p> */}
        <p
            style={{
                color: inputValue.length < 10 ? 'gray' : inputValue.length <= 50 ? 'blue' : 'green'
            }}
        >
            {inputValue}
        </p>
        <p>Lenght: {letters}</p>
        <p>Lenght: {wordsCount}</p>
    </div>
  )
}
