import React, { useEffect, useRef, useState } from 'react'

// What to build:
// 1. User types text
// 2. Character count updates instantly as they type
// 3. A saved character count updates ONLY after user stops typing for 1 second
// 4. Show oth countes on screen

// debounce - ניתוק

// States:
//  One state for the text (update instantly)
// One State for the debounce text (updates with delay)

// Refs:
// One ref to store the timer ID

// Effects:
// One useEffet that watches the text state

export default function CharacterCounter() {

    const [text, setText] = useState('')
    const [textDebounce, setTextDebounce] = useState('');

    const textRef = useRef(null);

    const handleInput = (e) => {
        setText(e.target.value)
    }

    // on the first render of the page, useEffects runs once automatically
    // on the first time i will give back just undefinedes.

    // user types 'h' (text changes from '' to h):
    // cleanUp runs (from previous effect)
    //    ↓
    // useEffect Runs (new effect)
    //    ↓
    // Setup code runs
    //    ↓
    // return () => {} saved (new cleanup)

    // also the cleanup runs when the user navigate away of the page
    useEffect(() => {
        // run immidiately
        // console.log('Setup: Starting timer for text =', text);

        textRef.current = setTimeout(() => {
            setTextDebounce(text);
            // run after 2 sec we finish writing
            console.log("Timer Finished");
        }, 2000)

        return () => {
            // runs immidiatly
            console.log('Each Character we write');
            clearTimeout(textRef.current);
        }
        // we clean each character we write in the input, clear 'h' and clear 'e' and clear 'l' etc..,
        // after the user wrote his word and wait 2 sec like we set in our setTimeout, we will get in the display the
        // whole word, we didn't get each character we wrote immidiatly 
        // because the retur clearTimeOut block it, it's clear each character immidiatly
    }, [text])    


  return (
    <div>
        <h1>Debounce Study</h1>
        <input 
            value={text} 
            placeholder='Type..'
            onChange={handleInput}
        />
        <p>Text: {text}</p>
        <p>Text Ref: {textDebounce}</p>
        <p>{text.length}</p>
    </div>
  )


// Without the return:
// clearTimeout(47) runs immidiately
// timer #1 is canceled right away
// useEffect ends

// Result:
// Timer i canceled before it's even starts!
// Nothing happend after 2 seconds because timr is already dead!

// the code runs in order, line by line:
// textRef.current = setTimeount(...) -> line 1: start timer
// clearTimerout(textRef.current) -> line2: cancel right away

// Its like:
// Set an alarm for 2 minutes
// immidiately turn off the alarm
// alarm never rings

// With return:
// useEffect runs
// setTimeout creates Timer #1, returns ID (47)
// textRef.current = 47
// return () => {clearTimeout(47)}
// this function is saved by react
// it does not run now
// useEffect ends
// Timer #1 is still running.

// (wait 2 secons, nothing else happens)
// Timer #1 finished!
// setTextDebounce runs

// retunr tells react:
// Het react, save this function and run it later when:
// 1. the dependency changes (before next useEffect)
// 2. the component unmounts

// without return:
// code runs immidiatley, in order, top to button

}
