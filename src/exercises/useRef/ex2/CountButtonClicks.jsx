import React, { useRef } from 'react'

export default function CountButtonClicks() {

    const clickCount = useRef(0); //start at 0

    const handleClick = () => {
        clickCount.current += 1;
        console.log(`Button clicked ${clickCount.current} times!`);
    };

  return (
    <div>
        <h2>Count Clicks</h2>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}
