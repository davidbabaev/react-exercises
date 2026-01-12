import React from 'react'
import { useState } from 'react'
import { Box, Button, Typography } from "@mui/material"; 

export default function ToggleStatus() {

    // const [isOnline, setIsOnline] = useState(false)

    // react internally remembers:
    // isOnline -> the current value (initially false)
    // setIsOnline -> a special function that tells React.
    // hey update this variable an re-render the component
    // so at first render isOnline = false
    // when you click the button:
    // setIsOnline(!isOnline);
    // now let's think step-by-step:
    // the current value of the isOnline is false
    // so !isOnline means -> !false = true
    // React takes that value (true) and updates the state internally.
    // React re-render the component - meaning it runs you function again from the top.

    // the component runs again:
    // now react calls you component with the new state:
    // const[isOnline, setInOnline] = useState(false);
    // but this time react doesn't reset to false,
    // it remembers that you updates it to true,
    // so now inside this new render
    // isOnline = true.

    // you click again:
    // now logic repeats: setisOnline(!isOnline);
    // but this time, isOnline is true
    // so:
    // !isOnline -> !true -> false


/*     function toggleStatus(){
        setIsOnline(!isOnline); // flip the value each time
    } */

   /*   return (
        <Box>
           <Typography variant='h6'>
               status: {isOnline ? '🟢 Online' : '🔴 Offline'}
           </Typography>
   
           <Button
               variant='contained'
               color= {isOnline ? 'error' : 'success'}
               sx={{ mt: 2}}
               onClick={toggleStatus}
           >
               {isOnline ? "Go Offline" : "Go Online"}
           </Button>
       </Box> 
   
   
   
     ) */

    //******************************************************************
   const [color, setColor] = useState(false);

   function changeColor(){
        setColor(!color)
   }

    return(
        <Box
            sx={{
                width: '100%',
                height: '100%',
                color: 'black',
            }}
        >
            <Button
                variant='contained'
                onClick={changeColor}
            >
                Change Color
            </Button>
        </Box>
    )

    

}
