import React, { useMemo, useState } from 'react'

export default function UseMemoExample() {
    const [count, setCount] = useState(0);
    const handleCoutn = () => {
        setCount((prev) => prev + 1)
    }

    // the whole component re-renders on every state change
    console.log('render');

    // Now it only recalculates when dependencies change!
    const expensiveResult = useMemo(() => {
      return handleCoutn(); 
    },[]) // -> empty array = calculate once, never again
    

  return (
    <div>
        <button onClick={handleCoutn}>+1</button>
        <p>{expensiveResult}</p>
    </div>
  )

  
// memoizaition = remember the result of an expensive calculation so you don't have to do it again!
// think of it like this:
// without useMemo:
// component re-renders
// ↓
// calculate expensive result again (even if input didn't change!)
// ↓
// waste time!
// ↓
// with useMemo:
// user types in search box
// ↓
// component re-renders
// ↓
// check: did the input change?
// NO -> use cched result (fast)
// YES -> recalculate (only when needed)


// when react re-render:
// 1. state changes (useState)
// 2. props change
// 3. parent re-renders

// the diffrence between useEffect and useMemo:
//  useMemo = return a value
// const result = useMemo(() => {
      // return someExpensiveCalculation();
  // }, [])
  // calculate and remember a value
  // return: the calculated value
  // when it runs: during render

// use effect = do something (side effect)
// useEffect(() => {
      // do something (fetch data, update DOM, etc.) 
      // console.log("something heppens")
      // returns: nothing useful
      // you don't use the return value
  // }, [])

// useMemo = synchronous calculation (happens NOW, during render)
// useEffect = asynchronous action (happend AFTER render) 
// fetch is ASYNC (takes time)
// useMemo runs durong render (synchronous)
// component fhinishes rendering before data arrives!
// you can't return data that doesn't exist yet

}
