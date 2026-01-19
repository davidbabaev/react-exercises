import React, { useCallback, useState } from 'react'
import ChildCallEx from './ChildCallEx';

export default function AppEx() {

    const [count, setCount] = useState(0);


    // Example 1: uses nothing from outside -> empty array
    // this function is created NEW every render
    // const handleClick = useCallback(() => {
    //     setCount((prev) => prev + 1)
    //     console.log('clicked');
    // }, []); --> [] means function NEVER recreates

    // example 2: uses count -> put count in array
    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1)
        console.log('clicked');
    }, [count]);
    // why? if count changes, the function needs to be recreated to see the new value
    // whaen component first renders, name is 'david'. the function is created and "remembers" name = 'David'.
    // now user changes to 'Jhon'. but the function was cached with the old value.
    // the function will still prints 'David'
    // the function is frozen with the old name.

    // The diffrence between callback or callback with dependency:
    // - without useCallback: function recreates on EVERY render (any state change)
    // - with useCallback + dependency: function re-creates ONLY when dependency changes



    // Example 3: uses count and name -> put both
    // const handleClick = useCallback(() => {
    //     setCount((prev) => prev + 1)
    //     console.log('clicked');
    // }, [count, name]);

  return (
    <div>
        <p>{count}</p>
        <ChildCallEx onClick = {handleClick}/>
    </div>
  )
}

// - React.memo -> prevents child re-render (if props didn't change)
// - useCallback -> prevents function re-creation (so props stay the same)
// - they work together