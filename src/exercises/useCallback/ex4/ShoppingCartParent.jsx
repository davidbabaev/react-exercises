import React, { useCallback, useState } from 'react'
import ProductCartChild from './ProductCartChild';

export default function ShoppingCartParent() {

    const[cartTotal, setCartTotal] = useState(0);
    const[products, setProducts] = useState([
        {id:1, name: 'laptop', price: 500},
        {id:2, name: 'phone', price: 200},
        {id:3, name: 'car', price: 50000},
    ]);

    console.log('render parent');

    // every time parent renders:
    // this is where callBack needed!
    // to fix thism you need useCallback
    // Before: function re-created
    // const addToCart = (price) => { // <- recreated on every render
    //     setCartTotal(cartTotal + price)
    // }

    // after function cached:
    const addToCart = useCallback((price) => { // <- recreated on every render
        setCartTotal(prev => prev + price) // <- use prev for current value
    }, []) // <- empty dependencies = function never changes

    // why (prev =>) ?
    // prev = current value of cartTotal at the moment of click 
    // no need to depend on cartTotal in dependencies
    // function can stay cached forever

    // what we need:
    // we click on addToCart
    // parent re-renders
    // addToCart function cached
    // React.memo checks: 'Did onAddToCart prop change?'
    // NO! it's the same function!
    // children don't re-render

    // useCallback = cache a function so it doesn't re-create
    

    // React.memo:
    // - prevents component from re-rendering
    // - checks if props changed
    // - if props same -> skip re-render

    // useCallback:
    // - caches a function
    // - prevents function from being re-created
    // - helps React.memo work correctly

    // together:
    // useCallback keeps function the same - prevent recreating of same function
    // React.memo sees props didn't change
    // children  don't re-render unnecessarily


  return (
    <div>
        {products.map((product) => (
            <ProductCartChild
                key={product.id}
                name = {product.name}
                price = {product.price}
                addToCart = {addToCart} // ❌ Passing setState directly
            />
        ))}
        <button onClick={() => setCartTotal(0)}>Clear Total</button>
        <p>Cart Total Becomes: ${cartTotal.toLocaleString('il-HE')}</p>
    </div>
  )
}
