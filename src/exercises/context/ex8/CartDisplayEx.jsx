import React, { useContext } from 'react'
import { CartContext } from './CartContextEx'

export default function CartDisplayEx() {

    const {products, setProducts, addApple, waterMelon} = useContext(CartContext)

  return (
    <div>
        <button onClick={addApple}>Add Apple</button>
        <button onClick={waterMelon}>Add Water Melon</button>
        
        {products.map((item, index) => (
            <div key={index}>
                 <p>{item.name} - {item.price}</p>
            </div>
        ))}
    </div>
  )
}
