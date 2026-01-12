import React, { useEffect, useState } from 'react'

export default function LocalCounterEx() {

    const [counter, setCounter] = useState('')
    const [totalClicks, setTotalClicks] = useState(0)

    useEffect(() => {
        const saved = localStorage.getItem('count')

        if(saved){
            setCounter(saved)
        }
    }, [])

    const handleCount = () => {
        let newValue = Number(counter) + 1;
        localStorage.setItem('count', Number(newValue))
        setCounter(newValue)
        setTotalClicks((prev) => prev + 1)
    }
    
    const handleCountMinus = () => {
        let newValue = Number(counter) - 1;
        localStorage.setItem('count', Number(newValue))
        setCounter(newValue)
    }

    const reset = () => {
        localStorage.removeItem('count');
        setCounter('0')
        setTotalClicks(0)
    }

  return (

    <div>
        <button onClick={handleCount}>+1</button>
        <button onClick={handleCountMinus}>-1</button>
        <button onClick={reset}>Reset 0</button>
        {counter === '0' || counter === '' ? (<p>0</p>) : (<p>{counter}</p>)}
        <p>{totalClicks}</p>
    </div>
  )
}
