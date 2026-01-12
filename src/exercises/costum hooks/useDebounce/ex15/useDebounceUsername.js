import { useEffect, useState } from "react";

function useDebounceUsername(value, delay){

    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setInputValue(value)
        }, delay)

        return () => {
            clearTimeout(timer);
        }

    }, [value, delay])

    return inputValue;
}

export default useDebounceUsername;