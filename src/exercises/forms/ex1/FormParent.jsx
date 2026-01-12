import React, { useState } from 'react'
import FormChild from './FormChild'
import { Typography } from '@mui/material';

export default function FormParent() {

    // in the parent we will just submit the data
    const [submittedData, setSubmittedData] = useState(null);

    const handleFormSubmit = (userData) => {
    //                       ↑________↑
    //                   Receives the object!
    //                     {
    //                         name: "Alice",
    //                         email: "alice@example.com",
    //                         age: "25"
    //                     }
    
    // Recieve object from child
        setSubmittedData(userData);
    }

  return (
    <div>
        <h1>User Registration</h1>
        <FormChild onSubmit = {handleFormSubmit}/>

        {submittedData && (
            <div>
                <Typography>Submitted data</Typography>
                <Typography>Name: {submittedData.name}</Typography>
                <Typography>Email: {submittedData.email}</Typography>
                <Typography>Age: {submittedData.age}</Typography>
            </div>
        )}
    </div>
  )
}
