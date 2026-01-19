import React from 'react'
import { ColorContext } from './ColorContextEx'
import ColorDisplayEx from './ColorDisplayEx'

export default function ColorAppEx() {
  return (
    <ColorContext.Provider value={'green'}>
        <ColorDisplayEx/>
    </ColorContext.Provider>
  )
}
