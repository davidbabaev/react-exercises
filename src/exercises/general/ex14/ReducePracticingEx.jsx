import React from 'react'

export default function ReducePracticingEx() { 

    // const numbers = [10,20,30,40,50];

    // const total = numbers.reduce((accumulator, currentNumber) => {
    //     return accumulator + currentNumber;
    // }, 0)
    const cart = [
        {name: "Shirt", price: 20},
        {name: "Shoes", price: 40},
        {name: "Coat", price: 30},
    ]

    const totalPrice = cart.reduce((accumulator, item) => {
        return accumulator + item.price;
    }, 0)

    console.log(totalPrice);
    

    // accumulator = 0
    // loop 1:
    // current number = 10
    // accumulator + currentNumber = 0 + 10 = 10
    // return 10 -> accumulator becomes 10
    // loop 2: etc.
    // console.log(total); // 150
    
    

  return (
    <div>
        <h1>Reduce</h1>
        <p>think of it like a machine that processes an array and gives you one result</p>
        <p>Reduce - להפחית, לצמצם</p>
    </div>
  )

//   the parts:
// 1. accumulator - the result you're building (like a running total)
// 2. currentItem - the current item in the array
// 3. initialValue - what the accumulator starts as
}
