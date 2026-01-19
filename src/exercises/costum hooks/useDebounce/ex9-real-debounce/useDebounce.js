import { useEffect, useState } from "react";

function useDebounce(value, delay){
    // define dynamic parameters:
    // value - the thing to debounce (input)
    // delay - how long to wait (sec)
    // new syntax = Taking two parameters instead of watching state

    // 1. state to store debounce value
    // Internal state
    // needed to store the debounced version.
    // initial value: start with same value passed in.
    const [debounceValue, setDebounceValue] = useState(value);

    // 2. useEffect to handle the debouncing.
    useEffect(() => {

        // 3. Start timer:
        const timer = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        // 4, cleanup function
        return () => {
            clearTimeout(timer);
        }

        // why watch dealy?
        // if delay changes, restart with new delay
        // usually doesn't change but good practice
    }, [value, delay]);
    // Watch both -> value and delay 

    // 5. return the debounce value
    return debounceValue;
    // why we do return:
    // Because we need to GET the debunced value of the hook and INTO our component!
    // now the component can use the debounce value;

    // without return:
    // In component:
    // const debouncedSearch = useDebounce(search, 1000);
    // console.log(debouncedSearch);  // undefined ❌
    // problem: debouncedValue stays inside the hook.
    // Without return nothing comes out!
    // we will can't use the debounceValue in the other file. 


    // Regular function:
    // function add(a, b) {
    //     const result = a + b;
    //     return result;  // ← Give back the result
    // }

    // const sum = add(5, 3);  // sum = 8
    // console.log(sum);  // 8
}

export default useDebounce;