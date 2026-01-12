import { useEffect, useState } from "react";

function useDebounceApiEx(value, delay) {
    const [input, setinput] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setinput(value)
            console.log(value);
            
            console.log('Set input - value');
        }, delay)
        
        // the clearTime runs each time before the setTime out finished.
        // it called the timer, it saved each key stroke that the user put in the input
        // then, only when the user stopped typing the timer timeout can fully run and show the last sentence that he see in the input.

        // he clear the previus timer,
        // the useeffect try to run timer automatically, but it's have delay time, so the timer can't suffice to execute the current input, because the user still typing, and each key stroke type the rtuen clear the previus timer so in the end point the user stop for the delay and he will the the last timer
        // only the last timer is survives

        // so only the last final text the user sees in the input is the one that actually triggers the logic (API call, search, etc.)

        // 4.12.2025 - full summary from my head and understanding:
        // so while the user typing, the setTime can't run yet, the clearTime out runs each timt and prevent duplicates, or deisplaying each character we typing each time, it's clear it in each time and onlt on the and point when the user stop typing and use effect get into the setTimeout afet 1 or 2 or whatever seconds, he can set our value that full whole value that he see now in the input, then do with that request or whatever. i need to understand if the user now stop typing, he typed 'a' clear, typed 'b', clear 'b' stopped, 2 seconds pass, the setTimeout run with the full value that he see tight now it the input
        // 

        // setTimeOut can't euns utill all the clears will run.
        // setTime out will show us the current text from the input, only that current text.

        return () => {
            clearTimeout(timer)
            console.log("Clear Timer");
        }
    }, [value, delay])
    
  return input;
}

export default useDebounceApiEx;

// 
// we only want to update our value, after the delay has passed
// we can do that we the usEffect
// after the delay, we'll set the debounce value to the new value
// the useEffect runs as a reaction to something which we give him in the dependanct it's the input value state

// step 1:
// react rendersa the component  and after the render finishes, is runs the useEffect 

// step 2:
// a timer starts
// but it hasn't executed yet - is only sceduled the callback for later

// step 3:
// because the state changed (value) ,the component render again

// step 4:
// this is the magic part the video talks about:
// react always calls the clean up function of the previus effect before running the next effect.

// so if the user types quickley, like:
// d
// da
// dav
// davi
// david

// Then useEffect runs many times,and each time:
// - react canceled the previus setTimeout (cleanup)
//  - then creates a new one

// the timout completes when the user stops typing
// step 5: if the timeout  reaches 2000ms without cleanup it fires
// then "searching" is logged (or request happens)

// Question:
// so while the user typing the cleanup dont executes, it will executes only when the user will finish typing so the time setTimeout will be executed then the return?

// 1. Cleanup does NOT wait until the user finishes typing
// 2. Cleanup runs every time before the next effet runs - which means on every single keystroke.

// when value changes, we will create a timeOut
// if value changes again, before this tieOut
// has had a chance to fire it's code this code is going to run:
// return () => {
//     clearTimeout(timer)
//     console.log("Clear Timer");
// }

// and it's going to clear the timOut 


// Problem 1:
// Hook is doing too much
// you hook is trying to:
// debounce
// fetch data
// handle loading
// that too much for one hook

// The Solution:
// Hook does: ONLY debounce (keep it simple!)
// Component does: Fetch data, handle loading



/*

import React, { useState } from 'react'
import useDebounceApiEx from './useDebounceApiEx'

export default function UserSearch() {

    const [inputValue, setInputValue] = useState('')
    const handleValue = (e) => {
        setInputValue(e.target.value)
    }

    const inputUse = useDebounceApiEx(inputValue, 2000)
    const [data] = useDebounceApiEx()

  return (
    <div>
        <input 
            value={inputValue}
            onChange={handleValue}
        />
        {}
        <p>{inputUse}</p>
    </div>
  )
}
import { useEffect, useState } from "react";

function useDebounceApiEx(value, delay) {

    const [input, setinput] = useState(value)
    const [isLoading, setIsLoading] = useState(false)

    const handleFetch = async () => {
        setIsLoading(false)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            console.log(data);
        }
        catch (err){
            console.log(err);
        }
        setIsLoading(true)
    } 
    
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setinput(value)
            handleFetch();
            if(isLoading){
                console.log('fetched');
            } else if(!isLoading){
                console.log('Loading');
            }
        }, delay)
        
        
        return () => {
            clearTimeout(timer)
        }
        
    }, [value])
    
  return [input, data];
}

export default useDebounceApiEx;
i'm stuck with that things:

trying to pass the data that i fetched to the component.
trying to set the isLoading, not sure if i have to set it in the hook and use in the component, if i have one state for that in the hook and other state in the component, like the input have, how to connect it with the useEffect? and with the component toghther.
i don't sure how to pass to the component multiple things if we have parameters we get them in a specific syntax,
const inputUse = useDebounceApiEx(inputValue, 2000)
but what if we have parameters and more things to pass how the return nee to look like, and how to get them and work with multiple things in the component itself, what the syntax.

*/