import React, { useEffect, useRef, useState } from 'react'

export default function ColorTimer() {

    let colors = ['red', 'blue', 'green', 'yellow'];

    const [indexColor, setIndexColor] = useState(0)
    const intervalRef = useRef(null);
    console.log('render');
    
    const runColor = () => {
        
        intervalRef.current = setInterval(() => {
            setIndexColor((prev) => (prev + 1) % colors.length);
        }, 1000)
    }
    
    useEffect(() => {
        runColor()
        return () => {
            clearInterval(intervalRef.current)
        }
    },[])

    

  return (
    <div>
        <p
            style={{height:'150px', width: '150px', backgroundColor:colors[indexColor], borderRadius: '50%'}}
        ></p>
    </div>
  )
}
