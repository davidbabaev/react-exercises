import React, { useState } from 'react'
import { useAuthEx6 } from '../providers/AuthProviderEx6'
import { useNavigate } from 'react-router-dom';

export default function RegisteredPageEx6() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {handleRegister} = useAuthEx6();

    // navigation
    const navigate = useNavigate();

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        
        if(name.trim() === ''){
            setError('Name is required');
            return;
        }

        if(password.trim().length < 6){
            setError('Password must be at least 6 characters');
            return;
        }
        
        if(!email.trim().includes('@')){
            setError('email must includes @');
            return;
        }

        const result = handleRegister(email, password, name);
        
        if(!result.success) {
            setError(result.message);
            return;
        }

        // success! go to dashboard
        navigate('/appusers/dashboard')
    }


  return (
    <div>
        <br />
        <h1>Register</h1>
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Name:</label>
                <br />
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='alon levi..'
                />
            </div>
            <div>
                <label>Email:</label>
                <br />
                <input 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='email@gmail.com'
                />
            </div>
            <div>
                <label>Password:</label>
                <br />
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='123*****'
                />
            </div>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <br />
            <button type='submit'>Register</button>
        </form>
        <br />
        <hr />
        <h2>already user?</h2>
        <button onClick={() => navigate('/appusers/login')}>login to your account</button>
    </div>
  )
}
