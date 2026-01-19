import React, { useState } from 'react'

export default function CartCounter() {

    const [count, setCount] = useState(0)
    const countBtn = () => {
        setCount(count + 1)
    }

    const [countFiveItems, setCountFiveItems] = useState(0)
    const countBtnFive = () => {
        setCountFiveItems(countFiveItems + 5)
    }
    
    let totalItems = count + countFiveItems; 

    const [addOne, setAddOne] = useState(0);
    let item = 25
    // let count = 0
    let arr = []
    const countOne = () => {
        setAddOne(addOne + item)        
    }
    
    const [addFive, setAddFive] = useState(0);
    const countFive = () => {
        setAddFive(addFive + (item * 5))
    }

    const [removeOne, setRemoveOne] = useState(0);
    const countRemoveOne = () => {
        if(total > 0){
            setRemoveOne(removeOne - 1)
        }
    }

    const [removeFive, setRemoveFive] = useState(0);
    const countRemoveFive = () => {
        if(total > 0){
            setRemoveFive(removeFive - 5)
        }
    }

    let total = addFive + addOne + removeOne + removeFive;


  return (
    <div>
        {/* <p>Total: {total}</p> */}
        <p>Total: {total}, Total Items Added History: {totalItems}</p>
        <button 
            onClick={() => {
                countOne();
                countBtn();
            }}>
            +1
        </button>
        <button 
            onClick={() => {
                countFive();
                countBtnFive();
            }}>
            +5
        </button>
        <button 
            onClick={() => {
                countRemoveOne();
            }}>
            -1
        </button>
        <button
            onClick={() => {
                countRemoveFive();
            }}>
            -5
        </button>
        <button>reset</button>
    </div>
  )
}
