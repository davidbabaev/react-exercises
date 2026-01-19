import React from 'react'
import { AgeContext } from './AgeContextEx'
import AgeDisplayEx from './AgeDisplayEx'

export default function AgeAppEx() {
  return (
    <AgeContext.Provider value = {'15'}>
        <AgeDisplayEx/>
    </AgeContext.Provider>
  )
}
