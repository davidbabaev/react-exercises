import React, { useEffect, useRef, useState } from 'react'

export default function DebounceCompleteEx() {

    const [input, setInput] = useState('');
    const [debounceValue, setDebounceValue] = useState('');
    // this will update after delay

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const timerId = useRef(null);
    // store time with no ve affected of the re-renders

    useEffect(() => {
        console.log('useEffect ran! input = ', input);

        // Cancel previous timer
        // clearTimeout(timerId.current);
        // console.log('Previous timer canceled');
        

        timerId.current =  setTimeout(() => {
            console.log('Timer finished! Upploading debounce value to: ', input);
            setDebounceValue(input)
        }, 2000)
        console.log('New timer started!');

        return () => {
            console.log('Clean Up! Canceling timer');
            clearTimeout(timerId.current);
        }
        // 1. user types - >useEffect runs -> start timer
        // 2. user types again -> cleanup runs first -> cancel old timer
        // 3. then useEffect runs -> start new timer
        // avoid duplicates, render only the last one after 2 sec
    }, [input])
    // Watch input for changes

  return (
    <div>
        <input 
            value={input}
            onChange={handleInput}
        />
        <p>Instant: {input}</p>
        <p>Debounce: {debounceValue}</p>
    </div>
  )
}
