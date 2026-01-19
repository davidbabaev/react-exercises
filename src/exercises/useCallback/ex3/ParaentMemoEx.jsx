import React, { useState } from 'react'
import UserCardEx from './UserCardEx';

export default function ParaentMemoEx() {

    const [totalUsers, setTotalUsers] = useState(0);
    // we don't need to use true/flase for changing theme (but it's an option)
    const [theme, setTheme] = useState('light')

    // users array meant:
    // to create real users array of objects
    const [users, setUsers] = useState([
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 }
    ]);
    console.log('Parent renders');
    

  return (
    <div>
        <h1>Dashboard</h1>
        {/* We'll add buttons here next */}
        <button onClick={() => setTotalUsers((prev) => prev + 1)}>+1 User</button>
        <p>{totalUsers} users</p>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Set Theme</button>
        <p>{theme}</p>
        {users.map((user) => (
          <UserCardEx
              key={user.id}
              user={user}
          />
        ))}
    </div>
  )
}
