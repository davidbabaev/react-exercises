import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

export function ThemeProviderEx4({children}) {

    const [darkMode, setDarkMode] = useState(false)

    const toggleDark = () => {
        setDarkMode(!darkMode)
    }

  return (
    <ThemeContext.Provider value={{darkMode, toggleDark}}>
        {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
    return useContext(ThemeContext)
}

// Why we doing the useTheme instead do the useContext in each file we need:
// 1. less inports in every file
// import { useContext } from 'react'
// import { ThemeContext } from './ThemeProvider'

// const { darkMode, toggleDark } = useContext(ThemeContext)
// ______
// with costum hook:
// import { useTheme } from './ThemeProvider'

// const { darkMode, toggleDark } = useTheme()
// ______

// useTheme is a costum hook!
// A costum hook is just regular javaScript function that:
// 1. starts with word use
// 2. uses other react hooks inside it (like useState, useEffect, useContext, etc.)


// the name contectProvider is confusing because:
// - Provider suggests it provides context (that's what your first function does)
// - This function consues/ uses the context
// export function contextProvider(){ 
//     return useContext(ThemeContext)
// }

// Why useTheme:
// - it starts with use - this is react's convention  for hooks
// - it describes what you get back - theme-related stuff (darkMode, toggleDark)
// - it's clear this is for the context, not providing it.