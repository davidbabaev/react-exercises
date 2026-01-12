import React, { useEffect, useState } from 'react'

function useDmemo(value, delay) {

    const [valueD, setDebounceValue] = useState(value)

    useEffect(() => {

        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay)

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay])


  return valueD;
}

export default useDmemo;
