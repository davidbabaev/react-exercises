import React, { useState } from 'react'
import useDebounceThird from './useDebounceThird'

export default function InputHandlingDebounce() {

    const[name, setName] = useState('');
    const handleNameInput = (e) => {
        setName(e.target.value)
    }

    const[email, setEmail] = useState('');
    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }

    
    const nameInputHandle = useDebounceThird(name, 2000);
    const emailInputHandle = useDebounceThird(email, 2000);

    const isSavingName = name !== nameInputHandle
    const isSavingEmail = email !== emailInputHandle
    const showStatus = email !== '' || name !== ''

  return (
    <div>
        <label>name:</label>
        <input 
            value={name}
            onChange={handleNameInput}
        />
        <label>email:</label>
        <input 
            value={email}
            onChange={handleEmailInput}
        />
        <p>Name: {nameInputHandle}</p>
        <p>Email: {emailInputHandle}</p>

        <p>Name Character Count Instant: {name.length}</p>
        <p>Name Character Count Delay: {nameInputHandle.length}</p>

        <p>Email Character Count Instant: {email.length}</p>
        <p>Email Character Count Delay: {emailInputHandle.length}</p>
        {showStatus && (isSavingName || isSavingEmail ? (<p>💾 Saving...</p>) : (<p>✅ Saved!</p>))}
    </div>
  )
}
