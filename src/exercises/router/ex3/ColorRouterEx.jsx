import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ColorListEx from './ColorListEx'
import ColorDisplayEx from './ColorDisplayEx'

export default function ColorRouterEx() {
  return (
        <BrowserRouter>
        <nav>
            <Link to={'/colorlist'}>color list</Link>
        </nav>

        <Routes>
            <Route path='/colorlist' element ={<ColorListEx/>}/>
            <Route path='/color/:colorName' element ={<ColorDisplayEx/>}/>
        </Routes>
    </BrowserRouter>
  )
}
