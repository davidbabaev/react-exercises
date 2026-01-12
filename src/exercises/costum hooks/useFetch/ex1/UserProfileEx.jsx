import React from 'react'
import useFetch from './useFetch'

export default function UserProfileEx() {

    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users')

    if (loading) return <p>Loading user...</p>
    if (error) return <p>Error: {error}</p>

  return (
    <div>
        {data.map((user, index) => (
            <div key={user.id}>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
            </div>
        ))}
    </div>
  )

}
