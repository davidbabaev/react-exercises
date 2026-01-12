import React from 'react'

export default function UserCard({name, age, city}) {
  return (
    <div
        style={{
            border: '1px solid black',
            padding: '10px',
            margin: '10px',
        }}
    >
        Hello {name} your age is {age} and you from {city}
    </div>
  )
}
