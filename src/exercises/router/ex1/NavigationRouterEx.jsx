import React from 'react'
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'
import HomeRouterEx from './HomeRouterEx'
import AboutRouterEx from './AboutRouterEx'
import ContactRouterEx from './ContactRouterEx'

export default function NavigationRouterEx() {
  return (
    <BrowserRouter>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
        </nav>

        <Routes>
            <Route path='/' element = {<HomeRouterEx />} />
            <Route path='/about' element = {<AboutRouterEx />} />
            <Route path='/contact' element = {<ContactRouterEx />} />
        </Routes>
    </BrowserRouter>
  )
}
