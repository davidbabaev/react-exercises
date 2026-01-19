import React, { useState } from 'react'
import { CartContext } from './CartContextEx'
import CartDisplayEx from './CartDisplayEx'

export default function CartAppEx() {

    const [products, setProducts] = useState([]);
    
    const addApple = () => {
        setProducts([...products, {name: 'Apple', price: '2$'}])       
    }

    const waterMelon = () => {
        setProducts([...products, {name: 'WaterMelon', price: '5$'}])       
    }
        
        return (
        <CartContext.Provider value={{products, setProducts, addApple, waterMelon}}>
            <CartDisplayEx/>
        </CartContext.Provider>
    )
}

