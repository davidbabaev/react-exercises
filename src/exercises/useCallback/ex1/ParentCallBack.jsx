import React, { useCallback, useEffect, useState } from 'react'
import ChildCallback from './ChildCallback';

export default function ParentCallBack() {

    const[text, setText] = useState('');
    const[count, setCount] = useState(0);
    console.log('render');
    
    // this is the function we're passing
    const handleSave = useCallback(() => {
        console.log('Saving', text);
        // API call here
    }, [text]);

    const save = () => {
        console.log('save');
    }

    // without using callBack the function will re-render on every render
    // What happens:
    // 1. you type in input text changes -< parent re-renders
    // 2. new handleSave function created (different reference)
    // 3. child recievs new function child re-renders (unnecessary)
    // 4. you click counter -> counter changes -> parent re-renders
    // 5. new handleSave function created again
    // 6. child recievs new function child re-renders (unecessary)
    // problem: child re-renders even when it doesn't need to!

    // when you actually need useCallback:
    // 1. passing to child component (with React.memo)
    // we need useCallback when we passing to child
    // we don't need useCallback when we not passing anywhere
    // prevent component from re-rendering if props didn't change

    function Parent() {
        const[count, setCount] = useState(0)

        // function cached:
        const handleClick = useCallback(() => {
            console.log('Clicked');
        }, [])

        return(
            <div>
                <button onClick={() => setCount(count + 1)}>
                    Count: {count}
                </button>
                <Child onClick = {handleClick}/>
            </div>
        )
    }

    const Child = React.memo(({onClick}) => {
        console.log('Child rendered');
        return <button onClick={onClick}>Click Me</button>
    })

    // What happens:
    // 1. click button -> count changes
    // 2. parent re-render
    // 3. handleClick uses cached version (same refernce!)
    // 4. React.memo checks: "Did onClick prop change?"
    // 5. no! it's the same function
    // 6. child does not re-render
    // now react.memo works

    // With React.memo (oprimized): 
    function Parent() {
        const [count,setCount] = useState(0)

        return(
            <div>
                <button onClick={() => setCount(count + 1)}>
                    Count: {count}
                </button>

                <Child name="David"/>
            </div>
        )
    }

    // What actually prevent Re-rendering?
    // React.memo = the guard
    // React.memo is like a security guard at the door:
    // const Child = React.memo(({onClick}) => {
        // log..
        // return..
        // })
    // React.memo job:
    // check: Did the prop change?
    // if no -> don't let component re-render
    // if yes -> let component re-render
    // React.memo = the one that prevents re-rendering

    // useCallback = makes props look the same
    // useCallback helps React.memo by keeping the function reference the same
    // keep the function the same across re-renders
    // so react.memo thinks: props didn't change!
    // useCallback = helper for React.memo

    // Child component wrapper in React.memo
    // const Child = React.memo(function Child({name}){
    //     console.log('Child rendered!');
    //     return <h1>Hello {name}</h1>
    // })

    // 1. click button -> count changes
    // 2. parent re-renders
    // 3. React.memo checks: "Did name prop change?"
    // 4. name is still "David" -> child does not re-render!
    // 5. console shows nothing
    // React.memo = skips re-render if props are the same


    // React.memo syntax:
    // option 1: wrap entire component
    // const MyComponent1 = React.memo(function MyComponent({prop1, prop2}){
    //     return <div>{prop1} - {prop2}</div>
    // })

    // wrap with arrow function
    // const MyComponent2 = React.memo(({prop1, prop2}) => {
    //     return <div>{prop1} - {prop2}</div>
    // })
    
    // option 3: separate declaration
    // function MyComponent3({prop1, prop2}) {
    //     return <div>{prop1} - {prop2}</div>
    // }
    // export default React.memo(MyComponent3)



    // 2. function is dependency of useEffect

    const fetchUser = () => {
        console.log('fetch data');
    }

    useEffect(() => {
        fetchUser() // <- calling the function
    }, [fetchUser]) // <- fetchUser is now a dependency
    // function as a dependency
    // run this effect when the function changes.

    // when does a function change?
    const sayHello = () => {
        console.log('hello');
    }
    // first render: sayHello created -> address 0X001
    // first render: sayHello created again -> address 0X002
    // first render: sayHello created again -> address 0X003

    // js sees these as diffrent functions
    // even though they do the same thing
    // every render = new function created = deffrent function

    
    useEffect(() => {
        fetchUser() 
    }, [fetchUser]) // <- this causes infinite loop!
    // why infinite loop?
    // 1. component renders
    // 2. fetchUser created (new function)
    // 3. useEffect sees new fetchUser -> runs
    // 4. sets state (when data arrives)
    // 5. component re-renders
    // 6. fetchUser created again (new function)
    // 7 .useEffect sees "new" setchUser -> runs again
    // 8. LOOP!
    // this is the problem

    const [userId, setUserId] = useState(1)

    // function cached - not re-created every render!
    const fetchUser2 = useCallback(() => {
        console.log('fetch data');
    }, [userId]) // only re-create when userId changes

    useEffect(() => {
        fetchUser() 
    }, [fetchUser]) // no infinite loop

    // how it works:
    // 1. component renders
    // 2. fetchUser cached "same" fetchUser -> doesn't run
    // 3. useEffect sees "same" fetchUser -> doesn't run
    // 4. no loop


    // 3. function is dependency of useMemo

  return (
    <div>
        <input 
            value={text}
            onChange={(e) => setText(e.target.value)}
        />

        <ChildCallback onSave = {handleSave} />
{/*                       ↑          ↑            */}
{/*                    prop name  function    */}

    <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
    <p>{count}</p>
    </div>
  )
}
