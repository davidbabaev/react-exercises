import React, { createContext, useContext, useEffect, useState } from 'react'

const UseAuthCheck = createContext();

export function AuthProviderEx6({children}) {

    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[user, setUser] = useState(null);

    const [registeredUsers, setRegisteredUsers] = useState([]);

    // registered users saving in localStorage
    useEffect(() => {
        const savedRegisteredUsers = JSON.parse(localStorage.getItem('registeredUsers'))

        if(savedRegisteredUsers){
            setRegisteredUsers(savedRegisteredUsers)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))
    }, [registeredUsers])

    //===========================================================================
    // user + logged in localStorage saving
    useEffect(() => {
        const savedLoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

        if(savedLoggedInUser){
            setUser(savedLoggedInUser)
            setIsLoggedIn(true) // if user exist t's true
        } else{
            setIsLoggedIn(false) // if user exist t's true
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('loggedInUser', JSON.stringify(user))
    }, [user])


    const generateID = () => {
        return Date.now().toString() + Math.random().toString(36).substring(2,6)
    }

    const handleRegister = (email, password, name) => {

        const emailExists = registeredUsers.some(user => user.email === email)

        if(emailExists){
            return {
                success: false,
                message: 'Email already registered'
            };
        }

        const newUser = {
            userId: generateID(),
            email: email,
            password: password,
            name: name,
            createdAt: new Date().toISOString() // "2025-01-05T10:30:00.000Z"
        }

        setRegisteredUsers([...registeredUsers, newUser]);

        setUser({
            name: newUser.name,
            email: newUser.email,
            userId: newUser.userId
        })

        setIsLoggedIn(true);

        return {
            success: true, 
            message: 'Registration successful'
        };  
    }

    const handleLogin = (email, password) => {

        const foundUser = registeredUsers.find(user => user.email === email && user.password === password);

        if(!foundUser){
            return{
                success: false,
                message: 'Invalid email or password'
            }
        }

        setUser({
            name: foundUser.name,
            email: foundUser.email,
            userId: foundUser.userId,
        })

        setIsLoggedIn(true);
        return{ 
            success: true,
            message: 'logged in successfully'
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        setUser(null)
    }


  return (
    <UseAuthCheck.Provider 
        value={{isLoggedIn, user, handleLogin, handleLogout, handleRegister, registeredUsers}}>
            {children}
    </UseAuthCheck.Provider>
  )
}

export function useAuthEx6(){
    return useContext(UseAuthCheck)
}


