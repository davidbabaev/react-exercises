import React, { useState } from 'react'

export default function PasswordValidation() {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmError, setConfirmError] = useState('')

    // Password validation:
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value)

        if(value.length < 6) {
            setPasswordError('Password must be at least 6 characters');
        } else {
            setPasswordError('');
        }
    }

    // Confirm password validation
    const handleConfirmChange = (e) => {
        const value = e.target.value
        setConfirmPassword(value)

        if(value !== password) {
            setConfirmError('Password must match')
        } else{
            setConfirmError('')
        }
    }

  return (
    <div>
        <div>
            <label>Password: </label>
            <input 
                type="password" 
                value = {password}
                onChange={handlePasswordChange}
            />
            {passwordError && (<p>{passwordError}</p>)}
        </div>
        <div>
            <label>Confirm Password:</label>
            <input
                type='password'
                value={confirmPassword}
                onChange={handleConfirmChange}
            />
            {confirmError && (<p>{confirmError}</p>)}
        </div>
    </div>
  )
}
