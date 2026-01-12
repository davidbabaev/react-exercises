import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { Button } from '@mui/material';

export default function UserApp() {
// UserApp.jsx (Parent)
// ├─ Fetches user data from API
// ├─ Manages loading state
// ├─ Has "Get New User" button
// └─ Passes user data to children via props

    const [user, setUser] = useState(null);
    
    //function to fetch user:
    const fetchUser = async () => {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json();
        const userData = data.results[0]; // take the first object of the array

        setUser(userData);
    }

    useEffect(() => {
        fetchUser();
    }, [])

  return (
    <div
        style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // border: '1px solid black'
        }}
    >
        {user && <UserCard user={user}></UserCard>}
        <Button
            variant='contained'
            onClick={fetchUser}
        >Fetch User</Button>
    </div>
  )
}
