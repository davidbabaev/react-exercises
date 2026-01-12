import React, { useEffect, useState } from 'react'

export default function ShoppingCart() {

    const [price, setPrice] = useState(0);
    const [items, setItems] = useState(0);

    useEffect(() => {
        const savedPrice = localStorage.getItem('price')
        if(savedPrice){
            setPrice(Number(savedPrice))
        }

        const savedItems = localStorage.getItem('items')
        if(savedItems){
            setItems(Number(savedItems))
        }

    }, [])

    const handleCountApple = () => {
        const newPrice = price + 3 
        const newItmes = items + 1 

        setPrice(newPrice)
        setItems(newItmes)

        localStorage.setItem('price', newPrice);
        localStorage.setItem('items', newItmes);

    }

    const handleCountBanana = () => {
        const newPrice = price + 3 
        const newItmes = items + 1 

        setPrice(newPrice)
        setItems(newItmes)

        localStorage.setItem('price', newPrice);
        localStorage.setItem('items', newItmes);
    }

    const handleCountOrange = () => {
        const newPrice = price + 3 
        const newItmes = items + 1 

        setPrice(newPrice)
        setItems(newItmes)

        localStorage.setItem('price', newPrice);
        localStorage.setItem('items', newItmes);
    }

    const clearBtn = () => {
        setItems(0)
        setPrice(0)

        localStorage.setItem('price', '0');
        localStorage.setItem('items', '0');
    }


    
    return (
        <div>
            <button style={{margin: '5px'}} onClick={handleCountApple}>Apple ($3)</button>
            <button style={{margin: '5px'}} onClick={handleCountBanana}>Banana ($1)</button>
            <button style={{margin: '5px'}} onClick={handleCountOrange}>orange ($2)</button>
            <button onClick={clearBtn}>Clear</button>
            <p>Total Amonunt: ${price} - Itmes: {items}</p>
         </div>
  )
  
  //   you don't need:
  // An array to store items
  // .map() to display items
  // A fruit state
  // const [cart, setCart] = useState([]);
  // const [fruit, setFruit] = useState('');
  
  // const addApple = () => {
    //     const newCart = [...cart, fruit];
    //         setCart(newCart);
    //         setFruit('apple');
    //         console.log(newCart);
    // }
    {/* {cart.map((item, index) => (
        <p key={index}>{item}</p>
    ) */}

}
