import React from 'react'
import useKeyPress from './useKeyPress'

export default function KeyPressExample() {
    const[eventKey, handleKeyDown] = useKeyPress();
  return (
    <div>
        <p>{eventKey}</p>
    </div>
  )
}
