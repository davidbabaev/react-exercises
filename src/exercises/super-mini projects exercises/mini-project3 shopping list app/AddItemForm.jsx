import React, { useContext } from 'react'
import { ShoppingContext } from './ShoppingContext'

export default function AddItemForm() {

    const {
        items, 
        setItems, 
        input, 
        setInput, 
        inputRef, 
    } = useContext(ShoppingContext);

    const inputIt = (e) => {
        setInput(e.target.value)
    }

    const addItem = () => {
        if(input.trim() === '') return;

        // check if item name already exist
        const exitingItem = items.find((objectItem) => {
            return( objectItem.item.toLowerCase() === input.toLowerCase())
        })

        if(exitingItem) {
            setItems(items.map((item) => {
                return(
                    item.id === exitingItem.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                )
            }))
            inputRef.current.focus();
            setInput('')
            return;
        }
        setItems([...items, {
            item: input, 
            quantity: 1,
            id: Date.now(), 
            bought: false
        }])
    }

  return (
    <div>
        <input
            type="text" 
            placeholder='Add Item'
            onChange={inputIt}
            ref={inputRef}
            autoFocus
            value={input}
        />
        <button 
            onClick={() => {
                addItem()
                setInput('')
                inputRef.current.focus();
            }}
        >Add Item</button>
    </div>
  )
}
