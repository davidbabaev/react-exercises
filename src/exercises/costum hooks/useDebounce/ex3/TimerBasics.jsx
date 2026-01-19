import React from 'react'

export default function TimerBasics() {

    const handleClick = () => {
        console.log('1. Button clicked!');
        
        setTimeout(() => {
            console.log('2. Timer finished after 2 seconds!');
        }, 2000);

        console.log('3. Timer is set, moving on...');  
    };


  return (
    <div>
        <h2>Basic Timer</h2>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
