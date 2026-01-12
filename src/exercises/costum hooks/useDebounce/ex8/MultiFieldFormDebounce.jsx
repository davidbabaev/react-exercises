import React, { useEffect, useRef, useState } from 'react'

// 

export default function MultiFieldFormDebounce() {

    const [name, setName] = useState('');
    const [delayName, setDelayName] = useState('');
    const [isSavingName, setIsSavingName] = useState(false);
    
    const [email, setEmail] = useState('')
    const [delayEmail, setDelayEmail] = useState('')
    const [isSavingEmail, setIsSavingEmail] = useState(false);

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    useEffect(() => {
        if(name.trim() === ''){
            setIsSavingName(false);
            setDelayName('')
            return;
        }

        // Start saving
        setIsSavingName(true)

        // Timer
        nameRef.current = setTimeout(() => {
            setDelayName(name);
            setIsSavingName(false);
        }, 2000)

        // Cleanup
        return () => {
            clearTimeout(nameRef.current)
        }
    }, [name])

    useEffect(() => {
        if(email.trim() === ''){
            setIsSavingEmail(false);
            setDelayName('')
            return;
        }
        
        setIsSavingEmail(true);

        emailRef.current = setTimeout(() => {
            setDelayEmail(email);
            setIsSavingEmail(false);
        }, 3000)

        return () => {
            clearTimeout(emailRef.current)
        }
    }, [email])


  return (
    <div>
        <div>
            <label>Name: </label>
            <input 
                value={name}
                onChange={handleName}
            />
            {isSavingName ? (<p>💾 Saving..</p>): (<p>✅ Saved</p>)}
            <p>Saved Name: {delayName}</p>
        </div>

        <br></br>

        <div>
            <label> Email: </label>
            <input 
                value={email}
                onChange={handleEmail}
            />
            {isSavingEmail ? (<p>💾 Saving..</p>): (<p>✅ Saved</p>)}
            <p>{delayEmail}</p>
        </div>
    </div>
  )
}
