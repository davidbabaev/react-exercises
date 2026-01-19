import React from 'react'
import { useParams } from 'react-router-dom'

export default function ColorDisplayEx() {
    // const params = useParams()
    // const color = params.colorName

    // you can replace with: 
    const { colorName } = useParams();


  return (
    <div>
        <p style={{backgroundColor: colorName, height: '50px', width: '50px', borderRadius: '50%'}}></p>
        {colorName}
    </div>
  )
}
