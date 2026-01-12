import React, { useRef, useState } from 'react'

export default function PreviusName() {

    const [name, setName] = useState('');
    // const [message, setMessage] = useState('')
    const previousName = useRef(''); 

    const handleChange = (e) => {
        previousName.current = name; // save previous name
        setName(e.target.value)
    }

    // const handleClick = () => {
    //     setMessage(name)
    // }

  return (
    <div>
        <input 
            value={name}
            onChange={handleChange}
        />
        {/* <button onClick={handleClick}>Click</button> */}
        <p>{name}</p>
        <p>{previousName.current}</p>
        {/* <p>{message}</p> */}
    </div>
  )


//   what this lien really do:
//   previousName.current = name;
// Take the value from 'name' and copy it into 'previusName.current'

// const name = 'David'
// previusName.current = name; -> copy 'David' to previus.current

// Now:
// name = 'David'
// previusName.current = 'David' -> Same Value

// ## 🎯 **Visual Representation:**
// ```
// Before:
// ┌─────────┐          ┌─────────────────────┐
// │  name   │          │  previousName       │
// │         │          │  ┌────────────┐     │
// │ 'David' │          │  │  .current  │     │
// │         │          │  │   ''       │     │
// └─────────┘          │  └────────────┘     │
//                      └─────────────────────┘

// Execute: previousName.current = name;
//               ↓
//            COPY!
//               ↓

// After:
// ┌─────────┐          ┌─────────────────────┐
// │  name   │          │  previousName       │
// │         │          │  ┌────────────┐     │
// │ 'David' │────────→ │  │  .current  │     │
// │         │   copy   │  │  'David'   │     │
// └─────────┘          │  └────────────┘     │
//                      └─────────────────────┘


// Why do we do this:
// 

}
