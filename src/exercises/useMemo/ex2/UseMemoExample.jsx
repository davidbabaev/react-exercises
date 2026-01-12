import React, { useMemo, useState } from 'react'
import useDmemo from './useDmemo';

const users = ['David', 'John', 'Sarah', 'Mike', 'Anna'];

export default function UseMemoExample() {

    // const [numbers] = useState([1,2,3,4,5,6,7,8,9,10])

    // const evenNumbers = useMemo(() => {
    //     return numbers.filter(n => n % 2 === 0);
    // }, [numbers])
    // without use memo the function filter will re-renders on every page change, waste of work


    const [search, setSearch] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const debounceValue = useDmemo(search, 3000);

    // problem: runs on every render (even when darkMode changes)
    const filterUsers = useMemo(() => {
        return users.filter((user) => {
            console.log('run')
            return user.toLowerCase().includes(debounceValue.toLowerCase())
        })
    }, [debounceValue]) 

  return (
    <div style={{backgroundColor: darkMode ? 'black' : 'white'}}>
        <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        {filterUsers.map((user, index) => (
            <div key={index}>
                <p>{user}</p>
            </div>
        ))}
        <button onClick={() => setDarkMode(!darkMode)}>DarkMode</button>
        {/* <p>{evenNumbers.join(', ')}</p> */}
    </div>
  )
}
