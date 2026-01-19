import React, { useEffect, useState } from 'react'
import useDebounceApi from './useDebounceApi';

export default function UserSearchApi() {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [input, setInput] = useState('');
    
    const handleInput = (e) => {
        const updatedValue = e.target.value;

        if(updatedValue.length > 10 && updatedValue.length > input.length){
            console.log('User Try To Type More Then 10 Characters');
            return;
        }
        setInput(updatedValue);

        if(updatedValue.trim().length >= 2){
            setIsLoading(true);
        } else{
            setIsLoading(false); // Add this! Clear loading if too short
            setUsers([])
        }

    }

    const fetchUser = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            
            const filtered = data.filter(user => 
                user.name.toLowerCase().includes(debounceValue.toLowerCase())
            )
            setUsers(filtered)
            
        } catch(err){
            console.log(err);
        } finally{
            setIsLoading(false)
        }
        
    }
    
    
    const inputLength = input.trim().length >= 10
    const hasNotSpaceOrEmpty = input !== '' && !input.includes(' ');
    // Alphanumeric (means) = letters + numbers only
    const isAlphanumeric = /^[a-zA-Z0-9]*$/.test(input);
    const debounceValue = useDebounceApi(input, 2000)
    useEffect(() => {
        if(debounceValue.trim().length >= 2){
            fetchUser();
        }
    }, [debounceValue])
    
    
    return (
        <div>
        <h1>Users Search</h1>
        <h2>Check Out One OF These Names</h2>
        <p>Leanne Graham, Ervin Howell, Clementine Bauch, Patricia Lebsack, Chelsey Dietrich, Mrs. Dennis Schulist, Kurtis Weissnat, Nicholas Runolfsdottir V, Glenna Reichert, Clementina DuBuque</p>
        <input 
            value={input}
            onChange={handleInput}
            placeholder='Search User'
        />
        {/* {input !== '' ? (<p>Debounced Value: {debounceValue}</p>) : (<p></p>)} */}
        {/* {hasNotSpaceOrEmpty && (
            <div>
                <p>{inputLength ? 'more then 10 not good' : 'good length' }</p>
                <p>{isAlphanumeric ? 'Allowed Character' : 'Not Allowed characters'}</p>
            </div>
        )} */}
        {isLoading ? 
        (<p>Loading</p>) :
        (<div>
            {users.length >= 1 && (
                <div>
                    {users.map((user) => (
                        <div key={user.id}
                            style={{
                                border: '1px solid black',
                                margin: '20px 0px',
                                padding: '10px',
                                borderRadius: '10px'
                            }}
                        >
                            <h2>{user.name}</h2>
                            <p>Email: {user.email}</p>
                            <p>City: {user.address.city}</p>
                            <p>Street: {user.address.street}</p>
                        </div>
                    ))}
                </div>
            )}
            {debounceValue.trim().length >= 2 && users.length === 0 && (<p>No users found for {debounceValue}</p>)}
        </div>
        )}
    </div>
  ) 
}

//   What does test() do: 
// test(value) checks a string mathes a pattern
// /abc/.test('abc') -> true
// /abc/.test('hello') -> false
// true if the string matches the rule
// false if it doesn't

// what does the pattern mean: /^[a-zA-Z0-9]*$/
// -> /^ /
// ^ start the pattern
// [] start of the string - [a-zA-Z0-9]
// * this means repeat zero or more times - aZ455, DAvidB3525, '', a
// $ Ends of the string

// one character that can be:
// lowercase a-z
// uppercase a-z
// number 0-9
