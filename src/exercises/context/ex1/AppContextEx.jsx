import React from 'react'
import { ThemeProvider } from './ThemeContextEx'

function AppContextEx() {
  return (
    <ThemeProvider>
        <div>
            <h1>Context API demo</h1>
        </div>
    </ThemeProvider>
  )
}
