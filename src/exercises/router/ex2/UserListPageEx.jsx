import React, { use } from 'react'
import { Link } from 'react-router-dom'

export default function UserListPageEx() {

    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Developer' },
        { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Designer' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'Manager' },
        { id: 4, name: 'Diana', email: 'diana@example.com', role: 'Developer' }
    ]


  return (
    <div>
        <h1>Our Compny Users</h1>
        {users.map((user) => (
            <div key={user.id}>
                <Link to={`/user/${user.id}`}>
                    {user.name} - {user.role}
                </Link>
            </div>
        ))}
    </div>
  )
}
