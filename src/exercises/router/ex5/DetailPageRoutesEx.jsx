import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from './MoviesDataEx';

export default function DetailPageRoutesEx() {

    const {id} = useParams(); // --> get id from url
    
    const product = products.find(product => product.id === parseInt(id))

  return (
    <div>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <Link to={'/shop'}>Back</Link>
    </div>
  )
}
