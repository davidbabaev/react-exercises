import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomeUsers from './HomeUsers'
import CardsUsers from './CardsUsers'
import UserDetailsCard from './UserDetailsCard'

export default function UsersProjectRoutes() {
  return (
    <div>
        <nav>
            <Link style={{paddingRight: '10px'}} to= '/users/home' >Home</Link>
            <Link style={{paddingRight: '10px'}} to= '/users/myusers' >Users</Link>
        </nav>

        <Routes>
            <Route path='/home' element = {<HomeUsers/>}/>
            <Route path='/myusers' element = {<CardsUsers/>}/>
            <Route path='/user/:id' element = {<UserDetailsCard/>}/>
        </Routes>
    </div>
  )
}
