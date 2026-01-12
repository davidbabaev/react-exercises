import React, { useEffect, useState } from 'react'

export default function JwtExample() {

    const [token, setToken] = useState(null);

    
    const fakeLogin = () => {
        // Fake token (in real app, server sends this)
        const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGF2aWQifQ.abc123'
        
        // Save to localStorage
        localStorage.setItem('token', fakeToken)
        // for learning we use localStorage, real apps often use coockies
        
        // save to state
        setToken(fakeToken);
    }

    const logOut = () => {
        setToken(null)
        localStorage.removeItem('token')
    }

    useEffect(() => {
        const tokenGet = localStorage.getItem('token')

        if(tokenGet){
            setToken(tokenGet)
        }
    }, [])

  return (
    <div>
        <h1>JWT Example</h1>
        <button onClick={fakeLogin}>Login</button>
        <p>Token: {token ? token : 'No Token'}</p>
        <hr />
        <button onClick={logOut}>logOut</button>
    </div>
  )
}
