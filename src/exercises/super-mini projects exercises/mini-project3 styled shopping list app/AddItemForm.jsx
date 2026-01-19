import React, { useContext } from 'react'
import { ShoppingContext } from './ShoppingContext'
import { TextField, Button, Box } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

export default function AddItemForm() {
    const { items, setItems, input, setInput, inputRef } = useContext(ShoppingContext);

    const addItem = () => {
        if(input.trim() === '') return;

        const exitingItem = items.find((objectItem) => 
            objectItem.item.toLowerCase() === input.toLowerCase()
        )

        if(exitingItem) {
            setItems(items.map((item) => 
                item.id === exitingItem.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
            ))
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
        setInput('')
        inputRef.current.focus();
    }

    return (
        <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
                fullWidth
                placeholder='Add item...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                inputRef={inputRef}
                autoFocus
                onKeyPress={(e) => {
                    if (e.key === 'Enter') addItem()
                }}
            />
            <Button 
                variant="contained" 
                onClick={addItem}
                startIcon={<AddShoppingCartIcon />}
            >
                Add
            </Button>
        </Box>
    )
}