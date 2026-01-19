import React from 'react'

export default function ProductCard({name, price, inStock}) {
  return (
    <div
        style={{
            border: '2px solid black',
            padding: '15px',
            margin: '10px',
            width: '200px',
            borderRadius: '10px'
        }}
    >
        <p style={{fontFamily: 'arial', fontSize: '20px', fontWeight: 'bold'}}>{name}</p>
        <p style={{fontFamily: 'arial'}}>Price: ${price}</p>
        <p style={{fontFamily: 'arial'}}>{inStock === false? '✅ Available' : '❌ Out of Stock'}</p>
    </div>
  )
}
