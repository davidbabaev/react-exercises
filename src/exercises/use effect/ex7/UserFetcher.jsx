import React, { useEffect, useState } from 'react'

export default function UserFetcher() {

    const [user, setUser] = useState(null);
    // null means nothing yet or empty or doesnt exist, like an empty box

    const [loading, setLoading] = useState(true);

    // function to fetch user:
    const fetchUser = async () =>{
        console.log('1. Starting fetch...');
        setLoading(true)

        console.log('2. Fetching from API...');
        const response = await fetch('https://randomuser.me/api/');

        console.log('3. Converting to JSON...');
        const data = await response.json();
        

        console.log('4. Data recieved:', data);
        const userData = data.results[0];
        setUser(userData)

        console.log('6. Done! Setting loading to false');
        setLoading(false);
    };

    useEffect(() => {
        console.log('Component mounted! Fetching user...');
        fetchUser();
    }, []);

    // if loading show this
    if(loading){
        return <h2
            style={{
                textAlign: 'center',
                padding: '50px'
            }}
        >Loading...</h2>
    }

    // if no user yet, show this
    if(!user){
        return <h2>No user yet</h2>
    }



  return (
    <div
        style={{
            textAlign: 'center', 
            padding: '20px',
            fontFamily: 'Arial'
        }}
    >
        <h1>Random User</h1>
        <img 
            src= {user.picture.large} 
            alt="User"
            style={{
                borderRadius: '50%',
                width: '150px',
                height: '150px',
                border: '3px solid #333'
            }}
        />
        <h2>User: {user.name.first} {user.name.last}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Country:</strong> {user.location.country}</p>
        <button
            onClick={fetchUser}
            style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                marginTop: '10px'
            }}  
        >
            Get New User
        </button>
    </div>
  )
}
