import React, { useState } from 'react'
import useDebounceUsername from './useDebounceUsername';

export default function UsernmeValidationEx() {

    const [input, setInput] = useState('')
    const handleInput = (e) => {

        const newValue = e.target.value;

        if(newValue.length > input.length && newValue.length > 10){
            console.log('user typed more then 3 characters');
            return;    
        }

        console.log('new value: ',newValue.length);

        setInput(newValue);    
        }
        console.log('input state: ',input);

    const hasMinLength = input.trim().length >= 5;
    const hasNoSpaces = !input.includes(' ');
    const isAlphnumeric = /^[a-zA-Z0-9]*$/.test(input);
    const isValid = isAlphnumeric && hasNoSpaces && hasMinLength;
    const debounceInput = useDebounceUsername(input, 2000)

  return (
    <div>
        <input 
            value={input}
            onChange={handleInput}
        />
        <p>{input}</p>
        {isValid ? (<p>It's valid</p>) : input ?(<p>Its not valid</p>) : (<p></p>)}
        {input !== '' && (
            <div>
                <p>{hasMinLength ? '✅Exactly 5+' : '❌ Less Then 5'}</p>
                <p>{hasNoSpaces ? '✅Not Have Spaces' : '❌ Remove The spaces'}</p>
            </div>
        )}
    </div>
  )

  
    // const [count, setCount] = useState(0);
    // const handleClick = () => {
        // console.log('Before', count); <- 0 

        // setCount(5)

        // console.log("After", count); //still 0! Not 5
        
        // count will be 5 on NEXT render, not now
        // }
 
        // ******************
        // why the first character that we put in the input we see it in the display, but not see it in the log, both are the same input, so whay:

        // even though for you it feels 'the same moment', 
        // actually there are two moments:
        // 1. Moment A: inside the event handler (handleInput)
        // 2. Moment B: after React re-render the component

        // Moment A:
        // old state before typing: input === ''
        // you type 'd' -> browser calls handleINput



        // why are we using this:
        // newValue.length > input.length &&  
        // if we want to doing somerhing special, like show a message, make API call, etc.


}
