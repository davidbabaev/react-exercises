import React, { useRef } from 'react'

export default function NumberStoreEx() {
    console.log('________________');
    console.log('re-rended');
    
    
    const number = useRef(0) // BOX with 0 inside
    let num = 0;
    
    const increase = () => {
        number.current = number.current + 1 // change what's in the box
        console.log('useRef: ', number.current);
        num += 1;
        console.log('variable: ', num);
        
    }
        
        const show = () => {
            console.log('useRef number: ', number.current);
            console.log('variable number: ', num);
        }
        
        return (
            <div>
        <button onClick={increase}>Click</button>
        <button onClick={show}>Show</button>
    </div>
  )

// useRef updating does not trigger the component to re-render,
// making it ideal for storing values that don't affect the UI.

}
