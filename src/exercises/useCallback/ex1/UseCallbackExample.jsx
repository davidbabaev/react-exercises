import React, { useCallback, useMemo } from 'react'

export default function UseCallbackExample() {

    // useCallback is even simpler then useMemo 
    // same idea, but for functions instead of values:

    // useMemo - cache a value:
    // const filtred = useMemo(() => {
    //     return data.filter(x => x.active)
    // }, [])

    // useCallback - cache a function
    // const handleClick = useCallback(() => {
    //     console.log('Clicked!');
    // }, [])
    
    // why we need this?
    // Problem: functions are Re-render on every render
    const handleClickk  = () => {
        console.log('Clicked!');
    }
    
    // every render created a new function
    // even though it does the same thing
    
    // every time component re-renders:
    // 1. new handleClick function is created 
    // 2. even though is does the exact same thing
    // 3. wastes memory
    // 4. causes child components to re-render unnecessarily
    

    // the solution:
    // this function is cached!
    const handleClick3  = useCallback(() => {
        console.log('Clicked!');
    }, []) // -> empty deps = never changes
    // same function reference across renders!

  return (
    <div>
        <button onClick={handleClickk}>Click</button>
        <button onClick={handleClick3}>Click</button>
    </div>
  )
}
