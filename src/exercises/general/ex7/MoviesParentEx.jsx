import React, { useState } from 'react'
import MoviesChildEx from './MoviesChildEx'

export default function MoviesParentEx() {
    // has states and logic

    // array of the main movies
    const [moviesList, setMoviesList] = useState(['Inception', 'Matrix', 'Interstellar', 'Avatar']);
    
    
    // favorite array - that start as an empty array 
    const [favorites, setFavorites] = useState([]);
    
    // if favorites includes (name of movie)
    // so set favorites function array
    // take favorites array filter out 
    // the movie that not equal to the movie name that will come as a parameter
    const handleMoviesList = (nameOfMovie) => {
        if(favorites.includes(nameOfMovie)){
            setFavorites(favorites.filter((movie) => {
                return movie !== nameOfMovie
            }))
        }
        else{
            // show the array of favorites movies the previus with also the new name of movie that just added
            setFavorites([...favorites, nameOfMovie])
        }
    }

  return (
    <div>
        MoviesParentEx
        <MoviesChildEx handleMoviesList = {handleMoviesList} favorites = {favorites} moviesList = {moviesList}/>
    </div>
  )
}
