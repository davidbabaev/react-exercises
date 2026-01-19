import React from 'react'

export default function ProtectedRouteLogic({user, children}) {

    if(user) {
        return children
    } else{
        return <p>Please login to see this page</p>
    }
}

// What it does:
// recieves user and children
// if user exist -> show children (the page)
// if no user -> show 'please login'