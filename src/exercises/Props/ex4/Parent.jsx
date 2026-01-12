import React from 'react'
import Child from './Child'

export default function Parent() {
  return (
    <>
    <Child
      name={'David'} // <- this is where you CREATE the prop
      last={'Babaev'}
    />
    {/* <Child
      last={'Babaev'}
    /> */}
    </>
    
  )
}
