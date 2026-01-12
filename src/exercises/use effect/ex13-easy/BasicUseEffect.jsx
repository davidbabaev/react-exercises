import React, { useEffect, useState } from 'react'

export default function BasicUseEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('This runs AFTER render');
        
    })

    useEffect(() => {
        console.log('This runs AFTER render ony once');
        
    }, [])

    useEffect(() => {
        console.log('I run when count Chnages');
        
    }, [])
    // [] <- dependency
    // First render ✅
    // When count changes ✅
    // When other state changes ❌

  return (
    <div>
        {count}
    </div>
  )

//   some things can't run during render
// fetching data from API
// updating document title
// daving to localStorage
// setting up timers
// sunscribing to events
}
