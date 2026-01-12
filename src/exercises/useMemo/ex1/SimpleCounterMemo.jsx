import React, { useMemo, useState } from 'react'

export default function SimpleCounterMemo() {

    // const [number, setNumber] = useState(0);

    // // useMemo: Calculate doubled value
    // const doubled = useMemo(() => {
    //     console.log('Calculating doubled...');
    //     return number * 5374572354
    // }, [number])
    
    // //     console.log('Calculating doubled...');
    // const print = () => {
    //     console.log('text');
        
    // }

    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    // // without useMemo: slow calculating runs every time 
    // const slowResult = (() => {
    //  console.log('Doing slow calculating');

    // //  simulate slow calcualtion (like proccessing big data)
    // let result = 0;
    // for(let i = 0; i < 1000000000; i++){ // billion iterations
    //     result += 1 
    // }

    // return number * 2
        
    // })()

    // Now with useMemo: slow calcualtion runs only when needed!
    const slowResult = useMemo(() => {
        console.log('Doing slow calculation...');
        
        // simulate slow calculation
        let result = 0;
        for(let i = 0; i < 1000000000; i++){ // billion iterations
            result += 1 
        }

        return number * 2
    },[number]) // -> only calculate when 'number' changes!



  return (
    <div>
        <h1>Number: {number}</h1>
        <h2>Slow Result: {slowResult}</h2>
        {/* <h2>Doubled: ${doubled.toLocaleString('il-HE')}</h2> */}
        <button onClick={() => setNumber(number + 1)}>Change Number (affects calculation)</button>
        <hr />

        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment Counter (Doesn't affect calculation)</button>
    </div>
  )

// 1. Click "Change Number" - takes 2-3 seconds
// 2. Click increment counter - also takes 2-3 seconds
// why? the slow calculation runs every time component re-renders!

// in useMemo = Data already exist, just calculating someting from it

// when to use - useEffect:
// use useEffect when you need to do something (an action/ sideEffect)
// - fetch data, when you need to get data from a server
// - saving to localStorage
// - loading from localStorage
// - updting browser featured(browser titl, etc.)
// - setting up timers/ intervals
// - when to need to listen to events (resize, scroll, keyboard)
// - connecting to external services - webSocket, database

// when to use - useMemo:
// use useMemo when you need  to calculate something from data you already have
// - filtering large arrays, you have big list and need to filter it
// - sorting large arrays, you have a big list and need to sort it
// - searching/ filtering by user input, user types in search box, you filter results
// - calculating statistics, when you need to calculate totals, averages, min/max from data
// - transforming/ mapping data, when you need to transform data into diffrent format
// - complex calculation, calculation is slow and yu don't want to repeat it

// useEffect - for actions (fetch, save)
// useMemo - for calculations (filter, sort)
// useMemo not prevent infinite re-renders, it prevents unnecessary re-calculations
// what useMemo prevents:
// - re-filtering 10,000 items when count changes
// - app feeling slow/laggy
// - wasted CPU time

// what usememo does not prevent:
// - component from re-rendering
// - infinitie re-render loops

// useMemo:
// - chaches values, results of calculations
// - use for filtering, sorting, calculating from big data
// - prevents = re-calculting expensive operations
// - makes app faster when you have unrelated state changes
}

