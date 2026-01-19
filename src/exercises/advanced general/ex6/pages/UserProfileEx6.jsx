import React from 'react'
import { useParams } from 'react-router-dom'
import useUsersEx6 from '../hooks/useUsersEx6';

export default function UserProfileEx6() {

    const {id} = useParams();
    console.log(id);

    const{users} = useUsersEx6();
    
    const user = users.find(u => u.userId === id);

    if(!user){
        return <p>Loading..</p>
    }


  return (
    <div>
        <br />
        <br />
        <img style={{width:"200px", height:"200px", borderRadius: '50%'}} src={user.photo}/>
        <h2>Welcome Back, {user.name}</h2>
        {/* <p>User Name: {user.login.username}</p> */}
        <p>User Age: {user.age}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}
