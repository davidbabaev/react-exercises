import React, { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage';
import SearchBox from './SearchBox';
import UserCard from './UserCard';

export default function AppSearchBox() {

    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // this is not useState!: 
    const [favorites, setFavorites] = useLocalStorage('favorites', []);

    const fetchUsers = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            
            setUsers(data)
            console.log(data);
            
        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect(() => {
        fetchUsers()
    }, [])


    const filtred = users.filter((user) => {
        return user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    })

    

    const toggleToFavorite = (user) => {
        const found = favorites.find(fav => fav.id === user.id);
        // found = { id: 1, name: "Leanne", ... }  ← if exists
        console.log(user);        // See what you receive
        console.log(user.id);     // See the id
        console.log(user.name);   // See the name
        if(found){
            setFavorites(favorites.filter(fav => fav.id !== user.id))
        } 
        else{
            setFavorites([...favorites, user])
        }
    }

  return (
    <div>
        <h1>Search Box</h1>
        <SearchBox 
            searchTerm = {searchTerm} 
            setSearchTerm = {setSearchTerm} 
        />

        {filtred.map((user) => (
            <UserCard
                key={user.id}
                user = {user}
                onToggleFavorite={toggleToFavorite}
                isFavorite={favorites.find(fav => fav.id === user.id)}
            />
        ))}

        <br />
        <h2>My Favorites</h2>
        {favorites && (favorites.map((fav) => (
            <div key={fav.id}>
                <p>{fav.name}</p>
                <hr/>
            </div>
        ) ))}
        {favorites.length === 0 && (<p>No Favorites</p>)}
    </div>
  )
}
