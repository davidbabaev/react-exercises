import { useEffect, useState } from "react";

function useDebounceUsers(value, delay){
    
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        let timer = setTimeout(() => {
            setInputValue(value);
        }, delay) 

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])
    return inputValue;
}

export default useDebounceUsers;