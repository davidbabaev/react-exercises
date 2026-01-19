import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function NavBar() {

    const {user, logOut } = useAuth()

  return (
    <div>
        <nav>
            <Link to={'/authproject/home'}>Home</Link>
            <Link to={'/authproject/dashboard'}>Dashboard</Link>

            {user ? (
                <div>
                    <span>Hello, {user.name}</span>
                    <button onClick={logOut}>Logout</button>
                </div>
            ):(
                <div>
                    <Link to={'/authproject/login'}>Login</Link>
                    <Link to={'/authproject/register'}>Register</Link>
                </div>
            )
        }

        </nav>
        
    </div>
  )
}