import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function FormChild({onSubmit}) {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[age, setAge] = useState('');

    const handleSunmit = () => {
        const userData = {
            name: name,
            email: email,
            age: age,
        }

        // send to parent
        // calls the parent's function and passes the object
        // remember: onSubmit is the parent's function that was passes as a prop
        onSubmit(userData)
        //       ↑______↑
//       Sending this object:
//       {
//           name: "Alice",
//           email: "alice@example.com",
//           age: "25"
//       }
        // behind the scenes:
        // handleFormSubmit(userData) // in parent
    
        // clear from optional
        // What this does: Resets all inputs back to empty:
        setName('');
        setEmail('');
        setAge('');
    }


  return (
    <div>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        value={name} 
        id="outlined-basic" 
        label="Name" 
        variant="outlined" 
        onChange={(e) => setName(e.target.value)} // <- add fixing
        />
      <TextField 
        value={email}
        id="outlined-basic" 
        label="Email" 
        variant="outlined" 
        onChange={(e) => setEmail(e.target.value)} // <- add fixing
    />
      <TextField 
        value={age}
        id="outlined-basic" 
        label="Age" 
        variant="outlined" 
        onChange={(e) => setAge(e.target.value)} // <- add fixing
        />
      <Button 
        type= 'button' 
        variant="contained" 
        sx={{padding: '16px'}} 
        endIcon={<SendIcon />}
        onClick={handleSunmit}
      >
        submit
      </Button>
      {/* <Typography>{name}</Typography> */}
    </Box>
    </div>
  )
}
