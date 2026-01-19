import React, { useEffect, useState } from 'react'

export default function PracticeLocalThird() {

    // Only need 2 states!
    const [shoppingList, setShoppingList] = useState([]);
    const [value, setValue] = useState('');

    // Load from localStorage when component mounts
    useEffect(() => {
        const saved = localStorage.getItem('tasks');
        
        if (saved) {
            const loaded = JSON.parse(saved);
            setShoppingList(loaded);
        }
    }, []);

    const handleInput = (e) => {
        setValue(e.target.value);
    }
    
    const handleBtn = () => {
        // Create new array with new item
        const newList = [...shoppingList, value];
        
        // Update state
        setShoppingList(newList);
        
        // Save to localStorage (with JSON.stringify!)
        localStorage.setItem('tasks', JSON.stringify(newList));
        
        // Clear input
        setValue('');
    }
    
    const handleRemove = (itemToRemove) => {
        // Filter out the item
        const newList = shoppingList.filter(item => item !== itemToRemove);
        
        // Update state
        setShoppingList(newList);
        
        // Save to localStorage
        localStorage.setItem('tasks', JSON.stringify(newList));
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Shopping List</h1>
            
            <input 
                value={value}
                onChange={handleInput}
                placeholder="Enter item"
                style={{ padding: '10px', marginRight: '10px' }}
            />
            <button onClick={handleBtn}>Add</button>
            
            <h2>My Items:</h2>
            {shoppingList.length === 0 ? (
                <p>No items yet!</p>
            ) : (
                <ul>
                    {shoppingList.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button 
                                onClick={() => handleRemove(item)}
                                style={{ marginLeft: '10px' }}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}