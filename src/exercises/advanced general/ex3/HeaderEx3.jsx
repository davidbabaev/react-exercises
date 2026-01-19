import React, { useContext } from 'react'
import { useTheme } from './ThemeContext'

export default function HeaderEx3() {

    // the costum hook useTheme already does useContext(ThemeContext) inside it, so you don't need to do it again.
    const {darkMode, toggleDarkMode} = useTheme()

  return (
    <div>
        <button onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    </div>
  )
}
