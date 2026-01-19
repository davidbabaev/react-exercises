import React, { useContext } from 'react'
import AuthProvider, { AuthContext } from './AuthProvider'
import LoginFormAuth from './LoginFormAuth'
import NavBarAuth from './NavBarAuth'

function Main() {

const {user} = useContext(AuthContext)
    
  return (
    <div>
      <NavBarAuth/>
      <br></br>
        {user ? <p>Welcome! you are logged in</p> : <LoginFormAuth/>}
    </div>
  )

}

export default function AppAuthEx(){
    return(
        <AuthProvider>
            <Main/>
        </AuthProvider>
    )
}

// What actually authentication is:
// What you built = fake authentication (Frontend only):
// a form that takes email/ password
// saves is to state
// shows/hides content based on state
// but this is not real authentication.

// Real Authentication = Server checkes you identity:
// 1. user types email + password
// 2. frontEnd sends to server
// 3. server cheks: does this usser exist? is password correct
// 4. server says YES -> sends back a token (proof you're logged in)
// 5. server says NO -> sends back error
// 6. frontend saves the token
// 7. frontend uses token for future requests

// We learned today:
// the frontend structure for authentication
// context to hold user data
// login/ logout functions
// show/hide based on login status

// Authentication = checking user with server
// is this email/password correct? server answers yes or no
// Form Validation = diffrent thing
// is the input valid: @, 6+ chars, field not empty and so on..


// The Flow:
// 1. User types email/password

// 2. Form Validation (frontend)
//    → "Is email format correct?"
//    → "Is password long enough?"
//    → If NO → show error, don't send
   
// 3. Authentication (server)
//    → "Does this user exist?"
//    → "Is password correct?"
//    → If NO → show error
//    → If YES → login successful