import React from 'react'
import { UserContext } from './UserContextEx'
import UserDisplayContextEx from './UserDisplayContextEx'

export default function UserAppContext() {
  return (
    <UserContext.Provider value={{name: 'Dave', age: 30}}>
        <UserDisplayContextEx/>
    </UserContext.Provider>
  )
}
