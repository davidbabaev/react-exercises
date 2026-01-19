import React from 'react'

export default function CancelPreviusTimer() {

    let timerId; //store the timer the setTimeout function

    const handleClick = () => {
        // Cancel previus timer
        clearTimeout(timerId);
        console.log('Previus timer canceled');

        // Create new timer
        timerId = setTimeout(() => {
            console.log('DING! Last click was 2 seconds ago!');
        }, 2000);

        console.log('New timer created');
    }

  return (
    <div>
        <h2>Cancel Previus Timer</h2>
        <button onClick={handleClick}>Click Me Fast</button>
    </div>
  )

//   if we don't clear the previus we will get all the 'dings' that we will click
// we clicked 6 times, 3 sec passes, then we get 6 DINGS, but we need only one ding the last one,
// for this we using clearTimeout();

// Ehat we learned:
// 1. setTimeout delays once.
// 2. Multiple timers can run at once
// 3. clearTimeout cancels a timer
// 4. cancel + create = only last one ruls
// 5. that's debouncing!
}
