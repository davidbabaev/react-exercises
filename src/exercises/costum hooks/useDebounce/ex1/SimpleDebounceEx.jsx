import React, { useState } from 'react'

export default function SimpleDebounceEx() {

    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');

    let timerId; //store timer

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);

        // clear previus timer
        clearTimeout(timerId);
    
        // start new timer
        timerId = setTimeout(() => {
            setMessage(`You typed: ${value}`)
        }, 5000);
    }
    

  return (
    <div>
        <h2>Type Something</h2>
        <input 
            value={input} 
            onChange={handleChange}
            placeholder='Type Here..'
        />
        <p>{message}</p>

    </div>
  )


//   Key concept:
// the timer keeps getting cancelled and restarted while user types!
// only when user stops -> timer finishes -> action happens!

// Debouncing:
// wait until user stops doing something
// then do the action once

// how:
// setTimeOut - starts a timer
// clearTimeOut - cancels a timer
// keep canceling and restarting until user stops


// Debouncing in javascript is a performance optimization
// technuque that ensures a function is executed only after a specific period of time has passed
// since it was last called. it's used to control how often an event handler is triggered for events that fire rapidly,
// such as typing in a search bar, resizing a window, or scrolling.

// How debouncing work:
// The core idea of debouncing is to delay the function's execution
// and, crucially, reset that delay every time the event occurs again within the wait period.

// Common Use Cases:
//1. Search input fields: making an API requet for search suggestions only after the user as stopped typing for a brief momonet, instead of on every single keystroke.
// 2. Window resizing: recalculation element layouts only after the user has finished resizing the browser window, avoiding performence leg during the resize process.
// 3. Auto-Save features: saving form daat to a database only when the user pauses their input, minimizing database trips.
// 4. Preventing double clicks: ensuring a submission button is only clicked once, preventing multiple form submission

}
