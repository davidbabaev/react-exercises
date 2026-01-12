import React, { useRef, useState } from 'react'

export default function RememberPrevius() {

    const [count, setCount] = useState(0);
    const previusCount = useRef(0); //start with 0

    const increase = () => {
        previusCount.current = count; // step 1: Save old count
        setCount((prev) => prev + 1); // step 2: Update to new count
    }
    console.log('Count ',count);
    console.log('previus ',previusCount.current);

  return (
    <div>
        <p>Current: {count}</p>
        <p>Previus: {previusCount.current}</p>
        <button onClick={increase}>increase</button>
    </div>
  )

  // we start with count = 0, previusCount.current = 0;  
//  user clicks button (1st time):
//  step 1: 
// previusCount.current = count 
// previusCount.current = 0 <- saves current value (0)


}
