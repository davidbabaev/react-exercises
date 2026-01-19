import React from 'react'

export default function UserCard({user}) {
// UserCard.jsx (Child)
// ├─ Receives user data as prop
// ├─ Displays user info (picture, name, email, country)
// └─ Just displays, doesn't fetch


  return (
    <div
        style={{
            width: '50%',
            justifyContent: 'center',
            display: 'block',
            alignContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            // border: '1px solid black',
            backgroundColor:'#646464ff',
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '10px'
        }}
    >
        <img 
            src={user.picture.large}
            alt="User Image" 
            style={{
                borderRadius: '50%'
            }}
        />
        <p style={{
            color: 'white',
            fontFamily: 'arial'
        }} >Name: {user.name.first} {user.name.last}</p>
        <p style={{
            color: 'white',
            fontFamily: 'arial'
        }} >Email: {user.email}</p>
        <p style={{
            color: 'white',
            fontFamily: 'arial'
        }} >Country: {user.location.country}</p>
    </div>
  )
}
