import React from 'react'
import { Link } from 'react-router-dom'

export default function ColorListEx() {

    const colors = ['red', 'blue', 'green', 'yellow', 'black']

  return (
    <div>
        {colors.map((colorName, index) => (
            <div key={index}>
                <Link to={`/color/${colorName}`} >{colorName}</Link>
            </div>
        ))}
    </div>
  )
}
