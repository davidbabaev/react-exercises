import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import GreetingPage from './GreetingPage'

export default function UserNavigationRouterEx() {
  return (
    <BrowserRouter>
        <nav>
            <Link to={'/user/Alice'}>Alice</Link>
            <Link to={'/user/Bob'}>Bob</Link>
            <Link to={'/user/Charlie'}>Charlie</Link>
        </nav>

        <Routes>
            <Route path='/user/:name' element = {<GreetingPage/>}/>
        </Routes>

    </BrowserRouter>
  )

  // Dynamic route - different page for each user
{/* <Route path='/user/:id' element={<UserDetailPageEx/>}/> */}
    //                  ↑↑
    //                  This is a parameter - captures the id from URL!

// URL: /user/1 → UserDetailPageEx gets id="1" → Shows Alice
// URL: /user/2 → UserDetailPageEx gets id="2" → Shows Bob
// URL: /user/3 → UserDetailPageEx gets id="3" → Shows Charlie
}
