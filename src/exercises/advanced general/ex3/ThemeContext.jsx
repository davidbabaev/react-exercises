import React, { createContext, useContext, useState } from 'react'

// 1. create
const ThemeContext = createContext();

// 2. Provider component
// Note: change export default to export function so you can export both ThemeProvider and useTheme from the same file.
export function ThemeProvider({children}) {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

  return (
    <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
    return useContext(ThemeContext);
}
