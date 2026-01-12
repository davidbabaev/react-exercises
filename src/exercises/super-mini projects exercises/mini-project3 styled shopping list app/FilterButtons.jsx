import React, { useContext } from 'react'
import { ShoppingContext } from './ShoppingContext'
import { ButtonGroup, Button } from '@mui/material'

export default function FilterButtons() {
    const { filter, setFilter } = useContext(ShoppingContext);

    return (
        <ButtonGroup variant="outlined" fullWidth>
            <Button 
                variant={filter === 'all' ? 'contained' : 'outlined'}
                onClick={() => setFilter('all')}
            >
                All
            </Button>
            <Button 
                variant={filter === 'unbought' ? 'contained' : 'outlined'}
                onClick={() => setFilter('unbought')}
            >
                To Buy
            </Button>
            <Button 
                variant={filter === 'bought' ? 'contained' : 'outlined'}
                onClick={() => setFilter('bought')}
            >
                Bought
            </Button>
        </ButtonGroup>
    )
}