import React, { use, useRef, useState } from 'react'

export default function ColorFlasher() {
    
    //1. define the colors we want to cycle througth.
    const arr = ['red', 'blue', 'green', 'black'];

    //2. track which color currently showing (by index position)
    const [colorIndex, setColorIndex] = useState(0);

    //3. store the interval ID so we can stop it later
    const intervalRef = useRef(null);

    // visual anderstading of rendering:
    console.log(`🔵 COMPONENT RENDERED! colorIndex =`, colorIndex);

    //4. function to start the color changing
    const startFlashing = () => {
        console.log('⚡ Button clicked - starting interval');
        intervalRef.current = setInterval(() => {
            console.log('⏰ Interval fired - changing color');
            setColorIndex((prev) => (prev + 1) % arr.length)
        }, 1000)
    }

    //5. function to stop the color changing
    const stopFlashing = () => {
        clearInterval(intervalRef.current);
    }

    // 6. render the UI
  return (
    <div
        style={{
            backgroundColor: arr[colorIndex],
            width: '200px',
            height: '200px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            marginBottom: '20px'
        }}
        >
        {arr[colorIndex]}

        <button onClick={startFlashing}>start</button>
        <button onClick={stopFlashing}>stop</button>
    </div>
  )


//   we have two ways to update state
// method 1: direct value (can e dengerous)
// setColorIndex(colorIndex + 1);

// method 2: function form;
// setColorIndex(prev => prev + 1);



}
