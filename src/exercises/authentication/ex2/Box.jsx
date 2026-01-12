import React from 'react'

export default function Box({children}) {
  return (
    <div style={{ border: '2px solid blue', padding: '20px' }}>
        {children}
    </div>
  )
}
