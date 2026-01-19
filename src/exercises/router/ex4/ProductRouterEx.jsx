import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ProductListEx from './ProductListEx'
import HomeProductEx from './HomeProductEx'
import ProductDetailEx from './ProductDetailEx'
import NotFoundPageProductEx from './NotFoundPageProductEx'

export default function ProductRouterEx() {
  return (
    <div>
        <nav>
            <Link to={'/home'} style={{paddingRight: '10px'}}>Home</Link>
            <Link to={'/home/productslist'}>Products</Link>
        </nav>

        <Routes>
            <Route path='/' element = {<HomeProductEx/>} />
            <Route path='/productslist' element = {<ProductListEx/>} />
            <Route path='/product/:id' element = {<ProductDetailEx/>} />
            <Route path='*' element = {<NotFoundPageProductEx/>} />
        </Routes>
    </div>
  )
}
