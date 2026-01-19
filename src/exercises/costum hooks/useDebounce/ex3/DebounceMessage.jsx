import React, { useEffect, useState } from 'react'

export default function DebounceMessage() {

    const [input, setInput] = useState('');

    const [message, setMessage] = useState('');

    useEffect(() => {
        console.log('Start');
        
        // Start a time - wait 1 second
        const timerId = setTimeout(() => {
            // After 1 second, show the message
            setMessage(`You typed: ${input}`)
            console.log('end');
        }, 1000)

        // cleanUp function - runs before next use effect
        return () => {
            // Cancel the timer
            clearTimeout(timerId)
        };
        

    }, [input])
    // tun this every time 'input' changes


  return (
    <div>
        <h2>Type Sumething</h2>
        <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type Here..'
        />
        <p>{message}</p>
    </div>
  )

// why are we using useEffect:
// without useEffect this runs on EVERY render!
//     setTimeout(() => {
    // setMessage(`You typed: ${input}`);
    // }, 1000);

    // setTimeOut = set an alarm 
    // you set it for 5 minutes, timer starts counting down
    // 5 minutes pass, DING, timer rings
    
// Code runs
//     ↓
// Alarm is set for 3 seconds
//     ↓
// JavaScript keeps counting...
// 1 second... 2 seconds... 3 seconds...
//     ↓
// 3 seconds pass
//     ↓
// DING! Run the code inside!
// console.log('DING! Time is up!')


// _____________________________________________________

// User types "h"
// const timer1 = setTimeout(() => {
//     console.log('Show message for h');
// }, 1000);
// // ↑ Alarm #1 set! Will ring in 1 second

// // User types "e" (200ms later)
// const timer2 = setTimeout(() => {
//     console.log('Show message for he');
// }, 1000);
// // ↑ Alarm #2 set! Will ring in 1 second
// ```

// **Now you have TWO alarms ticking!**
// ```
// Alarm #1: Started at 0ms,    will ring at 1000ms
// Alarm #2: Started at 200ms,  will ring at 1200ms

// Both alarms are ticking at the same time!

}
