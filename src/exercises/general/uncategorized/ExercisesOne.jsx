import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import App from '../App';
import { Button, TextField } from '@mui/material';



export default function ExercisesOne() {
    
    // what are props:
    // props data send from a parent component - to a child component.
    // 
/*     function greet(name) {
        console.log('hello', name);
    }
    greet('dave') */

    // **********************************************************************

    // props mean:
    // sending data from one component (the parent) to another (the child).
    // hey greeting() component, heres the name 'David'.
    // please display it on th screen.

    // the logic:
    // App -> the parent
    // Greeting the child
    // the parnt sends data to the child.
    // the child recives it and uses it.


    // **********************************************************************
/*     return (
    <Box>
        <Typography>Hello</Typography>
        <Typography>Hello World</Typography>
    </Box>
  ) */


    // **********************************************************************

/*     // store input value
    const [inputValue, setInputValue] = useState('');

    // stores the text taht is actually displayed below
    const [displayText, setDisplayText] = useState('');
    
    // handle changes in the input field (update continuously)
    const handleChange = (event) => {
        // update the state with the new value from the input.
        setInputValue(event.target.value)
    };

    // handler for the button click (updates the display text)
    const handleButtonClick = () => {
        // when the button is clickedm set the display to the current input value
        setDisplayText(inputValue)

        // clear the input after sunmission
        setDisplayText('');
    } */

/* 

    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState('');

    const handleClick = () => {
        console.log(inputValue);
        setOutput(inputValue);
    }

    return(
        <>
            <TextField
                label = 'Type Something'
                valeu = {inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
                variant='contained'
                onClick={handleClick}
            >
                show
            </Button>
            <Typography>
                {output}
            </Typography>
        </>
    ) */

        // *********************************************************************

/*         const [num, setNum] = useState(0)

        const increase = () => {
            setNum(num + 1)
            console.log(num);
        }

        const decrease = () => {
            setNum(num - 1)
            console.log(num);
        }

        return(
            <>
            <Button
                variant='contained'
                onClick={increase}
            >
                number +
            </Button>
            <Button
                variant='contained'
                onClick={decrease}
            >
                number -
            </Button>
            <Typography>
                {num}
            </Typography>
            </>
        ) */


        // *********************************************************************
        // 
        
        console.log('hi');
        
        return(
            <div>hi</div>
        )

}
