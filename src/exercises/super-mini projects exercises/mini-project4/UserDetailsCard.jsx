import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetailsCard() {

    const {id} = useParams();
    const [users, setUsers] = useState([])

    const fetchUser = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUsers(data)            
        }
        catch(err){
            console.log(err);
        }
    } 

    const user = users.find(p => p.id === Number(id));

    useEffect(() => {
        fetchUser()
    }, [])

    // _____________________________________________________
    // without this line the page will be empty with error
    if(!user) return <p>Loading..</p>
    // _____________________________________________________

  return (
    <div>
        <h2>{user.name}</h2>
        <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt="" />
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>City: {user.address.city}</p>
        <p>Street: {user.address.street}</p>
    </div>
  )
}
