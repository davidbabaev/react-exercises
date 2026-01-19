import React from 'react'
import { products } from './ProductsDataSec'
import { Link } from 'react-router-dom'

export default function ProductsPageRouterSec() {
  // this page shows all products' not one product so you not need useParams here
  return (
    <div>
        <h1>Products Page</h1>
        {products.map((product) => (
          <div key={product.id}>
                <h2>{product.name}</h2>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
              <Link 
                to={`/shopsec/product/${product.id}`}
              >
                  Click
              </Link>
              </div>
        ))}
    </div>
  )
}
