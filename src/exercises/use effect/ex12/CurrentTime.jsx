import React, { use, useEffect, useRef, useState } from 'react'

export default function CurrentTime() {

    const [currentTimeDate, setCurrentTimeDate] = useState(null)

    const intervalIt = useRef(null);    
    const getDate = () => {
        intervalIt.current = setInterval (() => {
            let date = new Date()
            let currentTime = date.toLocaleTimeString() // <- created once 
            setCurrentTimeDate(currentTime) // <- always the same time
        }, 1000)
    }

    const stopDate = () => {
        clearInterval(intervalIt.current);
    }

    // useEffect(() => {
    //     getDate();
    //     return () => {
    //         clearInterval(intervalIt.current)
    //     }
    // }, [])

  return (
    <div>
        <button
            onClick={getDate}
        >Get Time</button>
        <button
            onClick={stopDate}
        >Stop Time</button>
        <p
            style={{
                fontFamily: 'arial',
                fontSize: '100px',
                fontWeight: 'bold'
            }}
        >{currentTimeDate}</p>
    </div>
  )
}
