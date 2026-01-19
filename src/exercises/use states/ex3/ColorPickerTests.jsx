import React, { use, useState } from 'react'

export default function ColorPickerTests() {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const colorRed = (e) => {
        setRed(e.target.value)        
    }
    const colorGreen = (e) => {
        setGreen(e.target.value)        
    }
    const colorBlue = (e) => {
        setBlue(e.target.value)        
    }

  return (
    <div>
        <label>Red:</label>
        <input 
            type="number"
            onChange={colorRed}
        />
        <label>Green:</label>
        <input 
            type="number"
            onChange={colorGreen}
        />
        <label>Blue:</label>
        <input 
            type="number"
            onChange={colorBlue}
        />
    <p style={{fontFamily:'arial'}} >RGB({red},{green},{blue})</p>
    <div
        style={{
            width:'100px', 
            height: '100px',
            borderRadius: '15px',
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
    ></div>
    </div>
  )
}
