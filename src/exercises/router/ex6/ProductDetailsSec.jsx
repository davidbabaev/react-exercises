import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { products } from './ProductsDataSec'

export default function ProductDetailsSec() {

    const {id} = useParams(); // Now this is work
    const navigate = useNavigate();

    // Find the ONE product that matches the id:
    const product = products.find(p => p.id === Number(id));



  return (
    <div>
        <h1>Product Details</h1>
        
            <div>
                <h2>{product.name}</h2>
                <p>Product ID: {product.id}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
            </div>
        <button onClick={() => navigate('/shopsec/home')}>Home</button>
    </div>
  )
//   only one component us this mini-shop should use - useParams():
// ✅ ProductDetailsSec.jsx
// ❌ HomePageRouterSec.jsx
// ❌ ProductPageRouterSec.jsx
// ❌ AboutPageSec.jsx
}
