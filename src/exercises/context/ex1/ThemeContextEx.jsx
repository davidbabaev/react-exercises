import React, { createContext, useState } from 'react'

// Part 1
// The Radio Station

// 1. create context
export const ThemeContextEx = createContext(); 
// This is like: building the radio station (but it's not brodacasting yet)

// 2. create provider component
export function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

  return (
    // Part 2
    // The provider (the brodcaster)
    <ThemeContextEx.Provider value={{theme, toggleTheme}}>
        {children}
        {/* components here can access the value */}
    </ThemeContextEx.Provider>
    // this is like the radio station to brodcast "dark" to everyone
  )

//   **Parent-Child Relationship:**
// ```
// App (parent)
//  ├── Header (child of App)
//  ├── Main (child of App)
//  └── Footer (child of App)

// ______________________________________

//   **Extended tree:**
// ```
// App (parent)
//  ├── Header
//  ├── Main (parent)
//  │    ├── Sidebar (child of Main)
//  │    └── Content (child of Main)
//  └── Footer


}
