import React from 'react'
import useLocalStorageSimple from './useLocalStorageSimple'

export default function LocalStorageExample() {

    const [name, setName] = useLocalStorageSimple('userName', '');
    const [email, setEmail] = useLocalStorageSimple('userEmail', '');

  return (
    <div>
        <h2>Local Storage Example</h2>
        <p>Type something, then refresh the page, - it will still be there!</p>

        <div>
            <h3>You Name:</h3>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Your Name'
            />
            <p>Saved: {name}</p>
        </div>

        <div>
            <h3>You Email:</h3>
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Your Email'
            />
            <p>Saved: {email}</p>
        </div>

        <button onClick={() => {
            setName('')
            setEmail('')
        }}>Clear All</button>

    
    </div>
  )
}
