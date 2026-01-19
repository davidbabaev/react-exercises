import React, { useEffect, useState } from 'react'
import useUsersEx6 from '../hooks/useUsersEx6'

export default function Recall1I6I2025() {

  const {users} = useUsersEx6()
  const [user, setUser] = useState(null)
  const [registeredUsers, setRegisteredUsers] = useState([]);

    const randomID = () => {
      return Date.now().toString() + Math.random().toString(36).substring(2,6)
    }

    const handleRegistration = (name, email, password) => {
      const existingUser = registeredUsers.find(user => user.email === email);

      if(existingUser){
        return{
          success: false,
          message: 'Email already registered'
        }
      }

      const newUser = {
        createdAt: new Date().toISOString(),
        name: name,
        email: email,
        password: password,
        userID: randomID()
      }

      setRegisteredUsers([...registeredUsers, newUser])
      // auto login directly:
      setUser({
        name: newUser.name,
        email: newUser.email,
        userID: newUser.userID,
      })

      return{
        success: true,
        message: 'Registration successful'
      }
    }

    const handleLogin = (email, password) => {
      // find user with matching credentials
      const foundUser = registeredUsers.find(user => user.email === email && user.password === password)

      // if not found, return error
      if(!foundUser){
        return{
          success: false,
          message: 'user not found'
        }
      }

      setUser({
        name: foundUser.name,
        email: foundUser.email,
        userID: foundUser.userID,
      })

      return{
        success: true,
        message: 'user found'
      }
    }

    useEffect(() => {
      const savedRegistered = JSON.parse(localStorage.getItem('registeredUsers'))

      if(savedRegistered){
        setRegisteredUsers(savedRegistered)
      }
    }, [])

    useEffect(() => {
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))
    }, [registeredUsers])

  return (
    <div>Recall 6-1-2025</div>
  )
}
