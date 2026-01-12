import React, { useEffect, useState } from 'react'

export default function UsernameSaver() {

    const[savedName, setSaved] = useState("")
    const[name, setName] = useState("");
    const handleInput = (e) => {
            setName(e.target.value);
    }

    useEffect(() => {
        const saved = localStorage.getItem('username')
        
        if(saved){
            setSaved(saved)
            // setName(saved) -> no relevant
        }
    }, [])
    
    const saveBtn = () => {
        if(name.trim() !== ''){
            setSaved(name);
            localStorage.setItem('username', name)
            setName('')
        }
    }
    
    const removeBtb = () => {
        // Safe even if doesn't exist
        // if key doesn't exist it just do nothing it's not give error
        localStorage.removeItem('username')
        setSaved(''); // Clear Display
        setName(''); // Clear Input
    }

  return (
    <div>
        <input 
            type="text" 
            value={name}
            onChange={handleInput}
        />
        <button onClick={saveBtn}>Save</button>
        <button onClick={removeBtb}>Clear Name</button>
        <p>{savedName}</p>
    </div>
  )
}
