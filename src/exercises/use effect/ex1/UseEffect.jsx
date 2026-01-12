import React, { useEffect, useState } from 'react'

export default function UseEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component Rendered');
    })

    useEffect(() => {
        console.log('Count is now ' + count);
    },[count])

  return (
    <div>
        <p>Count: {count}</p>
        <button 
            onClick={() => {
                return setCount(count + 1)
            }}
        >
            +1
        </button>
    </div>
  )
//   when do you use - useEffect?
// fetch data from an API when component loads
// update document title based on state
// set up timers or intervals
// listen to events (like widow resize)
// save data to localStorage when it changes

}
