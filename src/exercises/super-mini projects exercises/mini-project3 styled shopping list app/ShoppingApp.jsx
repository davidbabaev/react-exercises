import React, { useRef, useState } from 'react'
import { ShoppingContext } from './ShoppingContext'
import AddItemForm from './AddItemForm'
import ItemsList from './ItemsList'
import Stats from './Stats'
import FilterButtons from './FilterButtons'
import { Container, Box, Typography } from '@mui/material'

export default function ShoppingApp() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('all')
    const inputRef = useRef(null);

    return (
        <ShoppingContext.Provider 
            value={{
                items, 
                setItems, 
                input, 
                setInput, 
                inputRef, 
                filter,
                setFilter
            }}>
            <Container maxWidth="md" sx={{ py: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    🛒 Shopping List
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                    <Stats/>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                    <AddItemForm/>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                    <FilterButtons/>
                </Box>
                
                <ItemsList/>
            </Container>
        </ShoppingContext.Provider>
    )
}