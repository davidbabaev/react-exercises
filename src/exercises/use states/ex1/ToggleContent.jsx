import { Button } from '@mui/material'
import React, { useState } from 'react'

export default function ToggleContent() {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(false);

    let btnCounter = 1

    const increment = () => {
        setCount(count + 1)
        btnCounter += count
        console.log(btnCounter);
        if(btnCounter >= 5 && btnCounter < 6){
            console.log('Your really like clicking!🖱️');
        }
    }

    const handleToggle = () => {
        setShow(!show) // swith to true/ flase 
    };

  return (
    <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
        }}>
        <div
        style={{
            width: '400px',
            height: '100%',
            border: '1px solid gray',
            padding: '40px',
            margin: '10px',
            borderRadius: '10px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
        }}
    >
        {show && (
            <div>    
                <p style={{fontFamily: 'arial'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt est quaerat veniam ex temporibus ea architecto inventore saepe possimus nulla! Recusandae nam aliquid mollitia sed deserunt eveniet pariatur illo optio.</p>
                <img
                style={{width: '90%', borderRadius: '15px', marginBottom: '15px'}}
                src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg" alt="" />
            </div>  
        )}
        
        <Button 
            variant='contained'
            onClick={() => {
                handleToggle() 
                increment()
            }}
        >
            Show Details | Hide Details
        </Button>
    </div>
    </div>
  )
}
