import React from 'react'

export default function ToggleButton({onToggle}) {
    // child
  return (
    <div>
        <button
            onClick={onToggle}
        >
            Toggle Message
        </button>
    </div>
  )
}
