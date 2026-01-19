import React from 'react'

export default function UserCard({name, age, city, favoriteColor}) {
    // child
  return (
    <div>
        <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>City: {city}</li>
            <li>Favorite Color: {favoriteColor}</li>
        </ul>
    </div>
  )
}
