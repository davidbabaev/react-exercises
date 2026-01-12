import { useEffect, useState } from "react";

function useDebounceThird(value, delay){

    const [inputValue, setInputValue] = useState(value)

    useEffect(() => {

        const timer = setTimeout(() => {
            setInputValue(value)
        }, delay)

        return () => {
            clearTimeout(timer);
        }

    }, [value])

    return inputValue;
}

export default useDebounceThird;