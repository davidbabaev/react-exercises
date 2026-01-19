import { useEffect, useState } from "react";

function useDebounceSecond(value, delay) {

    // Old Way - hardCoded, menual:
    // const [inputText, setinputText] = useState('');
    // const [debounce, setDebounceText] = useState('');

    // Correction:
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debounceValue;
}

export default useDebounceSecond;

// Component menages the state:
// Hard coded states!
// const [inputText, setinputText] = useState(''); // ← Manages state
// const [debounce, setDebounceText] = useState(''); // ← Manages state

    // const handleInput = (e) =>{ <- Hardcoded handler!
        // setinputText(e.target.value);
    // }

// Problem: this hook can only work with one input field!

// Hook only does the debouncing:
// const debouncedName = useDebounce(name, 1500);
// const debouncedEmail = useDebounce(email, 1500);

// Now it's reusable!✅

// ______________________________________________________________
// function useDebounce(value, delay){

// ... debounce logic
// return debounceValue;
// }

// const [inputText, setinputText] = useState(''); <- Component manages state
// const debouncedEmail = useDebounce(email, 1500) <- Same hook!

// we dont need to create multiple useStates

// _________________________________________________________________

// - we don't reusing the state itself
// we making state for what we need
// const [input, setInput] = useState('')
// const [email, setEmail] = useState('')

// we reusing the debounce logic:
// we don't need to wrote useEffect for each state 
// or seperate setTimeout for each state
// const debounceText = useDebounceSecond(input, 2000)
// const debounceEmail = useDebounceSecond(email, 2000)

// what we don't need anymore with Debounce Hook:
// don't need second state 
// don't need useEffect
// don't need useRef
// don't need setTimeOut
// don't need cleanup
// don't need to repeat this 10 times

// The Point:
// You write useEffect ONCE (in the hook)
// Then use it EVERYWHERE (without useEffect again)