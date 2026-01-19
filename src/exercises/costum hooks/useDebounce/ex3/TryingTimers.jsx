import React from 'react'

export default function TryingTimers() {

    // get reset on every render of the component
    // click btn 1 -> component renders -> timeId = undefined
    // click btn 2 -> component renders again (React re-renders) -> timeId = undefined
    let timeId; // --> it's a problem using it.

    // on first render we get undefined in the timeId,
    // user clicks button
    // again clearTime is undefined,
    // setTimeOut run first time ID get a number
    // timeId variable updated to this number
    // function ends
    // timeId = 46

    // NOW  - The important part:
    // React detects state chnage (btn causes re-render)
    // component function runs AGAIN FROM THE TOP!

    // let timeId <- creates NEW variable, value = undefined
    // we lost the old value (46)

//     Memory:
    // timeId = 48
    // Timer #47 = still running! ⚠️
    // Timer #48 = running!

    // Result: TWO timers running! Not canceled! ❌

    // _________________________________________________________________

    // Why useRef solves this:
    // useRef creates a 'box' that PERSIST between renders!
    // Think of it like a safe deposit box:
    // const box = useRef(null);
    // Creates a box that survives re-renders

    // The BOX has one property: .current
    // Box.current = null
    // the BOX object itself NEVER changed!
    // but that's inside (current) an change!

    // __________________________________________________________________

    // ### **Visual Analogy:**
    // ```
    // Regular Variable (let):
    // ┌─────────┐
    // │  Paper  │ ← Gets thrown away and remade each render
    // │  47     │
    // └─────────┘


    // useRef:
    // ┌──────────────────┐
    // │   Safe Box       │ ← Box stays forever!
    // │  ┌──────────┐    │
    // │  │  .current│    │ ← What's inside can change
    // │  │    47    │    │
    // │  └──────────┘    │
    // └──────────────────┘

    const timer = () => {
        
        clearTimeout(timeId)
        
        console.log('Timer Set');

        timeId = setTimeout(() => {
            console.log('Timer 1 DING');
        }, 2000)

        // timeId = setTimeout(() => {
        //     console.log('Timer 2 Set');
        // }, 2000)

        // timeId = setTimeout(() => {
        //     console.log('Timer 3 Set');
        // }, 3000)
    }

    const cancelTimer = () => {
        clearTimeout(timeId)
        console.log('Timer canceled');
    }

  return (
    <div>
        <button onClick={timer}>Set Timer</button>
        <button onClick={cancelTimer}>Set Timer</button>
    </div>
  )
}
