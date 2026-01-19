import React from 'react'
import { useState } from 'react'
import {Box, Button, Typography } from '@mui/material'

export default function StateTest() {
/* 
    const [count, setCount] = useState(0);

    // version 1 - wrong
    function addWrong(){
        console.log('Before:', count);
        setCount(count + 1);
        setCount(count + 1);
        console.log("After:", count);
    }

    // version 2 - right
    function addRight(){
        console.log('Before:', count);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        console.log("After:", count);
    }

  return (
    <Box sx={{ p: 3, border: "2px solid gray", borderRadius: 3 }}>
        <Typography variant='h6'> count: {count}</Typography>

        <Button
            variant='contained'
            color='error'
            sx={{mr: 1}}
            onClick={addWrong}
        >
            Add Twice (Wrong)
        </Button>

        <Button
            variant='contained'
            color='success'
            sx={{mr: 1}}
            onClick={addRight}
        >
            Add Twice (right)
        </Button>
    </Box>
  ) */

    // ****************************************************************************************
/* 
    const [logs, setLogs] = useState([])

    function addNotification(){
        const newMessage = 'New notification at ' + new Date().toLocaleDateString();
    }

    // setLogs(...) -> React's way of updating state.
    // (prev) =>  a function that React calls with the latest state.
    // [...prev, newMessage] -> creates a new array (this is key!)
    // ...prev -> spread operator, which copied everything from the old array.

    // logs → current array in memory
    // setLogs() → tells React: “update the logs array with this new value”

    return(

    ) */


    // ****************************************************************************************


    return(
        <></>
    )


}
