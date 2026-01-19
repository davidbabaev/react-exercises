import React from 'react'

function ProductCartChild({name, price, addToCart}) {

    console.log('render child');

    // even with fixed code, all children re-render!
    // why? because the addToCart function is re-created on every parent render

  return (
    <div>
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={() => addToCart(price)}>Add to Cart</button>
        <hr />
    </div>
  )
}

export default React.memo(ProductCartChild)
