import React from 'react'
import UserCard from './UserCard'

export default function UserInformation() {
    // parent
  return (
    <div>
        <UserCard
            name = {'Dave'}
            age = {'30'}
            city = {'NYC'}
            favoriteColor = {'Black'}
        />
        <UserCard
            name = {'Natali'}
            age = {'25'}
            city = {'NYC'}
            favoriteColor = {'Pink'}
        />
    </div>
  )
}
