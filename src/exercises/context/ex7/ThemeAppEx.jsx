import React, { useState } from 'react'
import { ThemeContext } from './ThemeContextEx';
import ThemeControlsEx from './ThemeControlsEx';

export default function ThemeAppEx() {
    // Our Radio Station
    // crate states

    const [bgc, setBgc] = useState('');
    const [fontSize, setFontSize] = useState('');

  return (
    <ThemeContext.Provider value={{bgc, setBgc, fontSize, setFontSize}}>
        <ThemeControlsEx/>
    </ThemeContext.Provider>
  )
}
