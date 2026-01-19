import React, { useEffect, useState } from 'react'

export default function WelcomeMessage() {

    const [message, setMessage] = useState('Loading...')

    useEffect(() => {
        console.log('Component mounted!');
        setMessage('Welcome to my app!')
    }, [])

  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}
