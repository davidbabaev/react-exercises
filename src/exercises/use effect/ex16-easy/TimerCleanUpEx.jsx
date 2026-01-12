import React, { useEffect, useState } from 'react'

export default function TimerCleanUpEx() {

    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if(isRunning) {
            const intervalId = setInterval(() => {
                setSeconds((prev) => prev + 1)
            }, 1000);

            return () => {
                clearInterval(intervalId); // cleanUp;
            };
        }
    },[isRunning])


  return (
    <div>
        <p>{seconds}</p>
        <button onClick={() => {setIsRunning(true)}}>Start</button>
        <button onClick={() => {setIsRunning(false)}}>Stop</button>
        <button onClick={() => {setSeconds(0); setIsRunning(false)}}>Reset</button>
    </div>
  )
}
