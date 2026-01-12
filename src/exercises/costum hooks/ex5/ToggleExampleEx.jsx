import React from 'react'
import useToggle from './useToggle'

export default function ToggleExampleEx() {

    const [isOn, toggle] = useToggle();

  return (
    <div>
        <button onClick={() => toggle()} >{isOn ? 'Turn Off' : 'Turn On'}</button>
        {isOn ? 'ON 💡': 'OFF 🌑'}
    </div>
  )
}
