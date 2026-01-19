import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthEx6 } from '../providers/AuthProviderEx6';

export default function ProtectedRouteEx6({children}) {

    const {isLoggedIn} = useAuthEx6();

    if(isLoggedIn){
        // user logged in -> show the page
        return children
    }
    else{
        // if not logged in -> navigate to this page
        return <Navigate to={'/appusers/login'} />
    }
}
