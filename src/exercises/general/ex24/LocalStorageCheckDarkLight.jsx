import React, { useEffect, useState } from 'react'

export default function LocalStorageCheckDarkLight() {

    const[bgc, setBgc] = useState('white')

    const handleBgc = (color) => {
        setBgc(color)

        localStorage.setItem('color', color)
    }

    useEffect(() => {
        const savedColor = localStorage.getItem('color')

        if(savedColor){
            setBgc(savedColor)
        }
    }, [])

  return (
    <div style={{backgroundColor: bgc, width: "100vw", height: "100vh", transition: 'all 0.3s'}}>
        <button onClick={() => handleBgc('white')}>Light Mode</button>
        <button onClick={() => handleBgc('black')}>Dark Mode</button>
    </div>
  )
}
