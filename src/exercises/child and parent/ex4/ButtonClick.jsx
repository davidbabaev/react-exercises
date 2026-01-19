import React, { useState } from 'react'
import ToggleButton from './ToggleButton';

export default function ButtonClick() {
    // parent
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    }


  return (
    <div
        style={{padding: '20px'}}
    >
        <h1>Toggle Example</h1>
        {isVisible && <p>Hello</p>}
        <ToggleButton onToggle={handleToggle} />
    </div>
  )
}
