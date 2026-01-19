import React, { useEffect, useState } from 'react'

function useDebounceEx3(value, delay) {

    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {

        const timer = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => clearTimeout(timer);

    }, [value, delay])


  return debounceValue;
}

export default useDebounceEx3;