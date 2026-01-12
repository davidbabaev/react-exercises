import React, { useState } from 'react'

export default function LocalStoragePractice() {

    const [name, setName] = useState('');

    const handleSave = () => {
        // save to localStorage
        localStorage.setItem('username', name);
        //                       ↑         ↑
        //                       |         |
        //                       |   Value to save
        //               Key like a variable      
        // Key: 'username' 
        // Value: (name) 'dave' or any text we put in the input
        alert('Name Saved');
    }

    const handleLoad = () => {
        // Load from loaclStorage
        const savedName = localStorage.getItem('username');
        // we put in savedName variable the item that saved in username
        // it can be any text we saved in the input before
        // we get the value that inside that key: 'username'

        // if savedname exist we setName state with that value that inside the localStorage
        // else we just alert
        if(savedName) {
            setName(savedName);
            alert('Name Loaded: ' + savedName);
        }
        else{
            alert('No name saved yet');
        }
    }

    const handleClear = () => {
        // remove from localStorage
        localStorage.removeItem('username');
        setName('');
        alert('Name cleared!');
    }

  return (
    <div>
        <h1>localStorage Preactice</h1>
        <input 
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter you name..'
        />
        <div>
            <button onClick={handleSave}>
                Save Name
            </button>
            <button onClick={handleLoad}>
                Load Name
            </button>
            <button onClick={handleClear}>
                Clear Name
            </button>
        </div>
        <div>
            <p>Current Name: <strong>{name || 'None'}</strong></p>
        </div>
    </div>
  )
//   {name || 'None'} explanation:
//   use the first value if it exist, otherwise use the second value.
// if name has a value:
// name = 'David'
// name || 'None' -> 'David'

// if name is null:
// name = null
// name || 'None' -> 'None'

// if name is undefined:
// name = undefined
// name || 'None' -> 'None'

// "Falsy" values in javaScript: 
// ""          // Empty string → falsy
// null        // Null → falsy
// undefined   // Undefined → falsy
// 0           // Zero → falsy
// false       // Boolean false → falsy
// NaN         // Not a Number → falsy

// when the left side is falsy, || return the right side
// || mean (OR) use this or that
// show name if exit otherwise show 'None'

// If LEFT is truthy → Return LEFT
// "David" || "None"  →  "David"

// If LEFT is falsy → Return RIGHT
// "" || "None"  →  "None"

// && -> if this then that
// Purpose: Conditinal rendering (show something if condition is true)
// {name && <p>hello {name}</p>}
// if name exist, then show the paragraph

// When name = "David":
{/* <p>Name: David</p>  ✅ (Shows element) */}

// When name = "":
// (nothing)  ✅ (Hides entire element)

// Either shows element OR nothing



}
