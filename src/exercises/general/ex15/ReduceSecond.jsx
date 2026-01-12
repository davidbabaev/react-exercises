import React, { useState } from 'react'

export default function ReduceSecond() {
/*     const [items] = useState([
        { id: 1, name: "Apples", quantity: 5 },
        { id: 2, name: "Bananas", quantity: 3 },
        { id: 3, name: "Oranges", quantity: 8 },
        { id: 4, name: "Grapes", quantity: 2 }
    ]);

    const reduceItems = items.reduce((accumulator, item) => {
        return accumulator + item.quantity
    }, 0)

    console.log(reduceItems); */
// ******************************************************
/*     const [products] = useState([
        { id: 1, name: "Apples", price: 250, quantity: 1},
        { id: 2, name: "Bananas", price: 400, quantity: 10},
        { id: 3, name: "Oranges", price: 200, quantity: 5},
        { id: 4, name: "Grapes", price: 100000, quantity: 15}
    ]);

    const total = products.reduce((acc, product) => {
        const calc =  product.quantity * product.price 
        return acc + calc
    }, 0)

    console.log(total); */
// ******************************************************
    // const [items] = useState([
    //     { id: 1, name: "Apple", category: "fruit" },
    //     { id: 2, name: "Carrot", category: "vegetable" },
    //     { id: 3, name: "Banana", category: "fruit" },
    //     { id: 4, name: "Broccoli", category: "vegetable" },
    //     { id: 5, name: "Orange", category: "fruit" },
    //     { id: 6, name: "Lettuce", category: "vegetable" }
    // ]);

// *******************************************************************
    const [products] = useState([
        { id: 1, name: "Apples", price: 250, quantity: 1},
        { id: 2, name: "Bananas", price: 400, quantity: 10},
        { id: 3, name: "Oranges", price: 200, quantity: 5},
        { id: 4, name: "Grapes", price: 100000, quantity: 15}
    ]);
    // E-commerce app - Calculate cart total
    // used in amazon, eBay, any online store
/*     const cartTotal = products.reduce((total, item) => {
        const totalFir = total + item.price
        return totalFir * item.quantity
    }, 0)

    console.log(cartTotal); */

    const [orders] = useState([
        {name: 'car', amount: 500},
        {name: 'bike', amount: 200}
    ], 0)

    const [reviews] = useState([
        {stars: 5},
        {stars: 5},
        {stars: 10},
    ])

    const totalSales = orders.reduce((sum, order) => {
        return sum + order.amount;
    }, 0)
    console.log(totalSales);

    // Avarage Rating
    const totalRating = reviews.reduce((sum, review) => {
        return sum + review.stars
    }, 0)
    const avarageRating = totalRating / reviews.length    


  return (
    <div>
        <h1>Reduce</h1>
        <p>Total Sales: ${totalSales.toLocaleString('il-HE')}</p>
        <p>Total Stars: ${totalRating.toLocaleString('il-HE')}</p>
        <p>Avarage Rating: {Math.floor(avarageRating).toLocaleString('il-HE')} {'★'.repeat(Math.floor(avarageRating))} Stars</p>
    </div>
  )
}
