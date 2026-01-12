import React, { useState } from 'react'

export default function RealTimeValidation() {

    // react controlled input:
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(''); // store error message string
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [success, setSuccess] = useState(null)

    // New: Check while typing
    const handleChange = (e) => {
        const value = e.target.value;
        setName(value)

        // validate immediately
        if(value.length < 3){
            console.log('Error too short');
            setError('Name must be at least 3 characters')
        } else{
            console.log('long enough');
            setError('') // no error
        }
    }

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        const atIndex = value.indexOf('@')
        const dotIndex = value.lastIndexOf('.')

        if(atIndex === -1 || dotIndex < atIndex){
            setEmailError('Email must contain @ and .')
        } else{
            setEmailError('')
        }
        // indexOf returns the position where if found the character.
        // but if the character doesn't exist at all, is returns -1.
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        const passtest = /[0-9]/.test(value);

        if(value.length < 8 || !passtest){
            setPasswordError('password must contain 8 chars and number')
        } else{
            setPasswordError('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // check if any error exist
        if(error || emailError || passwordError || !email || !password || !name) {
            console.log('Has error, cannot submit');
        } else{
            setEmail('');
            setName('');
            setPassword('');
            setError('');
            setEmailError('');
            setPasswordError('');
            setSuccess('Registration Successful');
            console.log('Valid', name, email, password);
        }
    }

  return (
    <div>
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input 
                    type='text'
                    value={name}
                    onChange={handleChange} // new handler
                />
                {error && (<p>{error}</p>)}
            </div>

            <div>
                <label>Email: </label>
                <input 
                    type='text'
                    value={email}
                    onChange={handleEmailChange} // new handler
                />
                {emailError && (<p>{emailError}</p>)}
            </div>

            <div>
                <label>Password: </label>
                <input 
                    type='password'
                    value={password}
                    onChange={handlePasswordChange} // new handler
                />
                {passwordError && (<p>{passwordError}</p>)}
            </div>

                <button 
                    type='submit'
                    disabled={error || emailError || passwordError || !email || !name || !password}
                >
                    Register
                </button>
                {success && (<p>{success}</p>)}
        </form>
    </div>
  )
}
