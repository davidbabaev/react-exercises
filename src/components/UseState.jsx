import React from 'react'
import { useState } from 'react'
import { Box, Button, Typography } from "@mui/material"; 

export default function UseState() {

    // Props = data sent from a parent.
    // state = dta that lives inside a component and can change over time.
    // when state changes -> react automatically re-renders that component.


    // Props: 
    // <UserCard name - 'David />
    // the parent (App) controls the name.
    // if you want to change it, you must change the prop.

    // State:
    // const [count, setCount] = useState(0)
    // the value belongs to the component itself.
    // and you can change it from inside the same component - not from the parent.


    // how useState work simple logic
    // const [count, setCount] = useState(0);
    // count = the current value (start at 0);
    // setCount() -> a function to update the value.

    // when you call setCount(newValue), React automatically:
    // changed the value
    // re-renders the component
    // update the ui on screen

    // why useState is powerFull:
    // contolling inputs (like forms)
    // toggling dark/ light mode
    // showing / hiding content
    // counters, timers, lists - everthing dynamic.


    // let's translate:
    // setCount((prev) => prev + 1);
    // hey react i want to change the staet count.
    // take the most uo-to-date value of count (call it prev)
    // and set the new value to prev + 1



  const [count, setCount] = useState(0)

  return (
    <Box sx={{p: 3, border: '2px solid gray', borderRadius: 3}}>
        <Typography variant='h5'>
          count: {count}
        </Typography>
        <Button 
          variant='contained' 
          sx={{borderRadius: 50, marginRight: 1}}
          onClick={() => setCount(count + 1)}
          >+</Button>
        <Button 
          variant='contained' 
          sx={{borderRadius: 50, marginRight: 1}}
          onClick={() => {
            if (count > 0) {
              setCount(count - 1)
            }
          }}
          >-</Button>
        <Button
          variant='outlined'
          sx={{borderRadius: 50}}
          onClick={() => setCount(0)}
        >Reset</Button>
    </Box>
  )
}
