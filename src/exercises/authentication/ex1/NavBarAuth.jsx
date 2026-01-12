import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'

export default function NavBarAuth() {

  // we use here a react useContext
  // we taking from our AuthContext function that we declared in the AutProvider file
  // we import it here, and we take the values that we sended down from the AuthContext.Provider
    const {user, login, logOut} = useContext(AuthContext)
    console.log(user);
    

  return (
    <div>
      {/* we just display the user state with a . so we can take from the obkect what we need */}
        {user ? (<p>Hello {user.name} - {user.email} - {user.password}</p>) : (<p>not logged in</p>)}
        {/* this button declared the data from the parameters  that we have in the login function here we put the real data that we want to connect to the object that have these paramters*/}
        {/* <button 
            onClick={() => login('David', 'dave@com')}
        >Click</button> */}

        {/* the logOut function that make the user state null */}
        <button onClick={() => logOut()}>logout</button>
    </div>
  )
}
