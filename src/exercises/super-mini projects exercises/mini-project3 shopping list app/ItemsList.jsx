import React, { useContext } from 'react'
import { ShoppingContext } from './ShoppingContext'

export default function ItemsList() {

    const {
        items,
        setItems,
        input,
        setInput,
        inputRef,
        filter,
        setFilter
    } = useContext(ShoppingContext);

    const removeItem = (taskId) => {
    const filterIt = items.filter((task) => {
        return task.id !== taskId
    })
    setItems(filterIt)
    }

    const toggleBought = (itemId) => {
        setItems(
            items.map((item) => {
                return(
                    item.id === itemId
                    ? {...item, bought: !item.bought}
                    : item
                )
            })
        )
    }

    // create filtered array
    const filteredItems = items.filter((item) => {
        if(filter === 'all'){
            return true; // --> keep all items
        }
        if(filter === 'bought'){
            return item.bought === true; // --> keep only bought
        }
        if(filter === 'unbought'){
            return item.bought === false; // --> keep only unbought
        }
    });

  return (
    <div>
        {items.length === 0 ? (<p>You don't have tasks yet</p>) : (
            <div>
            {filteredItems.map((p, index) => (
            <div 
                key={p.id}
                style={{border: '1px solid black', margin: '10px', width: '40%', borderRadius: '20px', padding: '20px'}}
            >
                <p style={{fontFamily: 'arial'}} >Card Number: {index + 1}</p>
                <p style={{fontFamily: 'arial'}} >{p.item}</p>
                <p style={{fontFamily: 'arial'}} >Id: {p.id}</p>
                <p style={{fontFamily: 'arial'}} >Quantity: {p.quantity}</p>
                <button onClick={() => {
                    removeItem(p.id);
                    inputRef.current.focus();
                    setInput('')
                }}
                >Remove  
                </button>
                <label>
                    <input 
                        type="checkbox" 
                        checked = {p.bought}
                        onChange={() => toggleBought(p.id)}
                    />
                    {p.bought ? 'Bought' : 'Not bought'}
                </label>
            </div>
        ))}
            </div>
        )}
    </div>
  )
}
