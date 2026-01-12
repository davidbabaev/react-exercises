import React, { useEffect, useState } from 'react'

export default function useDebounceApi(value, delay) {
  
    const [inputValue, setInputValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setInputValue(value)
        }, 2000)

        return () => {
            clearTimeout(timer)
        }
        
    } ,[value, delay]);
    return inputValue;
}
