import React from 'react'
import useHover from './useHover'

export default function CreateHoverExample() {

    const [isHovering, onMouseEnter, onMouseleave] = useHover();


 
  return (
    <div>
        <div 
            style={{width: '100px', height: '100px', border: '1px solid black', cursor: 'pointer', alignContent: 
            'center', textAlign: 'center'}}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseleave}
            >True/False</div>
    </div>
  )
}
