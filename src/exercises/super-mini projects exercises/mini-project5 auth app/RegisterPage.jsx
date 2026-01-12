import React, { useState } from 'react'
import { useAuth } from './AuthContext'

export default function RegisterPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { register } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        register(name, email, password);
    }

  return (
    <div>
        <h1>Register: </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

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
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
