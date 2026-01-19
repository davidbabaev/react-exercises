import React, { useContext } from 'react'
import { ShoppingContext } from './ShoppingContext'
import { Card, CardContent, Typography, IconButton, Checkbox, FormControlLabel, Box, Chip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export default function ItemsList() {
    const { items, setItems, setInput, inputRef, filter } = useContext(ShoppingContext);

    const removeItem = (taskId) => {
        setItems(items.filter((task) => task.id !== taskId))
        inputRef.current.focus();
        setInput('')
    }

    const toggleBought = (itemId) => {
        setItems(
            items.map((item) => 
                item.id === itemId
                    ? {...item, bought: !item.bought}
                    : item
            )
        )
    }

    const filteredItems = items.filter((item) => {
        if(filter === 'all') return true;
        if(filter === 'bought') return item.bought === true;
        if(filter === 'unbought') return item.bought === false;
    });

    if (items.length === 0) {
        return (
            <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="h6" color="text.secondary">
                    No items yet. Add your first item!
                </Typography>
            </Box>
        )
    }

    if (filteredItems.length === 0) {
        return (
            <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="h6" color="text.secondary">
                    No items match this filter
                </Typography>
            </Box>
        )
    }

    return (
        <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' } }}>
            {filteredItems.map((item) => (
                <Card 
                    key={item.id}
                    elevation={2}
                    sx={{ 
                        bgcolor: item.bought ? 'action.hover' : 'background.paper',
                        transition: 'all 0.3s'
                    }}
                >
                    <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                            <Typography 
                                variant="h6" 
                                component="div"
                                sx={{ 
                                    textDecoration: item.bought ? 'line-through' : 'none',
                                    color: item.bought ? 'text.secondary' : 'text.primary'
                                }}
                            >
                                {item.item}
                            </Typography>
                            <IconButton 
                                size="small" 
                                color="error" 
                                onClick={() => removeItem(item.id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Chip 
                                label={`Qty: ${item.quantity}`} 
                                size="small" 
                                color="primary" 
                                variant="outlined"
                            />
                            
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                        checked={item.bought}
                                        onChange={() => toggleBought(item.id)}
                                        color="success"
                                    />
                                }
                                label={item.bought ? 'Bought' : 'To Buy'}
                            />
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Box>
    )
}