import React from 'react'

export default function ProtectedRoute({user, children}) {
  if(user){
    return children
  } else{
    return <p>Please Log In to see this page</p>
  }
}
