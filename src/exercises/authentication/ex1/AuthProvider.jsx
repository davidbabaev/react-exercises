import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({children}) {

    const [user, setUser] = useState(null);

    // making a variable that holds - email and password that he wull take as a paraters from other file, we do it with a context
    const login = (email, password) => {
      // we making an object save it as a state in user state, the values will coming as a parameters from the LoginForm component
        setUser({name: 'Dave', email: email, password: password})
    }

    // this function is also be used as a context value in other file in it will set our user state object back to null
    const logOut = () => {
        setUser(null)
    }

  return (
    // we send down to all our project that values so we can use then wherever we want
    <AuthContext.Provider value={{user, login, logOut}}>
      {/* we are showing here our comonents */}
        {children} 
    </AuthContext.Provider>
  )
}

// {children}
// cna't be any name, i must be children in react

// AuthContext = the Box holds data
// this is just a box, it holds: user, login, logout


// AuthProvider = the component (wrapper)
// this is the component that:
// create the user state
// creates login and logout functions
// puts them in the authcontext box
// wraps {children} so they can access the box

// they work together:
// AuthContext - .the box - holds the data
// AuthProvider - the component - fills the box and wraps you app

// visual:
// AuthProvider (the component)
// creates: user, login, logOut
// puts them in: AuthContext (the box)
// wraps: {children} (your app)

// AuthContext = the menu
// the is just a paper, it lists what food is available, but the menu itself doesn't cook anything

// AuthProvider = the kitchen
// the kitchen makes the food then it writes the food on the menu

    // <AuthContext.Provider value={{user, login, logOut}}>
      {/* we are showing here our comonents */}
        // {children} -> <Main/> goes here
    {/* </AuthContext.Provider> */}


//AuthProvider   ← The outer component
// │
// └── AuthContext.Provider    ← The context (gives data)
//     │
//     └── {children}   ← <Main/> ends up here