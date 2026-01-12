import React, { useState } from 'react'
import ColorsApp from './ColorsApp';

export default function ColorButtons() {

    const [color, setColor] = useState('gray');

    const changeColor = (newColor) => {
        setColor(newColor)
    }

  return (
    <div
        style={{
            width: '200px',
            height: '200px',
            backgroundColor: color,  // Uses the color state
            border: '2px solid black',
            marginBottom: '20px'
        }}
    >
        <ColorsApp onColorPick={changeColor}/>
    </div>
  )
}
