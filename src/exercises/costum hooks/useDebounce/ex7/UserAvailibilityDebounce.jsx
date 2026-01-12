import React, { use, useEffect, useRef, useState } from 'react'

export default function UserAvailibilityDebounce() {

    const names = ['dave', 'natali']

    const [username, setUsername] = useState('');
    const [userDelay, setUserDelay] = useState('');
    const [isChecking, setIsChecking] = useState(false);
    const handleInput = (e) => {
        setUsername(e.target.value)
    }

    const userRef = useRef(null)

    useEffect(() => {
        if(username.trim() === ''){
            setIsChecking(false);
            setUserDelay(''); // <- we must pust here the delay state
            return;
        }

        
        setIsChecking(true)
        userRef.current = setTimeout(() => {
            setIsChecking(false)
            setUserDelay(username)
            if(names.includes(username)){
                console.log('include');
            } else{
                console.log('not include');
            }
        }, 2000)

        return () => {
            clearTimeout(userRef.current)
        }

    }, [username])

  return (
    <div>
        <input 
            value={username}
            onChange={handleInput}
        />
        {/* <p>{userDelay}</p> */}
        {isChecking ? (<p>Checking...</p>) : userDelay ? (<p>Results: {userDelay}</p>) : (<p style={{color: 'lightblue'}}>search please</p>)}

        {
            userDelay.trim() === '' ? 
            (<p>Please Check For Name..</p>)
            : names.includes(userDelay) ? 
            (<p>❌ Taken!</p>)
            : (<p>✅ Available!</p>)
        }

    </div>
  )
// _________________________________________________________________
//   Wrong checking:
//   if(names.includes(username) && username.trim() !== ''){
//     return <p>❌ Taken!</p>
//   } else if(names.includes(username) && username.trim() === ''){
//     return <p>✅ Available!</p>
//   } else {
//     return <p>You Didn't Checked Name Yet</p>
//   }
}
