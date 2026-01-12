import React, { useEffect, useState } from 'react'
import useDebounceApiEx from './useDebounceApiEx'

export default function UserSearch() {

    const [inputValue, setInputValue] = useState('')
    const handleValue = (e) => {
        setInputValue(e.target.value)
    }

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const handleFetch = async () => {
        setIsLoading(true)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();

            const filtered = data.filter((user) => {
                return(
                    user.name.toLowerCase().includes(inputUse.toLowerCase())
                )
            });

            setUsers(filtered)
        }
        catch (err){
            console.log(err);
        } finally{
            setIsLoading(false)
        }
    } 

    const inputUse = useDebounceApiEx(inputValue, 2000)

    useEffect(() => {
        handleFetch();
    }, [inputUse])

  return (
    <div>
        <input 
            value={inputValue}
            onChange={handleValue}
        />
        {
            isLoading ? 
            (<p>Loading...</p>) 
            : (<div>
                <p>Search: {inputUse}</p>
                <p>Found: {users.length} users</p>
            </div>)
        }
    </div>
  )
}
