import { useState } from "react";

function useLocalStorageSimple(key, initialValue) {
    // that takes  2 parameters:
    // key - Name to save under (like 'username', 'email')
    // initialValue - default value if nothing saved yet


    // try to get value from localStorage
    // try to get saved data from localStorage
    const saved = localStorage.getItem(key);

    // if found, use it. if not, use initialValue 
    // decide what to start with
    // if saved exist, use it, if not, use initialValue;
    // Example:
    // saved = 'David'
    // startValue = 'David'
    // Example 2 - No saved data:
    // saved = null
    // startValue = initialValue
    const startValue = saved ? saved : initialValue;
    // startValue =  | saved ? saved : initialValue |

    // create state with that value
    // crate state with the string value
    const [value, setValue] = useState(startValue);

    // function to update both state and localStorage
    // function that does two things:
    // update the staet (so screen updates)
    // save to localStorage (so it presists)

    const updateValue = (newValue) => {
        setValue(newValue); // update state
        localStorage.setItem(key, newValue) // save to localStorage
    }

    return [value, updateValue];
}

export default useLocalStorageSimple;