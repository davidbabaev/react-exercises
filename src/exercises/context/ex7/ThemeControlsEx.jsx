import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContextEx';

export default function ThemeControlsEx() {
    // the display - buttons to change settings:

    const {bgc, setBgc, fontSize, setFontSize} = useContext(ThemeContext);


  return (
    <div>
        <h1>Settings</h1>
        <p>Text Size: {fontSize}</p>
        <p>Back Ground Color: {bgc}</p>
        <button onClick={() => setBgc('black')}>Set Bgc - Black</button>
        <button onClick={() => setFontSize('50px')}>Set Text Size - 50px</button>
        <h2>Results</h2>
        <p style={{height: '50px', width: '50px', backgroundColor: bgc}}></p>
        <p style={{fontSize: fontSize, margin: '0'}}>text</p>
    </div>
  )
}
