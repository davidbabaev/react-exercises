import React from 'react'

export default function UserCard2({user, isFavorite, onToggleFavorite }) {

    // i forgot what to add here in the props and also what to add here

  return (
    <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <button onClick={() => onToggleFavorite()} >
            {isFavorite ? 'unfavorite' : 'favorite'}
        </button>
        <hr />
    </div>
  )
}
