import React from 'react'
import { Link } from 'react-router-dom'
import { products } from './MoviesDataEx'

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
