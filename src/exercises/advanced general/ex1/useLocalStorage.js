import { useState } from "react";

function useLocalStorage(key, initialValue) {

    let saved = localStorage.getItem(key);
    const savedValue = saved ? JSON.parse(saved) : initialValue;
    
    const [value, setValue] = useState(savedValue);

    const updateValue = (newValue) => {
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }

  return [value, updateValue];
}

export default useLocalStorage;
