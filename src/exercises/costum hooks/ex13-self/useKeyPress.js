// how to check which keyBorad press in java script?
// i know, key event, what th suntax of key event?


// take a key name as a parameter (like 'Enter', 'Escape', 'a', 'ArrowUp');
// return true when tht key is passaed
// return false when tht key is passaed

// what we need to detect true or false when key is passed?
// the user have put in input a key by pressing on the keyBoard

// are we need true and false? yes
// are we need to use states?

// Code things we must use:
// we need an input
// we need a key event detector
// keydown
// event object (e.key)
// need to use false
// need to use true
// 


import { useState } from "react";

function useKeyPress(){

    const[eventKey, setEventKey] = useState('None Yet')

    const handleKeyDown = (e) => {
        console.log(`keyDown Detected: ${e.key}`);
        setEventKey(e.key);
    }

    window.addEventListener('keypress', handleKeyDown)

    return[eventKey, handleKeyDown]
}

export default useKeyPress;
