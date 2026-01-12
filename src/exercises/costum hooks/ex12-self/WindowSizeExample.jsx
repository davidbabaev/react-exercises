import React from 'react'
import useWindowSize from './useWindowSize'

export default function WindowSizeExample() {

    const[height, width] = useWindowSize();

  return (
    <div>
        <p>Height: ↕ {height}</p>
        <p>Width: ↔ {width}</p>
    </div>
  )
}
