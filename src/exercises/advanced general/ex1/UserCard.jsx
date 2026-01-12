import React from 'react'

export default function UserCard({
    user,
    onToggleFavorite, 
    isFavorite,
}) {


  return (
    <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
        <button onClick={() => onToggleFavorite(user)}>
            {isFavorite ? 'remove' : 'add to favorite'}
        </button>
    </div>
  )
}


// ___________________________________________________

// the props structure was wrong!
// the component will recieve user as one prop (an object), not seperate props, look at how you'll use it later

// we need:
// user.name, user.email, etc.

// so we need: function UserCard({user, isFavorite, onToggleFavorite})

// export default function UserCard({
//     id, 
//     name, 
//     email, 
//     address: { city }, 
//     onToggleFavorite, 
//     isFavorite,
// }) {

// this is completly unneccerary:
// the lpgic and the thinking wrong, we already have {user} in the props.
//     let user = {
//         id : id, 
//         name: name, 
//         email: email, 
//         address: {city : city}, 
//     }

//   return (
//     <div>
// this call the function immediatly when the component renders, not when you click

// the right way:
// <button onClick={() => onToggleFavorite(user)}> 


//         <button onClick={onToggleFavorite(user)}>
//             Click
//         </button>
//     </div>
//   )
// }
