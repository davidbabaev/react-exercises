import React, { useState } from 'react'
import ShoppingChild from './ShoppingChild'

export default function ShoppingParent() {

    const [names, setNames] = useState(['dave', 'natali', 'avi'])
    const [buyers, setBuyers] = useState([])

    console.log(names);
    console.log(buyers);
    

    const checkBuyers = (index) => {
        //               ↑____↑
        // index = 1 (received from button click)
        // now:
        // buyers = []
        // index = 1

        console.log('btn on index', index, 'clicked');
        
        if(buyers.includes(index)){
            setBuyers(buyers.filter((name) => {
                return name !== index
            }))
        } else{
            setBuyers([...buyers, index])
        // [...buyers, index]
        //             ↑____↑
        //          Add 1 at the end
        // [..[], 1]
        // Spread empty array, then add 1
        // [1]
        // Result: array with one item (the number 1)
        }
    }


  return (
    <div>
        <ShoppingChild checkBuyers = {checkBuyers} names = {names} buyers = {buyers}/>
    </div>
  )
}
