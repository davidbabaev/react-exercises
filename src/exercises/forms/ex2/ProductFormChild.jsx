import React, { use, useState } from 'react'

export default function ProductFormChild({handleData}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const recieveData = () => {
        const userData = {
            name: name,
            email: email,
            age: age,
        }

        handleData(userData)

        setName('');
        setEmail('');
        setAge('');
    }

  return (
    <div>
        <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input 
            type="text" 
            value={age}
            onChange={(e) => setAge(e.target.value)}
        />
        <button
            onClick={recieveData}
        >Recieve Data</button>
    </div>
  )
}
