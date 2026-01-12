import React from 'react'
import { createContext } from 'react'

// Create Context (radio station)

export const ColorContext = createContext();

// key concepts to remember:
// 1. Context file: just create it, doesnt display anything
// 2. Provider: Wraps cmponents and broadcasts value
// 3. useContext: Recieves the broadcast in child components
// 4. Always same pattern! just diffrent names values.
