import React, { useCallback, useState } from 'react'
import ChildCallback from './ChildCallback';

export default function () {

    const [count, setCount] = useState(0)

    const handleCount = useCallback(() => {
        setCount((prev) => prev + 1)
        console.log('Handle Count');
    }, [])
    
    console.log('parent rerender');
    
    
    
    return (
        <div>
            <button onClick={() => setCount((prev) => prev + 1)}>par</button>
            <p>{count}</p>
        <ChildCallback
            handleCount = {handleCount}
            />
    </div>
  )
}

// summary:
// - we use callback when passing a function to a child component
// - the function is in the same component, but we pass it to child
// - if we use props in the function or the function as a prop
// - we prevent the funtion from to re-creacting on each parent render (not child render! - parent render!)
// usecallback work regardless of where you click
// it not matters if the click is in:
// - parent component
// - child component
// - anywhere
// as long as the parent re-renders, the function would normally re-create!

// it's doesn't matter what caused the parent to re-render
// could be:
// - button click in parent
// - button click in child
// - timer/ interval 
// - API response
// - prop change
// - context change
// - anything
// al lost as parent re-renders, useCallback prevents function re-creation


// don't use callback on a function that used in the same component
// don't use callback when not passing to children
// const handleName = useCallback(() => {
    // console.log(name); // uses 'name' from outside
// }, [name]) // Re-create when 'name' changes
// rule: if function uses a variable from ouside, put it in dependencies


// parent never re-renders:
// but you never change count



// not all re-renders are bad
// neccessary re-renders (we want these):

// const [count, setCount] = useState(0)
// <button onClick={() => setCount(count + 1)}>
//      Count: {count} <- this needs ti update
// </button>

// when count chnages:
// component must re-render to show new count
// this is GOOD and necessary
// unnecessary - re-renders:
// the child doesn't use count.
// when count changes:
// parent re-renders neccessary (count changed) 
// child re-renders uneccessary nothing changed for it
// problem: child does expensive calculation again even though nothing changed for it.

// the porpuse of React.memo + useCallback:
// porpuse prevent children from re-rendering when they don't need to!

// ____________________________________________________________
// function Dashboard() {
//     const [notifications, setNotifications] = useState(0)
    
//     return (
//         <div>
//             <p>Notifications: {notifications}</p>
//             <button onClick={() => setNotifications(n => n + 1)}>
//                 New Notification
//             </button>
            
//             {/* These 3 components re-render every time! */}
//             <UserProfile />      {/* 1000 lines of code */}
//             <Settings />         {/* 500 lines of code */}
//             <Analytics />        {/* 2000 lines of code */}
//         </div>
//     )
// }

// What happens:
// 1. click new notification
// 2. notifications changes
// 3. dashboard re-renders (neccessary)
// 4. UserProfile re-renders (unnecessary - no props changes)
// 5. Settings re-renders (unnecessary - no props changes)
// 6. Analytics re-renders (unnecessary - no props changes)

// Problem: 3500 lines of code re-execute fo no reason, app feels slow
