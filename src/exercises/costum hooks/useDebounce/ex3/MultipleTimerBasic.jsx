import React from 'react'

export default function MultipleTimerBasic() {

    const handleClick = () => {
        console.log('start');
        
        setTimeout(() => {
            console.log('Timer 1: 1 second passed');            
        }, 1000);
        
        setTimeout(() => {
            console.log('Timer 2: 2 seconds passed');            
        }, 2000);
        
        setTimeout(() => {
            console.log('Timer 3: 3 seconds passed');            
        }, 3000);

        console.log('All timers set');
        
    }

  return (
    <div>
        <h2>Multiple Timers</h2>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
