import React from 'react'

export default function PriceCard(props) {

    const finalPrice = props.price - (props.price * props.discount / 100);

  return (
    <div
        style={{border:'1px solid black', padding: '10px', margin: '10px', borderRadius: '10px'}}
    >
        Product: {props.product} | Price: ${props.price} | Discount: {props.discount}%
        <p
            style={{backgroundColor: 'red', color: 'white', padding: '5px', borderRadius: '5px'}}
        >Discount Final Price: ${finalPrice}</p>
    </div>
  )
}
