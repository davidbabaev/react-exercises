import React, { useContext } from 'react'
import { UserContext } from './UserContextEx'

// user display 

export default function UserDisplayContextEx() {

    const user = useContext(UserContext)

  return (
    <div>
        <h1>User Display:</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
    </div>
  )
}
