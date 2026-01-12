import React from 'react'

export default function ChildCallback({onSave}) {

  return (
    <div>
        <h2>Child Component</h2>
        <button onClick={onSave}>Save Data</button>
    </div>
  )
}
