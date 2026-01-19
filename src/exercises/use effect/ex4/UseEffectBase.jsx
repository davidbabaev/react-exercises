import React, { useEffect } from 'react'

export default function UseEffectBase() {

    // useEffect(() => {
    //     // code here runs after render
    //     // what to do
    // }, [/* dependencies: when to do it */])

    // Type 1: Run on every render
    useEffect(() => {
        console.log('Component rendered');
        // no array -> runs after every render
    })

    // Type 2: Run only once (on mount)
    useEffect(() => {
        console.log('Component loaded for first time');
        // empty arr = runs when componnent first appears
    }, []);

    // Type 3: Runs when somthing changes:
    useEffect(() => {
        console.log('Count changes!');
        // [count] = runs when 'count changes
    }, [count])

  return (
    <div>UseEffectBase</div>
  )

//   useEffect lets you run code AFTER your component renders.
// think of it as saying:
// react after you fhinish displaying my component, do this extra thing.

// real life:
// 1. waiter brings you food (component renders)
// 2. then waiter brings napkins (useEffect runs)

// react:
// 1. react displaying your jsx (render)
// 2. then react runs useEffect (sideEffect)

// why do we need useEffect:
// some things can't happen during render:
// fetching data from internet
// starting timers
// subscribing to events
// manually changing DOM
// logging to console
// these are called side effects - they affect things outside you component.
// useEffect is where you do side effects.
}
