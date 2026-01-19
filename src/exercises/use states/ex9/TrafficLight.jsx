import { colors, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'

export default function TrafficLight() {

    let colors = ['red','yellow','green'];

    const [indexColor, setIndexColor] = useState(0);
    const intervalId = useRef(null);

    const chooseColor = () => {
        intervalId.current = setInterval(() => {
        setIndexColor((prev) => (prev + 1) % colors.length);
        }, 2000)
    }

    const stopLight = () => {
        clearInterval(intervalId.current)
    }


  return (
    <div>
        <p style={{
            width: '100px',
            height: '100px',
            backgroundColor: colors[indexColor] === 'green' ? 'green' : 'black',
            borderRadius: '50%',
        }}></p>
        <p style={{
            width: '100px',
            height: '100px',
            backgroundColor: colors[indexColor] === 'yellow' ? 'yellow' : 'black',
            borderRadius: '50%',
        }}></p>
        <p style={{
            width: '100px',
            height: '100px',
            backgroundColor:colors[indexColor] === 'red' ? 'red' : 'black',
            borderRadius: '50%',
        }}></p>
        <Typography>Active Color</Typography>
        <button
            onClick={chooseColor}
        >Start Light</button>
        <button
            onClick={stopLight}
        >Stop Light</button>
    </div>
  )


//   the steps:
// 1. useState using
// 2. array
// 3. useRef
// 4. setIntervsal
// 5. (prev => prev + $number$)

}
