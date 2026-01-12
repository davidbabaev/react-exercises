import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomeProtect from './HomeProtect'
import DashboardProtect from './DashboardProtect'
import ProtectedRouteLogic from './ProtectedRouteLogic'

export default function ProtectedRouteEx() {

    const [user, setUser] = useState(null)

  return (
    <div>
        <nav>
        <h1>menu</h1>
            <Link to={'/prot/home'} >Home</Link>
            <Link to={'/prot/dashboard'} >Dashboard</Link>
        </nav>

        <div>
            {user ? (
                <p>logged in as {user.name} <button onClick={() => setUser(null)}>LogOut</button></p>
        ) : (
            <button onClick={() => setUser({name: "Dave"})}>Set Dave</button>
        )}
        </div>

        <Routes>
            <Route path='/home' element={<HomeProtect/>}/>
            {/* // element={user ? <DashboardProtect/> : <p>Please login to see dasboard</p>} */}
            <Route 
                path='/dashboard' 
                element = {
                    <ProtectedRouteLogic user = {user}>
                        <DashboardProtect/>
                    </ProtectedRouteLogic>
                    // the logic is in one place ProectedRouteLogic.jsx
                    // if you want to change the message from 'please login' t something else, you change it in one file not 10 files. 
                }/>

            {/* other pages that we want to protect just copy.. */}
            {/* <Route 
                path='/dashboard' 
                element = {
                    <ProtectedRouteLogic user = {user}>
                        <DashboardProtect/>
                    </ProtectedRouteLogic>
            }/> */}

        </Routes>
    </div>
  )
}


// this is protected route, it will not be able to show the user the component content untill he will login.
// utill user state will contain something is this case: string
{/* <Route 
    path='/dashboard' 
    element={user ? <DashboardProtect/> : <p>Please login to see dasboard</p>}
/> */}
// the problem:
//<Route path="/dashboard" element={user ? <Dashboard /> : <p>Please login</p>} />
//<Route path="/profile" element={user ? <Profile /> : <p>Please login</p>} />
//<Route path="/settings" element={user ? <Settings /> : <p>Please login</p>} />
//<Route path="/account" element={user ? <Account /> : <p>Please login</p>} /> 
// ... repeating same check every time 😩
