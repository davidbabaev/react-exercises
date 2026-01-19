import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

export function ThemeProviderEx5({children}) {

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }



  return (
    <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export function useThemeProviderEx5(){
    return useContext(ThemeContext)
}
