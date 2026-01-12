import React, { useContext } from 'react'
import { ColorContext } from './ColorContextEx'

export default function ColorDisplayEx() {

    const color = useContext(ColorContext)

  return (
    <div>
        <h1>The Color Is {color}</h1>
        <p style={{backgroundColor: color, height: '100px', width: '100px', borderRadius: '50%px'}}></p>
    </div>
  )
}
