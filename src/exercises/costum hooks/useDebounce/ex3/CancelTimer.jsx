import React from 'react'

export default function CancelTimer() {

    let timerId; // store the ID

    const startTimer = () => {
        console.log('Timer started');

        timerId = setTimeout(() => {
            console.log('BOOM! TImer exploded');
        }, 5000)

        console.log('Timer ID: ', timerId);
    }

    // we put the setTimeOut in a variable so we can use it later in the clearTimeo
    // without that we can't use it later and can't clear that set time out, we can't even catch it. 

    const cancelTimer = () => {
        clearTimeout(timerId);
        console.log('Timer canceled! saved!');
    };

  return (
    <div>
        <h2>Cancel Timer</h2>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={cancelTimer}>Cancel Timer</button>
    </div>
  )
}
