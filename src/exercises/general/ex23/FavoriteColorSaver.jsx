import React, { useEffect, useState } from 'react'

// Show 3 colored buttons (red, blue, green)

export default function FavoriteColorSaver() {
    const[color, setColor] = useState('');

    const saveColor = (col) => {
        setColor(col)
        localStorage.setItem('color', col)

    }


    useEffect(() => {
        const colorr = localStorage.getItem('color')
        if(colorr){
            setColor(colorr)
        }
    }, [])

  return (
    <div>
        <button onClick={() => saveColor('red')}>red</button>
        <button onClick={() => saveColor('blue')}>blue</button>
        <button onClick={() => saveColor('green')}>green</button>
        <p>{color}</p>
        <p style={{backgroundColor: color ? color : 'white', height: '50px', width: '50px'}}></p>
    </div>
  )

// what i learned:
// on first page load the useEffect runs and try to set color, but if we didn't saved any color, it will show undefined because the color is still null.
// so we need to make an if() that check if localStorage saved color exist
// we it exist we set it in setColor()

}
