import React, { createContext, useContext, useEffect, useState } from 'react'

export const StyledAuthContext = createContext();

export default function StyledAuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');
        
        if(savedToken && savedUser) {
            setToken(savedToken);
            setUser(JSON.parse(savedUser));
        }
    }, [])

    const login = (email, password) => {
        const fakeToken = 'eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiVXNlciJ9.abc123';
        const fakeUser = {name: 'Dave', email: email};

        localStorage.setItem('token', fakeToken);
        localStorage.setItem('user', JSON.stringify(fakeUser));

        setToken(fakeToken);
        setUser(fakeUser);
    }

    const register = (name, email, password) => {
        const fakeToken = 'eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiTmV3In0.xyz789';
        const newUser = {name: name, email: email}

        localStorage.setItem('token', fakeToken)
        localStorage.setItem('user', JSON.stringify(newUser))

        setToken(fakeToken)
        setUser(newUser)
    }

    const logOut = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    return (
        <StyledAuthContext.Provider value={{user, token, login, register, logOut}}>
            {children}
        </StyledAuthContext.Provider>
    )
}

export function useStyledAuth(){
    return useContext(StyledAuthContext)
}
