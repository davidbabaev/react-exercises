import React from 'react'
import useToggleAdvanced from './useToggleAdvanced'

export default function ToggleAdvancedExample() {

    const [isOn, toggle, setTrue, setFalse] = useToggleAdvanced(true);


  return (
    <div>
        <button onClick={() => toggle()}>Click</button>
        <button onClick={() => setTrue()}>Set On</button>
        <button onClick={() => setFalse()}>Set Off</button>
        <p>{isOn ? 'On' : 'Off'}</p>
    </div>



  )
}
