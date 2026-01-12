import { red } from '@mui/material/colors';
import React, { useState } from 'react'

export default function ColorChanger() {

    const [currentColor, setCurrentColor] = useState('white'); // if tie
    const [redCount, setRedCount] = useState(0); // if tie
    const [blueCount, setBlueCount] = useState(0); // if tie
    const [greenCount, setGreenCount] = useState(0); // if tie

    const changeToRed = () => {
        //here you say this is red:
        setCurrentColor('red'); //your telling it set color to red
        setRedCount(redCount + 1); // only this count increases.        
    }

    const changeToBlue = () => {
        //here you say this is red:
        setCurrentColor('blue'); //your telling it set color to red
        setBlueCount(blueCount + 1); // only this count increases.
    }

    const changeToGreen = () => {
        //here you say this is red:
        setCurrentColor('green'); //your telling it set color to red
        setGreenCount(greenCount + 1); // only this count increases.
    }


    // if color === string'red' so color = 'red';
    // we need to check each color and = to the color we want.
    // we want to count the clicks on the btn and if the btn have more click then the previus btn so this btn color will be = 'red' od 'blue'
    // how the button will knpe what spesific color we want, we do countinh, but how the counting know wich button the count come from?
    // that's why i confused, i don't get how to write it right, how to code need to look like 
    // give some hints without solution

    // The right thinking:
    // each button has it's own function
    // red button -> calls changeToRed()
    // blue button -> calls changeToBlue()
    // green button -> calls changeToGreen()

    // why are we use the counters:
    // - ✅ Changes the background color to red
    // - ❌ Does NOT count how many times red was clicked
    // - ❌ Cannot answer "which color was clicked most?"

    // #case scenario#

    // Click Red button:
    // - Background turns red ✅
    // - redCount stays 0 ❌

    // Click Blue button:
    // - Background turns blue ✅
    // - blueCount stays 0 ❌

    // Click Red button again:
    // - Background turns red ✅
    // - redCount still 0 ❌


  return (
    <div
        style={{height: '100vw', backgroundColor: currentColor}}
    >
        <button    
            onClick={changeToRed}
        >Red
        </button>
        <button
            onClick={changeToBlue}
        >Blue
        </button>   
        <button
            onClick={changeToGreen}
        >Green
        </button>
    </div>
  )
}
