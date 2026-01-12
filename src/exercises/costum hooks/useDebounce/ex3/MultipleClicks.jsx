import React from 'react'

export default function MultipleClicks() {

    const handleClick = () => {
        console.log('Creating a timer...');
        
        setTimeout(() => {
            console.log('DING!');
        }, 2000)
    }
  return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
