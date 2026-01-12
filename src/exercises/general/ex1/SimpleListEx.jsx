import React, { useState } from 'react'

export default function SimpleListEx() {

    const [names, setNames] = useState(['dave', 'alice', 'nastya', 'adva']);

  return (
    <div>
        {names.map((name, index) => (
            <p key={index} >{name}</p>
        ))}
    </div>
  )
}
