import React, { createContext, useContext, useEffect, useState } from 'react'

// create the box
export const AuthContextPro = createContext();

// Auth provider - the components that wraps our app
export default function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    // load from localStorage when app starts
    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');
        
        if(savedToken && savedUser) {
            setToken(savedToken);
            setUser(JSON.parse(savedUser));
        }
    }, [])

    // recieves email and password from login form
    // it will take these as a parameters and put in the object.
    const login = (email, password) => {
        // FakeToken (real app gets this from server)
        const fakeToken = 'eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiVXNlciJ9.abc123';
        const fakeUser = {name: 'Dave', email: email};

        // save to localStorage
        localStorage.setItem('token', fakeToken);
        localStorage.setItem('user', JSON.stringify(fakeUser));

        // save to state
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
    // now any component can access user and token
    <AuthContextPro.Provider value={{user, token, login, register, logOut}}>
        {/* whatever we put inside AuthProvider */}
        {children}
    </AuthContextPro.Provider>
  )
}

export function useAuth(){
    return useContext(AuthContextPro)
}

// What AuthContext holds:
// - user - who logged in
// - token - proof of login (fake JWT)
// - login() - function to log in
// - register() - function to create account
// - logout() - function to log out
// - useEffect - load saved data on refresh



    // token starts as null (no token yet)
    // after login it will hold the JWT string
    // const [token, setToken] = useState(null)