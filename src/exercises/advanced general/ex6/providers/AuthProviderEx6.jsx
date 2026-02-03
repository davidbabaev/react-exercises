import React, { createContext, useContext, useEffect, useState } from 'react'

const UseAuthCheck = createContext();

export function AuthProviderEx6({children}) {

    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[user, setUser] = useState(null);

    // flags: 
    const [isRegistredLoaded, setIsRegistredLoaded] = useState(false)
    const [isUserLoaded , setIsUserLoaded] = useState(false)

    const [registeredUsers, setRegisteredUsers] = useState([]);

    // const allUsers = useAllUsersEx6()

    // registered users saving in localStorage
    useEffect(() => {
        const savedRegisteredUsers = JSON.parse(localStorage.getItem('registeredUsers'))

        if(savedRegisteredUsers){
            setRegisteredUsers(savedRegisteredUsers)
        }
        setIsUserLoaded(true); // add this!
    }, [])

    useEffect(() => {
        if(!isRegistredLoaded) return; //add this!
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))
    }, [registeredUsers, isRegistredLoaded]) // add to dependencies -> isRegistredLoaded

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
        setIsUserLoaded(true); // add this!
    }, [])

    useEffect(() => {
        if(!isUserLoaded) return; //add this!
        localStorage.setItem('loggedInUser', JSON.stringify(user))
    }, [user, isUserLoaded]) // add to dependencies -> isUserLoaded


    const generateID = () => {
        return Date.now().toString() + Math.random().toString(36).substring(2,6)
    }

    const handleRegister = (email, password, name, country, age, gender, phone) => {

        const emailExists = registeredUsers.some(user => user.email === email)

        if(emailExists){
            return {
                success: false,
                message: 'Email already registered'
            };
        }

        const newUser = {
            userId: generateID(),
            name: name,
            email: email,
            password: password,
            country: country,
            photo: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png',
            age: age,
            gender: gender,
            phone: phone,
            source: 'REGISTERED',
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

    const handleLogin = (email, password, allUsers) => {

        const foundUser = allUsers.find(user => user.email === email && user.password === password);

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


