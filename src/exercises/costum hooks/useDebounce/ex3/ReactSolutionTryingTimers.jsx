import React, { useRef } from 'react'

export default function ReactSolutionTryingTimers() {
    
    // presist(keep/ continue) between renders
    const timeId = useRef(null);

    const timer = () => {
        clearTimeout(timeId.current); // Use .current
        console.log('Timer Set');

        timeId.current = setTimeout(() => {
            console.log('Timer 1 DING');
        }, 2000)
        console.log(timeId);
    }
    

    const cancelTimer = () => {
        clearTimeout(timeId.current)
        console.log('Timer canceled');
    }

  return (
    <div>
        <button onClick={timer}>Set Timer</button>
        <button onClick={cancelTimer}>Set Timer</button>
    </div>
  )
}
