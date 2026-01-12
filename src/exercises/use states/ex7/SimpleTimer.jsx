import React, { useRef, useState } from 'react'

export default function SimpleTimer() {

    const [seconds, setSconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false);
    let intervalEf = useRef(null)     

    const startTimer = () => { 
        setIsRunning(true); // when we press on start btn the set isRunning chage from false to true

        intervalEf.current = setInterval(() => { // only runs when function is called create one interval
            setSconds((prev) => {
                return prev + 1; // use prev value
            })
        }, 1000)
    }

    const stopTimer = () => {
        setIsRunning(false);
        clearInterval(intervalEf.current); 
    }


  return (
    <div>
        <p>{seconds}</p>
        <button
            onClick={startTimer}
            disabled = {isRunning}
        >Start</button>
        <button
            onClick={stopTimer}
            disabled = {!isRunning}
        >Stop</button>
        <button>Reset</button>
    </div>
  )
}
