import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePageRouterSec from './HomePageRouterSec'
import ProductsPageRouterSec from './ProductsPageRouterSec'
import AboutPageSec from './AboutPageSec'
import ProductDetailsSec from './ProductDetailsSec'

export default function SecondShopRouter() {
  return (
    <div>
        <nav>
            <h3>Shop menu sec</h3>
            <Link to= '/shopsec/home' >Home</Link>
            <Link to= '/shopsec/about' >About</Link>
            <Link to= '/shopsec/products' >Products</Link>
        </nav>
        <Routes>
          <Route path='/home' element = {<HomePageRouterSec/>} />
          <Route path='/products' element = {<ProductsPageRouterSec/>} />
          <Route path='/about' element = {<AboutPageSec/>}/>
          <Route path='/product/:id' element = {<ProductDetailsSec/>}/>
        </Routes>
    </div>
  )
}

// ______________________________________________________________________________
// this is wrong:
// <Route path='/shopsec/:id' element = {<ProductDetailsSec/>}></Route>

// you base route is /shopsec/* in app.jsx
// inside secondShopRouter, paths are relative
// /shopsec/:id tries to match /shopsec/shopsec/5 -> wrong ❌
// should br -> /product/:id tries to match /shopsec/product/5 -> correct ✅
//                 ↑ FIXED! Was /shopsec/:id 
// ______________________________________________________________________________
