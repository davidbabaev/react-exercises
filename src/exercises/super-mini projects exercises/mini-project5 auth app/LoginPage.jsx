import React, { useState } from 'react'
import { useAuth } from './AuthContext'

export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password)
    }


  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email: </label>
                <input 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label>Password: </label>
                <input 
                    type="text" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
