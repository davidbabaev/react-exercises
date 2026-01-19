import React, { useState } from 'react'

export default function ChildButtons({plus, minus}) {

    // const [showNum, setShowNum] = useState('')
    // const show = (show) => {
    //     plus(show);
    //     minus(show);
    // }

  return (
    <div>
        <button
            onClick={plus}
        >+1</button>
        <button
            onClick={minus}
        >-1</button>
    </div>
  )
}
