import React from 'react'
import { products } from './MoviesDataEx'
import { Link } from 'react-router-dom'

export default function ProductsListRoutesEx() {
  return (
    <div>
        <h2>All Products</h2>
        {products.map((product) => (
            <div key={product.id}>
                <p>{product.name} - {product.price}</p>
                <Link to={`/shop/${product.id}`}>View</Link>
            </div>
        ))}
    </div>
  )
}
