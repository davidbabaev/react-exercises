import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ProductsListRoutesEx from './ProductsListRoutesEx'
import DetailPageRoutesEx from './DetailPageRoutesEx'
import HomePageRouteEx from './HomePageRouteEx'

export default function ShopRouterEx() {
  return (
    <div>
        <nav>
            <h3>Shop Menu</h3>
            <Link to = '/shop/home' >Home</Link>
            <Link to = '/shop' >Products</Link>
        </nav>

        <Routes>
            <Route path='/home' element={<HomePageRouteEx/>} />
            <Route path='/' element={<ProductsListRoutesEx/>} />
            <Route path='/:id' element={<DetailPageRoutesEx/>} />
        </Routes>
    </div>
  )
}
