import React, { useState } from 'react'

export default function ReducePracticingEx() {

const [movies] = useState([
    { id: 1, title: "Iron Man", genre: "action" },
    { id: 2, title: "The Notebook", genre: "romance" },
    { id: 3, title: "Avengers", genre: "action" },
    { id: 4, title: "The Hangover", genre: "comedy" },
    { id: 5, title: "Titanic", genre: "romance" },
    { id: 6, title: "Superbad", genre: "comedy" },
    { id: 7, title: "Dark Knight", genre: "action" },
    { id: 8, title: "Step Brothers", genre: "comedy" }
]);

const groupsByGenre = movies.reduce((objects, movie) => {
    const movieGenre = movie.genre;

    if(!objects[movieGenre]){
        objects[movieGenre] = [];
    }
    console.log('hello');

    objects[movieGenre].push(movie);
    return objects;
    
    
    
})
console.log(groupsByGenre);

  return (
    <div>
        <h1>Movies</h1>
        <h2>Action</h2>
        {groupsByGenre.action.map((item, index) => (
            <div key={index}>
                <p>{item.title}</p>
            </div>
        ))}
        <h2>Romance</h2>
        {groupsByGenre.romance.map((item, index) => (
            <div key={index}>
                <p>{item.title}</p>
            </div>
        ))}
    </div>
  )
}
