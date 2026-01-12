import React, { useEffect, useState } from 'react'
import useFetchSec from './useFetchSec';

export default function ShowPostsAndUsers() {

    const[count, setCount] = useState(0) // user 0 not exist so we stat empty, bu i want it, we can start on 1 of course
    // fetch posts by this user
    const handleId = () => {
        setCount((id) => id + 1)
    }
    
    const {data: user, loading: userLoading, error: userError} = useFetchSec(`https://jsonplaceholder.typicode.com/users/${count}`);
    
    const {data: posts, loading: postsLoading, error: postsError} = useFetchSec(`https://jsonplaceholder.typicode.com/posts?userId=${count}`)
    
    
    // check loading
    if(userLoading || postsLoading) return <p>Loading user...</p>
    
    // check errors
    if(postsError) return <p>Error: {postsError}</p>
    if(userError) return <p>Error: {userError}</p>
    
    const sliced = posts.slice(0, 5)

  return (
        <div>
        <button onClick={handleId}>Show API Data</button>
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
}
