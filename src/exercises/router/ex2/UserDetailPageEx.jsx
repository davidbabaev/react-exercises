import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UserDetailPageEx() {

    const { id } = useParams();
    const navigate = useNavigate();
    

    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Developer' },
        { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Designer' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'Manager' },
        { id: 4, name: 'Diana', email: 'diana@example.com', role: 'Developer' }
    ]

    // find the user with matching ID
    const user = users.find((u) => u.id === parseInt(id))


  return (
    <div>UserDetailPageEx</div>
  )

//   useParams give you an object with the URLparameters
// the URL:
// yoursite.com/user/3
//              ↑____↑
//       This part is dynamic

{/* <Route path="/user/:id" element={<UserDetails />} />
//                      ↑↑
//                      ":id" is the parameter name */}
}
