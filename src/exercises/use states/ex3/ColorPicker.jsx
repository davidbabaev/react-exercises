import React, { useState } from 'react'

export default function ColorPicker() {

    const [red, setRed] = useState(0)
    // const [green, setGreen] = useState(0)
    // const [blue, setBlue] = useState(0)

    const handelChange = (e) => {
        setRed(e.target.value);
        console.log(e);
        
    }

  return (
    <div>
        <input
            placeholder='Red: #000' 
            type="number" 
            value={red}
            onChange={() => {
                handelChange()
                console.log(red);
            }}
        />
        {/* <input placeholder='Green: #000' type="number" />
        <input placeholder='Blue: #000' type="number" />
        <div
            style={{
                width: '200px',
                backgroundColor: 'black',
                height: '200px',
                borderRadius: '15px',
                margin: '20px'
            }}
        >
        </div> */}
    </div>
  )
}
