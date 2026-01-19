import React, { useEffect, useState } from 'react'
import SearchBox2 from './SearchBox2'
import useLocalStorage2 from './useLocalStorage2';
import UserCard2 from './UserCard2';

export default function AppUseLocalStorage2() {


    const [value, setValue] = useState('')
    // we need here the users state with []
    const [users, setUsers] = useState([]);

    // we need favorites use hook here with ('favorits', [])
    const [favorites, setFavorites] = useLocalStorage2('favorits', [])


    // are we need to add somewhere localStorage or we will using the use hook somehow for that? 
    // i forgot how to use the localStorage logics in this file

    // we need async fetch here
    const fetchUser = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();

            // i forgot what else i have to add here?

            // we need to add here something.
            setUsers(data);
        }
        catch(err){
            console.log(err);
            
        }
    }


    // we need useEffect here
    useEffect(() => {
        fetchUser()
        // we need to fetch our data here
        // we need to add if() here

        // i forgot if i need to use here if or somthing else 
        // what to check in the if

    }, [])

    // we need filter here that will run on the users
    const filtred = users.filter((user) => {
        return user.name.toLowerCase().includes(value.toLowerCase());
    })

    // we need a filter() and find() for favorites
    // i forgot how to use the favorite hnadle function right
    // const favorite = (favor) => {
    //     if(favor){ // -> this checks if user exist, not if they're in favorites
    //         setFavorites(favorites.find(fav => fav.id === favor.id)) // find returns one item, not filtred array
    //     }
    //     else{
    //         setFavorites([...favorites, favor])
    //     }
    // } 

    const favorite = (user) => {
        // i forgoted this whole line:
        const found = favorites.find(fav => fav.id === user.id)

        if(found){
            // wrong before:
            // i didn't use here filter begore, and didn't check !==
            // i did here find() and used ===
            // after:
            setFavorites(favorites.filter(fav => fav.id !== user.id))
        } else{
            setFavorites([...favorites, user])
        }
    }
    


  return (
    <div>
        <SearchBox2
            value = {value}
            onChange={(e) => setValue(e.target.value)}
        />

        {/* we need map with users from the data here */}
        {filtred.map((user) => (
        <UserCard2
            key={user.id}
            user = {user}
            isFavorite={favorites.find(fav => fav.id === user.id)}
            onToggleFavorite = {() => favorite(user)}
        />
        ))}

        <h2>Favorites</h2>
        {favorites && (favorites.map((user) => (
            <div key={user.id}>
                <p>{user.name}</p>
            </div>
        )))}
    </div>
  )
}
