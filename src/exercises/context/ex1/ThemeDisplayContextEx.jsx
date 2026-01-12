import React, { useContext } from 'react'
import { ThemeContextEx } from './ThemeContextEx'

export default function ThemeDisplayContextEx() {

    // Part 3 - useContext (The radio reciever)
    const {theme, toggleTheme} = useContext(ThemeContextEx);
    // theme = "dark"
    // this is like a radio tuning in and recieving the broadcast.

    const styles = {
        backgroundColor: theme === 'light' ? 'white' : '#333',
        color: theme === 'light' ? 'black' : 'white',
        padding: '20px',
        borderRadius: '8px'
    };

  return (
    <div style={styles}>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>
            Toggle Theme
        </button>
    </div>
  )
}
