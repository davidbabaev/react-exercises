import React, { useState } from 'react'
import FavoriteChild from './FavoriteChild'

export default function FavoriteParent() {

    let arr = ["Alice", "Bob", "Charlie"];
    // what the indexx will mean
    // "Alice" -> index 0
    // "Bob" -> index 1
    // "Charlie" -> index 2

    const [names, setNames] = useState(arr);

    const [favorites, setFavorites] = useState([])
    // the favorites array  stores position numbers, not names.
    // favorites = [0, 2]
    // this means:
    // position 0 is favorite -> alice is favorite
    // position 2 is favorite -> cherlie is favorite
    // postion 1 is not favorite -> bob is not favorite


    // we have to check if the function is recieving the index
    const toggleFav = (index) => {
        // the (index) is a parameter it will come from other place, probably from our child component, for now index is mean's nothing
        if(favorites.includes(index)) {
            // remove from favorites
            setFavorites(favorites.filter(i => i !== index))
        }
        else{
            setFavorites([...favorites, index])
        }
    }

  return (
    <div>
        <h1>Favorite Names</h1>
        <FavoriteChild
            names = {names}
            favorites = {favorites}
            onToggle = {toggleFav}
        />
    </div>
  )
}
