import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthProvider';

export default function LoginFormAuth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // in this file we have our form 
    // with email state and password state

    // we use here the login function from the context
    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {

        // this prevents page refreshing on btn submit
        e.preventDefault();

        // our login function take email and password states as a parameters dynamically
        login(email, password);
    }

  return (
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}
