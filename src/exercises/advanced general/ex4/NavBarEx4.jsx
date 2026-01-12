import React from 'react'
import { useTheme } from './ThemeProviderEx4'

export default function NavBarEx4() {

    // we put the costum hook inside the function
    // we write the values that we pass throu the Provider in const with object {}
    // then we import our context function name
    const {darkMode, toggleDark} = useTheme()



  return (
    <div style={{backgroundColor: darkMode ? 'black' : 'white', height: '300px', width: '300px'}}>
        <button onClick={toggleDark(darkMode)}>{!darkMode ? 'To Dark Mode' : 'To Ligh Mode'}</button>
    </div>
  )
}


// im not remember how to use costum hook in other file