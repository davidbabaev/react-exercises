import React from 'react'
import useFetch from './useFetch'

export default function UserDashboardEx() {

    const {data: user, loading: userLoading, error: userError} = useFetch('https://jsonplaceholder.typicode.com/users/2');

    // fetch posts by this user
    const {data: posts, loading: postsLoading, error: postsError} = useFetch('https://jsonplaceholder.typicode.com/posts?userId=2')

    
    // check loading
    if(userLoading || postsLoading) return <p>Loading user...</p>
    
    // check errors
    if(postsError) return <p>Error: {postsError}</p>
    if(userError) return <p>Error: {userError}</p>
    
    const sliced = posts.slice(0, 5)

  return (
    <div>
        <h1>Dashboard</h1>
        <h2>User: {user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Website: {user.website}</p>

        <h3>Posts by {user.name}:</h3>
        <p>Total posts: {sliced.length}</p>

        {sliced.map((post) => (
            <div style={{border: '1px solid black', margin: '15px 0px', padding: '15px'}} key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
  )

// const { data, loading } = useFetch('https://api.example.com/user');
// const { data, loading } = useFetch('https://api.example.com/posts');
//           ↑     ↑
// ERROR! Can't have two variables named "data"!
// Problem: You can't declare data twice in the same scope!
// Solution: Rename while destructuring!
// const {data: user, loading: userLoading} = userFetch('https://api.example.com/user')
    //      ↓             ↓
//   data becomes:  loading becomes:
//      "user"       "userLoading"

// now we have:
// user = {name: 'Jhon', id: 1}
// userLoading = true
}
