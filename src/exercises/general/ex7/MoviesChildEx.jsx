import React from 'react'

export default function MoviesChildEx({handleMoviesList, favorites, moviesList}) {
    // has display and buttons
  return (
    <div>
        {moviesList.map((name, index) => (
            <div key={index}>
                <p>{name}</p>
                <button onClick={() => handleMoviesList(name)}>Add To Favorites</button>
                {favorites.includes(name) && (<p>it's favorite</p>)}
            </div>
        ))}
    </div>
  )
}
